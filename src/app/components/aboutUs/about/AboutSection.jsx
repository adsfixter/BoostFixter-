"use client";

import { useState } from "react";
import { Play } from "lucide-react";

export default function AboutSection() {
  const [isVideoFullscreen, setIsVideoFullscreen] = useState(false);

  const handleVideoClick = (e) => {
    e.stopPropagation();
    setIsVideoFullscreen(true);
  };

  const handleOverlayClick = () => {
    setIsVideoFullscreen(false);
  };

  return (
    <>
      <section className="container px-4 py-16 mx-auto lg:py-24">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              We're All About Relationships and Results
            </h1>

            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                Established in 2005, Thrive is committed to helping{" "}
                <span className="font-semibold text-[#6B7C3E]">
                  businesses across industries
                </span>{" "}
                augment their marketing efforts and gain a competitive edge
                through comprehensive digital marketing solutions.
              </p>

              <p>
                What started as a one-man shop has blossomed into a full-service
                digital marketing agency that serves thousands of companies
                worldwide. Today, we have{" "}
                <span className="font-semibold text-gray-900">
                  thousands of active clients
                </span>{" "}
                from the United States, Canada, and the U.K., among others, who
                have entrusted their digital success to our team. We work with
                businesses of all sizes – from startups to large franchises – in
                most industries and niches.
              </p>

              <p>
                As we grow, we continue to improve our processes and invest in
                state-of-the-art tools and resources to provide our digital
                marketing partners with top-notch services.
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-4 md:flex-row md:gap-6">
  {/* Primary Button */}
  <button className="px-8 py-3 text-white font-semibold bg-[#C17A3A] rounded-full hover:bg-[#A66830] transition-colors">
    OUR PORTFOLIO
  </button>

  {/* Outline Button */}
  <button className="px-8 py-3 font-semibold text-[#C17A3A] border-2 border-[#C17A3A] rounded-full hover:bg-[#C17A3A] hover:text-white transition-colors">
    CLIENT SUCCESS STORIES
  </button>
</div>

          </div>

          {/* Right Video */}
          <div className="relative">
            <div
              className="relative overflow-hidden rounded-lg shadow-xl cursor-pointer group"
              onClick={handleVideoClick}
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-27%20at%2012.58.00-7RztEsKGkBXPVzJE88AdYpGgOHgavu.png"
                alt="Team meeting video thumbnail"
                className="w-full h-auto"
              />

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center transition-colors bg-black/20 group-hover:bg-black/30">
                <div className="flex items-center justify-center w-20 h-20 transition-transform rounded-full bg-black/70 group-hover:scale-110">
                  <Play className="w-10 h-10 ml-1 text-white fill-white" />
                </div>
              </div>

              {/* Featured badge */}
              <div className="absolute bottom-4 left-4 bg-[#6B7C3E] text-white px-3 py-2 rounded">
                <div className="flex items-center gap-1 text-xs font-semibold">
                  FEATURED <span className="text-[10px]">✓</span>
                </div>
                <div className="text-sm font-bold">inc. 5000</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Video Modal (centered, half size) */}
      {isVideoFullscreen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
          onClick={handleOverlayClick}
        >
          <div
            className="relative w-1/2 h-1/2 max-w-xl max-h-[60vh] bg-black rounded-lg shadow-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              className="object-cover w-full h-full"
              controls
              autoPlay
              src="/your-video-url.mp4"
            >
              Your browser does not support the video tag.
            </video>

            {/* Close button */}
            <button
              onClick={handleOverlayClick}
              className="absolute text-3xl font-bold text-white top-2 right-2 hover:text-gray-300"
              aria-label="Close video"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
