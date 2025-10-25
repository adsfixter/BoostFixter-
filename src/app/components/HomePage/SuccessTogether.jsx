"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import ClickSwiperNavation from "../Share/ClickSwiperNavation";

const images = [
  { id: 1, image: "/SuccessTogether/1.jpg" },
  { id: 2, image: "/SuccessTogether/2.jpg" },
  { id: 3, image: "/SuccessTogether/4.jpg" },
  { id: 4, image: "/SuccessTogether/10.jpg" },
  { id: 5, image: "/SuccessTogether/11.jpg" },
  { id: 6, image: "/SuccessTogether/13.jpg" },
  { id: 7, image: "/SuccessTogether/15.jpg" },
  { id: 8, image: "/SuccessTogether/16.jpg" },
  { id: 9, image: "/SuccessTogether/17.jpg" },
  { id: 10, image: "/SuccessTogether/ATN-logo.jpg" },
  { id: 11, image: "/SuccessTogether/bijoy-logo.jpg" },
  { id: 12, image: "/SuccessTogether/Borak-real-estate-logo.jpg" },
  { id: 13, image: "/SuccessTogether/DGLC.jpg" },
  { id: 14, image: "/SuccessTogether/Ena-logo.jpg" },
  { id: 15, image: "/SuccessTogether/Presidency-University-Logo.jpg" },
  { id: 16, image: "/SuccessTogether/Rahimafrooz-logo.jpg" },
  { id: 17, image: "/SuccessTogether/RM-Automobiles-Logo.jpg" },
  { id: 18, image: "/SuccessTogether/Surma-Logo.jpg" },
  { id: 19, image: "/SuccessTogether/tecsa-logo.jpg" },
  { id: 20, image: "/SuccessTogether/Unique-Logo.jpg" },
  { id: 21, image: "/SuccessTogether/RM-Automobiles-Logo.jpg" },
  { id: 22, image: "/SuccessTogether/Surma-Logo.jpg" },
  { id: 23, image: "/SuccessTogether/tecsa-logo.jpg" },
  { id: 24, image: "/SuccessTogether/Unique-Logo.jpg" },
];

export default function SuccessTogether() {
  return (
    <div className="py-20 px-6 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-8">
          Innovating{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Success</span>
            <span className="absolute left-0 bottom-4 w-49 h-3 bg-secondary z-0"></span>
            <span>Together</span>
          </span>
        </h1>

        {/* top Swiper navation */}
        <ClickSwiperNavation></ClickSwiperNavation>
        {/* bottom loop */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={6}
          slidesPerGroup={6}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={3000}
          breakpoints={{
            320: { slidesPerView: 1, slidesPerGroup: 1 },
            640: { slidesPerView: 3, slidesPerGroup: 3 },
            1024: { slidesPerView: 6, slidesPerGroup: 6 },
          }}
        >
          {images.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex items-center justify-center h-[100px]">
                <Image
                  src={item.image}
                  alt={`Logo ${item.id}`}
                  width={600}
                  height={600}
                  className="object-contain h-full w-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
