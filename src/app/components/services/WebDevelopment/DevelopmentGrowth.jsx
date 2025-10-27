import React from "react";
import Image from "next/image";

export default function DevelopmentGrowth() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Title & Subtitle */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            How Web Development Services Drive Business Growth
          </h1>
          <p className="text-lg text-gray-600 mt-3">
            Build Powerful, Scalable, and High-Performing Websites for Your Brand
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left side text */}
          <div className="space-y-5">
            <p className="text-gray-700 leading-relaxed">
              Affordable web development services empower businesses of all sizes
              to build a strong online presence that operates 24/7. From startups
              to medium-sized enterprises to large organizations, a professional
              web development company helps you design, develop, and optimize
              websites that effectively showcase your products and services to
              your target audience — anytime, anywhere.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Partnering with a skilled web development agency is one of the best
              ways to strengthen your brand, improve customer engagement, and
              increase conversions. With a well-designed, fast, and user-friendly
              website, your business will always stay accessible to your
              customers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our web development experts use modern frameworks, SEO practices,
              and responsive design to ensure your website performs beautifully
              across all devices and platforms — helping you stay competitive in
              the digital world.
            </p>
          </div>

          {/* Right side image */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/Benefits.jpg" 
              alt="Web Development Growth"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
