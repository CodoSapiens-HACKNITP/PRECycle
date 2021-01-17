import React from "react";
import { Link } from "react-router-dom";
import style from "./VendorProfile.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AiFillEdit } from "react-icons/ai";
import Card from "../SellerProfile/Card.js";
import pic from "./digvijay.jpeg";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const options = [
  { value: "newspaper", label: "Newspaper" },
  { value: "container", label: "Plastic Containers" },
  { value: "bottle", label: "Plastic bottles" },
  { value: "ewaste", label: "E-Waste" },
  { value: "others", label: "Others" },
];

export const VendorProfile = () => {
  function selectWaste() {
    var x = document.getElementById("type");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  return (
    <div>
      <div className={style.container}>
        {/* CARD SECTION */}

        <div>
          <div className={style.cardDiv}>
            <Card
              name="Digvijay Srivastava"
              email="digvijay@gmail.com"
              img={pic}
              tel="645342453"
              gsti="5H4DRR465"
            />
          </div>

          {/* ADDRESS SECTION */}

          <hr className={style.division} />
          <div className={style.address}>
            <h3 className={style.heading}>
              {" "}
              Address
              <AiFillEdit className={style.editable} />
            </h3>
            <div className={style.addressField}>
              <Form.Group controlId="address">
                <Form.Label></Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  className={style.addressField}
                  placeholder="Your address"
                  readOnly
                />
              </Form.Group>
            </div>

            {/* ABOUT YOU SECTION*/}
            <h3 className={style.heading}>
              {" "}
              About You
              <AiFillEdit className={style.editable} />
            </h3>
            <div className={style.addressField}>
              <Form.Group controlId="bio">
                <Form.Label></Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  className={style.addressField}
                  placeholder="About you"
                  readOnly
                />
              </Form.Group>
            </div>

            {/* TYPES OF WASTE SECTION */}

            <h3 className={style.heading}>
              {" "}
              Types of waste you collect
              <AiFillEdit className={style.editable} onClick={selectWaste} />
            </h3>
            <div className={style.addressField}>
              <Form.Group controlId="wasteType">
                <Form.Label></Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  className={style.addressField}
                  placeholder="Types of waste"
                  readOnly
                />
              </Form.Group>
            </div>

            {/* SELECT TYPE OF WASTE HIDDEN COMPONENT */}

            <div id="type" className={style.SelectType}>
              <div class="input-group mb-3">
                <label class="input-group-text" for="waste_type">
                  Type of Waste
                </label>
                <Select
                  options={options}
                  isMulti
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  name="waste_type"
                  className="basic-multi-select form-select"
                  classNamePrefix="select"
                />
              </div>
            </div>

            {/* CHANGE YOUR PASSWORD SECTION*/}

            <h2 className={style.heading}>Change Your Password</h2>
            <div className={style.changePassword}>
              <Form.Group controlId="newPassword">
                <Form.Label></Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter new password"
                  className=""
                />
              </Form.Group>
              <Form.Group controlId="newPassword">
                <Form.Label></Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
                  className=""
                />
              </Form.Group>
              <Button variant="dark" className={style.changeButton}>
                Change
              </Button>{" "}
            </div>
          </div>
          <hr className={style.division} />

          {/* BACK TO DASHBOARD */}

          <div>
            <Link to="/dashboard/vendor">
              <Button variant="warning" size="lg" className={style.lastButton}>
                Return to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
