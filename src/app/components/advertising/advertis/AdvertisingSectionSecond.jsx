import React from "react";
import { ArrowRight } from "lucide-react";
import CustomLink from "../../Share/CustomLink";

function AdvertisingSectionSecond() {
  return (
    <div className="w-full bg-background">
      {/* Main Header Section */}
      <section className="px-4 py-16 md:py-24 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Advertising on Social Media: How Does It Differ From Social Media Marketing?
          </h1>
        </div>

        {/* Introduction Content */}
        <div className="space-y-6 mb-16">
          <p className="text-lg text-foreground/80 leading-relaxed">
            <span className="font-semibold text-primary">Social media marketing</span> is an unpaid marketing
            initiative. This means you don't have to pay to promote your brand to your followers. Social media marketing
            encompasses optimization efforts centered on creating brand recognition, developing meaningful connections
            and driving engagement.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Paid social advertising, on the other hand, focuses on fine-tuning social media advertisement for better
            reach and higher ROI. Advertising on social media channels puts your brand in front of people who are
            looking for what you offer right now.
          </p>
        </div>

        {/* Illustration and Content Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Illustration Placeholder */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm h-80 bg-gradient-to-br from-orange-100 to-amber-50 rounded-2xl flex items-center justify-center border-2 border-orange-200">
              <div className="text-center">
                <div className="text-6xl mb-4">📢</div>
                <p className="text-foreground/60 font-medium">Social Media Marketing Illustration</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Social media marketing and paid social advertising, however, are not mutually exclusive. This means you
              can – and should – launch marketing campaigns while simultaneously advertising using social media to
              generate the best possible outcome.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Want to reach your intended audience with ease? Capitalize on social networks advertising and align your
              strategies with the behavior patterns of your ideal customers to promote your business in the most
              cost-effective way.
            </p>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-card border border-border rounded-2xl p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-balance">
            Drive Greater Results With Paid Social Media Marketing
          </h2>

          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              As more people use social media to connect with businesses, the amount of competition also increases. Let
              our social advertising agency refine your strategy and serve ads that hook the attention of your target
              leads throughout your marketing funnel.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Thrive Internet Marketing Agency is one of the most established social media advertising companies,
              providing conversion-centric services. We help you gain complete control over your social media ad budget
              and audience targeting approach to maximize the impact of your campaigns.
            </p>

            <p className="text-sm text-foreground/60 italic pt-4">
              Discover the best social media platforms for business niches with unmet needs!
            </p>
          </div>
              </div>
              <div className="flex justify-center">
                  <CustomLink text={"Ramp Up My Conversion Rates"}></CustomLink>
              </div>
      </section>
    </div>
  );
}

export default AdvertisingSectionSecond;
