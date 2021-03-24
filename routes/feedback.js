const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");
const { check, validationResult } = require("express-validator");

//route     POST /new
//desc:     Add a feedback
//access:   public
router.post(
  "",
  [
    check("message", "Feedback is mandatory").not().isEmpty(),
    check("stars", "Please select stars from 1 to 5").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      var {
        firstname,
        lastname,
        telnum,
        email,
        message,
        stars,
        agree,
        contactType,
      } = req.body;
      let feedbackData = await Feedback.findOne({ tel: tel });
    //   if (feedbackData)
    //     return res.status(400).json({
    //       errors: [
    //         {
    //           msg:
    //             "Your feedback has already submitted. We are working day and night to get back to you ASAP! Thanks For your Paitence.",
    //         },
    //       ],
    //     });
      feedbackData = new Feedback({
        name: firstname + " " + lastname,
        tel: telnum,
        email,
        feedback: message,
        stars,
        
      });
      if (agree) {
        feedbackData.mayWeContact.mode = contactType;
        feedbackData.mayWeContact.status = true;
      }
      var message;
      if (stars <= 3) {
        message =
          "We are really sad that we haven't been up to your expectation, we will get back with the proper resolution.";
      } else if (stars == 4) {
        message = "Thanks for your valuable feedback!";
      } else if ((stars = 5)) {
        message = " We are really thrilled as you are!!";
      }

      await feedbackData.save();
      res.status(200).json({ msg: message });
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//route     GET /
//desc:     to see all the feedbacks
//access:   Public
router.get('', async (req, res) => {
    try {
        let feedbacks = await Feedback.find({});
        if(!feedbacks) return res.status(400).json({errors: [{msg: "There is no feedback till the date"}]})
        res.status(200).json(feedbacks)
    } catch (err) {
        console.log(err.message);
      res.status(500).send("Server Error");
    }
})

module.exports = router;