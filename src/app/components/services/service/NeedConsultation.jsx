"use client";
import React from "react";
import CustomLink from "../../Share/CustomLink";

export default function NeedConsultation() {
  return (
    <div className="py-20 px-6 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 flex gap-5 items-center">
        <h1 className="text-2xl font-semibold mb-6 text-gray-900 ">
          Need consultation from experts?
        </h1>

        {/* button */}
        <div className="space-x-4">
          <button
            onClick={() => (window.location.href = "tel:+8801953825344")}
            className="px-6 py-3 hover:bg-secondary hover:text-white font-semibold  transition-all duration-300 border-2 border-secondary mb-6"
          >
            Call Now
          </button>
          <CustomLink text={"Message Now"}></CustomLink>
        </div>
      </div>
    </div>
  );
}
