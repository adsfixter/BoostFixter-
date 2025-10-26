"use client";
import React from "react";

const ReviewsPlatform = ({ platform }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-2xl font-bold text-white">{platform.logo}</div>
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-2xl text-yellow-400">
            ★
          </span>
        ))}
      </div>
      <div className="text-sm font-bold text-yellow-400 tracking-wide">
        {platform.reviewCount} REVIEWS
      </div>
    </div>
  );
};

export default function Reviews() {
  const platforms = [
    {
      name: "Google",
      logo: "Google",
      rating: 5,
      reviewCount: "150+",
    },
    {
      name: "Clutch",
      logo: "Clutch",
      rating: 5,
      reviewCount: "50+",
    },
    {
      name: "UpCity",
      logo: "UpCity",
      rating: 5,
      reviewCount: "50+",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-green-700 to-green-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {platforms.map((platform) => (
            <ReviewsPlatform key={platform.name} platform={platform} />
          ))}
        </div>
      </div>
    </section>
  );
}
