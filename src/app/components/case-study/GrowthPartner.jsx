"use client";
import React from "react";
import lottiefile from "../../../../public/lottie/about-us.json";
import Lottie from "lottie-react";

export default function GrowthPartner() {
  return (
    <section className="py-20 px-6 bg-white text-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
              What it's like to work with a growth partner?
            </h2>
            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              “Unlock the Power of Your Online Presence with Our Digital Marketing Services! 
              Our expert team leverages cutting-edge strategies to boost your brand visibility, 
              drive targeted traffic, and maximize conversions. From SEO and social media management 
              to content creation and analytics, we tailor our services to elevate your digital footprint 
              and propel your business to new heights. Elevate your online game with our comprehensive 
              digital marketing solutions – where success meets strategy.”
            </p>
          </div>

          {/* Right side animation */}
          <div className="w-full max-w-md mx-auto md:mx-0">
            <Lottie 
              animationData={lottiefile} 
              loop={true} 
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
