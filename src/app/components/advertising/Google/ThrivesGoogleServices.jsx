import {
  CheckCircle2,
  ListChecks,
  PenTool,
  Settings,
  BarChart3,
  Target,
  ItalicIcon as AnalyticsIcon,
  Zap,
  Gavel,
} from "lucide-react";
import CustomLink from "../../Share/CustomLink";

const services = [
  {
    icon: ListChecks,
    title: "Keyword Research and Planning",
    description:
      "Every solid Google paid search campaign is founded on robust and reliable keyword research. Our Google Ads services determine the top keywords to bid on and choose the best from the shortlist. The goal is to find keywords that can provide the maximum possible ROI.",
  },
  {
    icon: PenTool,
    title: "Ad Copy Creation",
    description:
      "Thrive's Google Ad Agency has skilled copywriters who have mastered creating ad text that grabs attention and prompts action. We use persuasive language, visual elements and a deep understanding of your audience to craft copy that drives clicks, conversions and sales.",
  },
  {
    icon: CheckCircle2,
    title: "A/B Testing",
    description:
      "Test multiple ad variations against each other to identify the most effective for driving conversions. Our Google Ads company tests various components of your ad, such as headlines, descriptions and CTA buttons to identify high-performing ad groups.",
  },
  {
    icon: Settings,
    title: "Campaign Setup",
    description:
      "If you don't have a Google AdWords campaign set up yet, our AdWords management company will take care of it for you. For existing campaigns, we'll ensure a smooth transition from your previous agency. A Google Ads expert will be assigned to closely monitor your campaigns.",
  },
  {
    icon: BarChart3,
    title: "Competitor Campaign Analysis",
    description:
      "Your competitors' strategies can give you valuable insights into your campaigns. Our Google Ads management services include a thorough analysis of your competitors' ads, keywords and landing pages to identify opportunities for improvement and stay ahead of the game.",
  },
  {
    icon: Zap,
    title: "Landing Page Design and Creation",
    description:
      "Pairing effective ads and landing pages can significantly boost conversions. Build trust and credibility with well-designed pages that highlight your offerings. Our Google AdWords management agency tests and optimizes landing pages for better conversions.",
  },
  {
    icon: AnalyticsIcon,
    title: "Google Analytics and Reporting",
    description:
      "Google Analytics provides valuable data on website traffic and user behavior. Our AdWords management company uses this data to optimize your campaigns for better results. We also provide detailed reports on key metrics such as impressions, clicks, conversions, etc.",
  },
  {
    icon: Target,
    title: "Ad Retargeting",
    description:
      "Reach potential customers who visited your website but have yet to convert. Our Google AdWords management services include setting up remarketing campaigns to target these users with customized ads, increasing the chances of converting them into paying customers and, ultimately, brand advocates.",
  },
  {
    icon: Gavel,
    title: "Bid Management",
    description:
      "Effective bid management goes beyond setting the highest price per click. Thrive's Google Ads services focus on optimizing bids for optimal ad positions at a lower cost. With our AdWords management expertise, we adjust bids based on factors like time of day, location and device type.",
  },
];

export default function ThrivesGoogleServices() {
  return (
    <main className=" px-6">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header Section */}
        <section className="py-6 px-4 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Thrive's Google Ad Management Services
          </h1>
          <p className="text-lg text-muted-foreground text-secondary">
            Fully Integrated Solutions To Improve Your Ad Quality Score
          </p>
        </section>
        {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow duration-300 bg-[#F6F6F6]"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <Icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <h3 className="text-lg font-semibold text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
              </div>
              <div className="flex justify-center my-10">
                  <CustomLink text={"Speak With Our Adwords Experts"}></CustomLink>
              </div>
      </div>
    </main>
  );
}
