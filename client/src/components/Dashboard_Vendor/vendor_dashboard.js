import React, {useState} from "react";
import { Link } from "react-router-dom";
import VDstyles from "./vendor_dashboard.module.css";
import vendorpic from "./vendor.jpg";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FcOk } from "react-icons/fc";

const VendorDashboard = ({ user }) => {
  function UpcomingCard(props) {
    return (
      <Card classname={VDstyles.card_orders}>
        <Card.Body className={VDstyles.card_u}>
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
                  <td>RIDER'S NAME</td>
                  <td>{props.RiderName}</td>
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
          <Button variant="success" className={VDstyles.vendor_accept}>
            ACCEPT
          </Button>
          <Button variant="danger" className={VDstyles.vendor_decline}>
            DECLINE
          </Button>
        </Card.Body>
      </Card>
    );
  }

  function AcceptedCard(props) {
    return (
      <Card classname={VDstyles.card_pickups}>
        <Card.Body className={VDstyles.card_ac}>
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
                  <td>RIDER'S NAME</td>
                  <td>{props.RiderName}</td>
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
          <CheckStatus />
          <Button variant="light" className={VDstyles.vendor_invoice_button}>
            VIEW INVOICE
          </Button>
        </Card.Body>
      </Card>
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

  function CheckStatus() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button variant="warning" className={ VDstyles.vendor_update_button } onClick={handleShow}>
          CHECK STATUS
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>STATUS UPDATE</Modal.Title>
          </Modal.Header>
          <Modal.Body><form>
            <StatusUpdates status="Approved by rider" />
            <StatusUpdates status="Rider on way" />
            <StatusUpdates status="Waste collected" />
            <StatusUpdates status="Paid to seller" />
            <StatusUpdates status="Dropped at vendor" /> </form>
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
    <div className={VDstyles.vendor_dashboard}>
      <div className={VDstyles.greet_vendor}>
        {" "}
        <Link to="/profile/vendor">
        {/* GRADIENT BAR */}
        <div className="vendor-image">
          <img
            src={vendorpic}
            alt="profile_img"
            className={VDstyles.vendor_img}
          ></img>{" "}
          {/* VENDOR IMAGE */}
        </div>
        <div className={VDstyles.greeting_vendor}>
          <h2>Welcome, {user ? user.name : ""}</h2> {/* GREET VENDOR */}
        </div>
        </Link>
      </div>

      <div className="card-groups">
        {" "}
        {/* CONTAINS ALLOTTED AND PENDING CARDS*/}
        <div class="row">
          <div class="col-12 col-lg-6">
            <div className="upcoming">
              <div className={VDstyles.vendor_heading}>
                <h1>UPCOMING ORDERS</h1>
              </div>

              <UpcomingCard
                OrderNo="#1234"
                SellerName="Random Nobody"
                RiderName="OG Ragpickers"
                Slot="DD/MM/YYYY 24:00"
                WasteType="Answer Sheets"
                WasteQuantity="5kg"
              />

              <UpcomingCard
                OrderNo="#1234"
                SellerName="Random Nobody"
                RiderName="OG Ragpickers"
                Slot="DD/MM/YYYY 24:00"
                WasteType="Answer Sheets"
                WasteQuantity="5kg"
              />
            </div>
          </div>

          <div class="col-12 col-lg-6">
            <div className="accepted">
              <div className={VDstyles.vendor_heading}>
                <h1>ACCEPTED ORDERS</h1>
              </div>

              <AcceptedCard
                OrderNo="#1234"
                SellerName="Random Nobody"
                RiderName="OG Ragpickers"
                Slot="DD/MM/YYYY 24:00"
                WasteType="Answer Sheets"
                WasteQuantity="5kg"
              />

              <AcceptedCard
                OrderNo="#1234"
                SellerName="Random Nobody"
                RiderName="OG Ragpickers"
                Slot="DD/MM/YYYY 24:00"
                WasteType="Answer Sheets"
                WasteQuantity="5kg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={VDstyles.vendor_order_hist_button}>
        <Link to="/history/order">
          <Button variant="info">ORDER HISTORY</Button>
        </Link>
      </div>
    </div>
  );
};
VendorDashboard.propTypes = {
  user: PropTypes.object.isRequired,
  vendor: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  vendor: state.pickup.vendor,
});

export default connect(mapStateToProps, {})(VendorDashboard);
