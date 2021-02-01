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
//desc:     Get Current vendor profile
//access:   Private
router.get("/my", auth, async (req, res) => {
  try {
    const vendor = await Vendor.findOne({
      _id: req.vendor.id,
    });

    if (!vendor) {
      return res.status(400).json({
        msg: "There is no profile for this vendor",
      });
    }

    res.status(200).json({ vendor });
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
});

//route     GET /vendor/request
//desc:     To view all the request for the vendors
//access:   Private
router.get("/request", auth, async (req, res) => {
  try {
    const requests = await Order.find({ "vendorDetail.id": req.vendor.id });
    res.status(200).json(requests);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
});

//route     PUT /wastetype
//desc:     To Put the rate list of the waste
//access:   Private
router.put("/wastetype", auth, async (req, res) => {
  const wasteType = req.body.wasteType;
  try {
    let vendor = await Vendor.findById(req.vendor.id);
    vendor.wasteType = wasteType;
    await vendor.save();
    res.status(200).json(vendor);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
});

//route     PUT /request/accept/:id
//desc:     To accept particular request
//access:   Private
router.put("/request/accept/:id", auth, async (req, res) => {
  const requestid = req.params.id; //orderid
  try {
    let orders = await Order.findById(requestid);
    orders.vendorAccepted = true;
    orders.cancelled = false;
    orders.recent = true;

    //after accept of the order by vendor Send notification to all the available rider nearby
    // TO-DO Pending
    // let pincode = orders.address.pin;
    // let riders = await Rider.findManyAndUpdate({ "address.pin": pincode });
    // if (riders) {
    //   const newReq = {
    //     orderid: requestid,
    //   };
    //   riders.map((rider) => rider.pendingRequest.push(newReq));
    // } else {
    //   return res.send("No Riders Available Nearby");
    // }


    await orders.save();
    res.json({ orders });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
});

//route     PUT /request/accept/:id
//desc:     To Cancel particular request
//access:   Private
router.put("/request/cancel/:id", auth, async (req, res) => {
  const requestid = req.params.id;
  try {
    let orders = await Order.findById(requestid);
    orders.vendorAccepted = false;
    orders.cancelled = true;
    orders.recent = false;

    await orders.save();
    res.json(orders);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
});

//route     PUT /request/update/estimate/:id
//desc:     To Display amount according to your order list
//access:   Private
router.put(
  "/request/update/estimate/:id",
  auth,
  check("estimate", "Plese enter what should be the estimate amount")
    .not()
    .isEmpty(),
  async (req, res) => {
    // checking the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    const requestid = req.params.id;
    try {
      let orders = await Order.findById(requestid);
      if (orders.vendorAccepted === true) {
        orders.estimatedAmount = req.body.estimate;
      } else {
        return res.status(200).send("FIRST ACCEPT THE ORDER");
      }

      await orders.save();
      res.json(orders);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("server error");
    }
  }
);

module.exports = router;
