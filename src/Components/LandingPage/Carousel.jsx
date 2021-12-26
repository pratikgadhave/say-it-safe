import React from "react";
import { Carousel } from "react-bootstrap";
import bg1 from "../../assets/bg1.jpg";
import bg2 from "../../assets/bg2.jpg";
import bg3 from "../../assets/bg3.jpg";

const CarouselDesign = () => {
  return (
    <div style={{ height: "100px" }}>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            style={{ height: "700px" }}
            src={bg1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h2 style={{ color: "black" }}>Say-It-Safe</h2>
            <p style={{ color: "black" }}>
              {" "}
              An author who does not put his name on his books is an example of
              someone who is anonymous. <br />
              Having an unknown or unacknowledged name.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            style={{ height: "700px" }}
            src={bg2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "700px" }}
            src={bg3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselDesign;
