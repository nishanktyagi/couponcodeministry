import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import banner1 from '../images/banner-1.jpg';
import mobilebanner1 from '../images/mobile-banner-1.jpeg';

function BannerCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container className='p-0' fluid id="bannerSection">
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item >
        <img
          className="d-lg-none d-xl-block d-none d-sm-block w-100"
          src={banner1}
          alt="destop-banner-1"
        />
         <img
          className="d-block d-lg-none w-100"
          src={banner1}
          alt="destop-banner-1"
        />
      </Carousel.Item>
    </Carousel>
    </Container>
  );
}

export default BannerCarousel;