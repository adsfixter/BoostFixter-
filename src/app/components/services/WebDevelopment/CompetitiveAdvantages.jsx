import {
  TrendingUp,
  Wrench,
  Users,
  Target,
  Globe,
  Smartphone,
  Rocket,
  Star,
} from "lucide-react";
import CustomLink from "../../Share/CustomLink";

export default function CompetitiveAdvantages() {
  const advantages = [
  {
    icon: <TrendingUp className="w-8 h-8 text-green-600 shrink-0" />,
    title: "Boost Search Rankings",
    text: "Search engines like Google prioritize websites with fast loading speed, optimized content, and strong usability signals. A responsive web design ensures your website adapts perfectly to any device, improving overall SEO performance. With an optimized structure, your pages are easily crawlable, resulting in higher search visibility and better organic traffic growth across both branded and non-branded searches.",
  },
  {
    icon: <Wrench className="w-8 h-8 text-green-600 shrink-0" />,
    title: "Reduce Maintenance Cost",
    text: "Maintaining multiple versions of a website for desktop and mobile can be time-consuming and expensive. With responsive web design, you only need one unified site that adapts automatically to every screen size. This reduces your development effort, minimizes maintenance overhead, and eliminates the hassle of updating multiple platforms — saving both time and money while ensuring a consistent experience for your users.",
  },
  {
    icon: <Users className="w-8 h-8 text-green-600 shrink-0" />,
    title: "Get Found Online",
    text: "A conversion-focused web design enhances your visibility online and helps your brand reach the right audience. Investing in responsive design is a cost-effective way to improve your online exposure and boost your organic rankings. A well-optimized website attracts more traffic, engages visitors longer, and increases the likelihood of turning those visitors into paying customers — across any device or platform.",
  },
  {
    icon: <Target className="w-8 h-8 text-green-600 shrink-0" />,
    title: "Acquire More Leads and Traffic",
    text: "According to eMarketer, 69% of consumers use their smartphones to perform product research, accounting for 52.6% of total global web traffic. A responsive website ensures these mobile users have a smooth and engaging experience that encourages them to stay longer and convert. Our optimized web structures and mobile-first approach help turn everyday visitors into qualified leads and loyal customers.",
  },
  {
    icon: <Globe className="w-8 h-8 text-green-600 shrink-0" />,
    title: "Reach More Customers",
    text: "Mobile browsing has officially surpassed desktop usage worldwide. Comscore data shows that 70% of total digital media time is spent on smartphones and tablets. A responsive design ensures that your website delivers a seamless, engaging experience across all screen sizes — giving you access to a broader audience, improving retention, and ensuring no potential customer is left behind.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-green-600 shrink-0" />,
    title: "Optimize Page Experience",
    text: "Six out of ten shoppers say that a website’s mobile experience influences their brand perception. With 30% of Google searches happening on mobile devices, optimizing for responsiveness is essential. Our responsive designs ensure that users experience smooth navigation, readable content, and fast load speeds, reducing bounce rates and creating a strong first impression that encourages return visits.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-green-600 shrink-0" />,
    title: "Drive More Conversions",
    text: "Smart Insights research shows the global retail conversion rate on mobile devices is 1.82%. A responsive design not only boosts user engagement but also simplifies the path to purchase. By ensuring consistent visuals, easy navigation, and fast performance on all devices, you motivate users to complete desired actions — from filling out a form to making a purchase — ultimately improving your ROI.",
  },
  {
    icon: <Star className="w-8 h-8 text-green-600 shrink-0" />,
    title: "Improve Brand Reputation",
    text: "A seamless and accessible user experience directly impacts how people perceive your brand. Studies show that 65% of users are more likely to trust businesses that offer mobile-friendly websites. With a responsive design, your website appears professional, user-centric, and reliable — helping you build long-term credibility, strengthen customer loyalty, and stand out from competitors in your industry.",
  },
];
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Competitive Advantages of Responsive Web Design
          </h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            With responsive web design, you can ensure your website adapts to
            customer needs and device capabilities — improving SEO, usability,
            and conversion rates.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {advantages.map((item, index) => (
            <div key={index}>
              <div className="flex items-start gap-4">
                {item.icon}
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-700 mt-2 leading-relaxed pl-12">
                {item.text}
              </p>
            </div>
          ))}
        </div>
          </div>
          <div className="flex justify-center mt-10">
              <CustomLink text={"Revamp My Online Presence"}></CustomLink>
          </div>
    </section>
  );
}
