import React from "react";

export default function ProductionProcess() {
  const steps = [
    {
      number: 1,
      title: "Discovery and Planning",
      description:
        "We start by learning about your industry, brand, audience, goals and key messages. This phase informs a tailored social media video production plan.",
      color: "bg-blue-600",
    },
    {
      number: 2,
      title: "Pre-Production",
      description:
        "Our team handles logistics like scheduling, shot lists, storyboards, scriptwriting and more to set up an organized, efficient video production.",
      color: "bg-orange-500",
    },
    {
      number: 3,
      title: "Media Production",
      description:
        "Equipped with state-of-the-art technology, our experienced video production social media team brings your ideas to life.",
      color: "bg-yellow-400",
    },
    {
      number: 4,
      title: "Post-Production",
      description:
        "This phase involves meticulous editing, color correction, sound design and the integration of necessary visual effects to communicate your message effectively.",
      color: "bg-green-600",
    },
  ];

  return (
    <section  className="py-20 px-6 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Thrive's Multimedia Production Process
          </h2>
          <p className="text-lg text-gray-500">The Difference Is in the Details</p>
        </div>

        {/* Intro Text */}
        <p className=" text-gray-700 mb-12 ">
          At Thrive, we believe that excellence lies in the details. Our multimedia production process is meticulously
          designed to ensure every aspect of your project is carried out to exacting standards.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Gradient Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-yellow-400 to-green-600 md:left-12" />

          {/* Steps */}
          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative pl-32 md:pl-40">
                {/* Circle Badge */}
                <div
                  className={`absolute left-0 md:left-4 top-0 w-16 h-16 md:w-20 md:h-20 rounded-full ${step.color} flex items-center justify-center text-white font-bold text-sm md:text-base shadow-lg`}
                >
                  <div className="text-center">
                    <div className="text-xs md:text-sm font-semibold">STEP</div>
                    <div className="text-xl md:text-2xl font-bold">{step.number}</div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
