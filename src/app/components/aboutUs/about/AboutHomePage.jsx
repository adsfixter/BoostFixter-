"use client";
import React from "react";
import Marquee from "react-fast-marquee";

export default function AboutHomePage() {
  const images = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1522204501871-3c8c66d6b92c?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=400&q=80",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* Title */}
        <h2 className="lg:text-5xl text-2xl font-extrabold text-accent mb-4">
          Behind the Magic
        </h2>

        {/* Description */}
        <p className="text-[#676E72] text-2xl font-medium mb-10 max-w-2xl mx-auto">
          We revolutionize digital strategies with cutting-edge, future-ready
          enabling businesses to expand in the dynamic world of marketing
          technology.
        </p>

        {/* Image Scrolling Section */}
        <Marquee
          direction="right"
          speed={40}
          pauseOnHover={true}
          gradient={false}
        >
          {images.map((img, index) => (
            <div key={index} className="mx-4">
              <img
                src={img}
                alt={`about-${index}`}
                className="w-64 h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
