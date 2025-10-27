import React from "react";
import { Megaphone, Search, DollarSign, Globe, ThumbsUp, Star, ShoppingBag } from "lucide-react";

const services = [
  {
    icon: <Megaphone className="w-12 h-12" />,
    title: "Digital Marketing",
    description:
      "Gain complete control of your digital real estate with holistic online marketing services tailored to your brand",
  },
  {
    icon: <Search className="w-12 h-12" />,
    title: "Search Engine Optimization (SEO)",
    description:
      "Get white-hat SEO solutions that improve your organic search rankings and increase brand recognition.",
  },
  {
    icon: <DollarSign className="w-12 h-12" />,
    title: "Pay-Per-Click (PPC) Marketing",
    description:
      "Position your brand in front of the right people at the right time and platform with a targeted paid ads campaign.",
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: "Web Design and Development",
    description: "Improve your website accessibility and attract lifetime clients to your business.",
  },
  {
    icon: <ThumbsUp className="w-12 h-12" />,
    title: "Social Media Marketing",
    description:
      "Bring your brand closer to your target audience and gain better customer engagement with social media marketing.",
  },
  {
    icon: <Star className="w-12 h-12" />,
    title: "Online Reputation Management",
    description:
      "What does your reputation say about your brand? Build and maintain your desired brand image to attract more business.",
  },
  {
    icon: <ShoppingBag className="w-12 h-12" />,
    title: "eCommerce Marketing",
    description:
      "Facilitate a smooth buying process for your customers and reduce operational costs with strategic eCommerce marketing solutions.",
  },
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.5 17.5c-.3.8-.7 1.5-1.2 2.1-.5.6-1.1 1-1.8 1.3-.7.3-1.5.4-2.3.4-1.2 0-2.3-.3-3.2-.9-.9-.6-1.6-1.4-2.1-2.4-.5-1-.7-2.1-.7-3.3 0-1.2.2-2.3.7-3.3.5-1 1.2-1.8 2.1-2.4.9-.6 2-.9 3.2-.9.8 0 1.6.1 2.3.4.7.3 1.3.7 1.8 1.3.5.6.9 1.3 1.2 2.1l-2.8 1.1c-.2-.5-.5-.9-.9-1.2-.4-.3-.9-.4-1.5-.4-.6 0-1.1.1-1.5.4-.4.3-.7.7-.9 1.2-.2.5-.3 1.1-.3 1.7 0 .6.1 1.2.3 1.7.2.5.5.9.9 1.2.4.3.9.4 1.5.4.6 0 1.1-.1 1.5-.4.4-.3.7-.7.9-1.2l2.8 1.1zm7.8-3.8l-3.5 7.6h-3l1.5-3.2-3.3-7.4h3.2l1.7 4.2 1.7-4.2h3.2l-1.5 3z" />
      </svg>
    ),
    title: "Amazon Marketing",
    description:
      "We help you optimize your Amazon product listings and improve your pricing strategy to increase your Amazon sales.",
  },
]

export default function MarketingServices() {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center mb-6 text-[#6b7c3f]">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#6b7c3f] underline mb-4">{service.title}</h3>
              <p className="text-sm leading-relaxed text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
