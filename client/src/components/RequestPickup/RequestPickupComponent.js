import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button, Col } from "reactstrap";
import Select from "react-select";

import { FcBusinessman } from "react-icons/fc";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadNearbyVendors } from "../../actions/pickup";
import Spinner from "../layout/Spinner";

const RenderWasteTable = ({ wasteType, quantity }) => {
  return (
    <div className="table-responsive">
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Waste Type</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>cd c   
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const RequestPickup = ({ user, loadNearbyVendors, vendors }) => {

  const [index, setIndex] = useState(0);
  const [data,  setData ] =  useState()
  const [formData, setFormData] = useState({
    city: user ? user.address.city : "",
    pincode: user ? user.address.pin : "",
    state: user ? user.address.state : "",
    firstLine: user ? user.address.firstLine : "",
    landmark: user ? user.address.landmark : "",
  });

  useEffect(() => {
    setFormData({...formData, wasteType: vendors !== undefined && vendors[0] !== undefined ? vendors[0].wasteType : []});
  }, [vendors]);
  var options;
  useEffect(() => {
    options = formData.wasteType !== undefined ? [
      formData.wasteType.map((waste) => {
        return {name: waste, label: waste}
      })
  ] : [];
  }, [formData]);

  const { city, pincode, state, firstLine, landmark } = user;
 

  

  if (user) {
    //var address;
    //if(user.address.firstLine) address += user.address.firstLine + ",";
    //if(user.address.landmark) address += " " + user.address.landmark;
    //address += " " + user.address.city + " " + user.address.state + " , " + user.address.pin;
  }

  const onChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    loadNearbyVendors(pincode, city);
  }, []);
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

  function addWaste() {}

  return (
    <div>
      <div className="seller-dashboard3">
        {/* HEADER SECTION */}
        <div className="gradient-section1">
          <div className="Profile-image-container">
            <div className="intro">
              <h5>
                Hi! {user ? <span>{user.name}</span> : <span>gadha</span>}
              </h5>
            </div>
            {/* PROFILE IMAGE OF SELLER */}
            <div className="profile-image">
              <FcBusinessman className="seller-profile-pic" />
            </div>
          </div>
        </div>
        {/* REQUEST TO PICKUP SECTION */}
        <br />
        <h1>
          <center>Request a Pickup</center>
        </h1>{" "}
        <hr className="division1" />
        <div className="container">
          <Form>
            <FormGroup>
              <Label row htmlFor="address">
                <h3>
                  Address<span className="btn btn-large fa fa-edit"></span>
                </h3>
              </Label>
              <Input
                type="textarea"
                id="address"
                name="firstline"
                rows="8"
                placeholder={firstLine}
                onChange={(e) => onChange(e)}
              />
              <Input
                type="text"
                id="landmark"
                name="landmark"
                placeholder={landmark}
                onChange={(e) => {
                  loadNearbyVendors(pincode, city);
                  onChange(e);
                }}
              />
              <Input
                type="text"
                id="city"
                name="city"
                placeholder={city + " " + state}
                disabled={true}
                onChange={(e) => {
                  loadNearbyVendors(pincode, city);
                  onChange(e);
                }}
              />
              <Input
                type="text"
                id="pincode"
                name="pincode"
                placeholder={pincode}
                disabled={true}
                onChange={(e) => {
                  onChange(e);
                }}
              />

              <hr />
              <h3>Select Vendor</h3>
              <br />
              {/* DISPLAY THE VENDORS NEAR THE LOCATION */}
              {vendors ? (
                vendors.length > 0 ? (
                  vendors.map((ven, index) => <Vendors vendor={ven.name} index={index} />)
                ) : (
                  <Spinner />
                )
              ) : (
                ""
              )}
              {/* <Vendors vendor=" Fuhar " />
            <Vendors vendor=" Palak " />
            <Vendors vendor=" Digvijay " />
            <Vendors vendor=" GuruJi" /> */}
            </FormGroup>
            <hr />
            <h3>Enter Waste Details</h3>
            <br />
            <FormGroup row>
              <Label htmlFor="wasteType" md={2}>
                Type of waste
              </Label>
              <Col md={{ size: 3 }}>
                {/*<Select
                  options={options}
                  isMulti
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  name="wasteType"
                  className="basic-multi-select"
                  classNamePrefix="select"
                />*/}
                <Select
                  options={options}
                  name="wasteType"
                  className="basic-single"
                  classNamePrefix="select"
                />
              </Col>
              <Label htmlFor="wasteType" md={{ size: 3, offset: 1 }}>
                Waste Quantity (Kg or piece)
              </Label>
              <Col md={{ size: 1 }}>
                <Input
                  type="number"
                  id="quantity"
                  name="quantity"
                  placeholder="Waste Quantity"
                />
              </Col>
              <Col md={2}>
                <Button outline color="warning" onClick={addWaste}>
                  Add
                </Button>
              </Col>
            </FormGroup>
            <RenderWasteTable />
            <hr />
            <h3>Select Slot</h3>
            <br />
            <FormGroup row>
              <Label htmlFor="date" md={2}>
                Date of Pickup
              </Label>
              <Col md={3}>
                <Input
                  type="date"
                  id="date"
                  name="date"
                  placeholder="Pickup date"
                />
              </Col>
              <Label htmlFor="time" md={{ size: 2, offset: 1 }}>
                Pickup Time
              </Label>
              <Col md={3}>
                <Input
                  type="time"
                  id="time"
                  name="time"
                  placeholder="Pickup time"
                />
              </Col>
            </FormGroup>
            <br />
            <FormGroup>
              <center>
                <Button type="submit" color="warning">
                  Submit Request
                </Button>
              </center>
              <br />
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
};
RequestPickup.propTypes = {
  user: PropTypes.object.isRequired,
  loadNearbyVendors: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  vendors: state.pickup.vendors,
});

export default connect(mapStateToProps, { loadNearbyVendors })(RequestPickup);
