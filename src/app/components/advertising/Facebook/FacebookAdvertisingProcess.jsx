"use client";
import React from "react";
import CustomLink from "../../Share/CustomLink";

export default function FacebookAdvertisingProcess() {
  const steps = [
    {
      number: 1,
      title: "Create",
      color: "bg-blue-600",
      description:
        "Our Facebook ads agency begins by developing a conversion-focused ad strategy that aligns with your brand voice, budget and objectives. This involves creating unique, engaging ad creatives that resonate with your audience.",
    },
    {
      number: 2,
      title: "Promote",
      color: "bg-orange-500",
      description:
        "With your ad strategy and creatives in place, our Facebook ads marketing agency implements targeted promotion strategies. We leverage Facebook's advanced targeting capabilities to position your ads in front of the right audience at the right time.",
    },
    {
      number: 3,
      title: "Delight",
      color: "bg-yellow-400",
      description:
        "Our FB advertising agency goes beyond basic engagement to create memorable experiences that turn followers into advocates. Through personalized interactions, timely responses and value-added content, we help build your brand community.",
    },
  ];

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-12 bg-white text-gray-900">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Thrive&apos;s Facebook Advertising Process
          </h1>
          <p className="text-lg text-green-600 font-medium mb-6">
            Get More Followers and Engagement With Done-for-You Marketing
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our Facebook ads marketing agency has developed a streamlined yet
            effective process that{" "}
            <span className="font-semibold">
              transforms your Facebook presence from passive to proactive
            </span>
            .
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            This proven three-step process focuses on creating meaningful
            connections, promoting strategic content and delighting your target
            audience to achieve your goals.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-orange-500 to-yellow-400 md:left-1/2 md:-translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-16 relative z-10">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Circle Badge */}
                <div
                  className={`absolute left-0 top-0 w-16 h-16 rounded-full ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg md:left-1/2 md:-translate-x-1/2 -translate-y-2`}
                >
                  <div className="text-center leading-tight">
                    <div className="text-xs font-semibold">STEP</div>
                    <div className="text-2xl">{step.number}</div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`ml-24 md:ml-0 ${
                    index % 2 === 0
                      ? "md:mr-auto md:w-1/2 md:pr-12"
                      : "md:ml-auto md:w-1/2 md:pl-12"
                  }`}
                >
                  <div className="pt-2">
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 ${
                        step.number === 1
                          ? "bg-blue-100 text-blue-700"
                          : step.number === 2
                          ? "bg-orange-100 text-orange-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {step.title}
                    </div>
                    <p className="text-gray-800 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
              </div>
              <div className="flex justify-center mt-10">
                  <CustomLink text={"Schedule A Consultation"}></CustomLink>
              </div>
      </div>
    </section>
  );
}
