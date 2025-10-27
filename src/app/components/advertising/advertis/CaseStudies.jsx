import React from "react";
import CustomLink from "../../Share/CustomLink";

const caseStudies = [
  {
    image: "/Benefits.jpg",
    title: "AUTOMOTIVE PARTS MANUFACTURER",
    metrics: [
      { value: "+63%", label: "New Facebook Followers" },
      { value: "+230", label: "Facebook Post Engagements" },
    ],
    testimonial:
      "In 2016, a manufacturer and national distributor of automotive performance products reached out to our social media ad agency to boost its audience growth and drive new product engagements. Our promotional campaigns helped the client reach extremely engaged audience segments and garner direct messages and inquiries about its new product.",
  },
  {
    image: "/Benefits.jpg",
    title: "ECOMMERCE STORE",
    metrics: [
      { value: "+3,049", label: "New Facebook Followers" },
      { value: "+77,224", label: "Facebook Post Engagements" },
    ],
    testimonial:
      "Thrive was tapped to manage the paid social media campaign of an online shop in Southern California. With a strategic combination of organic and paid social media advertising campaigns, we helped the client gain 794% ROI and an increase of 84% in Facebook referrals to its website at only $0.15 cost per click.",
    highlightedText: "794% ROI and an increase of 84% in Facebook referrals",
  },
  {
    image: "/Benefits.jpg",
    title: "FULL-SERVICE RV DEALER",
    metrics: [
      { value: "+8,418", label: "Link Clicks" },
      { value: "+62,530", label: "People Reached via Facebook Ads" },
    ],
    testimonial:
      "Our Facebook advertising company partnered with a full-service RV dealer in Fort Worth, Texas, to help position its latest brand promotions in front of highly interested buyers. We've launched several social media advertisements that generated increased website traffic, link clicks and follower growth rate for the client.",
  },
];

function CaseStudyCard({ image, title, metrics, testimonial, highlightedText }) {
  return (
    <div className="bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow ">
      {/* Image */}
      <div className="w-full h-48 overflow-hidden bg-muted">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Title Banner */}
      <div className="bg-yellow-400 px-6 py-3">
        <h3 className="font-bold text-sm tracking-wide text-gray-900">{title}</h3>
      </div>

      {/* Metrics */}
      <div className="px-6 py-6 border-b border-border">
        <div className="grid grid-cols-2 gap-6">
          {metrics.map((metric, idx) => (
            <div key={idx}>
              <div className="text-2xl font-bold text-foreground">{metric.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      <div className="px-6 py-6">
        <h4 className="font-semibold text-sm text-foreground mb-3">From the Client:</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {testimonial.split(highlightedText || "").map((part, idx, arr) => (
            <span key={idx}>
              {part}
              {idx < arr.length - 1 && highlightedText && (
                <span className="font-semibold text-foreground">{highlightedText}</span>
              )}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section className=" px-6 py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Client Success Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we've helped businesses across industries achieve remarkable growth through strategic social media campaigns.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, idx) => (
            <CaseStudyCard
              key={idx}
              image={study.image}
              title={study.title}
              metrics={study.metrics}
              testimonial={study.testimonial}
              highlightedText={study.highlightedText}
            />
          ))}
              </div>
              <div className="flex justify-center mt-10">
                  <CustomLink text={"Make My Brand A Success Story"}></CustomLink>
              </div>
      </div>
    </section>
  );
}
