import React, { useEffect } from "react";
import "./seller-dashboard2.css";
import Button from "react-bootstrap/Button";
import { FcBusinessman } from "react-icons/fc";
import { FcOk } from "react-icons/fc";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";

const SellerDashboard2 = ({ user, requests, pickup }) => {
  var address = "";
  var waste = "";
  var vendorDetail = "";
  var timeOfPickup = "";
  var qty = "";
  var vendorAccepted = "";
  var orderAccepted = "";
  var onMyWay = "";
  var riderName = "rider not alloted";
  var wasteCollected = "";
  var paidTheSeller = "";
  var droppedAtVendors = "";
  var cancelled = "";

  if (requests) {
    vendorDetail =
      requests[0] !== undefined ? requests[0].vendorDetail.name : "";
    requests.map((request) => {
      if (!request.cancelled && !request.completed) {
        if (request !== undefined) {
          if (request.address.firstLine !== undefined)
            address += request.address.firstLine;
          address += ", ";
          if (request.address.city !== undefined)
            address += request.address.city;
          address += ", ";
          if (request.address.state !== undefined)
            address += request.address.state;
          address += ", P.O: ";
          if (request.address.pin !== undefined) address += request.address.pin;
          address += " ";
          if (request.timeOfPickup !== undefined)
            timeOfPickup = request.timeOfPickup;
          if (request.orderList !== undefined)
            waste = request.orderList.map((waste) => {
              return waste.nameOfWaste;
            });
          if (request.orderList !== undefined)
            qty = request.orderList.map((waste) => {
              return waste.qty + "Kg";
            });
          if (request.vendorAccepted !== undefined)
            vendorAccepted = request.vendorAccepted;
          if (request.orderAccepted !== undefined)
            orderAccepted = request.orderAccepted.status;
          if (request.cancelled !== undefined) cancelled = request.cancelled;
          if (request.onMyWay !== undefined) onMyWay = request.onMyWay.status;
          if (request.droppedAtVendors !== undefined)
            droppedAtVendors = request.droppedAtVendors.status;
          if (request.wasteCollected !== undefined)
            wasteCollected = request.wasteCollected.status;
          if (request.paidTheSeller !== undefined)
            paidTheSeller = request.paidTheSeller.status;
          if (request.riderDetail !== undefined)
            riderName = request.riderDetail.name;
        }
      }
    });

    //traverse complete request array and find if any order of the user is not completed or nor cancelled.
    requests.map((request) => {
      if (request.cancelled || request.completed)
        return <Redirect to="/requestPickup" />;
    });
  }
  if (requests.length === 0) return <Redirect to="/requestPickup" />;

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

          <KeyValue info="Rider's Name" value={riderName} />

          {/* WASTE TYPE */}

          <KeyValue info="Waste Type" value={waste} />

          {/* WASTE QUANTITY */}

          <KeyValue info="Waste Quantity" value={qty} />
        </div>
        <hr className="division1" />
        {/* STATUS UPDATES SECTION */}
        {vendorAccepted ? (
          <div className="status-container">
            <h3 className="current-text"> Status Updates</h3>
            <div className="status-container-flex">
              <div className="status-container-flex-box">
                {vendorAccepted ? (
                  <StatusUpdates status="Approved by vendor" />
                ) : (
                  ""
                )}

                {orderAccepted ? (
                  <StatusUpdates status="Approved by rider" />
                ) : (
                  ""
                )}
                {onMyWay ? <StatusUpdates status="Rider on way" /> : ""}
              </div>
              <div className="status-container-flex-box">
                {wasteCollected ? (
                  <StatusUpdates status="Waste collected" />
                ) : (
                  ""
                )}
                {paidTheSeller ? (
                  <StatusUpdates status="Recieved Payment" />
                ) : (
                  ""
                )}
                {droppedAtVendors ? (
                  <StatusUpdates status="Dropped at vendor" />
                ) : (
                  ""
                )}
              </div>
            </div>
            <hr className="division1" />
          </div>
        ) : (
          ""
        )}

        {/* PICKUP HISTORY SECTION */}
        <Link to="/history/pickup">
          <Button variant="primary" className="pickup-button">
            <span className="request-text">Pickup History</span>
          </Button>{" "}
        </Link>
        <Link to="/cancel">
          <Button variant="danger" className="pickup-button">
            <span className="request-text">Cancel The Pickup Request!</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

SellerDashboard2.propTypes = {
  user: PropTypes.object.isRequired,
  vendor: PropTypes.object.isRequired,
  requests: PropTypes.array.isRequired,
  pickup: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  vendor: state.pickup.vendors,
  requests: state.pickup.request,
  pickup: state.pickup,
});

export default connect(mapStateToProps, {})(SellerDashboard2);
