import React, { useState } from "react";
import styled from "styled-components";
import { productItemDetailsData } from "../data/productItemDetailsData";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

function ProductItemDetailsImageSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Wrapper>
      <div className="image-slider-section-main">
        <div className="image-slider-section">
          <div className="image-slider-main-img">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {productItemDetailsData[0].sliderImages.map((item) => {
                return (
                  <SwiperSlide>
                    <img src={item} alt="" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="image-slider-main-thumb">
            <Swiper
              onSwiper={setThumbsSwiper}
              slidesPerView={4}
              spaceBetween={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper-thumb"
            >
              {productItemDetailsData[0].sliderImages.map((item) => {
                return (
                  <SwiperSlide className="thumb-img-box">
                    <img src={item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .image-slider-section {
    width: 100%;
    background: white;

    .image-slider-main-img {
      overflow: hidden;

      img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
        object-position: center;
        display: block;
      }
    }

    .image-slider-main-thumb {
      margin: 2rem 0;
      .mySwiper-thumb {
        .thumb-img-box {
          width: 100px;
          height: 100px;
          background: red;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
`;

export default ProductItemDetailsImageSlider;
