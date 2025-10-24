import React from "react";
import ServicesCard from "./ServicesCard";
import CustomLink from "../Share/CustomLink";

const services = [
  {
    icon: "💻",
    name: "Digital Marketing",
    description:
      "Elevate your online presence with our strategic digital marketing solutions, merging proven tactics and the latest trends to navigate your brand toward substantial growth.",
  },
  {
    icon: "📱",
    name: "Social Media Management",
    description:
      "Manage and grow your social media presence with tailored strategies that increase engagement and reach.",
  },
  {
    icon: "🎨",
    name: "Graphic Design",
    description:
      "Create stunning visuals and branding materials that captivate your audience and elevate your brand identity.",
  },
  {
    icon: "⚡",
    name: "SEO Optimization",
    description:
      "Optimize your website to rank higher in search engines and attract targeted organic traffic consistently.",
  },
  {
    icon: "✍️",
    name: "Content Creation",
    description:
      "Deliver compelling content across platforms that educates, entertains, and converts your audience.",
  },
  {
    icon: "📊",
    name: "Analytics & Reporting",
    description:
      "Track and analyze performance metrics to ensure your campaigns are effective and ROI-focused.",
  },
];

function Services() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
          Our{" "}
          <span className="relative inline-block">
            <span className="relative z-10 ">Services</span>
            <span className="absolute left-0 bottom-4 w-full h-3 bg-secondary z-0"></span>
          </span>
        </h1>

        {/* Subtitle and Button */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
          <p className="text-gray-600 max-w-xl mb-4 sm:mb-0">
            Focused on results we seek to raise the level of our customers.
          </p>
          <CustomLink text={"VIEW ALL"}></CustomLink>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServicesCard
              key={index}
              index={index}
              service={service}
            ></ServicesCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
