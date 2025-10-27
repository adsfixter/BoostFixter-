"use client";
import { motion } from "framer-motion";
import CustomLink from "../../Share/CustomLink";

const steps = [
  {
    step: "Step 1",
    title: "Paid Search Analysis",
    desc: "Our Ads management services begin with a thorough analysis of your current or past AdWords campaigns to identify areas for improvement and ways to boost returns.",
  },
  {
    step: "Step 2",
    title: "Campaign Setup",
    desc: "With a deep understanding of your business and target audience, we build your campaigns from the ground up or improve your existing ones for maximum performance.",
  },
  {
    step: "Step 3",
    title: "Ad Variation Testing",
    desc: "Once the ad copy is finalized, our Google Ads agency specialists perform A/B testing to determine the best-performing ads.",
  },
  {
    step: "Step 4",
    title: "Conversion Tracking",
    desc: "The ads will be monitored to identify which groups generate the highest number of leads and sales over a time period. Then, we make adjustments to both the ad copy and landing pages to concentrate on the keywords with the best outcomes.",
  },
  {
    step: "Step 5",
    title: "ROI Analysis",
    desc: "There are two phases to this process: removing non-performing keywords and finding new ones to experiment with. This includes testing different landing pages, optimizing ad placements, and tweaking budgets to achieve maximum ROI.",
  },
  {
    step: "Step 6",
    title: "Maintenance and Reporting",
    desc: "Google Ads is constantly evolving, and our Google Ads company stays on top of any changes that may affect your campaigns. We also provide regular reports so you can stay informed about the progress of your campaigns.",
  },
];

export default function ManagementProcess() {
  return (
    <section className="bg-white py-16 px-4 ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Thrive’s Google Ad Management Implementation Process
          </h2>
          <p className="text-gray-600 mt-3">
            Thrive follows a specific growth formula to ensure success for your
            campaigns.
          </p>
        </div>

        <div className="space-y-8 relative">
          {/* Left Line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-green-200 rounded-full hidden md:block"></div>

          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex flex-col md:flex-row items-start md:items-center md:space-x-6"
            >
              {/* Step Number */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-700 text-white font-semibold mb-3 md:mb-0 md:ml-4 shadow-md">
                {index + 1}
              </div>

              {/* Content */}
              <div className="bg-green-50 p-6 rounded-2xl shadow-sm w-full">
                <h3 className="text-lg md:text-xl font-semibold text-green-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            </motion.div>
          ))}
              </div>
              <div className="flex justify-center mt-10">
                  <CustomLink text={"Set Up My Google Ads Manager"}></CustomLink>
              </div>
      </div>
    </section>
  );
}
