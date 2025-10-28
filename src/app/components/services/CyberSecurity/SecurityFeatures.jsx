import React from "react";

export default function SecurityFeatures() {
  const features = [
    {
      icon: "🔍",
      title: "Real-Time Threat Detection",
      description:
        "AI-powered monitoring that identifies and neutralizes threats instantly",
    },
    {
      icon: "🚨",
      title: "Instant Alerts",
      description:
        "Get notified immediately when suspicious activity is detected",
    },
    {
      icon: "🔐",
      title: "Advanced Encryption",
      description: "Military-grade encryption for all your sensitive data",
    },
    {
      icon: "📊",
      title: "Detailed Analytics",
      description:
        "Comprehensive reports and insights into your security posture",
    },
    {
      icon: "👥",
      title: "Team Collaboration",
      description: "Seamless coordination between security teams",
    },
    {
      icon: "⚙️",
      title: "Easy Integration",
      description:
        "Integrate with your existing infrastructure in minutes",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Powerful Security Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to protect your business from cyber threats
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-card rounded-xl border border-border hover:border-primary transition hover:shadow-lg"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
