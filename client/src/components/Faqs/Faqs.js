import React, { useEffect } from "react";
import { Media, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Workflow from "../Workflow/Workflow.js";
import AOS from "aos";
import "aos/dist/aos.css";

const Faqs = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="container">
      <br />
      <br />
      <h1 style={{ fontFamily: "Joti one", color: "black" }}>
        <center>How it works</center>
      </h1>
      <br />
      <br />
      <div data-aos="fade-up">
        <br />

        <Media>
          <Row>
            <Col md={4}>
              <Image
                src="../assets/seller.png"
                style={{ maxWidth: 350, maxHeight: 350 }}
                alt="seller"
                roundedCircle
                fluid
              />
            </Col>
            <Col md={{ offset: 1, size: 7 }}>
              <Media body className="ml-1">
                <Media heading>
                  <h2 style={{ fontFamily: "Joti one", color: "black" }}>
                    Seller
                  </h2>
                </Media>
                <p>
                  A seller is anyone who has recyclable waste in a considerable
                  quantity and wants it to be recycled. All they have to do is
                  sign-in/sign-up on our website or App and fill a "Request to
                  Pick-up" form. After the vendor chosen by them accepts the
                  request, and so does a rider, the seller can get rid of that
                  scrap in exchange for money. As a bonus, the seller can stay
                  updated with the order status from the comfort of their abode.
                  So, they save time and earn money... sound like a win-win?
                </p>
              </Media>
            </Col>
          </Row>
        </Media>
      </div>
      <div data-aos="fade-up">
        <br />
        <Media>
          <Row>
            <Col md={7}>
              <Media body className="ml-1">
                <Media heading>
                  <h2 style={{ fontFamily: "Joti one", color: "black" }}>
                    Rider
                  </h2>
                </Media>
                <p>
                  Riders are authentic volunteers who serve as local ragpickers.
                  People have a lot of recyclable waste but not that much time
                  to get it recycled. So, the riders provide the facility of
                  "pickup at the doorstep." Once they accept an order, they
                  approach the seller with a weighing scale and pay them
                  according to the scrap collected on behalf of the vendors. The
                  riders then deliver this waste to the vendors. All of it while
                  giving regular status updates to both sellers and vendors.
                </p>
              </Media>
            </Col>
            <Col md={{ size: 4, offset: 1 }}>
              <Image
                src="../assets/rider.png"
                style={{ maxWidth: 350, maxHeight: 350 }}
                alt="rider"
                roundedCircle
                fluid
              />
            </Col>
          </Row>
        </Media>
      </div>
      <div data-aos="fade-up">
        <br />
        <Media>
          <Row>
            <Col md={4}>
              <Image
                src="./assets/vendor.png"
                style={{ maxWidth: 350, maxHeight: 350 }}
                alt="vendor"
                roundedCircle
                fluid
              />
            </Col>
            <Col md={{ offset: 1, size: 7 }}>
              <Media body className="ml-1">
                <Media heading>
                  <h2 style={{ fontFamily: "Joti one", color: "black" }}>
                    Vendor
                  </h2>
                </Media>
                <p>
                  Vendors are verified recyclable waste collection centres that
                  regularly send waste to recycling units. Sellers can choose a
                  vendor depending on the type of waste they collect and its
                  rate. They coordinate with PRECycle riders to collect scrap at
                  a large scale based on a rate list decided solely by them. The
                  collaboration helps them in becoming more noticeable so that a
                  larger population opts for recycling their waste.
                </p>
              </Media>
            </Col>
          </Row>
        </Media>
      </div>{" "}
      <br />
      <hr />
      <br />
      <div data-aos="flip-left">
        <Workflow />
      </div>
      <br />
      <hr />
      <br />
      <h1 style={{ fontFamily: "Joti one", color: "black" }}>
        <center>Frequently asked Questions</center>
      </h1>
      <br />
      <br />
      <div data-aos="fade-up">
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <center>
                  What are the most common items that are recyclable?
                </center>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p>1. Cardboard</p>
                <p>2. Paper</p>
                <p>3. Packaging boxes</p>
                <p>4. Print Outs</p>
                <p>5. Beverage cans</p>
                <p>6. Food cans</p>
                <p>7. Plastic bottles</p>
                <p>8. Jugs & Jars (plastic)</p>
                <p>9. All types of metals like Iron, Copper, Brass, etc.</p>
                <p>10. AC, Fridge, Home Appliances</p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <br />
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                <center>How does recycling work?</center>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p>
                  There are three parts to the recycling process: collection,
                  manufacturing and buying
                </p>
                <p>Collection - Don't Send Recyclables To The Landfill</p>
                <p>
                  In first phase, dry materials are separated from the wet waste
                  and sorted to become raw materials.
                </p>
                <p>
                  Manufacturing - Using recovered Materials for recycling
                  instead of Virgin product as Raw Materials by sorting as
                  stated above.
                </p>
                <p>
                  Buying - "Close The Loop" By Buying Products With Recycled
                  Content
                </p>
                <p>
                  In order to make recycling economically viable, people should
                  buy recycled products, companies will be encouraged to make
                  them, and the whole system works.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <br />
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                <center>
                  Is recycling truly beneficial for the environment?
                </center>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <p>
                  Recycling conserves energy and natural resources. It is a
                  small step towards the greater good. By recycling, we aim to
                  bring about sustainability. It is the answer to a lot of
                  ongoing environmental concerns. For e.g., As recycling saves
                  energy it also reduces greenhouse gas emissions, which helps
                  to tackle climate change.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <br />
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                <center>Why do we have to sort our recyclables?</center>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <p>
                  Mixing different dry recyclables or contaminating them with
                  wet waste or garbage makes it more difficult to prepare them
                  as raw material for production. People should sort material
                  into cardboard, paper, plastics, and metals etc to make it
                  more economical to use as raw material for industries.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <br />
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="4">
                <center>
                  How do I know what my local recycling options are?
                </center>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                Please <Link to="/contactus">contact us</Link> to fulfil your
                recycling needs in most secured way. Our rider will come to your
                doorstep in uniform, weigh your material with digital weigh
                scale and pay you through cash. So, sell your scrap, tension
                free!
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <br />
        </Accordion>
      </div>
    </div>
  );
};

export default Faqs;
