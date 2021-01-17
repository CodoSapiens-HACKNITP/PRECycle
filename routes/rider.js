const express = require("express");
const request = require("request");
const config = require("config");
const router = express.Router();
const auth = require("../middleware/auth");
const Seller = require("../models/Seller");
const Rider = require("../models/Rider");
const Vendor = require("../models/Vendor");
const { check, validationResult } = require("express-validator");

//route     GET /profile/my
//desc:     Get Current Seller profile
//access:   Private
router.get("/my", auth, async (req, res) => {
  try {
    const rider = await Rider.findOne({
      _id: req.rider.id,
    });

    if (!rider) {
      return res.status(400).json({
        msg: "There is no profile for this rider",
      });
    }

    res.status(200).json({ rider });
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
});

module.exports = router;
