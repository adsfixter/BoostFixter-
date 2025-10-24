"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ConsultancyForm() {
  const [step, setStep] = useState(1);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="relative overflow-hidden">
          <Image
            src="/Consultancy.png"
            alt="Consultancy Meeting"
            width={800}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Form */}
        <div className="">
         {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
          Book a Free{" "}
          <span className="relative inline-block">
            <span className="relative z-10 ">Consultancy</span>
            <span className="absolute left-0 bottom-4 w-full h-3 bg-secondary z-0"></span>
          </span>
        </h1>

          {/* Step Indicators */}
          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className={`text-center ${step === s ? "text-blue-600" : "text-gray-400"}`}>
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full border${
                    step === s ? "border-blue-600 bg-secondary" : "border-blue-600"
                  }`}
                >
                  {s}
                </div>
                <p className="text-sm mt-1 font-medium">
                  {s === 1
                    ? "Personal Info"
                    : s === 2
                    ? "Contact Info"
                    : "Message"}
                </p>
              </div>
            ))}
          </div>

          {/* Step 1 Form */}
          {step === 1 && (
            <div className="space-y-4">
              <input
                placeholder="Name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <input
                placeholder="Company Name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <input
                placeholder="Designation"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <button
                onClick={() => setStep(2)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center"
              >
                Next <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          )}

          {/* Step 2 Form */}
          {step === 2 && (
            <div className="space-y-4">
              <input
                placeholder="Email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <input
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <button
                onClick={() => setStep(3)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center"
              >
                Next <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          )}

          {/* Step 3 Form */}
          {step === 3 && (
            <div className="space-y-4">
              <textarea
                placeholder="Your Message"
                className="w-full min-h-[120px] border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
