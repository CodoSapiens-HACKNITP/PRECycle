import React from "react";
import "./seller-dashboard2.css";
import Button from "react-bootstrap/Button";
import { FcBusinessman } from "react-icons/fc";
import { FcOk } from "react-icons/fc";
import { Link } from "react-router-dom";

export const SellerDashboard2 = () => {
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
              <h5>Hi! FirstName</h5>
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

          <KeyValue info="Vendor's Name" value="John Doe" />

          {/* PICKUP ADDRESS       */}

          <KeyValue
            info="pickup address"
            value="Ashok Rajpath, Nit Patna, Patna-800005,Bihar,hhdgd dhdhh dhdhdggd hddggd"
          />

          {/* SLOT */}

          <KeyValue info="slot" value="9:00am-3:00pm" />

          {/* RIDER'S NAME */}

          <KeyValue info="Rider's Name" value="Chintu" />

          {/* WASTE TYPE */}

          <KeyValue
            info="Waste Type"
            value="Newspapers, Cartons, Plastic bottles"
          />

          {/* WASTE QUANTITY */}

          <KeyValue info="Waste Quantity" value="5kg" />
        </div>
        <hr className="division1" />
        {/* STATUS UPDATES SECTION */}
        <div className="status-container">
          <h3 className="current-text"> Status Updates</h3>
          <div className="status-container-flex">
            <div className="status-container-flex-box">
              <StatusUpdates status="Approved by vendor" />
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
