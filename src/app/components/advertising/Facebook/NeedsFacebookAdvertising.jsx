"use client";
import { Megaphone, Wallet, Target, BarChart, Hand, Cog } from "lucide-react";
import CustomLink from "../../Share/CustomLink";

export default function NeedsFacebookAdvertising() {
  const features = [
    {
      icon: <Megaphone size={26} />,
      title: "Extensive Reach",
      desc: "Gain instant access to the world’s largest social media platform, where users spend an average of 33 minutes daily. This extensive reach allows you to expand your market presence and connect with prospects at every stage of their buying journey.",
      color: "bg-[#344E9B]",
    },
    {
      icon: <Wallet size={26} />,
      title: "Flexible Budgeting",
      desc: "Facebook lets you specify a maximum spend and charges less to reach the same number of users compared to traditional advertising methods. Its intelligent optimization feature ensures your ad spend is distributed efficiently across your target audience.",
      color: "bg-[#3B82A1]",
    },
    {
      icon: <Target size={26} />,
      title: "Precise Targeting",
      desc: "Ensure your money is spent on high-potential customers with Facebook’s precise targeting capabilities. Its lookalike audiences feature targets people with traits similar to your existing customers, boosting your chances of converting window shoppers.",
      color: "bg-[#427C68]",
    },
    {
      icon: <BarChart size={26} />,
      title: "Detailed Analytics",
      desc: "Facebook’s analytics tools provide real-time data, allowing you to track ad performance, engagement and conversions. Your partner Facebook advertising company uses this insight to optimize your campaigns for better results and maximize ROI.",
      color: "bg-[#5B8C4E]",
    },
    {
      icon: <Hand size={26} />,
      title: "Ease of Use",
      desc: "You don’t need a technical profile to launch the most basic types of ad campaigns. With help from a Facebook marketing company, you can quickly set up and manage targeted ad campaigns and monitor the performance easily in one platform.",
      color: "bg-[#C96E2C]",
    },
    {
      icon: <Cog size={26} />,
      title: "Advanced Automation",
      desc: "Schedule posts to go live anytime. Facebook’s advanced automation tools ensure your ads reach prospects when they’re most active. You can also automate ad placements and budget adjustments and optimize campaigns in real-time.",
      color: "bg-[#E6B93E]",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white text-gray-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
          Why Your Business Needs Facebook Advertising
        </h2>
        <p className="text-[#6F8A3B] text-lg mt-2 font-medium text-center">
          Boost Brand Recognition and Ramp Up Your Sales
        </p>
        <p className="my-6 text-gray-700 max-w-3xl mx-auto leading-relaxed">
          With <strong>billions of monthly active users</strong>, Facebook
          advertising offers unparalleled opportunities to connect with your
          target audience. Tap into this vast potential and leverage the
          platform’s advanced targeting options and diverse ad formats to drive
          meaningful results for your business.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {features.map((item, i) => (
          <div
            key={i}
            className="rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
          >
            <div className={`${item.color} text-white p-4 font-bold flex items-center gap-3`}>
              {item.icon}
              <span>{item.title}</span>
            </div>
            <div className="p-6 bg-[#F1F6FB] text-gray-700 leading-relaxed">
              {item.desc}
            </div>
          </div>
        ))}
          </div>
          <div className="flex justify-center mt-10">
              <CustomLink text={"Get Started"}></CustomLink>
          </div>
    </section>
  );
}
