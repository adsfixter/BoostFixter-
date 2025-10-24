"use client";

import React, { useState, useRef } from "react";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showButton, setShowButton] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const containerRef = useRef(null);
  const iframeRef = useRef(null);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setShowButton(!isClicked);

      if (!isPlaying) {
        setIsPlaying(true);
      }
    }
  };

  const handleMouseLeave = () => {
    setShowButton(false);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();

    setIsClicked(!isClicked);
    setIsMuted(!isMuted);

    if (iframeRef.current) {
      const currentSrc = iframeRef.current.src;
      const baseUrl = currentSrc.split("?")[0];

      if (isMuted) {
        // 🔊 Sound চালু
        iframeRef.current.src = `${baseUrl}?autoplay=1`;
      } else {
        // 🔇 Mute করা
        iframeRef.current.src = `${baseUrl}?autoplay=1&mute=1`;
      }
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full  overflow-hidden h-[calc(100vh-8rem)] aspect-video cursor-pointer group"
    >
      {/* 🎬 YouTube Iframe */}
      <iframe
        ref={iframeRef}
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/B24YW4bcojQ?autoplay=1&mute=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />

      {/* 🟢 Floating Button */}
      {showButton && !isClicked && (
        <button
          onClick={handleButtonClick}
          style={{
            position: "absolute",
            left: `${mousePos.x}px`,
            top: `${mousePos.y + 10}px`,
            transform: "translate(-50%, 0)",
          }}
          className="z-10 flex items-center justify-center px-4 py-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200 pointer-events-auto font-semibold text-black"
        >
          Play
        </button>
      )}

      {isClicked && (
        <button
          onClick={handleButtonClick}
          style={{
            position: "absolute",
            left: `${mousePos.x}px`,
            top: `${mousePos.y + 10}px`,
            transform: "translate(-50%, 0)",
          }}
          className="z-10 flex items-center justify-center px-4 py-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200 pointer-events-auto font-semibold text-black"
        >
          Close
        </button>
      )}
    </div>
  );
}
