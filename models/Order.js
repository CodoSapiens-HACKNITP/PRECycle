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
  riderDetail: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "rider",
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
    status: {
      type: Boolean,
      default: false,
    },
    time: {
      type: Date,
    },
  },
  onMyWay: {
    status: {
      type: Boolean,
      default: false,
    },
    time: {
      type: Date,
    },
  },
  wasteCollected: {
    status: {
      type: Boolean,
      default: false,
    },
    time: {
      type: Date,
    },
  },
  paidTheSeller: {
    status: {
      type: Boolean,
      default: false,
    },
    time: {
      type: Date,
    },
  },
  droppedAtVendors: {
    status: {
      type: Boolean,
      default: false,
    },
    time: {
      type: Date,
    },
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
