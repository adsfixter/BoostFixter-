import React from "react"
import { ArrowRight, Brain, Lightbulb, MessageCircle, BarChart3, Zap } from "lucide-react"
import CustomLink from "../../Share/CustomLink"

export default function AdManagement() {
  const features = [
    {
      icon: ArrowRight,
      title: "Data-Driven Approach",
      description:
        "We leverage advanced data tracking and analysis tools to monitor your campaign performance and identify trends and engagement patterns. Our Facebook marketing agency's data-driven approach enables us to maximize ROI and eliminate wasteful spending.",
    },
    {
      icon: Brain,
      title: "Social Media Expertise",
      description:
        "Our Facebook ads marketing agency's ad experts boast decades of experience in social media marketing and paid advertising. We stay ahead of platform updates, algorithm changes and emerging trends to ensure we leverage the latest features and best practices.",
    },
    {
      icon: Zap,
      title: "Customized Strategies",
      description:
        "Our Facebook advertising company's strategies are built around your unique business goals, budget and audience. We take the time to understand your objectives, challenges and competition to create tailored ad campaigns that drive meaningful engagement.",
    },
    {
      icon: Lightbulb,
      title: "Creative Excellence",
      description:
        "We don't use generic templates and recycled concepts. Our Facebook advertising firm's in-house creative team combines artistic innovation with strategic thinking to ensure every ad campaign stands out and serves your business needs and objectives.",
    },
    {
      icon: BarChart3,
      title: "Transparent Reporting",
      description:
        "Our FB marketing agency upholds transparency and accountability in everything we do. Our detailed reporting system provides clear insights into your campaign performance, ad spend and ROI. More importantly, we provide actionable insights based on campaign data.",
    },
    {
      icon: MessageCircle,
      title: "Comprehensive Solutions",
      description:
        "Our Facebook ads company does more than Facebook advertising. We are your complete digital marketing partner, providing comprehensive solutions, including search engine optimization (SEO), organic social media marketing and conversion rate optimization.",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Why Choose Thrive for Your Facebook Advertising
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Boost Your Campaign Performance With Better Ad Management
          </p>
          <p className="text-base text-foreground max-w-3xl mx-auto leading-relaxed">
            Thrive Internet Marketing Agency has been the trusted Facebook ad management agency since 2005. We combine
            our social media expertise with a tailored approach to help our clients achieve measurable growth.
          </p>
          <p className="text-base text-foreground max-w-3xl mx-auto leading-relaxed mt-4">
            Here's what you can expect when you choose our Facebook advertising agency:
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-muted p-8 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                </div>
                <p className="text-foreground/90 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
              </div>
              <div className="flex justify-center mt-10">
                  <CustomLink text={"Launch My Ad Campaign"}></CustomLink>
              </div>
      </div>
    </section>
  )
}
