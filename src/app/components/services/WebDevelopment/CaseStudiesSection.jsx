"use client";
import Image from "next/image";
import React from "react";

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      id: 1,
      image: "/Benefits.jpg",
      title: "Multiple-Location Orthodontic",
      description: "Conversion Rate Optimization (CRO)",
      text: "A full-service RV repair shop in Texas approached our WordPress website design company to improve its site design and structure and grow its online visibility. Within seven months of implementing the web designing services, we saw a 30% boost in the client’s conversion rate year-over-year (YoY).",
      metrics: [
        { value: "+226%", label: "Top 5 Keyword Rankings" },
        { value: "+122%", label: "Monthly Leads" },
      ],
    },
    {
      id: 2,
      image: "/Benefits.jpg",
      title: "Business Factors",
      description: "SEO and Pay-Per-Click (PPC) Marketing",
      text: "A full-service RV repair shop in Texas approached our WordPress website design company to improve its site design and structure and grow its online visibility. Within seven months of implementing the web designing services, we saw a 30% boost in the client’s conversion rate year-over-year (YoY).",
      metrics: [
        { value: "+546%", label: "Conversion Rate" },
        { value: "+11,400%", label: "Live Chat" },
      ],
    },
    {
      id: 3,
      image: "/Benefits.jpg",
      title: "Image 3D",
      description: "Amazon Advertising",
      text: "A full-service RV repair shop in Texas approached our WordPress website design company to improve its site design and structure and grow its online visibility. Within seven months of implementing the web designing services, we saw a 30% boost in the client’s conversion rate year-over-year (YoY).",
      metrics: [
        { value: "+350.26%", label: "Sales Volume" },
        { value: "+451%", label: "Unit Sales" },
      ],
    },
  ];

  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="flex flex-col overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white"
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Yellow Section */}
              <div className="bg-yellow-400 px-6 py-6">
                <h3 className="font-semibold text-center text-black text-xl mb-2">
                  {study.title}
                </h3>
                <p className="text-center text-base text-black/80">
                  {study.description}
                </p>
              </div>

              {/* Metrics Section */}
              <div className="flex items-center justify-center gap-8 px-6 py-6 bg-gray-100">
                {study.metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl font-bold text-gray-800 mb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-600 whitespace-nowrap">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Text Section */}
              <div className="px-6 py-6">
                <p className="text-base text-gray-700 leading-relaxed">{study.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Description */}
        <div className="text-center px-6 md:px-24">
          <p className="text-lg text-gray-700/80 leading-relaxed">
            Our digital marketing agency follows a systematic approach to ensure all our online marketing efforts deliver profitable results. Leverage Thrive's internet marketing services today and let us help you boost your customer acquisition and retention rates.
          </p>
        </div>
      </div>
    </section>
  );
}
