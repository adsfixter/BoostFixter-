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
    <section className="bg-gray-50 py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-2xl lg:text-5xl font-bold text-accent mb-16">
          Explore Client <br /> Ratings Showcase
        </h1>

       <div className="flex flex-wrap justify-center md:justify-between items-center gap-6">
  {ratings.map((rating) => (
    <a
      key={rating.id}
      href={rating.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-[120px] sm:w-[150px] h-[60px]"
    >
      <img
        src={rating.image}
        alt={`Client Rating ${rating.id}`}
        className="object-contain w-full h-full transition-transform duration-300 hover:scale-105"
      />
    </a>
  ))}
</div>
      </div>
    </section>
  );
}
