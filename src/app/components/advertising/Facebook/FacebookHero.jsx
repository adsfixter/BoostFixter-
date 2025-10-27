"use client";

import { Globe } from "lucide-react";

export default function FacebookHero() {
  return (
    <section className="w-full py-20 text-center bg-gradient-to-b from-white to-[#f9faef]">
      <div className="max-w-3xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#2e2b27]">
          Media Production Services
        </h2>
        <p className="text-secondary mt-3 text-lg">
          End-to-End Execution From Concept to Delivery
        </p>

        {/* Input + Button Box */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 bg-[#f7f8ef] p-3 rounded-xl shadow-sm">
          {/* Input field */}
          <div className="relative w-full sm:w-2/3">
            <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Enter Website Address"
              className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#647a3a] transition"
            />
          </div>

          {/* Button */}
          <button
            type="button"
            className=" bg-secondary hover:bg-primary font-semibold px-3 py-3 rounded-lg transition-all duration-200"
          >
            GET MY FREE PROPOSAL
          </button>
        </div>
      </div>
    </section>
  );
}
