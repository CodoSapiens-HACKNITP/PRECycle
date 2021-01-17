import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import style from "./SellerProfile.module.css";

function AddressForm() {
  return (
    <div /*className={style.editableForm}*/ className={style.editableForm}>
      <Form id="addressEdit">
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Address" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Landmark</Form.Label>
          <Form.Control type="text" placeholder="Landmark" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Pincode</Form.Label>
          <Form.Control type="text" placeholder="Pincode" />
        </Form.Group>
        <Button type="submit" variant="dark" className={style.button123}>
          Save
        </Button>{" "}
      </Form>
    </div>
  );
}

export default AddressForm;
