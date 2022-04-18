import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/banner/Promo-Facebook-Facebook event image.jpeg'
import banner2 from '../../../images/banner/Promo-Facebook-Facebook event image (1).jpeg'
import banner3 from '../../../images/banner/Promo-Facebook-Facebook event image (2).jpeg'

const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome to Lens Guru</h3>
          <p>I am Jason Hoble ,a wild life photographer.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Photography is my passion</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Feel free to browse through the website</h3>
          <p>
            I provide other services than wild life photography.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default Banner;