"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function AboutHomePage() {
  const images = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1522204501871-3c8c66d6b92c?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80",
  ];

  // 🔹 Scale values - এখানে update করলে image size পরিবর্তন হবে
  const sideScale = 0.9;   // পাশের images ছোট
  const activeScale = 1.4; // মাঝের image বড়

  // 🔹 Slide gap - মাঝের image বড় হলেও gap সবসময় থাকবে
  const spaceBetween = 10; // চাইলে adjust করতে পারো

  return (
    <section className="py-20 overflow-hidden">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h2 className="text-3xl font-semibold mb-4 text-gray-900">
          Behind the Magic
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-[70%] mx-auto mb-10">
          We revolutionize digital strategies with cutting-edge, future-ready
          enabling businesses to expand in the dynamic world of marketing
          technology.
        </p>

        {/* Swiper Section */}
        <Swiper
          modules={[Autoplay]}
             slidesPerView={5} 
          spaceBetween={spaceBetween}      // 🔹 Slide gap
          
          loop={true}
          speed={6000}                     // 🔹 Scroll speed
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          centeredSlides={true}            // 🔹 Center slide active
          className="mySwiper"
        >
          {images.concat(images).map((img, index) => (
            <SwiperSlide
              key={index}
              className="!w-64 !h-64 flex justify-center items-center overflow-visible transition-all duration-500" // 🔹 overflow-visible রাখলে gap hide হবে না
            >
              <img
                src={img}
                alt={`slide-${index}`}
                className="object-cover w-full h-full rounded-2xl shadow-lg transition-transform duration-500 ease-in-out"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .mySwiper .swiper-wrapper {
          transition-timing-function: linear !important; /* 🔹 Smooth continuous scroll */
        }

        /* Side images */
        .mySwiper .swiper-slide {
          transform: scale(${sideScale});  /* 🔹 Side image size */
          opacity: 0.6;                     /* 🔹 Side image transparency */
          transition: all 0.4s ease-in-out; /* 🔹 Animation smoothness */
        }

        /* Center image */
        .mySwiper .swiper-slide-active {
          transform: scale(${activeScale}); /* 🔹 Center image size */
          opacity: 1;                        /* 🔹 Center image transparency */
          z-index: 10;                       /* 🔹 Center image front */
        }
      `}</style>
    </section>
  );
}
