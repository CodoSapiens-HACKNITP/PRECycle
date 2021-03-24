import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RDstyles from "./rider_dashboard.module.css";
import profile from "./rider.png";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import Moment from "react-moment";
import {
  acceptOrder,
  viewRequest,
  acceptRequest,
  viewAcceptedRequestRider,
} from "../../actions/pickup";

const RiderDashboard = ({
  auth,
  user,
  request,
  acceptedRequest,
  viewRequest,
  acceptRequest,
  viewAcceptedRequestRider,
}) => {
  useEffect(() => {
    viewRequest();
    viewAcceptedRequestRider();
  }, [auth.isAuthenticated]);
  function AllottedCard(props) {
    return (
      <Card classname={RDstyles.card_pickups}>
        <Card.Body className={RDstyles.card_a}>
          <Card.Text>
            <Table>
              <tbody>
                <tr>
                  <td>ORDER NO.</td>
                  <td>{props.OrderNo}</td>
                </tr>
                <tr>
                  <td>SELLER'S NAME</td>
                  <td>{props.SellerName}</td>
                </tr>
                <tr>
                  <td>SELLER'S ADDRESS </td>
                  <td>{props.SellerAddress}</td>
                </tr>
                <tr>
                  <td>VENDOR'S NAME</td>
                  <td>{props.VendorName}</td>
                </tr>
                <tr>
                  <td>SLOT</td>
                  <td>{props.Slot}</td>
                </tr>
                <tr>
                  <td>WASTE TYPE</td>
                  <td>{props.WasteType}</td>
                </tr>
                <tr>
                  <td>WASTE QUANTITY</td>
                  <td>{props.WasteQuantity}</td>
                </tr>
              </tbody>
            </Table>
          </Card.Text>
          <div>
            <hr></hr>
          </div>
          <Update
            onMyWay={props.onMyWay}
            wasteCollected={props.wasteCollected}
            paidTheSeller={props.paidTheSeller}
            droppedAtVendors={props.droppedAtVendors}
          />
          <Invoice />
        </Card.Body>
      </Card>
    );
  }

  function PendingCard(props) {
    return (
      <Card classname={RDstyles.card_pickups}>
        <Card.Body className={RDstyles.card_p}>
          <Card.Text>
            <Table>
              <tbody>
                <tr>
                  <td>ORDER NO.</td>
                  <td>{props.OrderNo}</td>
                </tr>
                <tr>
                  <td>SELLER'S NAME</td>
                  <td>{props.SellerName}</td>
                </tr>
                <tr>
                  <td>SELLER'S ADDRESS </td>
                  <td>{props.SellerAddress}</td>
                </tr>
                <tr>
                  <td>VENDOR'S NAME</td>
                  <td>{props.VendorName}</td>
                </tr>
                <tr>
                  <td>SLOT</td>
                  <td>{props.Slot}</td>
                </tr>
                <tr>
                  <td>WASTE TYPE</td>
                  <td>{props.WasteType}</td>
                </tr>
                <tr>
                  <td>WASTE QUANTITY</td>
                  <td>{props.WasteQuantity}</td>
                </tr>
              </tbody>
            </Table>
          </Card.Text>
          <div>
            <hr></hr>
          </div>
          <Button
            variant="success"
            onClick={() => {
              acceptRequest(props.OrderNo);
              window.location.reload();
            }}
            className={RDstyles.rider_accept}
          >
            ACCEPT
          </Button>
          <Button variant="danger" className={RDstyles.rider_decline}>
            DECLINE
          </Button>
        </Card.Body>
      </Card>
    );
  }

  function Update(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button
          variant="warning"
          className={RDstyles.rider_update_button}
          onClick={handleShow}
        >
          UPDATE
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>STATUS UPDATE</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form method="post" classname={RDstyles.statusupdate}>
              <fieldset>
                <legend>What is the status?</legend>
                <input
                  type="checkbox"
                  name="status_update"
                  value=""
                  checked={props.onMyWay}
                  disabled={props.onMyWay ? "true" : false}
                />
                On my Way
                <br />
                <input
                  type="checkbox"
                  name="status_update"
                  value=""
                  checked={props.wasteCollected}
                  disabled={props.wasteCollected ? "true" : false}
                />
                Waste collected
                <br />
                <input
                  type="checkbox"
                  name="status_update"
                  value=""
                  checked={props.paidTheSeller}
                  disabled={props.paidTheSeller ? "true" : false}
                />
                Paid the seller
                <br />
                <input
                  type="checkbox"
                  name="status_update"
                  value=""
                  checked={props.droppedAtVendors}
                  disabled={props.droppedAtVendors ? "true" : false}
                />
                Dropped at vendor's
                <br />
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

  function Invoice() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button
          variant="light"
          className={RDstyles.rider_invoice_button}
          onClick={handleShow}
        >
          GENERATE INVOICE
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>ENTER DETAILS</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Waste Type</Form.Label>
                <Form.Control
                  type="WasteType"
                  placeholder="Enter the types of waste collected"
                ></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Waste Quantity</Form.Label>
                <Form.Control
                  type="WasteQuantity"
                  placeholder="Enter the respective waste quantity with appropriate units"
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="The seller approves of the above mentioned details"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  return (
    <div className={RDstyles.rider_dashboard}>
      <div className={RDstyles.greet_rider}>
        {" "}
        <Link to="/profile/rider">
          {/* GRADIENT BAR */}
          <div className="rider-image">
            <img
              src={profile}
              alt="profile_img"
              className={RDstyles.rider_img}
            ></img>{" "}
            {/* RIDER IMAGE */}
          </div>
          <div className={RDstyles.rider_greeting_text}>
            <h2>{user ? user.name : "<please refresh the page>"}</h2>{" "}
            {/* GREET RIDER */}
          </div>
        </Link>
      </div>

      <div className="card-groups">
        {" "}
        {/* CONTAINS ALLOTTED AND PENDING CARDS*/}
        <div class="row">
          <div class="col-12 col-lg-6">
            <div>
              <div className={RDstyles.rider_board_heading}>
                <h1>ALLOTTED ORDERS</h1>
              </div>

              {acceptedRequest.length > 0 ? (
                acceptedRequest.map((req) => {
                  return (
                    <AllottedCard
                      OrderNo={req._id}
                      SellerName={req.seller.name}
                      SellerAddress={
                        req.address.firstLine +
                        "," +
                        req.address.city +
                        "," +
                        req.address.state +
                        req.address.pin
                      }
                      VendorName={req.vendorDetail.name}
                      Slot={<Moment>{req.timeOfPickup}</Moment>}
                      WasteType={req.orderList.map(
                        (waste) => waste.nameOfWaste
                      )}
                      WasteQuantity={
                        req.orderList.map((waste) => waste.qty) + " Kg"
                      }
                      onMyWay={req.onMyWay.status}
                      wasteCollected={req.wasteCollected.status}
                      paidTheSeller={req.paidTheSeller.status}
                      droppedAtVendors={req.droppedAtVendors.status}
                    />
                  );
                })
              ) : (
                <h1>No Pending Request!</h1>
              )}
            </div>
          </div>

          <div class="col-12 col-lg-6">
            <div className="pending">
              <div className={RDstyles.rider_board_heading}>
                <h1>PICKUP REQUESTS</h1>
              </div>
              {request.length > 0 ? (
                request.map((req) => {
                  return (
                    <PendingCard
                      OrderNo={req._id}
                      SellerName={req.seller.name}
                      SellerAddress={
                        req.address.firstLine +
                        "," +
                        req.address.city +
                        "," +
                        req.address.state +
                        req.address.pin
                      }
                      VendorName={req.vendorDetail.name}
                      Slot={<Moment>{req.timeOfPickup}</Moment>}
                      WasteType={req.orderList.map(
                        (waste) => waste.nameOfWaste
                      )}
                      WasteQuantity={
                        req.orderList.map((waste) => waste.qty) + " Kg"
                      }
                    />
                  );
                })
              ) : (
                <h1>No Pending Request!</h1>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={RDstyles.delivery_hist_button}>
        <Link to="/history/delivery">
          <Button variant="info">DELIVERY HISTORY</Button>
        </Link>
      </div>
    </div>
  );
};

RiderDashboard.propTypes = {
  user: PropTypes.object.isRequired,
  request: PropTypes.object.isRequired,
  pickup: PropTypes.object.isRequired,
  acceptOrder: PropTypes.func.isRequired,
  alert: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  acceptRequest: PropTypes.func.isRequired,
  viewAcceptedRequestRider: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  request: state.pickup.request,
  acceptedRequest: state.pickup.acceptedRequest,
  pickup: state.pickup,
  alert: state.alert,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  viewRequest,
  acceptRequest,
  viewAcceptedRequestRider,
})(RiderDashboard);
