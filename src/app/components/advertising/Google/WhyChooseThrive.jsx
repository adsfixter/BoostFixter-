"use client";
import {
  BarChart3,
  Eye,
  Info,
  LineChart,
  Globe2,
  Briefcase,
} from "lucide-react";
import { motion } from "framer-motion";
import CustomLink from "../../Share/CustomLink";

const features = [
  {
    icon: <BarChart3 className="w-8 h-8 text-green-700" />,
    title: "Campaign Tracking and Reporting",
    desc: "View live reports on your campaign’s performance anytime, anywhere. Thrive’s reporting dashboard provides detailed insights into your campaign’s progress so you can track important metrics and know where your budget is going.",
  },
  {
    icon: <Eye className="w-8 h-8 text-green-700" />,
    title: "Transparent Data Analysis",
    desc: "When you choose us as your Google Ad agency, you’ll get a dedicated manager to oversee all aspects of your campaigns. From setup to ongoing optimization, your manager will provide personalized support and guidance at every step.",
  },
  {
    icon: <Info className="w-8 h-8 text-green-700" />,
    title: "Expert Consultations",
    desc: (
      <>
        Thrive takes a holistic approach to Google AdWords management. In
        addition to PPC management, we offer valuable recommendations on website
        design,{" "}
        <span className="text-green-700 font-medium">
          search engine optimization (SEO)
        </span>{" "}
        and other digital marketing strategies.
      </>
    ),
  },
  {
    icon: <LineChart className="w-8 h-8 text-green-700" />,
    title: "Certified Google Analytics Partner",
    desc: "Our Google Ads management agency’s experts are vetted by Google and capable of creating scalable analytics solutions for your campaigns. We assist with data collection, testing, reporting, and dashboard services for business websites.",
  },
  {
    icon: <Globe2 className="w-8 h-8 text-green-700" />,
    title: "Diverse Domain Expertise",
    desc: "Our Google Ad agency has worked with businesses of all sizes and across various industries. This allows us to tailor our Google Ads management services based on niche-specific strategies and best practices.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-green-700" />,
    title: "Make Sound Business Decisions",
    desc: "Gain clarity on industry jargon, metrics, and other information related to your PPC campaigns. Our Google Ads experts provide detailed explanations so you can understand reports and make informed decisions for your business going forward.",
  },
];

export default function WhyChooseThrive() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
       
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
            Why Choose Thrive for Your AdWords Management Services
          </h2>
          <p className="text-green-700 font-medium mt-2 text-center">
            Benefit From the Expertise of a Certified Google Partner
          </p>
          <p className="text-gray-600 my-4">
            As a certified Google Partner, Thrive has proven expertise in
            managing successful AdWords PPC management campaigns. For over 16
            years, we have provided exceptional PPC management services to our
            clients with a focus on ROI-driven results.
          </p>
          <p className="text-gray-600 mb-4">
            Choose our Google Ads agency to benefit from:
          </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-green-50 rounded-2xl p-6 shadow-sm border border-green-100 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
              </div>
              <div className="flex justify-center mt-10">
                  <CustomLink text={"Smash Your Advertising Goals"}></CustomLink>
              </div>
      </div>
    </section>
  );
}
