import React, { useEffect } from "react";
import "./seller-dashboard1.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FcBusinessman } from "react-icons/fc";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { loadNearbyVendors } from "../../actions/pickup";

const SellerDashboard1 = ({
  user,
  auth,
  vendor,
  loadNearbyVendors,
  request,
}) => {
  useEffect(() => {
    loadNearbyVendors(localStorage.pincode, localStorage.city);
  }, [user]);
  function Vendors(props) {
    return (
      <div className="vendor-list">
        <label class="container404">
          {props.vendor}
          <input type="radio" checked="checked" name="radio" />
          <span class="checkmark"></span>
        </label>
      </div>
    );
  }

  const onSubmit = (e) => {
    e.preventDefault();
    loadNearbyVendors(localStorage.pincode, localStorage.city);
  };

  return (
    <div>
      <div className="seller-dashboard1">
        {/* HEADER SECTION */}
        <div className="gradient-section">
          <Link to="/profile/seller">
            <div className="Profile-image-container">
              <div className="intro">
                <h5>
                  Hi! {user ? <span>{user.name}</span> : <span>Gadha</span>}{" "}
                </h5>
              </div>
              {/* PROFILE IMAGE OF SELLER */}
              <div className="profile-image">
                <FcBusinessman className="seller-profile-pic" />
              </div>
            </div>
          </Link>
        </div>

        {/* REQUEST TO PICKUP SECTION */}
        <div>
          <Link to="/requestPickup">
            <Button variant="warning" className="request-to-pickup">
              {request.length > 0 ? (
                <span className="request-text">
                  Watch Status of Your current Request
                </span>
              ) : (
                <span className="request-text">Request To Pickup</span>
              )}
            </Button>
          </Link>{" "}
          <hr className="division1" />
          {/* SEARCH FOR VENDORS NEAR YOU SECTION */}
          <h4 className="search-inst">Search for vendors near you</h4>
          <Form>
            <div className="form-container">
              {/* ADDRESS INPUT */}

              <div className="address-input">
                <Form.Group controlId="loaction">
                  <Form.Label></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter pickup address"
                    className="address-class"
                  />
                </Form.Group>
              </div>

              {/* PINCODE INPUT */}
              <div className="pincode-input">
                <Form.Group controlId="city">
                  <Form.Label></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="City"
                    value={localStorage.city}
                  />
                </Form.Group>
              </div>
              <div className="pincode-input">
                <Form.Group controlId="pincode">
                  <Form.Label></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Pin Code"
                    value={localStorage.pincode}
                  />
                </Form.Group>
              </div>
            </div>
            <div>
              <center>
                {" "}
                <input
                  type="submit"
                  value="Find Nearby Vendors"
                  onClick={(e) => onSubmit(e)}
                ></input>
              </center>
              <br />
            </div>
          </Form>
          {/* DISPLAY THE VENDORS NEAR THE LOCATION */}
          {vendor ? (
            vendor.length > 0 ? (
              vendor.map((ven, index) => (
                <Vendors vendor={ven.name} index={index} />
              ))
            ) : (
              <Spinner />
            )
          ) : (
            "No Vendor Found. Please Try Again after Some Time!"
          )}
          <hr className="division1" />
          {/* PICKUP HISTORY SECTION */}
          <Link to="/history/pickup">
            <Button variant="primary" className="pickup-button">
              <span className="request-text">Pickup History</span>
            </Button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

SellerDashboard1.propTypes = {
  user: PropTypes.object.isRequired,
  vendor: PropTypes.object.isRequired,
  loadNearbyVendors: PropTypes.func.isRequired,
  request: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  vendor: state.pickup.vendors,
  request: state.pickup.request,
  auth: state.auth,
});

export default connect(mapStateToProps, { loadNearbyVendors })(
  SellerDashboard1
);
