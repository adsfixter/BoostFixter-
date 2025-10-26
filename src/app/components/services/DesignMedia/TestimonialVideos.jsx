import React from 'react';
import CustomLink from '../../Share/CustomLink';

export default function TestimonialVideos() {
  return (
    <div className="py-20 px-6 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
          Be Inspired by Our Online Testimonial Videos
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg sm:text-xl mb-10 max-w-3xl mx-auto">
          At Thrive, every media production project is unique. Our commitment to creative excellence means we never compromise the quality of our work.
        </p>

        {/* YouTube Video */}
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg max-w-4xl mx-auto">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="Client Testimonial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
              </div>
              <div className='mt-5'>
                  <CustomLink text={"View Our Portfolio"}></CustomLink>
              </div>
      </div>
    </div>
  );
}
