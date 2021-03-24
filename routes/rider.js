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
router.get("/request", auth, async (req, res) => {
  try {
    const rider = await Rider.findById(req.rider.id);
    let orders = await Order.find({
      $or: [
        { "address.pin": rider.address.pin },
        { "address.city": rider.address.city },
      ],
    });
    var vendorAcceptedOrder = [];
    orders.map((order) => {
      if (
        order.vendorAccepted === true &&
        order.orderAccepted.status === false &&
        order.riderDetail
      ) {
        vendorAcceptedOrder.push(order);
      }
    });
    if (vendorAcceptedOrder.length === 0)
      return res.status(200).json({
        errors: [{ msg: "there is no Vendor accpeted order nearby" }],
      });
    res.status(200).json(vendorAcceptedOrder);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
});

//route     PUT /request/accept/:id
//desc:     Accept any of the recent request
//access:   Private
router.put("/request/accept/:id", auth, async (req, res) => {
  const orderid = req.params.id;
  try {
    let order = await Order.findById(orderid);
    let rider = await Rider.findById(req.rider.id);
    if (order.cancelled)
      return res
        .status(400)
        .json({ errors: [{ msg: "The Order has been cancelled!" }] });
    if (order.orderAccepted.status) {
      return res.status(200).json({
        erros: [{ msg: "The Order is Already Accepted!" }],
      });
    }
    order.orderAccepted.status = true;
    if (!order.riderDetail.name) {
      order.riderDetail.name = rider.name;
      order.riderDetail.id = rider._id;
    } else {
      return res.status(400).json({
        errors: [{ msg: "The Order has been Alloted to a different rider!" }],
      });
    }
    var dataToPush = {
      orderid: orderid,
    };
    rider.pendingAcceptedRequests.unshift(dataToPush);
    await order.save();
    await rider.save();
    res.status(200).json(order);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("SERVER ERROR");
  }
});

//route     GET /request/accept
//desc:     To get all the accepted order by the particular rider
//access:   Private
router.get("/request/accept", auth, async (req, res) => {
  try {
    let orders = await Order.find({ "riderDetail.id": req.rider.id });
    if (!orders)
      return res.status(200).json({ errors: [{ msg: "There are no orders" }] });
    var acceptedOrder = [];
    if (
      orders.map((order) => {
        if (order.orderAccepted.status) return acceptedOrder.push(order);
      })
    )
      res.status(200).json(acceptedOrder);
  } catch (error) {
    console.log(err.message);
    res.status(500).send("SERVER ERROR");
  }
});

//route     PUT /request/:orderid/status/onmyway
//desc:     to update status of rider on the way
//access:   Private
router.put("/request/:orderid/status/onmyway", auth, async (req, res) => {
  try {
    let order = await Order.findById(req.params.orderid);
    if (order.onMyWay.status)
      return res
        .status(200)
        .json({ errors: [{ msg: "Order status is already true" }] });
    if (order.orderAccepted.status) {
      order.onMyWay.status = true;
    } else {
      return res
        .status(200)
        .json({ errors: [{ msg: "Order is not accepted by you!" }] });
    }
    await order.save();
    res.status(200).json(order);
  } catch (error) {
    console.log(err.message);
    res.status(500).send("SERVER ERROR");
  }
});

//route     PUT /request/:orderid/status/wastecollected
//desc:     to update status of Waste Collected
//access:   Private
router.put(
  "/request/:orderid/status/wastecollected",
  auth,
  async (req, res) => {
    try {
      let order = await Order.findById(req.params.orderid);
      if (order.wasteCollected.status)
        return res
          .status(200)
          .json({ errors: [{ msg: "Order status is already true" }] });
      if (order.orderAccepted.status) {
        if (order.onMyWay.status) {
          order.wasteCollected.status = true;
        } else {
          return res
            .status(200)
            .json({ errors: [{ msg: "OnMyWay Status is required!" }] });
        }
      } else {
        return res
          .status(200)
          .json({ errors: [{ msg: "Order is not accepted by you!" }] });
      }
      await order.save();
      res.status(200).json(order);
    } catch (error) {
      console.log(err.message);
      res.status(500).send("SERVER ERROR");
    }
  }
);

//route     PUT /request/:orderid/status/recivedpayment
//desc:     to update status of Waste Collected
//access:   Private
router.put(
  "/request/:orderid/status/recivedpayment",
  auth,
  async (req, res) => {
    try {
      let order = await Order.findById(req.params.orderid);
      if (order.paidTheSeller.status)
        return res
          .status(200)
          .json({ errors: [{ msg: "Order status is already true" }] });
      if (order.orderAccepted.status) {
        if (order.onMyWay.status) {
          if (order.wasteCollected.status) {
            order.paidTheSeller.status = true;
          } else {
            return res.status(200).json({
              errors: [{ msg: "Waste Collected Status is required!" }],
            });
          }
        } else {
          return res
            .status(200)
            .json({ errors: [{ msg: "OnMyWay Status is required!" }] });
        }
      } else {
        return res
          .status(200)
          .json({ errors: [{ msg: "Order is not accepted by you!" }] });
      }
      await order.save();
      res.status(200).json(order);
    } catch (error) {
      console.log(err.message);
      res.status(500).send("SERVER ERROR");
    }
  }
);

//route     PUT /request/:orderid/status/dropatvendor
//desc:     to update status of dropped at vendors
//access:   Private
router.put("/request/:orderid/status/dropatvendor", auth, async (req, res) => {
  try {
    let order = await Order.findById(req.params.orderid);
    if (order.droppedAtVendors.status)
      return res
        .status(200)
        .json({ errors: [{ msg: "Order status is already true" }] });
    if (order.orderAccepted.status) {
      if (order.onMyWay.status) {
        if (order.wasteCollected.status) {
          if (order.paidTheSeller.status) {
            order.droppedAtVendors.status = true;
          } else {
            return res
              .status(200)
              .json({ errors: [{ msg: "Paid the seller is required!" }] });
          }
        } else {
          return res
            .status(200)
            .json({ errors: [{ msg: "Waste Collected Status is required!" }] });
        }
      } else {
        return res
          .status(200)
          .json({ errors: [{ msg: "OnMyWay Status is required!" }] });
      }
    } else {
      return res
        .status(200)
        .json({ errors: [{ msg: "Order is not accepted by you!" }] });
    }
    await order.save();
    res.status(200).json(order);
  } catch (error) {
    console.log(err.message);
    res.status(500).send("SERVER ERROR");
  }
});
module.exports = router;
