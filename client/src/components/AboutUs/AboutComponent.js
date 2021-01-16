import React, { useEffect } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  Jumbotron,
  Media,
  Row,
  Col,
} from "reactstrap";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


function Team(props) { 
  return(<Media>
    <Row>
      <Col md={4}>
        <Image
          src={props.src}
          style={{ maxWidth: 125, maxHeight: 125}}
          alt="Precycle"
          roundedCircle
          fluid
        />
      </Col>
      <Col md={{ offset: 1, size: 7 }}>
        <Media body className="ml-1">
          <Media heading>
            <h2 style={{ fontFamily: "Joti one", color: "black" }}>
              {props.name}
            </h2>
          </Media>
          <p>
            {props.post}
          </p>
        </Media>
      </Col>
    </Row>
  </Media>);
}

function About(props) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>About Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>About Us</h3>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12 col-md-6">
          <Jumbotron>
            <div className="container">
              <div className="row row-header">
                <div className="col-12">
                  <h1>Our Mission</h1>
                  <p>
                    PRECycle is a service which helps you to sell your old and
                    throw away stuff in an organized manner. It is as easy as
                    calling or dropping us a note and.. Kaboom! You get rid of
                    your stuff just like that!
                  </p>
                </div>
              </div>
            </div>
          </Jumbotron>

          <h2>About</h2>
          <p>
            PRECycle started on 15th January 2021 as a web development project
            based on Sustainable Development for HACKNITP Winter '21. We aim to
            create greater awareness about recycling. Making people recognise
            types of waste and the importance of processing them is a small step
            in that direction. We believe that this initiative will inspire more
            people to opt for recycling waste instead of getting inappropriately
            rid of them. The concept of sustainability is something we need to
            incorporate into our daily lives. It is quintessential in ensuring
            the wellness of future generations and, we at PRECycle are all about
            it!
          </p>
          <p></p>
        </div>
        <div className="col-12 col-md-5">
          <Card>
            <CardHeader className="bg-primary text-white">
              Facts At a Glance
            </CardHeader>
            <CardBody>
              <dl className="row p-1">
                <dt className="col-6">Started</dt>
                <dd className="col-6">15 Jan 2021</dd>
                <dt className="col-6">Major Stake Holder</dt>
                <dd className="col-6">CodoSapiens Inc.</dd>
                <dt className="col-6">Last Year's Turnover</dt>
                <dd className="col-6">$1,250,375</dd>
                <dt className="col-6">Employees</dt>
                <dd className="col-6">4</dd>
              </dl>
            </CardBody>
          </Card>
        </div>
        <div className="col-12">
          <div data-aos="fade-up">
            <Card>
              <CardBody className="bg-faded">
                <blockquote className="blockquote">
                  <p className="mb-0">
                    Sustainable development is the pathway to the future we want
                    for all. It offers a framework to generate economic growth,
                    achieve social justice, exercise environmental stewardship
                    and strengthen governance.
                  </p>
                  <footer className="blockquote-footer">
                    Ban-Ki-Moon
                    <cite title="Source Title">
                      {" "}
                      ,General Secratary, UN 2014
                    </cite>
                  </footer>
                </blockquote>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      
        <div data-aos="fade-up">
          
            <h2>Meet our team</h2>
            <br/><br/>
          
          
              <Team src="./assets/fuhar.jpeg" name="Fuhar Suman" post="Team Captain" />
              <Team src="./assets/palak.jpeg" name="Palak Kumari" post="Chief Managing Director" />
              <Team src="./assets/rishabh.jpeg" name="Rishabh Mishra" post="Chief Operating Officer" />
              <Team src="./assets/dig.png" name="Digvijay Srivastava" post="OP" />
           
          
      </div>
    </div>
  );
}

export default About;
