import React, {useEffect} from 'react';
import { Media,Row,Col } from 'reactstrap';
import Image from 'react-bootstrap/Image';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Faqs = () => {
    useEffect(() => {
        AOS.init({duration:2000});
      },[])
  return (
    <div className="container"><br/><br/>
        <h1 style={{ fontFamily: "Joti one", color: "black" }}><center>How it works</center></h1><br/><br/>
    <div data-aos="fade-up"><br/>
    
      <Media>
        <Row>
        <Col md={4}>
        <Image  src="../assets/seller.png" style={{maxWidth:350,maxHeight:350}} alt="seller" roundedCircle fluid />
        </Col>
        <Col md={{offset:1,size:7}}>
        <Media body className="ml-1">
        <Media heading><h2 style={{ fontFamily: "Joti one", color: "black" }}>Seller</h2></Media>
          <p>Lorem Ipsum There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
        </Media>
        </Col>
        </Row>
      </Media>
      </div>
      <div data-aos="fade-up"><br/>
      <Media>
        <Row>
        <Col md={7}>
        <Media body className="ml-1">
        <Media heading><h2 style={{ fontFamily: "Joti one", color: "black" }}>Rider</h2></Media>
          <p>Lorem Ipsum There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
        </Media>
        </Col>    
        <Col md={{size:4, offset:1}}>
        <Image  src="../assets/rider.png" style={{maxWidth:350,maxHeight:350}} alt="rider" roundedCircle fluid />
        </Col>
        
        </Row>
      </Media>
      </div>
      <div data-aos="fade-up"><br/>
      <Media>
        <Row>
        <Col md={4}>
        <Image  src="./assets/vendor.png" style={{maxWidth:350,maxHeight:350}} alt="vendor" roundedCircle fluid />
        </Col>
        <Col md={{offset:1,size:7}}>
        <Media body className="ml-1">
        <Media heading><h2 style={{ fontFamily: "Joti one", color: "black" }}>Vendor</h2></Media>
          <p>Lorem Ipsum There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
        </Media>
        </Col>
        </Row>
      </Media>
    </div>
    <br/><hr/><br/>
    <h1 style={{ fontFamily: "Joti one", color: "black" }}><center>Frequently asked Questions</center></h1><br/><br/>
    <div data-aos="fade-up">
    <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        How to get good CG in Sem 4?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
    <br/>
  <Card>
    <Card.Header>
      <Accordion.Toggle  as={Button} variant="link" eventKey="1">
        Who are the benefits?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card><br/>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
        How to get good CG in Sem 4?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
    <br/>
  <Card>
    <Card.Header>
      <Accordion.Toggle  as={Button} variant="link" eventKey="3">
        Who are the benefits?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card><br/>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="4">
        How to get good CG in Sem 4?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="4">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
    <br/>
  <Card>
    <Card.Header>
      <Accordion.Toggle  as={Button} variant="link" eventKey="5">
        Who are the benefits?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="5">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card><br/>
</Accordion>
        </div>
    </div>
    
  );
};

export default Faqs;