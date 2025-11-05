"use client";

import React from "react";
import CustomButton from "../../Share/CustomButton";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const squad = [
  {
    id: 1,
    image: "/About/pookie.png",
    name: "Pookie",
    role: "Chef Happiness Officer",
  },
  {
    id: 2,
    image: "/About/milon.png",
    name: "Md Milon Hossin",
    role: "Founder & CEO",
  },
  {
    id: 3,
    image: "/About/uzzal.png",
    name: "Md Uzzal",
    role: "Finance & Accounts Manager",
  },
  {
    id: 4,
    image: "/About/Abdul-Kadir.png",
    name: "AK Farhan",
    role: "Technical Support Officer",
  },
  {
    id: 5,
    image: "/About/Iran-Rana.png",
    name: "Iran Rana",
    role: "Senior Marketing Executive",
  },
  {
    id: 6,
    image: "/About/Md-Jahed-Hossen.png",
    name: "Md Jahed Hossen",
    role: "Brand Strategist(Marketing)",
  },
  {
    id: 7,
    image: "/About/Md-Mosaraf-Hosen.png",
    name: "Md Mosaraf Hossen",
    role: "Web Developer",
  },
  {
    id: 8,
    image: "/About/Md-Shobuj-Hosen.png",
    name: "Md Shobuj Hossen",
    role: "Chef Technical Manager",
  },
  {
    id: 9,
    image: "/About/Miraz-Hossen.png",
    name: "Miraz Hossen",
    role: "Marketing Executive",
  },
];

export default function BoostfixterFamily() {
  return (
    <div className="py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* top div */}
        <div className="flex items-center justify-between">
          <h1 className="title">
            BoostFixter Squad
          </h1>
          <CustomButton text={"Meet The Team"} link={"#"} />
        </div>

        {/* content div with marquee */}
       
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {squad.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center mx-4 text-center"
            >
              <Image
                src={member.image}
                width={240}
                height={280}
                className="object-cover w-60 h-70 rounded-2xl"
                alt={member.name}
              />
              <h1 className="mt-4 text-2xl font-bold text-accent">
                {member.name}
              </h1>
              <h2 className="text-lg font-semibold text-gray-500">
                {member.role}
              </h2>
            </div>
          ))}
          </div>
       
      </div>
    </div>
  );
}
