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
import {acceptOrder, viewRequest} from '../../actions/pickup'

const RiderDashboard = ({auth, user, request, acceptedRequest}) => {

  useEffect(() => {
    viewRequest()
  }, [auth.typeofuser])
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
          <Update />
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
          <Button variant="success" className={RDstyles.rider_accept}>
            ACCEPT
          </Button>
          <Button variant="danger" className={RDstyles.rider_decline}>
            DECLINE
          </Button>
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
                <input type="checkbox" name="status_update" value="" />
                On my Way
                <br />
                <input type="checkbox" name="status_update" value="" />
                Waste collected
                <br />
                <input type="checkbox" name="status_update" value="" />
                Paid the seller
                <br />
                <input type="checkbox" name="status_update" value="" />
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
            <h2>{user ? user.name : "<please refresh the page>"}</h2> {/* GREET RIDER */}
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

              {acceptedRequest.length>0 ? acceptedRequest.map((req)=> {
                return (<AllottedCard
                OrderNo={req._id}
                SellerName={req.seller.name}
                SellerAddress={req.address.firstLine + "," + req.address.city + "," + req.address.state + req.address.pin}
                VendorName={req.vendorDetail.name}
                Slot={req.timeOfPickup}
                WasteType={req.orderList.map(
                  (waste) => waste.nameOfWaste
                )}
                WasteQuantity={req.orderList.map(
                  (waste) => waste.qty 
                ) + " Kg"}
              />)
              }) : <h1>No Pending Request!</h1>
            }
            </div>
          </div>

          <div class="col-12 col-lg-6">
            <div className="pending">
              <div className={RDstyles.rider_board_heading}>
                <h1>PICKUP REQUESTS</h1>
              </div>
              {request.length>0 ? request.map((req)=> {
                return (<PendingCard
                OrderNo={req._id}
                SellerName={req.seller.name}
                SellerAddress={req.address.firstLine + "," + req.address.city + "," + req.address.state + req.address.pin}
                VendorName={req.vendorDetail.name}
                Slot={req.timeOfPickup}
                WasteType={req.orderList.map(
                  (waste) => waste.nameOfWaste
                )}
                WasteQuantity={req.orderList.map(
                  (waste) => waste.qty 
                ) + " Kg"}
              />)
              }) : <h1>No Pending Request!</h1>
            }
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
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  request: state.pickup.request,
  acceptedRequest: state.pickup.acceptedRequest,
  pickup: state.pickup,
  alert: state.alert,
  auth: state.auth
});

export default connect(mapStateToProps, { viewRequest})(
  RiderDashboard
);
