import React from 'react'
const blogs = [
  {
    "image": "https://example.com/image1.jpg",
    "title": "Exploring the Mountains",
    "date": "June 27, 2025"
  },
  {
    "image": "https://example.com/image2.jpg",
    "title": "City Lights at Night",
    "date": "June 27, 2025"
  },
  {
    "image": "https://example.com/image3.jpg",
    "title": "Sunset by the Beach",
    "date": "June 27, 2025"
  }
]


export default function LatestBlogsSection() {
  return (
    <div className='py-20 px-6 bg-white'>
       <div className="max-w-7xl mx-auto">
         {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-gray-900">
          Latest{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-[#29554A]">Blogs</span>
            <span className="absolute left-0 bottom-4 w-full h-2 bg-[#29554A]/30 rounded-sm z-0"></span>
          </span>
        </h1>
        {/* blogs */}
       </div>
    </div>
  )
}
