import Image from "next/image";
import Link from "next/link";
import React from "react";


const ratings = [
  {
    id: 1,
    image: "/ClientRatings/trustpilot-review-mono.png",
    link: "https://example.com/service1",
  },
  {
    id: 2,
    image: "/ClientRatings/sortlist.png",
    link: "https://example.com/service2",
  },
  {
    id: 3,
    image: "/ClientRatings/facebook-review-mono.png",
    link: "https://example.com/service3",
  },
  {
    id: 4,
    image: "/ClientRatings/GoodFirms.png",
    link: "https://example.com/service4",
  },
  {
    id: 5,
    image: "/ClientRatings/DesignRush.png",
    link: "https://example.com/service5",
  },
  {
    id: 6,
    image: "/ClientRatings/clutch-review.png",
    link: "https://example.com/service6",
  },
];

export default function AwardSection() {
  return (
    <section className="px-6 py-20 bg-gray-50 md:px-12 md:py-32">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex gap-4 sm:flex-2">
          {ratings.map((rating) => (
            <a
              key={rating.id}
              href={rating.link}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <img
                src={rating.image}
                alt={`Client Rating ${rating.id}`}
                className=""
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
