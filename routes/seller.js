const express = require("express");
const request = require("request");
const config = require("config");
const router = express.Router();
const auth = require("../middleware/auth");
const Seller = require("../models/Seller");
const Rider = require("../models/Rider");
const Vendor = require("../models/Vendor");
const { check, validationResult } = require("express-validator");
const Order = require("../models/Order");

//route     GET /profile/my
//desc:     Get Current Seller profile
//access:   Private
router.get("/my", auth, async (req, res) => {
  try {
    const seller = await Seller.findOne({
      _id: req.seller.id,
    });

    if (!seller) {
      return res.status(400).json({
        msg: "There is no profile for this Seller",
      });
    }

    res.status(200).json({ seller });
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
});

//route     GET /vendor/:pincode
//desc:     Get the list of vendor available nearby
//access:   Private
router.get("/vendor/:pincode/:city", auth, async (req, res) => {
  const pincode = req.params.pincode;
  const city = req.params.city;
  try {
    var vendor = await Vendor.find({
      $or: [{ "address.pin": pincode }, { "address.city": city }],
    }).select("-password");
    if (vendor.length === 0) {
      res.status(400).json({
        msg: "There is no vendor available nearby",
      });
    }
    res.status(200).json(vendor);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

//route     POST /request
//desc:     Create a request pickup
//access:   Private
router.post(
  "/request",
  [
    auth,
    [
      check("pincode", "Pincode is required").not().isEmpty(),
      check("state", "State is required").not().isEmpty(),
      check("city", "City is required").not().isEmpty(),
      check("vendorid", "Selecting Vendor is important").not().isEmpty(),
      check("orderList", "Order Items can't be Empty").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const id = req.seller.id;
    const {
      firstLine,
      pincode,
      state,
      city,
      vendorid,
      timeofpickup,
      orderList,
      recent,
    } = req.body;

    try {
      const seller = await Seller.findById(req.seller.id);
      const vendor = await Vendor.findById(vendorid);

      let order = new Order({
        seller: {
          id: seller._id,
          name: seller.name,
        },
        address: {
          firstLine: firstLine,
          pin: pincode,
          state,
          city,
        },
        vendorDetail: {
          id: vendorid,
          name: vendor.name,
        },
        orderList,
        recent,
      });

      //**********Algo to get the time half hour ahead of now or any min ahead of now*********//

      var d1 = new Date(),
        d2 = new Date(d1);
      d2.setMinutes(d1.getMinutes() + 30);

      if (timeofpickup) {
        order.timeOfPickup = timeofpickup;
      } else {
        order.timeOfPickup = d2;
      }

      await order.save();
      res.status(200).json(order);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("server error");
    }
  }
);

//route     GET /seller/active/request
//desc:     Get The active request
//access:   Private
router.get("/active/request", auth, async (req, res) => {
  try {
    const order = await Order.find({ "seller.id": req.seller.id });
    if (order) {
      if (!order.completed === false)
        res.status(400).json({
          errors: {
            msg: "No active Pickup Request!!",
          },
        });
      res.status(200).json(order);
    }
    res.status(400).json({
      errors: {
        msg: "No active Pickup Request!!",
      },
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server error");
  }
});

module.exports = router;
