import React from 'react'

const blogs = [
  {
    "image": "/blog1.jpg",
    "title": "Exploring the Mountains",
    "date": "June 27, 2025"
  },
  {
    "image": "/blog2.webp",
    "title": "City Lights at Night",
    "date": "June 27, 2025"
  },
  {
    "image": "/blog3.webp",
    "title": "Sunset by the Beach",
    "date": "June 27, 2025"
  }
]

export default function LatestBlogsSection() {
  return (
    <div className='py-20 px-6 bg-white'>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
         {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-10">
          Latest{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Blogs</span>
            <span className="absolute left-0 bottom-4 w-full h-3 bg-secondary z-0"></span>
          </span>
        </h1>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 h-[450px] sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.map((blog, idx) => (
            <div key={idx} className="group bg-[#5a4f4f] shadow-lg overflow-hidden flex flex-col">
              {/* Image */}
              <div className="overflow-hidden w-full h-64 sm:h-72 lg:h-80 relative">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Text directly under image */}
              <div className="px-4 py-2 ">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 line-clamp-2">
                  {blog.title}
                </h2>
                <p className="text-gray-500 text-sm">{blog.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
