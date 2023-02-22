import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import sliders from "../api/categories.json";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import Categories from "./Categories";
const Slider = () => {
  const [data] = useState(sliders);

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={5}
    >
      {data.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <Categories slide={slide} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
