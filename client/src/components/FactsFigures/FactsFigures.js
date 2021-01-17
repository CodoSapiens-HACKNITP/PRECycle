import React from "react";
import Card from "react-bootstrap/Card";
import "../seller-dashboard1/seller-dashboard1.css";

function RenderCard(props) {
  return (
    <Card
      style={{
        width: "30rem",
        margin: "30px 15px",
        textAlign: "center",
        backgroundColor: "red",
      }}
      bg="light"
    >
      <Card.Body>
        <Card.Title style={{ fontSize: "3rem" }}>{props.title}</Card.Title>
        <Card.Subtitle
          className="mb-2 text-muted"
          style={{ fontSize: "1.5rem" }}
        >
          {props.subtitle}
        </Card.Subtitle>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

const Facts = () => {
  return (
    <div className="facts-div">
      {/* <center> */}
      <br />
      <RenderCard
        title="322"
        subtitle="Gallons of Petrol"
        text="Equivalent to recycling one ton of office paper "
      />
      {/* <br /> */}
      <RenderCard
        title="25"
        subtitle="Hours of powering a laptop "
        text="Equivalent to recycling 10 plastic bottles "
      />{" "}
      {/* <br /> */}
      <RenderCard
        title="17"
        subtitle=" Trees saved"
        text="From  recycling 1 ton of waste paper "
      />{" "}
      {/* <br /> */}
      <RenderCard
        title="21"
        subtitle=" Barrels of oil consumed"
        text="Equivalent to recycling 1 ton of Aluminium cans "
      />{" "}
      {/* <br /> */}
      {/* </center> */}
    </div>
  );
};

export default Facts;
