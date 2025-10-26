import React from 'react';
import Image from 'next/image';

export default function WorkSpeaks() {
  return (
    <div className="py-20 px-6 bg-white text-gray-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Left side: Title + Description */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
              Our Work Speaks For Itself
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl">
              Discover how our innovative solutions have helped clients achieve
              success. From boosting online presence to driving conversions, our
              work is a testament to our dedication and expertise.
            </p>
          </div>

          {/* Right side: Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/Benefits.jpg" 
                alt="Our Work Speaks"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
