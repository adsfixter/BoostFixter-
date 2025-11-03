"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function AboutPage() {
  const images = [
    "/about/farhan.png",
    "/about/farhan.png",
    "/about/farhan.png",
    "/about/farhan.png",
    "/about/farhan.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds (loop)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Get 5 visible images: 2 left, center, 2 right
  const getVisibleImages = () => {
    return [
      images[(currentIndex - 2 + images.length) % images.length], // far left
      images[(currentIndex - 1 + images.length) % images.length], // left
      images[currentIndex], // center
      images[(currentIndex + 1) % images.length], // right
      images[(currentIndex + 2) % images.length], // far right
    ];
  };

  const visibleImages = getVisibleImages();

  return (
    <section className="flex flex-col items-center justify-center w-full p-4 max-w-7xl bg-gradient-to-b from-white to-gray-50">
      <div className="w-full text-center ">
        {/* Title */}
        <h2 className="mb-4 text-4xl font-bold text-green-900 sm:text-5xl">
          Behind the Magic
        </h2>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto mb-12 text-gray-600">
          We revolutionize digital strategies with cutting-edge, future-ready
          solutions — enabling businesses to expand in the dynamic world of
          marketing technology.
        </p>

        {/* Carousel */}
        <div className="flex items-center justify-center gap-4 px-4 transition-all duration-700">
          {/* Far Left */}
          <div className="transition-all duration-700 scale-75 border opacity-40">
            <Image
              src={visibleImages[0]}
              alt="far left"
              width={300}
              height={220}
              className="object-cover h-56 shadow-md w-75 rounded-xl"
            />
          </div>

          {/* Left */}
          <div className="transition-all duration-700 scale-90 opacity-60">
            <Image
              src={visibleImages[3]}
              alt="right"
              width={350}
              height={320}
              className="object-cover shadow-lg h-80 w-92 rounded-xl"
            />
          </div>

          {/* Center (highlighted) */}
          <div className="transition-all duration-700 scale-110 shadow-2xl ring-1 rounded-xl brightness-130">
            <Image
              src={visibleImages[2]}
              alt="center"
              width={400}
              height={320}
              className="object-cover w-100 h-80 rounded-xl"
            />
          </div>

          {/* Right */}
          <div className="transition-all duration-700 scale-90 border opacity-60">
            <Image
              src={visibleImages[3]}
              alt="right"
              width={350}
              height={320}
              className="object-cover shadow-lg h-80 w-92 rounded-xl"
            />
          </div>

          {/* Far Right */}
          <div className="transition-all duration-700 scale-75 opacity-40">
            <Image
              src={visibleImages[0]}
              alt="far left"
              width={300}
              height={220}
              className="object-cover h-56 shadow-md w-75 rounded-xl"
            />
          </div>
        </div>

        {/* Slide Counter (optional) */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Slide {currentIndex + 1} of {images.length}
          </p>
        </div>
      </div>
    </section>
  );
}
