import React, { useState } from "react";
import { Carousel } from "react-bootstrap";


const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

    return (
        <Carousel  className="  mt-5" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/Jj56Z1B/ban1.jpg
          "
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Accounting</h3>
          <p> We provide service in Tax, Audit and Bookkeeping.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/1vKXH1T/ban2.jpg
          "
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Bookkeeping</h3>
          <p> We provide service in Tax, Audit and Bookkeeping.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/fqWGGpq/ban3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Taxation and Auditing</h3>
          <p>
            We provide service in Tax, Audit and Bookkeeping. 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default Banner;