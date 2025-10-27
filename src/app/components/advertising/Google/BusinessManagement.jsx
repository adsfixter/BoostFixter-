import { Target, Wrench, BarChart3, PiggyBank, Zap, Shield } from "lucide-react";
import CustomLink from "../../Share/CustomLink";

const features = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Granular Ad Targeting",
    description:
      "Google Ads management services allow you to target specific audience subsets based on factors like operating systems, mobile carriers, network providers, languages and browsers. Custom targeting is also available for specific demographic, geographic and interest-based parameters.",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Detailed Reporting Tools",
    description:
      "Understanding key performance metrics such as click-through rates (CTR), cost-per-click (CPC) and cost-per-acquisition (CPA) is vital for optimizing campaigns. A Google Ads company can help you make strategic decisions based on different report types. You'll get focused results with the right data at your fingertips.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Access to a Testing Environment",
    description:
      "Leverage Google Ads management services to test new ad creatives, landing pages and other campaign elements without risking your campaign's performance. This testing environment allows you to make strategic decisions for future campaigns based on data-driven insights from past experiments.",
  },
  {
    icon: <PiggyBank className="w-8 h-8" />,
    title: "Budget Management",
    description:
      "Manage your advertising budget effectively with a trusted Google Ads management agency. With access to advanced analytics tools, they can identify high-performing campaigns and allocate more resources while reducing spending on campaigns that fail to deliver the expected results.",
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Ad Placement Expertise",
    description:
      "A Google AdWords management agency can help you achieve the best possible placement for your ads. Optimization techniques like dynamic allocation are effective for determining the right ad format and location based on factors like audience engagement, device type and website content.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Compliance With Advertising Policies",
    description:
      "Google Ads has strict policies regarding ad content and placements. Failure to comply can result in your ads being disapproved or your account being suspended. Partnering with a Google AdWords management company reduces the risk of suspension and other hefty penalties.",
  },
];

export default function BusinessManagement() {
  return (
    <section className="py-20 px-6">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3 text-center">
            Why Your Business Needs Google Ad Management
          </h2>
          <p className="text-lg text-secondary font-semibold mb-6 text-center">
            Craft and Manage Highly Engaging Ads That Drive Profits
          </p>
            <p>
              Mismanaged online advertising can lead to a loss of trust and an audience fatigued by irrelevant or
              intrusive ads. Users may use ad blockers, depriving you of valuable opportunities to monetize your website
              traffic.
            </p>
            <p className="my-4">
              A Google Ads manager can help you avoid these pitfalls and maximize the return on your investment (ROI) in
              online advertising.
            </p>
            <p className="font-semibold">
              Here are some compelling reasons why your business needs AdWords PPC management services:
            </p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 ">
          {features.map((feature, index) => (
            <div key={index} className="bg-muted/50 rounded-lg p-8 hover:shadow-md transition-shadow duration-300 bg-[#F6F6F6]">
              {/* Icon */}
              <div className="text-amber-600 mb-4">{feature.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>

              {/* Description */}
              <p className="text-foreground/75 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
              </div>
              <div className="flex justify-center mt-10">
                  <CustomLink text={"Hire A Google Ads Expert"}></CustomLink>
              </div>
      </div>
    </section>
  );
}
