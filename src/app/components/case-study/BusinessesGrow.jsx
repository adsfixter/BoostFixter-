"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function BusinessesGrow() {
  return (
    <section className="bg-white text-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-16">
          See How Businesses{" "}
          <span className="relative inline-block">
            <span className="relative z-10 ">Grow With Us</span>
            <span className="absolute left-0 bottom-1 w-full h-2 bg-red-500 z-0 rounded"></span>
          </span>
        </h1>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col justify-between transition hover:shadow-md">
            <div>
              {/* toop div */}
              <div className="flex  justify-between">
                <button className="bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-medium mb-6">
                  Case Study
                </button>
                <Link href="#">
                  <Image
                    src="/CaseStudy/seok-white.png"
                    alt="SEOK Logo"
                    width={120}
                    height={40}
                    className="mb-8"
                  />
                </Link>
              </div>
              <div className="flex items-center gap-12 mb-8">
                <div>
                  <h2 className="text-4xl font-extrabold text-red-600">
                    +120%
                  </h2>
                  <p className="text-gray-600 text-sm">Booked Meetings</p>
                </div>
                <div>
                  <h2 className="text-4xl font-extrabold text-red-600">
                    $2.5K
                  </h2>
                  <p className="text-gray-600 text-sm">Average Deal Size</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                “Celebrating Client Success: Our Commitment to Your Triumph! At
                IMBD Agency Ltd, we take pride in the success stories of our
                clients. With a dedicated focus on understanding your unique
                goals, we collaborate to overcome challenges, implement tailored
                solutions, and achieve milestones together.”
              </p>
            </div>
            <div className="flex gap-3 mt-6 flex-wrap">
              <Link
                href="#"
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                VSMM
              </Link>
              <Link
                href="#"
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                Web Design & Development
              </Link>
              <Link
                href="#"
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                SEO
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-6">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col justify-between flex-1 transition hover:shadow-md">
              <div>
                {/* toop div */}
              <div className="flex  justify-between">
                <button className="bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-medium mb-6">
                  Case Study
                </button>
                <Link href="#">
                  <Image
                    src="/CaseStudy/Lucia-Belia.png"
                    alt="SEOK Logo"
                    width={120}
                    height={40}
                    className="mb-8"
                  />
                </Link>
              </div>
                <div className="flex items-center gap-12 mb-8">
                  <div>
                    <h2 className="text-4xl font-extrabold text-red-600">
                      45%
                    </h2>
                    <p className="text-gray-600 text-sm">Positive Replies</p>
                  </div>
                  <div>
                    <h2 className="text-4xl font-extrabold text-red-600">
                      50+
                    </h2>
                    <p className="text-gray-600 text-sm">Booked Meetings</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  “Lucia Belia’s Success Journey: Partner with us for
                  personalized solutions, steadfast support, and a track record
                  of client triumphs. Together, let’s achieve greatness!”
                </p>
              </div>
            </div>

            {/* Testimonial Box */}
            <div className="bg-gray-100 border border-gray-200 rounded-2xl p-6 flex items-center gap-4 shadow-sm transition hover:shadow-md">
              <Image
                src="/CaseStudy/casestudy.png"
                alt="Roxane Davis"
                width={60}
                height={60}
                className="rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-900">Roxane Davis</h3>
                <p className="text-sm text-gray-500 mb-2">CMO, Lucia Belia</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  “Working with IMBD Agency Ltd has been a game-changer for my
                  business. Their dedication, expertise, and personalized
                  solutions have catapulted our success. Grateful for the
                  impactful partnership!”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
