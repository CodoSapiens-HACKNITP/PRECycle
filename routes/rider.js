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

//route     GET /request
//desc:     Watch recent request in the nearby areas
//access:   Private
router.get('/request', auth, async (req, res) => {
  try {
    const rider = await Rider.findById(req.rider.id);
    let orders = await Order.find({ $or: [{ "address.pin": rider.address.pin }, { "address.city": rider.address.city }],
  });
  var vendorAcceptedOrder =[];
  orders.map((order) => {
    if(order.vendorAccepted === true && order.riderDetail.name !== null) {
      vendorAcceptedOrder.push(order);
    }
  });
  if(vendorAcceptedOrder.length === 0) return res.status(200).json({errors: [{msg: "there is no Vendor accpeted order nearby"}]});
  res.status(200).json(vendorAcceptedOrder);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
});

//route     PUT /request/accept/:id
//desc:     Accept any of the recent request
//access:   Private
router.put('/request/accept/:id', auth, async (req, res) => {
  const orderid = req.params.id;
  try {
    let order = await Order.findById(orderid);
    if(!order) res.status(400).json({errors: [{msg: "There is no Order!"}]})
    let rider = await Rider.findById(req.rider.id);
    if(order.orderAccepted){
      return res.status(200).json({
        erros: [
          {msg: "You have Already Accepted This order"}
        ]
      })
    }
    order.orderAccepted.status = true;
    order.orderAccepted.time = new Date.now()

    order.onMyWay.status = true;
    order.onMyWay.time = new Date.now()
    var dataToPush = {
      orderid: orderid
    };
    rider.pendingRequests.unshift(dataToPush);
    await order.save();
    await rider.save();
    res.status(200).json(order);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("SERVER ERROR");
  }
})

module.exports = router;
