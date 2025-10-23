"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

const companies = [
  { id: 1, image: "/SuccessTogether/1.jpg", url: "https://example.com/1" },
  { id: 2, image: "/SuccessTogether/2.jpg", url: "https://example.com/2" },
  { id: 3, image: "/SuccessTogether/4.jpg", url: "https://example.com/3" },
  { id: 4, image: "/SuccessTogether/10.jpg", url: "https://example.com/4" },
  { id: 5, image: "/SuccessTogether/11.jpg", url: "https://example.com/5" },
  { id: 6, image: "/SuccessTogether/13.jpg", url: "https://example.com/6" },
  { id: 7, image: "/SuccessTogether/15.jpg", url: "https://example.com/7" },
  { id: 8, image: "/SuccessTogether/16.jpg", url: "https://example.com/8" },
  { id: 9, image: "/SuccessTogether/17.jpg", url: "https://example.com/9" },
  { id: 10, image: "/SuccessTogether/ATN-logo.jpg", url: "https://example.com/10" },
  // ... বাকি কোম্পানি লিস্ট এখানে
];

export default function Spotlight() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
          In the{" "}
          <span className="relative inline-block">
            <span className="relative z-10 ">Spotlight</span>
            <span className="absolute left-0 bottom-4 w-full h-3 bg-secondary z-0"></span>
          </span>
        </h1>

        {/* Swiper */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={20}
            slidesPerView={4} // একসাথে 4 ছবি দেখাবে
            slidesPerGroup={1} // একে একে স্ক্রল হবে
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={800} // কত দ্রুত স্ক্রল হবে
            breakpoints={{
              320: { slidesPerView: 1, slidesPerGroup: 1 },
              640: { slidesPerView: 2, slidesPerGroup: 1 },
              1024: { slidesPerView: 4, slidesPerGroup: 1 },
            }}
          >
            {companies.map((company) => (
              <SwiperSlide key={company.id}>
                <a
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-[160px]"
                >
                  <Image
                    src={company.image}
                    alt={`Logo ${company.id}`}
                    width={600}
                    height={600}
                    className="object-contain h-full w-full hover:scale-110 transition-transform duration-300"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-100 hover:bg-gray-200 p-3 rounded-full shadow-md">
            &lt;
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-100 hover:bg-gray-200 p-3 rounded-full shadow-md">
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
