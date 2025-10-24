"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Slider = dynamic(() => import("react-slick"), { ssr: false });
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomLink from "../Share/CustomLink";

// Slider images
const images = [
  "/hero/web-slider-image-min.png",
  "/hero/web-slider-image-min.png",
  "/hero/web-slider-image-min.png",
];

const smallLinks = [
  { src: "/hero/Basis.png", alt: "Small 1", url: "https://example.com/link1" },
  { src: "/hero/Eclub.png", alt: "Small 2", url: "https://example.com/link2" },
  { src: "/hero/ecol.png", alt: "Small 3", url: "https://example.com/link3" },
];

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
  };

  return (
    <section className="relative py-10 overflow-hidden text-black bg-white md:py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-white" />

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          {/* LEFT CONTENT */}
          <div className="z-10 space-y-6 m">
            <h1 className="text-3xl text-secondary font-bold leading-tight md:text-5xl lg:text-6xl">
              “Your Strategic Digital{" "}
              <span className="text-secondary">
                partner for ultimate success.
              </span>
            </h1>

            <p className="text-base leading-relaxed md:text-lg ">
              Welcome to IMBD Agency — one of the leading Digital Marketing
              agencies in Bangladesh. With our innovative strategies and
              results-oriented approach, we help businesses thrive in the
              digital world. Partner with us to achieve measurable results and
              drive your growth.
            </p>

            {/* Buttons */}
            <div className="flex flex-col w-full gap-4 pt-4 sm:flex-row sm:justify-start sm:items-center">
              <Link
                href="#_"
                className="flex items-center justify-center w-full gap-2 px-6 py-3 font-medium text-white transition bg-secondary rounded-xl sm:w-auto"
              >
                Book Free Consultation <ArrowRight size={20} />
              </Link>

              <CustomLink text={" Working scope with you"}></CustomLink>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="w-1/3 text-center md:w-1/4">
                <p className="text-2xl font-bold text-[#0f766e]">500+</p>
                <p className="text-sm text-gray-600">Projects Completed</p>
              </div>
              <div className="w-1/3 text-center md:w-1/4">
                <p className="text-2xl font-bold text-[#0f766e]">98%</p>
                <p className="text-sm text-gray-600">Client Satisfaction</p>
              </div>
              <div className="w-1/3 text-center md:w-1/4">
                <p className="text-2xl font-bold text-[#0f766e]">10+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full">
            {/* Slider */}
            <div className="overflow-hidden rounded-2xl w-full h-[400px] md:h-[400px] mb-5 border">
              <Slider {...settings} className="w-full h-full">
                {images.map((src, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center h-full"
                  >
                    <Image
                      src={src}
                      alt={`Slide ${i + 1}`}
                      width={800}
                      height={600}
                      className="object-cover w-full h-full rounded-2xl"
                    />
                  </div>
                ))}
              </Slider>
            </div>

            {/* Small clickable links under slider */}
            <div className="flex justify-center items-center w-full h-full gap-4 mt-4">
              {smallLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden transition rounded-lg hover:shadow-lg"
                >
                  <Image
                    src={link.src}
                    alt={link.alt}
                    width={100}
                    height={100}
                    className=""
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
