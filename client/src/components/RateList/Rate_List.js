import React, { useState, useEffect } from "react";
import RLstyles from "./Rate_List.module.css";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import vendor_ic from "../Dashboard_Vendor/vendor.jpg";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateWasteList } from "../../actions/pickup";
import { loadUser } from "../../actions/auth";

const RateList = ({ auth, pickup, updateWasteList }) => {
  const [modal, toggleModal] = useState("false");
  function WasteRate(props) {
    return (
      <tr>
        <td>{props.waste}</td>
        <td className={RLstyles.rate_column}>{`Rs ${props.rate}/-`}</td>
        <td>
          <button
            id={props.index}
            onClick={(e) => {
              toggleModal(!modal);
              setData({
                name: props.waste,
                rate: props.rate,
                index: props.index,
              });
            }}
          >
            <span>&#9998;</span>
          </button>
        </td>
      </tr>
    );
  }

  useEffect(() => {
    loadUser(localStorage.typeofuser);
  });

  var wasteTypeArray = auth.user
    ? auth.user.wasteType
    : [{ name: "check", rate: "2000000000" }];
  var [formData, setFormData] = useState(wasteTypeArray);
  useEffect(() => {
    setFormData(wasteTypeArray);
  }, [auth.user]);
  const [data, setData] = useState({
    index: -1,
    name: "",
    rate: "",
  });

  const { index, name, rate } = data;

  const onSubmit = (e) => {
    e.preventDefault();
    const dataToPush = {
      name,
      rate,
    };
    if (dataToPush.name === "" || dataToPush.rate === "")
      return alert("Please fill the form");
    setFormData([...formData, dataToPush]);
    console.log([...formData, dataToPush]);
    setData({ name: "", rate: "" });
    toggleModal(!modal);
    updateWasteList([...formData, dataToPush]);
  };

  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
  const updateList = (e) => {
    e.preventDefault();
    formData.map((data) => {
      if (data.name === name) {
        data.rate = rate;
      }
      return 1;
    });
    toggleModal(!modal);
    updateWasteList(formData);
  };

  return (
    <div className={RLstyles.out_container}>
      <div>
        <div className={RLstyles.greet_vendor}>
          {/* GRADIENT BAR */}
          <div className="vendor-image">
            <img
              src={vendor_ic}
              alt="profile_img"
              className={RLstyles.vendor_img}
            ></img>
            {/* VENDOR IMAGE */}
          </div>
          <div className={RLstyles.vendor_greeting_text}>
            <h2>Welcome, {auth.user ? auth.user.name : ""}</h2>
            {/* GREET VENDOR */}
          </div>
        </div>

        <div className={RLstyles.vendor_rate_list}>
          <div className={RLstyles.list_heading}>
            <h2>RATE LIST</h2>
          </div>

          <div className={RLstyles.bgeffect}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>WASTE ITEM</th>
                  <th>RATE</th>
                  <th>Edit</th>
                </tr>
              </thead>

              <tbody>
                {formData.map((waste, index) => {
                  return (
                    <WasteRate
                      waste={waste.name}
                      rate={waste.rate}
                      index={index}
                    />
                  );
                })}
              </tbody>
            </Table>

            {!modal ? (
              <form className="rate_form">
                <input
                  type="text"
                  placeholder="Waste Type"
                  name="name"
                  value={name}
                  onChange={(e) => onChange(e)}
                  required={true}
                ></input>
                <input
                  type="text"
                  placeholder="Rate"
                  name="rate"
                  value={rate}
                  onChange={(e) => onChange(e)}
                  required={true}
                ></input>
                {index < formData.length ? (
                  <button onClick={(e) => updateList(e)}>Update</button>
                ) : (
                  <button onClick={(e) => onSubmit(e)}>Add</button>
                )}
              </form>
            ) : (
              ""
            )}
          </div>

          <div className={RLstyles.update_rate}>
            <Button
              variant="primary"
              onClick={(e) => {
                toggleModal(!modal);
                setData({ name: "", rate: "" });
              }}
            >
              Add New Item
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

RateList.propTypes = {
  auth: PropTypes.object.isRequired,
  vendor: PropTypes.object.isRequired,
  updateWasteList: PropTypes.func.isRequired,
  pickup: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  vendor: state.pickup.vendor,
  pickup: state.pickup,
});

export default connect(mapStateToProps, { updateWasteList })(RateList);
