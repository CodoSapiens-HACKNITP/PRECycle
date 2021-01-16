const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const Seller = require("../models/Seller");
const Rider = require("../models/Rider");
const Vendor = require("../models/Vendor");

//route     GET /auth/seller
//desc:     to get the detail of seller
//access:   privates
router.get("/seller", auth, async (req, res) => {
  try {
    const seller = await Seller.findById(req.seller.id).select("-password");
    res.json(seller);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});
//route     GET /auth/rider
//desc:     to get the detail of rider
//access:   privates
router.get("/rider", auth, async (req, res) => {
  try {
    const rider = await Rider.findById(req.rider.id).select("-password");
    res.json(rider);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});
//route     GET /auth/vendor
//desc:     to get the detail of vendor
//access:   privates
router.get("/vendor", auth, async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.vendor.id).select("-password");
    res.json(vendor);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

//route     GET /auth
//desc:     to get the detail of any user
//access:   privates
router.get("/", auth, async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.vendor.id).select("-password");
    if (vendor) return res.json(vendor);
    const rider = await Rider.findById(req.rider.id).select("-password");
    if (rider) return res.json(rider);
    const seller = await Seller.findById(req.seller.id).select("-password");
    if (seller) return res.json(seller);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

//route     GET /auth/rider
//desc:     to get the detail of rider
//access:   private
router.get("/rider", auth, async (req, res) => {
  try {
    const rider = await Rider.findById(req.rider.id).select("-password");
    res.json(rider);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

//route     POST /auth
//desc:     login User & get token
//access:   public
router.post(
  "/",
  [
    check("loginDetail", "Please provide a email or phone number to login")
      .not()
      .isEmpty(),
    check("password", "Please enter the password").isLength({ min: 6 }),
    check("typeOfUser", "Please choose between seller rider and vendor")
      .not()
      .isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { loginDetail, password, typeOfUser } = req.body;

    try {
      if (typeOfUser === "seller") {
        //See existing user for seller

        let seller = await Seller.findOne({ email: loginDetail });
        if (!seller) seller = await Seller.findOne({ contact: loginDetail });

        if (!seller) {
          return res.status(400).json({ errors: [{ msg: "Not registered" }] });
        }

        const isMatch = await bcrypt.compare(password, seller.password);

        if (!isMatch)
          return res
            .status(400)
            .json({ errors: [{ msg: "Password is wrong" }] });
        //Return JWT

        const payload = {
          seller: {
            id: seller.id,
          },
        };

        jwt.sign(
          payload,
          config.get("JWTsecret"),
          { expiresIn: 360000 },
          (err, token) => {
            if (err) console.log(err);
            res.json({ token });
          }
        );
      }

      //Check wether the login credentials for rider user
      if (typeOfUser === "rider") {
        //See existing user for seller

        let rider = await Rider.findOne({ email: loginDetail });

        //Checking weather the entered credentials is number or not
        if (!rider) rider = await Rider.findOne({ contact: loginDetail });

        if (!rider) {
          return res.status(400).json({ errors: [{ msg: "Not registered" }] });
        }

        const isMatch = await bcrypt.compare(password, rider.password);

        if (!isMatch)
          return res
            .status(400)
            .json({ errors: [{ msg: "Password is wrong" }] });
        //Return JWT

        const payload = {
          rider: {
            id: rider.id,
          },
        };

        jwt.sign(
          payload,
          config.get("JWTsecret"),
          { expiresIn: 360000 },
          (err, token) => {
            if (err) console.log(err);
            res.json({ token });
          }
        );
      }

      //Check weather the user is vendor or not
      if (typeOfUser === "vendor") {
        //See existing user for seller

        let vendor = await Vendor.findOne({ email: loginDetail });
        if (!vendor) vendor = await Vendor.findOne({ contact: loginDetail });

        if (!vendor) {
          return res.status(400).json({ errors: [{ msg: "Not registered" }] });
        }

        const isMatch = await bcrypt.compare(password, vendor.password);

        if (!isMatch)
          return res
            .status(400)
            .json({ errors: [{ msg: "Password is wrong" }] });
        //Return JWT

        const payload = {
          vendor: {
            id: vendor.id,
          },
        };

        jwt.sign(
          payload,
          config.get("JWTsecret"),
          { expiresIn: 360000 },
          (err, token) => {
            if (err) console.log(err);
            res.json({ token });
          }
        );
      }
    } catch (err) {
      if (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
      }
    }
  }
);

module.exports = router;
