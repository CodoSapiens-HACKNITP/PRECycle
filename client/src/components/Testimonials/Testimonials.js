import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Testimonials() {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6100}
    >
      <div>
        <img src="assets/palak.jpeg" alt="Palak" />
        <div className="myCarousel">
          <h3>Palak Kumari</h3>
          <h4>Designer</h4>
          <p>Love the way they handle recyclable waste.</p>
        </div>
      </div>

      <div>
        <img src="assets/fuhar.jpeg" alt="Fuhar" />
        <div className="myCarousel">
          <h3>Fuhar Suman</h3>
          <h4>Designer</h4>
          <p>
            The simple and intuitive design makes it easy for me use. I highly
            recommend PRECyle to my peers.
          </p>
        </div>
      </div>

      <div>
        <img src="assets/rishabh.jpeg" alt="Rishabh" />
        <div className="myCarousel">
          <h3>Rishabh Mishra</h3>
          <h4>Designer</h4>
          <p>
            I enjoy catching up with PRECycle on my laptop, or on my phone
            wherever I am.
          </p>
        </div>
      </div>
    </Carousel>
  );
}
