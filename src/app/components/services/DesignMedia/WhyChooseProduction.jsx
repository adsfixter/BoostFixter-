"use client";

import { Camera, Palette, Users, BookOpen, Calendar, BarChart3 } from "lucide-react";
import CustomLink from "../../Share/CustomLink";

export default function WhyChooseProduction() {
  const features = [
    {
      icon: <Camera className="h-6 w-6 text-[#2b4b7c]" />,
      title: "First Impressions Matter",
      desc: "Media production creates a visually appealing and professional image for your brand. A polished and credible image sets the stage for positive perceptions, influencing how your audience perceives your brand from the outset.",
      bg: "bg-[#eaf0ff]",
    },
    {
      icon: <Palette className="h-6 w-6 text-[#2b7c78]" />,
      title: "Build Brand Recognition",
      desc: "From your logo to the overall aesthetics of your content, professional media production companies ensure your brand remains easily identifiable. This continuity contributes to brand recall, keeping your business top-of-mind.",
      bg: "bg-[#e7f6f7]",
    },
    {
      icon: <Users className="h-6 w-6 text-[#3e7b70]" />,
      title: "Engage and Retain the Audience’s Attention",
      desc: "Video production for social media and other platforms employs cinematic and editing techniques that captivate viewers while seamlessly communicating key messages. This overcomes limited attention spans and increases audience engagement.",
      bg: "bg-[#e6f5f0]",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-[#7d8538]" />,
      title: "Customer Education and Trust",
      desc: "Educational content, such as tutorials and product demonstrations, builds trust and confidence in your brand. When your audience perceives your business as a reliable source of information, they are more likely to convert into loyal customers.",
      bg: "bg-[#f0f5e8]",
    },
    {
      icon: <Calendar className="h-6 w-6 text-[#478c67]" />,
      title: "Event Promotion",
      desc: "Digital and social media production build anticipation and awareness for your upcoming conferences, product launches, and other events. Engaging media content attracts more participants and extends the reach of your events.",
      bg: "bg-[#e7f5ec]",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-[#b75f2c]" />,
      title: "Analytics and Data Visualization",
      desc: "Data visualizations and video production for social media and other platforms make it simpler for your audience to understand and interpret information, enhancing your communication strategy and contributing to better decision-making.",
      bg: "bg-[#fff1e8]",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#3b342b] text-center">
          Why Choose Thrive for Your Digital Media Production
        </h2>
        <p className="text-secondary mt-2 text-lg font-medium text-center">
          Proven Track Record of Creative Excellence
        </p>
        <p className="text-gray-600 mt-6">
          Thrive Internet Marketing Agency is one of the leading media production companies in the U.S. dedicated to conveying your unique brand story through stunning visuals and compelling narratives that leave a lasting impact.
        </p>
        <p className="text-gray-600 mt-6">
          Discover why clients choose our award-winning media production agency:
        </p>

        {/* Feature Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} p-6 rounded-xl text-left shadow-sm hover:shadow-md transition`}
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white/70 rounded-full shadow-sm">{item.icon}</div>
                <h3 className="text-lg font-semibold text-[#3a332a]">{item.title}</h3>
              </div>
              <p className="text-gray-600 mt-3 text-lg leading-relaxed">{item.desc}</p>
            </div>
          ))}
              </div>
              <div className="mt-8 flex justify-center">
                  <CustomLink text={"Bring My Vision To Life"}></CustomLink>
              </div>
      </div>
    </section>
  );
}
