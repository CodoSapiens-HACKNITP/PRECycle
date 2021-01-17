import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Media,
  Row,
  Col,
} from "reactstrap";
import Image from "react-bootstrap/Image";
import image1 from "../../assests/seller.png";
import image2 from "../../assests/rider.png";
import image3 from "../../assests/vendor.png";
import Testimonials from "../Testimonials/Testimonials.js";
import Facts from "../FactsFigures/FactsFigures";
import AOS from "aos";
import "aos/dist/aos.css";

const items = [
  {
    src: "./assets/C1.jpg",
    altText: "",
    caption: "",
  },
  {
    src: "./assets/C2.jpg",
    altText: "",
    caption: "",
  },
  {
    src: "./assets/C3.jpg",
    altText: "",
    caption: "",
  },
];

const CardItem = ({ image, header, para }) => (
  <div className="box">
    <div className="box-image">
      <img src={image} alt="" />
    </div>
    <div className="box-content">
      <h2 className="box-header">{header}</h2>
      <p>{para}</p>
    </div>
  </div>
);

const Display = () => {
  const headers = ["Seller", "Rider", "Vendor"];

  const paras = [
    "The civilians willing to sell the waste",
    "The local riders or ragpickers",
    "The local scrap dealers",
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-4">
          {" "}
          <CardItem image={image1} header={headers[0]} para={paras[0]} />
        </div>
        <div className="col-12 col-sm-4">
          {" "}
          <CardItem image={image2} header={headers[1]} para={paras[1]} />
        </div>
        <div className="col-12 col-sm-4">
          {" "}
          <CardItem image={image3} header={headers[2]} para={paras[2]} />
        </div>
      </div>
    </div>
  );
};

const Home = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <center>
          <img src={item.src} alt={item.altText} />
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </center>
      </CarouselItem>
    );
  });

  return (
    <React.Fragment>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
      <div data-aos="fade-up">
        <Display />
      </div>
      <br />
      <hr />
      <br />
      <div className="container">
        <div data-aos="fade-up">
          <Media>
            <Row>
              <Col md={4}>
                <Image
                  src="./assets/logo.jpg"
                  style={{ maxWidth: 350, maxHeight: 350 }}
                  alt="Precycle"
                  roundedCircle
                  fluid
                />
              </Col>
              <Col md={{ offset: 1, size: 7 }}>
                <Media body className="ml-1">
                  <Media heading>
                    <h2 style={{ fontFamily: "Joti one", color: "black" }}>
                      Why PRECycle?
                    </h2>
                  </Media>
                  <p>
                    PRECycle bridges the gap between sellers and vendors, thus
                    making disposal of recyclable waste a hassle-free process.
                  </p>
                  <p>
                    Our riders provide the "pick-up at your doorstep" service,
                    so you can get chores done while saving time.
                  </p>
                  <p>
                    You can choose a date and time for pick up at your
                    convenience.
                  </p>
                  <p>
                    We provide you the facility to stay updated with the status
                    of your pick-up request from the comfort of your home.
                  </p>
                  <p>
                    Our team checks the authenticity of all the riders and
                    vendors before collaborating with them.
                  </p>
                  <p>
                    The rate lists are analysed to prevent the practices of
                    cheating or overpricing.
                  </p>
                </Media>
              </Col>
            </Row>
          </Media>
        </div>
        <br />
        <hr />
        <br />
        <div data-aos="fade-up">
          <center>
            <h2 style={{ fontFamily: "Joti one", color: "black" }}>
              Did you know?
            </h2>
          </center>
          <Facts />
        </div>
        <br />
        <hr />
        <br />
        <div data-aos="fade-up">
          <center>
            <h2 style={{ fontFamily: "Joti one", color: "black" }}>
              Testimonials
            </h2>
          </center>
          <Testimonials />
        </div>
        <br />
        <hr />
        <br />
      </div>
    </React.Fragment>
  );
};

export default Home;
