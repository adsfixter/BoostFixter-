import React from "react";
import Image from "next/image";
import CustomButton from "../Share/CustomButton";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: 1,
    name: "Digital Marketing",
    image: "/HomePage/digital_marketing.png",
  },
  {
    id: 2,
    name: "Graphic Design",
    image: "/HomePage/graphic_design.png",
  },
  {
    id: 3,
    name: "Social Media Management",
    image: "/HomePage/social_media.png",
  },
  {
    id: 4,
    name: "Web Design & Development",
    image: "/HomePage/web_desing.png",
  },
  {
    id: 5,
    name: "Cyber Security",
    image: "/HomePage/cyber.png",
  },
  {
    id: 6,
    name: "Reporting & Analytics",
    image: "/HomePage/reporting.png",
  },
];

function Services() {
  return (
    <section className="px-6 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-primary text-3xl lg:text-5xl font-extrabold">
            Our Services
          </h1>
          <div>
            <CustomButton text={"See All Services"} link={"#"} />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border-gray-200 duration-300 overflow-hidden group"
            >
              {/* Image full width */}
              <div className="relative w-full h-56">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform rounded-2xl duration-500"
                />
              </div>

              {/* Text + Button */}
              <div className=" mt-4 text-left">
                <h2 className="text-xl font-medium text-primary mb-2">
                  {service.name}
                </h2>
                <Link
                  href={"#"}
                className="text-primary flex underline"
                >More <ArrowUpRight /></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
