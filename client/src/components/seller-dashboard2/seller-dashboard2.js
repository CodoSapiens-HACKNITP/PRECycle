import React, { useEffect } from "react";
import "./seller-dashboard2.css";
import Button from "react-bootstrap/Button";
import { FcBusinessman } from "react-icons/fc";
import { FcOk } from "react-icons/fc";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";

const SellerDashboard2 = ({ user, request, pickup }) => {
  var address = "";
  var waste = "";
  var vendorDetail = "";
  var timeOfPickup = "";
  var qty = "";
  var vendorAccepted = "";
  useEffect(() => {
    vendorDetail = request[0] !== undefined ? request[0].vendorDetail.name : "";
  }, [pickup, request]);
  vendorDetail = request[0] !== undefined ? request[0].vendorDetail.name : "";

  if (request[0] !== undefined) {
    if (request[0].address.firstLine !== undefined)
      address += request[0].address.firstLine;
    address += ", ";
    if (request[0].address.city !== undefined)
      address += request[0].address.city;
    address += ", ";
    if (request[0].address.state !== undefined)
      address += request[0].address.state;
    address += ", P.O: ";
    if (request[0].address.pin !== undefined) address += request[0].address.pin;
    address += " ";
    if (request[0].timeOfPickup !== undefined)
      timeOfPickup = request[0].timeOfPickup;
    if (request[0].orderList !== undefined)
      waste = request[0].orderList.map((waste) => {
        return waste.nameOfWaste;
      });
    if (request[0].orderList !== undefined)
      qty = request[0].orderList.map((waste) => {
        return waste.qty + "Kg";
      });
    if (request[0].vendorAccepted !== undefined)
      vendorAccepted = request[0].vendorAccepted;
  }

  function KeyValue(props) {
    return (
      <div className="keyvalue-container">
        <div className="key-container">
          <p>{props.info} : </p>
        </div>
        <div className="value-container">
          <p>{props.value}</p>
        </div>
      </div>
    );
  }

  function StatusUpdates(props) {
    return (
      <div className="status-updates">
        <FcOk className="tick-icon" />
        <p>{props.status}</p>
      </div>
    );
  }
  return (
    <div>
      <div className="seller-dashboard1">
        {/* HEADER SECTION */}
        <div className="gradient-section">
          <Link to="/profile/seller">
            <div className="Profile-image-container">
              <div className="intro">
                <h5>Hi! {user ? user.name : "User Not Loaded"}</h5>
              </div>
              {/* PROFILE IMAGE OF SELLER */}
              <div className="profile-image">
                <FcBusinessman className="seller-profile-pic" />
              </div>
            </div>
          </Link>
        </div>
        {/* CURRENT REQUEST SECTION */}
        <div className="Current-request ">
          <h2 className="current-text">Current Request</h2>

          {/* INFORMATION DISPLAYED TO SELLER */}

          {/* VENDOR'S NAME */}

          <KeyValue info="Vendor's Name" value={vendorDetail} />

          {/* PICKUP ADDRESS       */}

          <KeyValue info="pickup address" value={address} />

          {/* SLOT */}
          <KeyValue
            info="Slot Details "
            value={<Moment>{timeOfPickup}</Moment>}
          ></KeyValue>

          {/* RIDER'S NAME */}

          <KeyValue info="Rider's Name" value={"Rider Not Alloted"} />

          {/* WASTE TYPE */}

          <KeyValue info="Waste Type" value={waste} />

          {/* WASTE QUANTITY */}

          <KeyValue info="Waste Quantity" value={qty} />
        </div>
        <hr className="division1" />
        {/* STATUS UPDATES SECTION */}
        <div className="status-container">
          <h3 className="current-text"> Status Updates</h3>
          <div className="status-container-flex">
            <div className="status-container-flex-box">
              {vendorAccepted ? (
                <StatusUpdates status="Approved by vendor" />
              ) : (
                ""
              )}

              <StatusUpdates status="Approved by rider" />
              <StatusUpdates status="Rider on way" />
            </div>
            <div className="status-container-flex-box">
              <StatusUpdates status="Waste collected" />
              <StatusUpdates status="Recieved Payment" />
              <StatusUpdates status="Dropped at vendor" />
            </div>
          </div>
        </div>
        <hr className="division1" />
        {/* PICKUP HISTORY SECTION */}
        <Link to="/history/pickup">
          <Button variant="primary" className="pickup-button">
            <span className="request-text">Pickup History</span>
          </Button>{" "}
        </Link>
      </div>
    </div>
  );
};

SellerDashboard2.propTypes = {
  user: PropTypes.object.isRequired,
  vendor: PropTypes.object.isRequired,
  request: PropTypes.object.isRequired,
  pickup: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  vendor: state.pickup.vendors,
  request: state.pickup.request,
  pickup: state.pickup,
});

export default connect(mapStateToProps, {})(SellerDashboard2);
