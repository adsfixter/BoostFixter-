import React from "react";
import Image from "next/image";
import CustomButton from "../Share/CustomButton";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: 1,
    name: "Digital Marketing",
    image: "/service/digital_marketing.png",
  },
  {
    id: 2,
    name: "Graphic Design",
    image: "/service/graphic_design.png",
  },
  {
    id: 3,
    name: "Social Media Management",
    image: "/service/social_media.png",
  },
  {
    id: 4,
    name: "Web Design & Development",
    image: "/service/web_desing.png",
  },
  {
    id: 5,
    name: "Cyber Security",
    image: "/service/cyber.png",
  },
  {
    id: 6,
    name: "Reporting & Analytics",
    image: "/HomePage/reporting.png",
  },
];

function Services() {
  return (
    <section className="px-6 bg-gray-50 py-40">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="flex justify-between items-center mb-16">
          <h1 className="text-primary text-3xl lg:text-5xl font-bold">
            Our Services
          </h1>
          <CustomButton text="See All Services" link="#" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#F8F8F8] p-6 rounded-4xl transition-shadow duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative w-full h-56">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
                />
              </div>

              {/* Text + Button */}
              <div className="mt-6 text-left">
                <h2 className="text-2xl font-medium text-primary mb-2">
                  {service.name}
                </h2>
                <Link
                  href="#"
                  className="text-primary flex items-center underline gap-1"
                >
                  Book a Call <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
