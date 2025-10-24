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
];

export default function PortfolioHomePage() {
  return (
    <section>
      <section>
        <div className="flex flex-col items-center justify-center bg-white">
          <h1 className="text-4xl font-semibold text-center text-transparent md:text-6xl bg-clip-text bg-gradient-to-r from-red-400/70 to-red-600/90">
            Where Creativity
          </h1>
          <h2 className="mt-4 text-6xl font-bold text-center text-transparent md:text-8xl bg-clip-text bg-gradient-to-r from-red-300/60 to-red-700/100">
            Meets Results
          </h2>
        </div>
      </section>

      <section className="px-6 py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          

          <div className="relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              spaceBetween={20}
              slidesPerView={4}
              slidesPerGroup={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              speed={800}
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
                      className="object-contain w-full h-full transition-transform duration-300 hover:scale-110"
                    />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>

            <button className="absolute left-0 z-10 p-3 -translate-y-1/2 bg-gray-100 rounded-full shadow-md swiper-button-prev top-1/2 hover:bg-gray-200">
              &lt;
            </button>
            <button className="absolute right-0 z-10 p-3 -translate-y-1/2 bg-gray-100 rounded-full shadow-md swiper-button-next top-1/2 hover:bg-gray-200">
              &gt;
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
