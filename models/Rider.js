const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const riderSchema = new Schema({
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
  aadhar: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  modeOfTransport: {
    typeOfVehicle: {
      type: String,
      required: true,
    },
    regNum: {
      type: String,
      default: "NA",
    },
  },
  available: {
    type: Boolean,
    default: true,
  },
  address: {
    firstLine: {
      type: String,
      required: true,
    },
    landmark: {
      type: String,
      required: true,
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
  pendingAcceptedRequests: [
    {
      orderid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "order",
      },
    },
  ],
  completedAcceptedRequests: [
    {
      orderid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "order",
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
  typeofuser: {
    type: String,
    required: true,
  },
});

module.exports = Rider = mongoose.model("rider", riderSchema);
