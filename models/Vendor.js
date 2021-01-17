const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orgSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  contact: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  gstin: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  //optional at the time of signup
  wasteType: [
    {
      name: {
        type: String,
      },
      rate: {
        type: Number,
      },
      unit: {
        type: String,
      },
    },
  ],
  address: {
    firstLine: {
      type: String,
      required: true,
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
  date: {
    type: Date,
    default: Date.now,
  },
  typeofuser: {
    type: String,
    required: true,
  },
});

module.exports = Vendor = mongoose.model("vendor", orgSchema);
