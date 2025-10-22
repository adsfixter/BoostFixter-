"use client"

import Image from "next/image"
import dynamic from "next/dynamic"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const Slider = dynamic(() => import("react-slick"), { ssr: false })
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// Slider images
const images = [
  "/hero/web-slider-image-min.png",
  "/hero/web-slider-image-min.png",
  "/hero/web-slider-image-min.png",
]

const smallLinks = [
  { src: "/hero/download.jpeg", alt: "Small 1", url: "https://example.com/link1" },
  { src: "/hero/download.jpeg", alt: "Small 2", url: "https://example.com/link2" },
  { src: "/hero/download.jpeg", alt: "Small 3", url: "https://example.com/link3" },
]

export function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
    cssEase: "linear",
  }

  return (
    <section className="relative py-10 md:py-20 overflow-hidden bg-white text-black">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6 z-10">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              “Your Strategic Digital{" "}
              <span className="text-[#0f766e]">partner for ultimate success.</span>
            </h1>

            <p className="text-base md:text-lg text-secondary leading-relaxed">
              Welcome to IMBD Agency — one of the leading Digital Marketing agencies in Bangladesh. 
              With our innovative strategies and results-oriented approach, we help businesses thrive 
              in the digital world. Partner with us to achieve measurable results and drive your growth.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row sm:justify-start sm:items-center gap-4 pt-4 w-full">
              <Link
                href="#_"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition w-full sm:w-auto"
              >
                Book Free Consultation <ArrowRight size={20} />
              </Link>

              <Link
                href="#_"
                className="relative inline-flex items-center justify-center px-6 py-3 font-bold bg-white text-black rounded-md group overflow-hidden"
              >
                {/* Top-left small horizontal border */}
                <span className="absolute top-0 left-0 w-4 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                {/* Bottom-right small horizontal border */}
                <span className="absolute bottom-0 right-0 w-4 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full group-hover:right-0"></span>
                {/* Full border on hover */}
                <span className="absolute inset-0 border-2 border-transparent rounded-md transition-all duration-300 pointer-events-none group-hover:border-red-500"></span>
                {/* Content */}
                <span className="relative flex items-center gap-2">
                  Working Scope With You <ArrowRight size={20} />
                </span>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="w-1/3 md:w-1/4 text-center">
                <p className="text-2xl font-bold text-[#0f766e]">500+</p>
                <p className="text-sm text-gray-600">Projects Completed</p>
              </div>
              <div className="w-1/3 md:w-1/4 text-center">
                <p className="text-2xl font-bold text-[#0f766e]">98%</p>
                <p className="text-sm text-gray-600">Client Satisfaction</p>
              </div>
              <div className="w-1/3 md:w-1/4 text-center">
                <p className="text-2xl font-bold text-[#0f766e]">10+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full">
            {/* Slider */}
            <div className="overflow-hidden rounded-2xl w-full h-[500px] border md:h-[600px]">
              <Slider {...settings} className="w-full h-full">
                {images.map((src, i) => (
                  <div key={i} className="flex items-center justify-center h-full">
                    <Image
                      src={src}            
                      alt={`Slide ${i + 1}`}
                      width={800}
                      height={600}
                      className="rounded-2xl object-cover w-full h-full"
                    />
                  </div>
                ))}
              </Slider>
            </div>

            {/* Small clickable links under slider */}
            <div className="flex justify-center w-[300px] gap-4 mt-4">
              {smallLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-lg hover:shadow-lg transition"
                >
                  <Image
                    src={link.src}        
                    alt={link.alt}
                    width={0}
                    height={0}
                    className="object-cover w-full h-full"
                  />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
