import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactHero() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Mobile",
      value: "01953-825344",
      description:
        "We answer by phone from Saturday to Thursday from 10:00 am until 6:00 pm.",
    },
    {
      icon: Mail,
      title: "Email",
      value: "boostfixter@gmail.com",
      description:
        "We will respond to your email within 8 hours on business days.",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Rafiq Place, Level 5C, Opp. BM College Mosque Gate, Barisal, Bangladesh",
      description:
        "Barisal, Barisal, Bangladesh.\nCome visit us from Saturday to Thursday from 10:00 am to 6:00 pm.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="title">
            How Can We Help?
          </h2>
          <p className="description max-w-xl mx-auto">
            Talk to one of our consultants today and learn how to start
            leveraging your business.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div
                key={index}
                className="p-8  bg-[#F8F8F8] rounded-lg"
              >
                {/* Icon */}
                <div className="mb-4">
                  <IconComponent className="w-8 h-8 text-green-700" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-normal text-[#676E72] mb-2">
                  {method.title}
                </h3>

                {/* Value/Contact Detail */}
                <p className="subtitle">
                  {method.value}
                </p>

                {/* Description */}
                <p className="description mt-4">
                  {method.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
