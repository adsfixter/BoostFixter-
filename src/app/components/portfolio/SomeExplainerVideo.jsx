"use client"
import React, { useState } from 'react'
import CustomLink from '../Share/CustomLink';
const videos = [
  { id: 1, url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 2, url: "https://www.youtube.com/embed/3JZ_D3ELwOQ" },
    { id: 3, url: "https://www.youtube.com/embed/L_jWHffIx5E" },
  { id: 4, url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 5, url: "https://www.youtube.com/embed/3JZ_D3ELwOQ" },
  { id: 6, url: "https://www.youtube.com/embed/L_jWHffIx5E" },
];

export default function SomeExplainerVideo() {
     const [openVideo, setOpenVideo] = useState(null);
  return (
      <div className="py-20 px-6 bg-[#F6F7F9]">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-center">
          Some Of Our Previous{" "}
          <span className="relative inline-block">
            <span className="relative z-10 ">Explainer Video</span>
            <span className="absolute left-0 bottom-4 w-full h-3 bg-secondary z-0"></span>
          </span>
              </h1>
              {/* Video Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              onClick={() => setOpenVideo(video.url)}
              className="cursor-pointer bg-gray-100 overflow-hidden shadow-md hover:shadow-xl transition-shadow "
            >
              <div className="relative pb-[56.25%] h-full w-full">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={video.url}
                  title='you tube video'
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
            </div>
          ))}
              </div>
              <div className='mt-8 flex justify-center'>
                  <CustomLink  text={"Explore More Explainer Videos"}></CustomLink>
              </div>
          </div>
          
    </div>
  )
}
