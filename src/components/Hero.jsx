import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import sliders from "../api/slider.json";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Slider = () => {
  const [data] = useState(sliders);
  const imgwidth = "w-[100%] object-cover grayscale";
  const gridSettings = "flex justify-center p-6 flex-col";
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={1}
    >
      {data.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2">
              <div className={gridSettings} style={{ background: slide.imgBg }}>
                <img src={slide.image} className={`rounded-xl ${imgwidth}`} />
              </div>
              <div className={gridSettings} style={{ background: slide.bg }}>
                <div className="lg:w-[640px]">
                  <h2 className="text-[2rem] leading-10 font-bold">
                    {slide.title}
                  </h2>
                  <p className="text-xl mt-4">{slide.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
