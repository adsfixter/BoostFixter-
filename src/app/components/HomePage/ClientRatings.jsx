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
    <section className="bg-gray-50 px-6 py-40">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-5xl font-bold text-accent mb-16">
          Explore Client <br /> Ratings Showcase
        </h1>

        <div className="flex justify-between items-center gap-4">
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
                className=" w-full h-[50px]"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
