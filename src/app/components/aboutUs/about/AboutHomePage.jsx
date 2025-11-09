"use client";
import Image from "next/image";
import React from "react";

export default function AboutHomePage() {
  return (
    <section className="py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="mb-4 text-center title">Behind the Magic</h2>

        {/* Description */}
        <p className="mb-10 max-w-[70%] mx-auto text-center description">
          We revolutionize digital strategies with cutting-edge, future-ready
          solutions enabling businesses to expand in the dynamic world of
          marketing technology.
        </p>

        {/* Image row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 items-center">
          {/* 1 image */}
          <div className="relative w-full h-48 sm:h-56 lg:h-52 overflow-hidden rounded-xl">
            <Image
              src="/About/Office.png"
              alt=""
              fill
              className="object-cover transition-transform duration-500 opacity-85 "
              quality={100}
              priority
            />
          </div>

          {/* 2 image */}
          <div className="relative w-full h-48 sm:h-56 lg:h-62 overflow-hidden rounded-xl">
            <Image
              src="/About/Image-03.png"
              alt=""
              fill
              className="object-cover transition-transform duration-500 opacity-90 "
              quality={100}
            />
          </div>

          {/* 3 image */}
          <div className="relative w-full h-56 sm:h-64 lg:h-72 overflow-hidden rounded-xl">
            <Image
              src="/About/Image-04.png"
              alt=""
              fill
              className="object-cover transition-transform duration-500 opacity-100 "
              quality={100}
            />
          </div>

          {/* 4 image */}
          <div className="relative w-full h-48 sm:h-56 lg:h-62 overflow-hidden rounded-xl">
            <Image
              src="/About/Image-01.png"
              alt=""
              fill
              className="object-cover transition-transform duration-500 opacity-90 "
              quality={100}
            />
          </div>

          {/* 5 image */}
          <div className="relative w-full h-48 sm:h-56 lg:h-52 overflow-hidden rounded-xl">
            <Image
              src="/About/Image-02.png"
              alt=""
              fill
              className="object-cover transition-transform duration-500 opacity-85"
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
