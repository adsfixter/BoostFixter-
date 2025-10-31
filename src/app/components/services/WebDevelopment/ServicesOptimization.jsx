import React from "react";

export default function ServicesOptimization() {
  return (
    <div className="py-20 px-6">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-center mb-4">
          Results-Driven Web Design Services
        </h1>
        <p className="text-center text-secondary mb-8">
          Web Optimization Solutions Designed For Growth
        </p>

        {/* Quote Section with Border */}
        <div className="relative border border-gray-300 p-8 rounded-md">
          {/* Top-left double quotation */}
          <span className="absolute -top-4 -left-4 text-6xl text-gray-300 font-bold select-none">
            ““
          </span>

          <p className="text-gray-700 leading-relaxed">
          "  Thrive has been wonderful to work with. There was a whole team
            behind getting my project done, and I got to be a part of it. There
            were no unpleasant surprises, and I was kept up to date through the
            entire project. I really couldn’t be much happier with how the site
            has turned out."
          </p>
        </div>
      </div>
    </div>
  );
}
