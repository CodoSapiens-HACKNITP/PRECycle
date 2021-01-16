const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const Seller = require("../models/Seller");
const Rider = require("../models/Rider");
const Vendor = require("../models/Vendor");

const axios = require("axios");

//route     POST /seller
//desc:     Register Seller
//access:   public
router.post(
  "/seller",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a tough password of more then 6 Char"
    ).isLength({ min: 6 }),
    check("phone", "Please enter valid phone").isLength({ min: 10 }),
    check("pincode", "Pincode is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      name,
      email,
      password,
      phone,
      pincode,
      firstline,
      landmark,
    } = req.body;

    try {
      //See existing user

      let seller = await Seller.findOne({
        $or: [{ email: email }, { contact: phone }],
      });

      //checking wether the given email is neither registered as a vendor or a rider

      let vendor = await Vendor.findOne({
        $or: [{ email: email }, { contact: phone }],
      });
      let rider = await Rider.findOne({
        $or: [{ email: email }, { contact: phone }],
      });

      if (rider || vendor) {
        return res.status(400).json({
          errors: [
            {
              msg:
                "Rider already exists as seller so please use diff email as a rider",
            },
          ],
        });
      }

      if (seller) {
        return res
          .status(400)
          .json({ errors: [{ msg: "seller already exists" }] });
      }

      //get users Gravatar

      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      });

      //getting state and city details using pincode
      const response = await axios.get(
        `http://www.postalpincode.in/api/pincode/${pincode}`
      );
      const city = response.data.PostOffice[0].District;
      const state = response.data.PostOffice[0].State;

      seller = new Seller({
        name,
        email,
        avatar,
        password,
        contact: phone,
        address: {
          city: city,
          state: state,
          pin: pincode,
        },
        typeofuser: "seller",
      });

      if (firstline) seller.address.firstLine = firstline;
      if (landmark) seller.address.landmark = landmark;

      //Encrypt the pwd using bcrypt

      const salt = await bcrypt.genSalt(10);

      seller.password = await bcrypt.hash(password, salt);

      await seller.save();

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
    } catch (err) {
      if (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
      }
    }
  }
);

//route     POST /rider
//desc:     Register rider
//access:   public
router.post(
  "/rider",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a tough password of more then 6 Char"
    ).isLength({ min: 6 }),
    check("phone", "Please enter valid phone").isLength({ min: 10 }),
    check("pincode", "Pincode is required").not().isEmpty(),
    check("aadhar", "Aadhar number for rider is mandatory").not().isEmpty(),
    check("dob", "DOB is req").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      name,
      email,
      password,
      phone,
      pincode,
      firstline,
      landmark,
      typeofvehicle,
      regnumber,
      aadhar,
      dob,
    } = req.body;

    try {
      //See existing user

      let rider = await Rider.findOne({
        $or: [{ email: email }, { contact: phone }],
      });

      if (rider) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Rider already exists" }] });
      }

      //Checking the either mail is registered with seller or not
      let seller = await Seller.findOne({
        $or: [{ email: email }, { contact: phone }],
      });
      let vendor = await Vendor.findOne({
        $or: [{ email: email }, { contact: phone }],
      });

      if (seller || vendor) {
        return res.status(400).json({
          errors: [
            {
              msg:
                "Rider already exists as seller so please use diff email as a rider",
            },
          ],
        });
      }

      //get users Gravatar

      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      });

      //getting state and city details using pincode
      const response = await axios.get(
        `http://www.postalpincode.in/api/pincode/${pincode}`
      );
      const city = response.data.PostOffice[0].District;
      const state = response.data.PostOffice[0].State;

      rider = new Rider({
        name,
        email,
        avatar,
        password,
        aadhar,
        dob,
        modeOfTransport: {
          typeOfVehicle: typeofvehicle,
        },
        contact: phone,
        address: {
          city: city,
          state: state,
          pin: pincode,
        },
        typeofuser: "rider",
      });

      if (firstline) rider.address.firstLine = firstline;
      if (landmark) rider.address.landmark = landmark;
      if (regnumber) rider.modeOfTransport.regNum = regnumber;

      //Encrypt the pwd using bcrypt

      const salt = await bcrypt.genSalt(10);

      rider.password = await bcrypt.hash(password, salt);

      await rider.save();

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
    } catch (err) {
      if (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
      }
    }
  }
);

//route     POST /vendor
//desc:     Register Vendor
//access:   public
router.post(
  "/vendor",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a tough password of more then 6 Char"
    ).isLength({ min: 6 }),
    check("phone", "Please enter valid phone").isLength({ min: 10 }),
    check("pincode", "Pincode is required").not().isEmpty(),
    check("gstin", "Please enter a valid GST number").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      name,
      email,
      password,
      phone,
      gstin,
      pincode,
      firstline,
      landmark,
      aadhar,
    } = req.body;

    try {
      //See existing user
      let vendor = await Vendor.findOne({
        $or: [{ email: email }, { contact: phone }],
      });

      if (vendor) {
        return res.status(400).json({
          errors: [{ msg: "You are registered as a VENDOR already" }],
        });
      }

      //Checking the either mail is registered with seller or not
      let seller = await Seller.findOne({
        $or: [{ email: email }, { contact: phone }],
      });
      let rider = await Rider.findOne({
        $or: [{ email: email }, { contact: phone }],
      });

      if (seller || rider) {
        return res.status(400).json({
          errors: [
            {
              msg:
                "Rider already exists as seller or vendor so please use diff email as a rider",
            },
          ],
        });
      }

      //get users Gravatar

      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      });

      //getting state and city details using pincode
      const response = await axios.get(
        `http://www.postalpincode.in/api/pincode/${pincode}`
      );
      const city = response.data.PostOffice[0].District;
      const state = response.data.PostOffice[0].State;

      vendor = new Vendor({
        name,
        email,
        avatar,
        password,
        gstin,
        contact: phone,
        address: {
          city: city,
          state: state,
          pin: pincode,
          landmark: landmark,
        },
        typeofuser: "vendor",
      });

      if (firstline) vendor.address.firstLine = firstline;
      if (landmark) vendor.address.landmark = landmark;

      //Encrypt the pwd using bcrypt

      const salt = await bcrypt.genSalt(10);

      vendor.password = await bcrypt.hash(password, salt);

      await vendor.save();

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
    } catch (err) {
      if (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
      }
    }
  }
);
module.exports = router;
