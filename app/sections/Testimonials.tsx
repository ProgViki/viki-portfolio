"use client";

import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";

export default function Testimonials() {
  return (
    <Swiper autoplay>
      <SwiperSlide>
        Excellent architect and
        technical leader.
      </SwiperSlide>

      <SwiperSlide>
        Delivered beyond
        expectations.
      </SwiperSlide>
    </Swiper>
  );
}