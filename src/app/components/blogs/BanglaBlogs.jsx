import React from "react";
import BlogCard from "./BlogCard";
import Link from "next/link";

const blogs = [
  {
    image: "/blog1.jpg",
    date: "October 30, 2025",
    comments: 12,
    title: "Exploring the Mountains: A Journey to the Peaks",
  },
  {
    image: "/blog1.jpg",
    date: "October 30, 2025",
    comments: 8,
    title: "City Lights at Night: Urban Photography Tips",
  },
  {
    image: "/blog1.jpg",
    date: "October 30, 2025",
    comments: 15,
    title: "Sunset by the Sea: Capturing Golden Hour",
  },
  {
    image: "/blog1.jpg",
    date: "October 30, 2025",
    comments: 5,
    title: "Culinary Adventures: Recipes from Around the World",
  },
  {
    image: "/blog1.jpg",
    date: "October 30, 2025",
    comments: 20,
    title: "Tech Innovations: Emerging Gadgets in 2025",
  },
  {
    image: "/blog1.jpg",
    date: "October 30, 2025",
    comments: 9,
    title: "Mindfulness and Meditation: A Beginner's Guide",
  },
];

export default function BanglaBlogs() {
  return (
    <div className="py-20 px-6 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-10 text-center">
          <span className="relative z-100 inline-block">
            বাংলায়{" "}
            <span className="absolute left-0 bottom-4 w-full h-3 bg-secondary -z-2"></span>
          </span>
          <span className=""> ব্লগ পড়ুন</span>
        </h1>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog}></BlogCard>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <Link
            href="#"
            className="px-6 py-3 hover:bg-secondary hover:text-white font-semibold  transition-all duration-300 border-2 border-secondary mb-6"
          >
            Load More
          </Link>
        </div>
      </div>
    </div>
  );
}
