const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  seller: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "seller",
    },
    name: {
      type: String,
    },
  },

  address: {
    firstLine: {
      type: String,
    },
    landmark: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pin: {
      type: Number,
      required: true,
    },
  },
  vendorDetail: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "vendor",
    },
    name: {
      type: String,
    },
  },
  vendorAccepted: {
    type: Boolean,
    default: false,
  },
  orderList: [
    {
      nameOfWaste: {
        type: String,
        required: true,
      },
      qty: {
        type: Number,
        required: true,
      },
    },
  ],
  estimatedAmount: {
    type: Number,
  },
  dateOfPickup: {
    type: Date,
  },
  timeOfPickup: {
    type: Date,
  },
  orderAccepted: {
    type: Boolean,
    default: false,
  },
  cancelled: {
    type: Boolean,
    default: false,
  },
  recent: {
    type: Boolean,
    default: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Order = mongoose.model("order", orderSchema);
