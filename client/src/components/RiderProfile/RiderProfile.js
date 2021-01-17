import React from "react";
import { Link } from "react-router-dom";
import style from "./RiderProfile.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AiFillEdit } from "react-icons/ai";
import Card from "../SellerProfile/Card.js";

export const RiderProfile = () => {
  return (
    <div>
      <div className={style.container}>
        {/* CARD SECTION */}

        <div>
          <div className={style.cardDiv}>
            <Card
              name="Chris Hemsworth"
              email="chrish@gmail.com"
              img="https://www.gstatic.com/tv/thumb/persons/528854/528854_v9_bb.jpg"
              tel="645342453"
              aadhar="123456789012"
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
              <Form.Group controlId="Address">
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

            {/* REGISTRATION NO AND RADIUS SECTION */}

            <div className={style.regContainer}>
              <div className={style.flexItem}>
                <h3 className={style.heading}>
                  {" "}
                  Registration No.
                  <AiFillEdit className={style.editable} />
                </h3>

                <Form.Group controlId="Registration">
                  <Form.Label></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Registration Number"
                    className=""
                    readOnly
                  />
                </Form.Group>
              </div>
              <div className={style.flexItem}>
                <h3 className={style.heading}>
                  {" "}
                  Operation Radius
                  <AiFillEdit className={style.editable} />
                </h3>

                <Form.Group controlId="operationRadius">
                  <Form.Label></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Operation Radius"
                    className=""
                    readOnly
                  />
                </Form.Group>
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

          <div cla>
            <Link to="/dashboard/rider">
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
