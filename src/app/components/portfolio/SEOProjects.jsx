"use client";
import React from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    image: "/portfolio/website.jpg",
    client: "TechNova Solutions",
    No_of_Keyword: 120,
    Success_Rate: "96%",
    url: "https://technova.com",
  },
  {
    id: 2,
    image: "/portfolio/website.jpg",
    client: "GreenLeaf Marketing",
    No_of_Keyword: 85,
    Success_Rate: "91%",
    url: "https://greenleafmarketing.com",
  },
  {
    id: 3,
    image: "/portfolio/website.jpg",
    client: "UrbanCart E-commerce",
    No_of_Keyword: 150,
    Success_Rate: "98%",
    url: "https://urbancart.com",
  },
  {
    id: 4,
    image: "/portfolio/website.jpg",
    client: "FinCore Analytics",
    No_of_Keyword: 100,
    Success_Rate: "93%",
    url: "https://fincoreanalytics.com",
  },
  {
    id: 5,
    image: "/portfolio/website.jpg",
    client: "EduSphere Academy",
    No_of_Keyword: 75,
    Success_Rate: "89%",
    url: "https://edusphereacademy.com",
  },
  {
    id: 6,
    image: "/portfolio/website.jpg",
    client: "Voyage Travels",
    No_of_Keyword: 140,
    Success_Rate: "95%",
    url: "https://voyagetravels.com",
  },
];

export default function SEOProjects() {
  return (
    <section className="py-20 px-6 bg-white text-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-12 text-center">
          Some of our{" "}
          <span className="relative inline-block">
            <span className="relative z-10">SEO Projects</span>
            <span className="absolute left-0 bottom-2 w-full h-3 bg-secondary z-0"></span>
          </span>
        </h1>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50  overflow-hidden group transition-all duration-300"
            >
              {/* Image */} <div className="relative w-full h-60 overflow-hidden"> <Image src={project.image} alt={project.client} fill className="object-cover transition-transform duration-500 group-hover:scale-110" /> </div>
              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold">{project.client}</h3>
                <div className="flex justify-between text-sm text-gray-600">
                  <p>
                    <span className="font-semibold text-gray-800">
                      Keywords:
                    </span>{" "}
                    {project.No_of_Keyword}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-800">
                      Success:
                    </span>{" "}
                    {project.Success_Rate}
                  </p>
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Visit Site →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
