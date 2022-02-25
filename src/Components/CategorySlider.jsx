import React from "react";
import styled from "styled-components";
import slider1 from "../images/slider2.png";
import "pure-react-carousel/dist/react-carousel.es.css";

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

function CategorySlider() {
  return (
    <Wrapper>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={2}
      >
        <Slider>
          <Slide index={0}>
            <img src={slider1} alt="" />
          </Slide>
          <Slide index={1}>
            <img src={slider1} alt="" />
          </Slide>
        </Slider>
      </CarouselProvider>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  img {
    width: 100%;
  }
`;

export default CategorySlider;
