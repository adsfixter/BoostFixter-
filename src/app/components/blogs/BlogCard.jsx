import React from "react";

export default function BlogCard({ blog }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition hover:shadow-xl group space-y-3">
      {/* Image */}
      <div className="overflow-hidden h-56">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:translate-y-[-10px]"
        />
      </div>

      {/* Title */}
      <div className="px-4 py-3 flex flex-col justify-between">
        <h2 className="text-lg font-semibold mb-2 line-clamp-1">
          {blog.title}
        </h2>
        <hr className="border-gray-300 mb-2" />
        <div className="flex justify-between text-sm text-gray-500">
          <span>{blog.date}</span>
          <span>{blog.comments} Comments</span>
        </div>
      </div>
    </div>
  );
}
