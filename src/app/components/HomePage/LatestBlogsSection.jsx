"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const blogs = [
  {
    author: "Md Millon Hossen",
    authorRole: "Founder & CEO",
    date: "October 10, 2024",
    title: "Optimize Title Tags and Meta Descriptions for Success",
    image: "/blog/blog1.png",
  },
  {
    author: "Omor Faruk",
    authorRole: "Web Developer",
    date: "October 14, 2024",
    title: "Minimum Lovable Product From Planning to Execution",
    image: "/blog/blog2.png",
  },
  {
    author: "Shaharior Islam",
    authorRole: "UI/UX Designer",
    date: "October 16, 2024",
    title: "UX Metrics What You Should Measure and Why",
    image: "/blog/blog3.png",
  },
];

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

export default function LatestBlog() {
  return (
    <section className="px-4 py-16 bg-white md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-semibold leading-tight text-green-900">
            See Our <br /> Latest Blog
          </h2>
          <Link
            href="/blog"
            className="text-sm font-medium text-green-900 underline transition hover:text-green-700"
          >
            See All Blog Posts →
          </Link>
        </div>

        {/* Blog Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {blogs.map((blog, idx) => (
            <motion.div
              key={idx}
              className="overflow-hidden transition bg-gray-100 shadow-md cursor-pointer rounded-xl hover:shadow-lg"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              {/* Blog Image */}
              <div className="relative w-full h-48">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={idx === 0}
                />
              </div>

              {/* Blog Info */}
              <div className="p-6">
                {/* Author Info */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative w-10 h-10 overflow-hidden bg-gray-300 rounded-full">
                    <Image
                      src={blog.image}
                      alt={blog.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">
                      {blog.author}
                    </div>
                    <div className="text-xs text-gray-500">{blog.authorRole}</div>
                  </div>
                </div>

                {/* Date */}
                <div className="mb-2 text-xs text-gray-500">{blog.date}</div>

                {/* Title */}
                <div className="text-lg font-medium text-gray-900 transition hover:text-green-700">
                  {blog.title}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
