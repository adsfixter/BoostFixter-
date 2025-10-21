"use client"

import React from "react"
import { motion, useAnimation } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const companies = [
  { logo: "/logos/google.png", url: "https://www.google.com" },
  { logo: "/logos/meta.png", url: "https://www.meta.com" },
  { logo: "/logos/microsoft.png", url: "https://www.microsoft.com" },
  { logo: "/logos/amazon.png", url: "https://www.amazon.com" },
  { logo: "/logos/apple.png", url: "https://www.apple.com" },
  { logo: "/logos/netflix.png", url: "https://www.netflix.com" },
  { logo: "/logos/adobe.png", url: "https://www.adobe.com" },
  { logo: "/logos/spotify.png", url: "https://www.spotify.com" },
  { logo: "/logos/airbnb.png", url: "https://www.airbnb.com" },
  { logo: "/logos/samsung.png", url: "https://www.samsung.com" },
]

export default function Spotlight() {
  const controls = useAnimation()

  // Scroll animation control
  const handlePrev = () => controls.start({ x: "+=200", transition: { duration: 0.5 } })
  const handleNext = () => controls.start({ x: "-=200", transition: { duration: 0.5 } })

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto ">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-10 text-gray-900">
          In the{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-[#29554A]">Spotlight</span>
            <span className="absolute left-0 bottom-1 w-full h-2 bg-[#29554A]/30 rounded-sm z-0"></span>
          </span>
        </h1>

        {/* Slider Container */}
        <div className="relative flex items-center justify-center overflow-hidden">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 bg-gray-100 hover:bg-gray-200 p-3 rounded-full shadow-md z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          {/* Motion Row */}
          <motion.div
            animate={{
              x: ["0%", "-50%"], // move from left to right infinitely
            }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex gap-12 min-w-max"
          >
            {[...companies, ...companies].map((company, i) => (
              <a
                key={i}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <img
                  src={company.logo}
                  alt={`Logo ${i}`}
                  className="h-20 sm:h-24 object-contain hover:scale-110 transition-transform duration-300"
                />
              </a>
            ))}
          </motion.div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 bg-gray-100 hover:bg-gray-200 p-3 rounded-full shadow-md z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  )
}
