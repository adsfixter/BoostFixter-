"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ArrowLeft, ChevronRight, ChevronLeft } from "lucide-react";
import CustomButton from "../Share/CustomButton";

const blogPosts = [
  {
    id: 1,
    image: "/blog/blogs/blog1.png",
    authorImage: "/About/milon.png",
    authorName: "Md Milon Hossen",
    authorRole: "Founder & CEO",
    date: "October 10, 2024",
    title: "Optimize Title Tags and Meta Descriptions for Success",
    category: "Digital Marketing",
  },
  {
    id: 2,
    image: "/blog/blogs/blog2.png",
    authorImage: "/About/Shaharior-Islam.png",
    authorName: "Shaharior Islam",
    authorRole: "UI/UX Designer",
    date: "October 16, 2024",
    title: "UX Metrics: What You Should Measure and Why",
    category: "Design",
  },
  {
    id: 3,
    image: "/blog/blogs/blog3.png",
    authorImage: "/About/Md-Omar-Faruk.png",
    authorName: "Omor Faruk",
    authorRole: "Web Developer",
    date: "October 16, 2024",
    title: "Minimum Lovable Product: From Planning to Execution",
    category: "Web Development",
  },
  {
    id: 4,
    image: "/blog/blogs/blog4.png",
    authorImage: "/About/Md-Mosaraf-Hosen.png",
    authorName: "Md.Mosaraf Hossen",
    authorRole: "Web Developer",
    date: "October 14, 2024",
    title: "React Performance Optimization Techniques",
    category: "Web Development",
  },
  {
    id: 5,
    image: "/blog/blogs/blog5.png",
    authorImage: "/About/milon.png",
    authorName: "Md Milon Hossen",
    authorRole: "Founder & CEO",
    date: "October 10, 2024",
    title: "Boost Your Brand Visibility with SEO",
    category: "Digital Marketing",
  },
  {
    id: 6,
    image: "/blog/blogs/blog6.png",
    authorImage: "/About/Shaharior-Islam.png",
    authorName: "Shaharior Islam",
    authorRole: "UI/UX Designer",
    date: "October 16, 2024",
    title: "Design Thinking: A Complete Guide for Beginners",
    category: "Design",
  },
  {
    id: 7,
    image: "/blog/blogs/blog7.png",
    authorImage: "/About/Md-Mosaraf-Hosen.png",
    authorName: "Alex Martinez",
    authorRole: "Security Analyst",
    date: "October 12, 2024",
    title: "Essential Cybersecurity Practices for Modern Businesses",
    category: "Cyber Security",
  },
  {
    id: 8,
    image: "/blog/blogs/blog8.png",
    authorImage: "/About/Md-Mosaraf-Hosen.png",
    authorName: "Sarah Johnson",
    authorRole: "Marketing Director",
    date: "October 15, 2024",
    title: "Social Media Marketing Strategies That Actually Work",
    category: "Digital Marketing",
  },
  {
    id: 9,
    image: "/blog/blogs/blog9.png",
    authorImage: "/About/Md-Omar-Faruk.png",
    authorName: "Omor Faruk",
    authorRole: "Full Stack Developer",
    date: "October 18, 2024",
    title: "Mastering RESTful API Design with Node.js",
    category: "Web Development",
  },
  {
    id: 10,
    image: "/blog/blogs/blog10.png",
    authorImage: "/About/Md-Mosaraf-Hosen.png",
    authorName: "Alex Martinez",
    authorRole: "Security Analyst",
    date: "October 18, 2024",
    title: "How to Protect Your Business from Cyber Threats",
    category: "Cyber Security",
  },
  {
    id: 11,
    image: "/blog/blogs/blog11.png",
    authorImage: "/About/milon.png",
    authorName: "Md Milon Hossen",
    authorRole: "Founder & CEO",
    date: "October 20, 2024",
    title: "Content Marketing: The Key to Digital Growth",
    category: "Digital Marketing",
  },
  {
    id: 12,
    image: "/blog/blogs/blog12.png",
    authorImage: "/About/Shaharior-Islam.png",
    authorName: "Shaharior Islam",
    authorRole: "UI/UX Designer",
    date: "October 21, 2024",
    title: "The Psychology Behind Great UI Design",
    category: "Design",
  },
  {
    id: 13,
    image: "/blog/blogs/blog13.png",
    authorImage: "/About/Md-Omar-Faruk.png",
    authorName: "Omor Faruk",
    authorRole: "Web Developer",
    date: "October 22, 2024",
    title: "Building Scalable Web Apps with React and Next.js",
    category: "Web Development",
  },
  {
    id: 14,
    image: "/blog/blogs/blog14.png",
    authorImage: "/About/Md-Mosaraf-Hosen.png",
    authorName: "Md.Mosaraf Hossen",
    authorRole: "Web Developer",
    date: "October 23, 2024",
    title: "Understanding Database Indexing in MongoDB",
    category: "Web Development",
  },
  {
    id: 15,
    image: "/blog/blogs/blog15.png",
    authorImage: "/About/milon.png",
    authorName: "Md Milon Hossen",
    authorRole: "Founder & CEO",
    date: "October 24, 2024",
    title: "Google Ads vs Facebook Ads: Which One is Better?",
    category: "Digital Marketing",
  },
  {
    id: 16,
    image: "/blog/blogs/blog16.png",
    authorImage: "/About/Shaharior-Islam.png",
    authorName: "Shaharior Islam",
    authorRole: "UI/UX Designer",
    date: "October 25, 2024",
    title: "Typography Tips Every Designer Should Know",
    category: "Design",
  },
  {
    id: 17,
    image: "/blog/blogs/blog1.png",
    authorImage: "/About/Md-Omar-Faruk.png",
    authorName: "Omor Faruk",
    authorRole: "Web Developer",
    date: "October 26, 2024",
    title: "Mastering Async/Await in JavaScript",
    category: "Web Development",
  },
  {
    id: 18,
    image: "/blog/blogs/blog8.png",
    authorImage: "/About/Md-Mosaraf-Hosen.png",
    authorName: "Alex Martinez",
    authorRole: "Security Analyst",
    date: "October 27, 2024",
    title: "Understanding Phishing Attacks and How to Avoid Them",
    category: "Cyber Security",
  },
  {
    id: 19,
    image: "/blog/blogs/blog9.png",
    authorImage: "/About/Md-Mosaraf-Hosen.png",
    authorName: "Sarah Johnson",
    authorRole: "Marketing Director",
    date: "October 28, 2024",
    title: "Email Marketing Best Practices for Higher Conversions",
    category: "Digital Marketing",
  },
  {
    id: 20,
    image: "/blog/blogs/blog2.png",
    authorImage: "/About/Md-Mosaraf-Hosen.png",
    authorName: "Md.Mosaraf Hossen",
    authorRole: "Web Developer",
    date: "October 29, 2024",
    title: "Deploying Your Next.js App on Vercel: A Step-by-Step Guide",
    category: "Web Development",
  },
];

