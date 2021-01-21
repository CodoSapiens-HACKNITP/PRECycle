import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      <h5>Rate Us:</h5>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="starrating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffa62b" : "#bbbfca"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              size={30}
            />
          </label>
        );
      })}
    </div>
  );
};

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/requestPickup">Request Pickup</Link>
              </li>
              <li>
                <Link to="/signup/vendor">Join as Vendor</Link>
              </li>
              <li>
                <Link to="/signup/rider">Join as Rider</Link>
              </li>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-7 col-sm-3">
            <h5>Community</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/faqs">How it works & FAQs</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/tnc">TnC & Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-3">
            <center>
              <StarRating />
            </center>
          </div>
          <div className="col-12 col-sm-3 align-self-center">
            <div className="text-center">
              <h5>Find us at:</h5>
              <a
                className="btn btn-social-icon btn-google"
                href="http://google.com/+"
              >
                <i className="fa fa-google-plus"></i>
              </a>{" "}
              <a
                className="btn btn-social-icon btn-facebook"
                href="http://www.facebook.com/profile.php?id="
              >
                <i className="fa fa-facebook"></i>
              </a>{" "}
              <a
                className="btn btn-social-icon btn-linkedin"
                href="http://www.linkedin.com/in/"
              >
                <i className="fa fa-linkedin"></i>
              </a>{" "}
              <a
                className="btn btn-social-icon btn-twitter"
                href="http://twitter.com/"
              >
                <i className="fa fa-twitter"></i>
              </a>{" "}
              <a
                className="btn btn-social-icon btn-google"
                href="http://youtube.com/"
              >
                <i className="fa fa-youtube"></i>
              </a>{" "}
              <a className="btn btn-social-icon" href="mailto:">
                <i className="fa fa-envelope-o"></i>
              </a>{" "}
            </div>
          </div>
        </div>
        <hr />
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2021 CodoSapiens All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
