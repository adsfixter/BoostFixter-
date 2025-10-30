"use client";

import "./AnimatedButton.css";

function AnimatedButton({ text = "Get Started", onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`relative px-8 py-3 font-semibold text-white rounded-full overflow-hidden group transition-all duration-300 ${className} animated-button`}
    >
      {/* Animated Effects */}
      <div className="absolute inset-0 animated-button-shimmer" />
      <div className="absolute inset-0 animated-button-glow" />

      {/* Spark Particles */}
      <div
        className="absolute w-1 h-1 rounded-full animated-button-particle"
        style={{ left: "20%", top: "50%" }}
      />
      <div
        className="absolute w-1 h-1 rounded-full animated-button-particle"
        style={{ left: "40%", top: "30%" }}
      />
      <div
        className="absolute w-1 h-1 rounded-full animated-button-particle"
        style={{ left: "60%", top: "70%" }}
      />
      <div
        className="absolute w-1 h-1 rounded-full animated-button-particle"
        style={{ left: "80%", top: "40%" }}
      />

      {/* Button Text + Arrow */}
      <span className="relative z-10 flex items-center justify-center gap-2 animated-button-content">
        {text}
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </span>
    </button>
  );
}

export default AnimatedButton;
