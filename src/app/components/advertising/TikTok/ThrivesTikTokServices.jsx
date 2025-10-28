"use client";
import {
  BarChart3,
  Users,
  Wrench,
  Eye,
  ShoppingCart,
  Layout,
  Video,
  Target,
  TestTube2,
} from "lucide-react";
import CustomLink from "../../Share/CustomLink";

export default function ThrivesTikTokServices() {
  const services = [
    {
      id: 1,
      title: "Data Analysis",
      description:
        "Our Facebook ad management agency analyzes your historical performance data, competitor strategies and industry benchmarks to identify opportunities and challenges. We use this information to develop data-driven strategies and ensure every dollar is spent wisely.",
      icon: BarChart3,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      id: 2,
      title: "Audience Targeting",
      description:
        "Target people based on location, interests, age, gender and behavior. Our Facebook advertising firm leverages advanced targeting tools to create custom audiences, lookalike audiences and behavioral segments that align with your ideal customer profile.",
      icon: Users,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      id: 3,
      title: "Ad Design and Creative Strategy",
      description:
        "Capture attention and drive action with scroll-stopping ads. From eye-catching visuals to action-oriented content, our FB advertising agency's experienced designers and creative strategists craft visually stunning ads that support your campaign objectives and resonate with your audience.",
      icon: Wrench,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      id: 4,
      title: "Ad Campaign Monitoring",
      description:
        "Our Facebook ad agency monitors your ads closely, tracking key performance indicators and making real-time adjustments to optimize results. We provide detailed campaign reports so you stay on top of your ad performance and the steps we're taking to improve it.",
      icon: Eye,
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      id: 5,
      title: "Ad Copywriting",
      description:
        "Our experienced copywriters craft compelling messaging that speaks directly to your audience's pain points and desires. Each ad copy our Facebook ad management agency creates is tested and optimized to maximize engagement and conversion rates.",
      icon: ShoppingCart,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      id: 6,
      title: "Landing Page Creation",
      description:
        "Maximize your return on ad spend (ROAS) with conversion-focused landing pages. Our Facebook ad agency creates mobile-optimized, fast-loading landing pages that feature compelling headlines, clear value propositions and strong calls-to-action (CTA).",
      icon: Layout,
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      id: 7,
      title: "Video Production and Photography",
      description:
        "From product showcases to brand stories, our Facebook advertising firm produces compelling visual content that drives engagement and conversions. Every content is optimized for Facebook's various ad placements and formatted to maximize impact across devices.",
      icon: Video,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      id: 8,
      title: "Retargeting",
      description:
        "Don't let potential customers slip away. Our Facebook marketing agency creates custom audience segments based on previous interactions with your website, social media or ads to deliver highly relevant messages that bring prospects back to complete their journey.",
      icon: Target,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      id: 9,
      title: "A/B Testing",
      description:
        "Our Facebook ad company tests multiple variations of your ads, from ad creative and copy to audience targeting and placement options. This data-driven approach ensures your campaigns deliver more profitable results.",
      icon: TestTube2,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
  ];

  return (
    <section className="w-full py-16 px-6 md:px-8 lg:px-12 bg-white text-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Thrive's Facebook Advertising Services
          </h1>
          <p className="text-lg text-gray-600">
            Transform Clicks Into Customers
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`${service.bgColor} rounded-lg p-6 transition-transform hover:scale-105 duration-300 shadow-sm`}
              >
                {/* Icon */}
                <div className="mb-4">
                  <Icon
                    className={`${service.iconColor} w-8 h-8`}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-800">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-10">
          <CustomLink text={"Talk To An Expert"}></CustomLink>
        </div>
      </div>
    </section>
  );
}
