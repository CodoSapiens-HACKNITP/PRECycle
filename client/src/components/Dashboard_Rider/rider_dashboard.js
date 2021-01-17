import React, { useState, render } from "react";
import { Link } from "react-router-dom";
import RDstyles from "./rider_dashboard.module.css";
import profile from "./rider.png";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
//import PropTypes from "prop-types";
//import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
// import { setAlert } from "../../actions/alert";

export const RiderDashboard = () => {

  function AllottedCard(props) {
    return (
      <Card classname={ RDstyles.card_pickups }>
        <Card.Body className={ RDstyles.card_a }>
          <Card.Text>
            <Table>
              <tbody>
                <tr>
                  <td>ORDER NO.</td>
                  <td>{ props.OrderNo }</td>
                </tr>
                <tr>
                  <td>SELLER'S NAME</td>
                  <td>{ props.SellerName }</td>
                </tr>
                <tr>
                  <td>SELLER'S ADDRESS </td>
                  <td>{ props.SellerAddress }</td>
                </tr>
                <tr>
                  <td>VENDOR'S NAME</td>
                  <td>{ props.VendorName }</td>
                </tr>
                <tr>
                  <td>SLOT</td>
                  <td>{ props.Slot }</td>
                </tr>
                <tr>
                  <td>WASTE TYPE</td>
                  <td>{ props.WasteType }</td>
                </tr>
                <tr>
                  <td>WASTE QUANTITY</td>
                  <td>{ props.WasteQuantity }</td>
                </tr>
              </tbody>
            </Table>            
          </Card.Text>
          <div><hr></hr></div>
          <Update />
          <Button variant="light" className={ RDstyles.rider_invoice_button }>GENERATE INVOICE</Button>
        </Card.Body>
      </Card>
    );
  }

  function PendingCard(props) {
    return (
      <Card classname={ RDstyles.card_pickups }>
        <Card.Body className={ RDstyles.card_p }>
          <Card.Text>
            <Table>
              <tbody>
                <tr>
                  <td>ORDER NO.</td>
                  <td>{ props.OrderNo }</td>
                </tr>
                <tr>
                  <td>SELLER'S NAME</td>
                  <td>{ props.SellerName }</td>
                </tr>
                <tr>
                  <td>SELLER'S ADDRESS </td>
                  <td>{ props.SellerAddress }</td>
                </tr>
                <tr>
                  <td>VENDOR'S NAME</td>
                  <td>{ props.VendorName }</td>
                </tr>
                <tr>
                  <td>SLOT</td>
                  <td>{ props.Slot }</td>
                </tr>
                <tr>
                  <td>WASTE TYPE</td>
                  <td>{ props.WasteType }</td>
                </tr>
                <tr>
                  <td>WASTE QUANTITY</td>
                  <td>{ props.WasteQuantity }</td>
                </tr>
              </tbody>
            </Table>            
          </Card.Text>
          <div><hr></hr></div>
          <Button variant="success" className={ RDstyles.rider_accept }>ACCEPT</Button>
          <Button variant="danger" className={ RDstyles.rider_decline }>DECLINE</Button>
        </Card.Body>
      </Card>
    );
  }

  function Update() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button variant="warning" className={ RDstyles.rider_update_button } onClick={handleShow}>
          UPDATE
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>STATUS UPDATE</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form method="post" classname= { RDstyles.statusupdate }>      
              <fieldset>      
                  <legend>What is the status?</legend>      
                  <input type="checkbox" name="status_update" value=""/>On my Way<br/>      
                  <input type="checkbox" name="status_update" value=""/>Waste collected<br/>      
                  <input type="checkbox" name="status_update" value=""/>Paid the seller<br/>  
                  <input type="checkbox" name="status_update" value=""/>Dropped at vendor's<br/>   
              </fieldset>      
          </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  

  return (
    <div className={ RDstyles.rider_dashboard }>

      <div className={ RDstyles.greet_rider }>
        {" "}
        {/* GRADIENT BAR */}
        <div className="rider-image">
          <img src={profile} alt="profile_img" className={ RDstyles.rider_img }></img>{" "}
          {/* RIDER IMAGE */}
        </div>
        <div className={ RDstyles.rider_greeting_text }>
          <h2>Hi, Rider!</h2>{" "}
          {/* GREET RIDER */}
        </div>
      </div>

      <div className="card-groups">
        {" "}
        {/* CONTAINS ALLOTTED AND PENDING CARDS*/}
        <div class="row">

          <div class="col-12 col-lg-6">
            <div>
              <div className={ RDstyles.rider_board_heading }>
                <h1>ALLOTTED ORDERS</h1>
              </div>

              <AllottedCard
                OrderNo="#1234"
                SellerName="Random Nobody"
                SellerAddress="In the Middle of Nowhere"
                VendorName="OG Ragpickers"
                Slot="DD/MM/YYYY 24:00"
                WasteType="Answer Sheets"
                WasteQuantity="5kg"
              />

              <AllottedCard
                OrderNo="#1234"
                SellerName="Random Nobody"
                SellerAddress="In the Middle of Nowhere"
                VendorName="OG Ragpickers"
                Slot="DD/MM/YYYY 24:00"
                WasteType="Answer Sheets"
                WasteQuantity="5kg"
              />
            </div>
          </div>

          <div class="col-12 col-lg-6">
            <div className="pending">
              <div className={ RDstyles.rider_board_heading }>
                <h1>PICKUP REQUESTS</h1>
              </div>

              <PendingCard
                OrderNo="#1234"
                SellerName="Random Nobody"
                SellerAddress="In the Middle of Nowhere"
                VendorName="OG Ragpickers"
                Slot="DD/MM/YYYY 24:00"
                WasteType="Answer Sheets"
                WasteQuantity="5kg"
              />

              <PendingCard
                OrderNo="#1234"
                SellerName="Random Nobody"
                SellerAddress="In the Middle of Nowhere"
                VendorName="OG Ragpickers"
                Slot="DD/MM/YYYY 24:00"
                WasteType="Answer Sheets"
                WasteQuantity="5kg"
              />

            </div>

          </div>

        </div>
        </div>

        <div className={ RDstyles.delivery_hist_button }>
          <Link to="/history/delivery">
          <Button variant="info">DELIVERY HISTORY</Button>
          </Link>
        </div>

    </div>
  );
};
