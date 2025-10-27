"use client";
import Image from "next/image";
import React from "react";

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      id: 1,
      image: "/Benefits.jpg",
      title: "Multiple-Location Orthodontic ",
      description: "Conversion Rate Optimization (CRO)",
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
      metrics: [
        { value: "+350.26%", label: "Sales Volume" },
        { value: "+451%", label: "Unit Sales" },
      ],
    },
  ];

  return (
    <section  className="bg-gray-50 px-6 py-20 md:px-12 md:py-32">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="flex flex-col overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden bg-muted">
                <Image
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Yellow Section */}
              <div className="bg-yellow-400 px-6 py-6">
                <h3 className="font-semibold text-foreground text-center mb-2 text-balance">
                  {study.title}
                </h3>
                <p className="text-foreground text-center text-sm">
                  {study.description}
                </p>
              </div>

              {/* Metrics Section */}
              <div className="bg-muted/50 px-6 py-6 flex items-center justify-center gap-8 my-4">
                {study.metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-lg font-bold text-foreground mb-1">
                      {metric.value}
                    </div>
                    <div className="text-xs text-foreground/70 whitespace-nowrap">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Description Text */}
        <div className="">
          <p className="text-foreground/80 text-center">
            Our digital marketing agency follows a systematic approach to ensure all our online marketing
            efforts deliver profitable results. Leverage Thrive's internet marketing services today and
            let us help you boost your customer acquisition and retention rates.
          </p>
        </div>
      </div>
    </section>
  );
}
