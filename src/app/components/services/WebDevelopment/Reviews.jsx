"use client";
import React from "react";

const ReviewsPlatform = ({ platform }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* Logo / Name */}
      <div className="text-5xl font-bold text-white">{platform.logo}</div>

      {/* Rating Stars */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-2xl text-yellow-400">
            ★
          </span>
        ))}
      </div>

      {/* Review Count */}
      <div className="text-sm font-bold tracking-wide text-yellow-400">
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
    <section className="w-full px-4 py-12 bg-gradient-to-r from-[#556D26] to-[#556D26]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {platforms.map((platform) => (
            <ReviewsPlatform key={platform.name} platform={platform} />
          ))}
        </div>
      </div>
    </section>
  );
}