const cardVariants = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.2, duration: 0.8 },
  },
};

const CATEGORIES = [
  "All",
  "Digital Marketing",
  "Design",
  "Web Development",
  "Cyber Security",
];
const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter by category
  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  // Pagination calculations
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  // Handle page changes
  function goToNextPage() {
    setCurrentPage((page) => Math.min(page + 1, totalPages));
  }

  function goToPreviousPage() {
    setCurrentPage((page) => Math.max(page - 1, 1));
  }

  // Reset page when category changes
  function onCategoryChange(category) {
    setSelectedCategory(category);
    setCurrentPage(1); // reset pagination to first page
  }

  return (
    <div className="">
      <main className="container px-4 py-16 mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="pb-4 title">The BoostFixer Blog</h1>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`rounded-full px-4 py-2 border font-semibold flex items-center gap-1 ${
                  selectedCategory === category
                    ? "bg-[#02644F] text-[#E7FF23]"
                    : "border-primary text-primary"
                }`}
                type="button"
              >
                {category === "All" ? "Latest Blog" : category}
                <ArrowRight
                  className="w-6 h-6 "
                  style={{ transform: "rotate(-40deg)" }}
                />
              </button>
            ))}
          </div>
        </div>
        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedPosts.map((post) => (
            <motion.div
              key={post.id}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="px-4 py-6 overflow-hidden transition-shadow duration-300 rounded-4xl group hover:shadow-lg"
            >
              {/* Blog Image */}
              <div className="relative w-full h-56 overflow-hidden rounded-xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Blog Info */}
              <div className="mt-6 text-left">
                {/* Author Info */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-12 h-12 overflow-hidden rounded-full">
                    <Image
                      src={post.authorImage}
                      alt={post.authorName}
                      fill
                      className="object-cover "
                    />
                  </div>
                  <div>
                    <h4 className="subtitle">
                      {post.authorName}
                    </h4>
                    <p className="text-xs text-gray-500">{post.authorRole}</p>
                  </div>
                </div>

                {/* Date */}
                <p className="mb-2 text-xs text-gray-400">{post.date}</p>

                {/* Title */}
                <h3 className="description">
                  {post.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Pagination Buttons */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`rounded-full px-4 py-2 border font-semibold flex items-center gap-1 ${
              currentPage === 1
                ? " text-primary cursor-not-allowed border-primary"
                : "bg-[#02644F] text-[#E7FF23] border-[#02644F] hover:bg-[#035e43] transition-colors"
            }`}
          >
            <ChevronLeft
              className="w-6 h-6"
              style={{ transform: "rotate(0deg)" }}
            />
            Previous
          </button>

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`rounded-full px-4 py-2 border font-semibold flex items-center gap-1 ${
              currentPage === totalPages
                ? " text-primary cursor-not-allowed border-primary"
                : "bg-[#02644F] text-[#E7FF23] border-[#02644F] hover:bg-[#035e43] transition-colors"
            }`}
          >
            Next
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-muted-foreground">
              No blog posts found in this category.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
