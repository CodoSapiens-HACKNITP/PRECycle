import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./VendorProfile.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AiFillEdit } from "react-icons/ai";
import Card from "../SellerProfile/Card.js";
import pic from "./digvijay.jpeg";
import MultiSelect from "react-multi-select-component";
import AddressForm from "../SellerProfile/EditAddress";

const options = [
  { value: "newspaper", label: "Newspaper" },
  { value: "container", label: "Plastic Containers" },
  { value: "bottle", label: "Plastic bottles" },
  { value: "ewaste", label: "E-Waste" },
  { value: "others", label: "Others" },
];

export const VendorProfile = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [readOnlyAbout, setReadOnlyAbout] = useState(true);
  const [WasteType, setWasteType] = useState(false);
  const [selected, setSelected] = useState([]);

  function editAddress() {
    setIsClicked(!isClicked);
  }
  function EnableWriteAbout() {
    setReadOnlyAbout(!readOnlyAbout);
  }

  function selectWaste() {
    setWasteType(!WasteType);
  }

  return (
    <div>
      <div className={style.container}>
        {/* CARD SECTION */}

        <div>
          <div className={style.cardDiv}>
            <Card
              name="ABC Recyclers"
              email="abcr@gmail.com"
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
              <AiFillEdit className={style.editable} onClick={editAddress} />
            </h3>
            <div className={style.addressField}>
              <Form.Group controlId="address">
                <Form.Label></Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  className={style.addressField}
                  placeholder="N- 8/2,  Renusagar"
                  readOnly
                />
              </Form.Group>
            </div>
            {/* HIDDEN ADDRESS FORM */}
            <div style={{ display: isClicked ? "block" : "none" }}>
              <AddressForm />
            </div>

            {/* ABOUT YOU SECTION*/}
            <h3 className={style.heading}>
              {" "}
              About You
              <AiFillEdit
                className={style.editable}
                onClick={EnableWriteAbout}
              />
            </h3>
            <div className={style.addressField}>
              <Form.Group controlId="bio">
                <Form.Label></Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  className={style.addressField}
                  placeholder="You sell, We buy!"
                  readOnly={readOnlyAbout}
                />
                {/* HIDDEN SAVE BUTTON */}
                <Button
                  variant="primary"
                  style={{
                    display: !readOnlyAbout ? "block" : "none",
                  }}
                  className={style.button123}
                >
                  Save
                </Button>{" "}
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
                  placeholder="Paper, Plastics"
                  readOnly
                />
              </Form.Group>
            </div>

            {/* SELECT TYPE OF WASTE HIDDEN COMPONENT */}

            <div
              style={{ display: !WasteType ? "block" : "none" }}
              className={style.SelectType}
            >
              <label class="input-group-text" for="waste_type">
                Type of Waste
              </label>
              {/*} <Select
                  options={options}
                  isMulti
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  name="waste_type"
                  className="basic-multi-select form-select"
                  classNamePrefix="select"
                />  */}

              <MultiSelect
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy={"Select"}
              />
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
