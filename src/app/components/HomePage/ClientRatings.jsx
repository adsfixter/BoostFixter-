"use client";

import React from "react";

const ratings = [
  {
    id: 1,
    image: "/ClientRatings/trustpilot.png",
    link: "https://example.com/service1",
  },
  {
    id: 2,
    image: "/ClientRatings/Facebook.png",
    link: "https://example.com/service2",
  },
  {
    id: 3,
    image: "/ClientRatings/goodfirm.png",
    link: "https://example.com/service3",
  },
  {
    id: 4,
    image: "/ClientRatings/clutch.png",
    link: "https://example.com/service4",
  },
  {
    id: 5,
    image: "/ClientRatings/designrush.png",
    link: "https://example.com/service5",
  },
];

export default function ClientRatings() {
  return (
    <section className="px-4 my-10 pb-10 pt-10 bg-[#F8F8F8]">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="mb-4 text-3xl font-extrabold leading-snug text-primary sm:text-3xl md:text-4xl lg:text-5xl">
          Ratings Showcase
        </h2>

        {/* Rating Logos */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {ratings.map((rating) => (
            <a
              key={rating.id}
              href={rating.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 transition-transform duration-300 bg-white rounded-2xl hover:scale-105"
            >
              <img
                src={rating.image}
                alt={`Client Rating ${rating.id}`}
                className="object-contain w-full h-12 sm:h-14 md:h-16 lg:h-20"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
