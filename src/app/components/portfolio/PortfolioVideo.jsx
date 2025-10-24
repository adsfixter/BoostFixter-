"use client"
import React from "react"
import Image from "next/image"

const portfolios = [
  {
    id: 1,
    title: "Digital Marketing Strategy",
    description:
      "Grow your business with data-driven digital marketing campaigns tailored for success.",
    image: "/portfolio/Untitled-2.jpg",
    view: "View All",
  },
  {
    id: 2,
    title: "Web Development Solutions",
    description:
      "We build high-performance, scalable websites and web apps using the latest technologies.",
    image: "/portfolio/Untitled-2.jpg",
    view: "View All",
  },
  {
    id: 3,
    title: "Creative Graphic Design",
    description:
      "Our design team crafts stunning visuals that define your brand identity and attract attention.",
    image: "/portfolio/Untitled-2.jpg",
    view: "View All",
  },
  {
    id: 4,
    title: "SEO Optimization Service",
    description:
      "Boost your search engine rankings and organic traffic with proven SEO strategies.",
    image: "/portfolio/Untitled-2.jpg",
    view: "View All",
  },
  {
    id: 5,
    title: "Social Media Management",
    description:
      "Engage your audience and build a strong online presence across all major platforms.",
    image: "/portfolio/Untitled-2.jpg",
    view: "View All",
  },
  {
    id: 6,
    title: "Content Creation Studio",
    description:
      "Professional content creation for blogs, ads, and videos to keep your brand voice consistent.",
    image: "/portfolio/Untitled-2.jpg",
    view: "View All",
  },
]

export default function PortfolioVideo() {
  return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-20 px-8 bg-[#F9FAFC]">
          {portfolios.map((portfolio) => (
            <div
              key={portfolio.id}
              className="relative group overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative w-full h-80">
                <Image
                  src={portfolio.image}
                  alt={portfolio.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-2xl font-semibold mb-2">
                  {portfolio.title}
                </h3>
                <p className="text-sm max-w-xs mb-4">{portfolio.description}</p>
                <span className="text-blue-400 font-medium hover:text-blue-300 transition-colors">
                  {portfolio.view}
                </span>
              </div>
            </div>
          ))}
        </div>
  )
}
