const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
  name: {
    type: String,
  },
  tel: {
    type: Number,
  },
  email: {
    type: String,
  },
  mayWeContact: {
    mode: {
      type: String,
    },
    status: {
      type: Boolean,
    },
  },
  feedback: {
    type: String,
  },
  stars: {
    type: Number,
  },
  time: {
    type: Date,
    default: new Date(),
  },
});

module.exports = Feedback = mongoose.model("feedback", feedbackSchema);
