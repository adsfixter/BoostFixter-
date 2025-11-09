"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "../../Share/CustomButton";

const squad = [
  {
    id: 4,
    image: "/About/Abdul-Kadir.png",
    image2: "/About/Abdul-Kadir-2.png",
    name: "AK Farhan",
    role: "Technical Support Officer",
  },
  {
    id: 5,
    image: "/About/Iran-Rana.png",
    image2: "/About/Iran-Rana-2.png",
    name: "Iran Rana",
    role: "Senior Marketing Executive",
  },
  {
    id: 6,
    image: "/About/Md-Jahed-Hossen.png",
    image2: "/About/Md-Jahed-Hossen-2.png",
    name: "Md Jahed Hossen",
    role: "Brand Strategist(Marketing)",
  },

  {
    id: 9,
    image: "/About/Miraz-Hossen.png",
    image2: "/About/Miraz-Hossen-2.png",
    name: "Miraz Hossen",
    role: "Marketing Executive",
  },
  {
    id: 10,
    image: "/About/Md-Hasnat-Nion.png",
    image2: "/About/Md-Hashat-Nion-2.png",
    name: "Md Hasnat Nion",
    role: "Marketing Executive",
  },

  {
    id: 12,
    image: "/About/Md-Limon-Howlader.png",
    image2: "/About/Md-Limon-Howlader-2.png",
    name: "Md Limon Howlader",
    role: "Marketing Executive",
  },
];

export default function OurAdsExperts() {
  return (
    <div className="pt-10 pb-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Top div */}
        <div className="flex items-center justify-between">
          <h1 className="title">Our Ads Experts</h1>
          <CustomButton text={"Meet The Team"} link={"#"} />
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {squad.map((member) => (
            <div key={member.id} className="flex flex-col mt-10 group">
              {/* Image wrapper with hover effect */}
              <div className="relative w-full h-[420px] overflow-hidden rounded-2xl">
                {/* Main image */}
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                />
                {/* Hover image */}
                {/* <Image
                  src={member.image2}
                  alt={member.name + " hover"}
                  fill
                  className="object-cover transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100"
                /> */}
              </div>

              <h1 className="mt-4 subtitle">{member.name}</h1>
              <h2 className="-mt-1.5 text-gray-500 font-semibold">
                {member.role}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
