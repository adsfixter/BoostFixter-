"use client";

import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "WHAT MAKES A MEDIA AND PRODUCTION COMPANY DIFFERENT FROM A GENERAL MARKETING AGENCY?",
    answer:
      "A media and production company focuses on creating visual and multimedia assets like videos, photography and animations. On the other hand, a general marketing agency handles broader tasks such as strategy, SEO and paid ads.",
  },
  {
    id: 2,
    question: "HOW DOES A DIGITAL MEDIA PRODUCTION COMPANY MEASURE ROI FOR VISUAL CONTENT?",
    answer:
      "Digital media production companies measure ROI through engagement metrics, conversion tracking, view-through rates, and brand lift studies. They analyze how visual content impacts customer behavior and sales performance.",
  },
  {
    id: 3,
    question: "HOW LONG DOES IT TAKE TO COMPLETE A WEB DESIGN FOR ECOMMERCE PROJECTS?",
    answer:
      "The timeline for ecommerce web design typically ranges from 4-12 weeks depending on complexity, number of products, custom features, and revision rounds. Simple projects may take 2-4 weeks while complex ones can extend beyond 12 weeks.",
  },
  {
    id: 4,
    question: "WHY ARE THE BEST MEDIA PRODUCTION COMPANIES KNOWN FOR STORYTELLING?",
    answer:
      "The best media production companies excel at storytelling because it creates emotional connections with audiences. Compelling narratives make content memorable, shareable, and more effective at driving engagement and brand loyalty.",
  },
  {
    id: 5,
    question: "WHAT DOES A DIGITAL CONTENT PRODUCTION AGENCY OFFER BEYOND JUST FILMING?",
    answer:
      "Beyond filming, digital content production agencies offer pre-production planning, scriptwriting, storyboarding, post-production editing, color grading, sound design, motion graphics, and distribution strategy.",
  },
  {
    id: 6,
    question: "CAN A FULL-SERVICE MEDIA PRODUCTION COMPANY HANDLE MULTIPLE PROJECTS AT ONCE?",
    answer:
      "Yes, full-service media production companies with adequate resources and team structure can handle multiple projects simultaneously. They typically manage this through project management systems and dedicated teams for each project.",
  },
  {
    id: 7,
    question: "WHEN IS COMMERCIAL MEDIA PRODUCTION NECESSARY FOR A BUSINESS?",
    answer:
      "Commercial media production is necessary when you need professional-quality content for advertising, product launches, brand awareness campaigns, social media marketing, or corporate communications.",
  },
  {
    id: 8,
    question: "WHAT TYPE OF RESULTS SHOULD I EXPECT FROM SOCIAL MEDIA VIDEO PRODUCTION SERVICES?",
    answer:
      "You should expect increased engagement rates, higher click-through rates, improved brand awareness, more shares and comments, and ultimately better conversion rates. Results vary based on content quality and distribution strategy.",
  },
  {
    id: 9,
    question: "HOW DO CREATIVE AND PRODUCTION SERVICES ALIGN WITH BRAND GUIDELINES?",
    answer:
      "Professional production services ensure alignment with brand guidelines by incorporating brand colors, fonts, tone of voice, visual style, and messaging into all creative assets from concept through final delivery.",
  },
  {
    id: 10,
    question: "IS THERE A DIFFERENCE BETWEEN CREATIVE PRODUCTION SERVICES AND CONTENT MARKETING?",
    answer:
      "Yes, creative production services focus on creating high-quality visual and multimedia assets, while content marketing encompasses strategy, distribution, and optimization of content across multiple channels for audience engagement.",
  },
  {
    id: 11,
    question: "HOW DO MEDIA PRODUCTION SOLUTIONS IMPROVE CUSTOMER PERCEPTION?",
    answer:
      "Professional media production enhances customer perception by presenting your brand in the best light with high-quality visuals, compelling storytelling, and polished production values that convey professionalism and credibility.",
  },
  {
    id: 12,
    question: "WHAT DOES A MEDIA PRODUCTION SPECIALIST DO ON SET?",
    answer:
      "A media production specialist on set manages technical equipment, coordinates crew, ensures quality standards, troubleshoots issues, manages timelines, and ensures the production runs smoothly according to the creative vision.",
  },
  {
    id: 13,
    question: "WHAT IS INCLUDED IN MEDIA PRODUCTION MANAGEMENT?",
    answer:
      "Media production management includes project planning, budgeting, scheduling, resource allocation, vendor coordination, quality control, timeline management, and ensuring all deliverables meet specifications and deadlines.",
  },
];

export default function GoogleFaq() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <main className="py-20 px-6 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Media Production FAQs</h1>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              {/* Question */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full text-left px-6 py-4 bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <span className={`transition-transform duration-300 ${openId === faq.id ? "rotate-45" : "rotate-0"}`}>+</span>
              </button>

              {/* Answer */}
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openId === faq.id ? "max-h-96 py-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
