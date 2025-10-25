"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./CaseStudiesIndustries.css";

export default function CaseStudiesIndustries() {
  return (
    <div className="py-20 px-6 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-10">
          Diverse{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Case Studies </span>
            <span className="absolute left-0 bottom-2 w-76 h-3 bg-secondary rounded z-0"></span>
            <span>Across Industries</span>
          </span>
        </h1>

        {/* Image Card */}
        <div className="image-card relative group w-full max-w-lg overflow-hidden rounded-xl">
          {/* Animated Border */}
          <span className="animated-border absolute top-0 left-0 w-full h-full pointer-events-none"></span>

          {/* Image */}
          <Link href="#">
            <Image
              src="/CaseStudy/case-study.jpg"
              alt="Case Study"
              width={600}
              height={400}
              className="transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </Link>

          {/* Overlay Text */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-center">
            <p className="text-white text-lg sm:text-xl font-semibold px-6">
              Transforming Dr. Sayedul Haque Jewel’s Online Presence with
              BoostFixter LLC
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
