const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const riderDetailSchema = new Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "order",
  },
  availableRiders: [
    {
      nameOfRider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "rider",
      },
    },
  ],
  riderAlloted: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "rider",
  },
});

module.exports = RiderDetail = mongoose.model("riderDetail", riderDetailSchema);
