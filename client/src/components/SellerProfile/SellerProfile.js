import React from "react";
import { Link } from "react-router-dom";
import style from "./SellerProfile.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AiFillEdit } from "react-icons/ai";
import Card from "./Card";

export const SellerProfile = () => {
  return (
    <div>
      <div className={style.container}>
        {/* CARD SECTION */}

        <div>
          <div className={style.cardDiv}>
            <Card
              name="Emma Watson"
              email="palak@gmail.com"
              img="https://static.wixstatic.com/media/ea883b_9f64e50b22fe47c4af0f50ed65e6729f~mv2.jpg/v1/fill/w_1000,h_750,al_c,q_90,usm_0.66_1.00_0.01/ea883b_9f64e50b22fe47c4af0f50ed65e6729f~mv2.jpg"
              tel="645342453"
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
                  placeholder="Your Address"
                  readOnly
                />
              </Form.Group>
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
            <Link to="/dashboard/seller">
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
