"use client";

import React from "react";
import "./CustomButton.css"; // নিচে CSS কোড আছে

export default function CustomButton({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`
        custom-button relative px-8 py-4 bg-transparent text-white font-medium
        transition-all duration-300 hover:scale-105 border border-red-300
        ${className}
      `}
    >
      {/* কোণাগুলো */}
      <span className="corner top-right"></span>
      <span className="corner bottom-left"></span>

      {/* টেক্সট */}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
