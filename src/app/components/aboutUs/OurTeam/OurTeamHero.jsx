"use client";
import React from "react";

export default function OurTeamHero() {
  const images = [
    "/About/Office.png",
    "/About/Image-03.png",
    "/About/Image-04.png",
    "/About/Image-01.png",
    "/About/Image-02.png",
  ];

  const centerIndex = Math.floor(images.length / 2);

  return (
    <section className="py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="title text-center mb-4">
          Thinkers of BoostFixter
        </h2>

        {/* Description */}
        <p className="mb-10 max-w-[70%] mx-auto text-center description">
         More than teammates, we’re friends who build ideas together with coffee, teamwork, and a shared vision that keeps us inspired every day.
        </p>

        {/* Image row */}
        <div className="flex justify-between items-center gap-3">
          {images.map((img, index) => {
            const distanceFromCenter = Math.abs(centerIndex - index);

            // Adjust height and opacity based on distance
            let sizeClass = "";
            if (distanceFromCenter === 0) {
              sizeClass = "w-76 h-80 opacity-100"; // center
            } else if (distanceFromCenter === 1) {
              sizeClass = "w-60 h-64 opacity-95"; // next to center
            } else {
              sizeClass = "w-44 h-48 opacity-90"; // far edges
            }

            return (
              <img
                key={index}
                src={img}
                alt={`image-${index}`}
                className={`rounded-lg transition-all duration-500 ${sizeClass}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
