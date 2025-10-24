import React from 'react';

const images = [
  { id: 1, image: "/SuccessTogether/1.jpg" },
  { id: 2, image: "/SuccessTogether/2.jpg" },
  { id: 3, image: "/SuccessTogether/4.jpg" },
  { id: 4, image: "/SuccessTogether/10.jpg" },
  { id: 5, image: "/SuccessTogether/11.jpg" },
  { id: 6, image: "/SuccessTogether/13.jpg" },
  { id: 7, image: "/SuccessTogether/15.jpg" },
  { id: 8, image: "/SuccessTogether/16.jpg" },
  { id: 9, image: "/SuccessTogether/17.jpg" },
  { id: 10, image: "/SuccessTogether/ATN-logo.jpg" },
  { id: 11, image: "/SuccessTogether/bijoy-logo.jpg" },
  { id: 12, image: "/SuccessTogether/Borak-real-estate-logo.jpg" },
  { id: 13, image: "/SuccessTogether/DGLC.jpg" },
  { id: 14, image: "/SuccessTogether/Ena-logo.jpg" },
  { id: 15, image: "/SuccessTogether/Presidency-University-Logo.jpg" },
  { id: 16, image: "/SuccessTogether/Rahimafrooz-logo.jpg" },
  { id: 17, image: "/SuccessTogether/RM-Automobiles-Logo.jpg" },
  { id: 18, image: "/SuccessTogether/Surma-Logo.jpg" },
  { id: 19, image: "/SuccessTogether/tecsa-logo.jpg" },
  { id: 20, image: "/SuccessTogether/Unique-Logo.jpg" },
  { id: 21, image: "/SuccessTogether/RM-Automobiles-Logo.jpg" },
  { id: 22, image: "/SuccessTogether/Surma-Logo.jpg" },
  { id: 23, image: "/SuccessTogether/tecsa-logo.jpg" },
  { id: 24, image: "/SuccessTogether/Unique-Logo.jpg" },
  { id: 25, image: "/SuccessTogether/Unique-Logo.jpg" }
];

export default function MemoriesMoments() {
  return (
    <div className='py-20 px-6 bg-white'>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-12">
          Memories &{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Moments</span>
            <span className="absolute left-0 bottom-4 w-full h-3 bg-secondary z-0"></span>
          </span>
        </h1>

        {/* Images Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {images.map((img) => (
            <div key={img.id} className="overflow-hidden transform transition duration-300">
              <img
                src={img.image}
                alt={`Memory ${img.id}`}
                className="w-full h-40 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
