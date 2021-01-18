import React from "react";
import { Link } from "react-router-dom";
import PHstyles from "./pickup_history.module.css";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import seller_ic from "./seller.jpg";

export const PickupHistory = () => {
  function PickupDetails(props) {
    return (
      <tr>
        <td>{props.OrderNo}</td>
        <td>{props.Slot}</td>
        <td>{props.VendorName}</td>
        <td>{props.Review}</td>
        <td className={PHstyles.invoice}>{props.Invoice}</td>
      </tr>
    );
  }

  return (
    <div className={PHstyles.parent_container}>
      <div>
        <div className={PHstyles.greet_seller}>
          {/* GRADIENT BAR */}
          <div className="seller-image">
            <img
              src={seller_ic}
              alt="profile_img"
              className={PHstyles.seller_img}
            ></img>
            {/* SELLER IMAGE */}
          </div>
          <div className={PHstyles.seller_greeting_text}>
            <h2>Hi, David Warner!</h2>
            {/* GREET SELLER */}
          </div>
        </div>

        <div className={PHstyles.seller_pickup_history}>
          <div className={PHstyles.list_heading}>
            <h2>PICKUP HISTORY</h2>
          </div>

          <div className={PHstyles.bgeffect}>
            <Table striped bordered hover responsive="md">
              <thead>
                <tr>
                  <th>ORDER NO.</th>
                  <th>SLOT</th>
                  <th>VENDOR NAME</th>
                  <th>REVIEW</th>
                  <th>INVOICE</th>
                </tr>
              </thead>

              <tbody>
                <PickupDetails
                  OrderNo="#1234"
                  Slot="16/01/2021 19:00"
                  VendorName="ABC Recyclers"
                  Review="Good"
                  Invoice="1234Amy.pdf"
                />

                <PickupDetails
                  OrderNo="#5678"
                  Slot="17/01/2021 09:00"
                  VendorName="DEF Recyclers"
                  Review="Excellent"
                  Invoice="5678Jake.pdf"
                />

                <PickupDetails
                  OrderNo="#1357"
                  Slot="17/01/2021 16:00"
                  VendorName="GHJ Recyclers"
                  Review="Could be better"
                  Invoice="1357Charles.pdf"
                />
              </tbody>
            </Table>
          </div>

          <div className={PHstyles.return_btn}>
            <Link to="/dashboard/seller">
              <Button variant="primary">RETURN TO DASHBOARD</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
