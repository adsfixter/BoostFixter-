import React from "react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$299",
      description: "Perfect for small businesses",
      features: [
        "Up to 5 users",
        "Basic threat detection",
        "Email support",
        "Monthly reports",
      ],
    },
    {
      name: "Professional",
      price: "$999",
      description: "For growing companies",
      features: [
        "Up to 50 users",
        "Advanced threat detection",
        "Priority support",
        "Real-time alerts",
        "Custom integrations",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Unlimited users",
        "AI-powered detection",
        "24/7 dedicated support",
        "Custom solutions",
        "Compliance assistance",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your business needs
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl border transition ${
                plan.highlighted
                  ? "border-accent bg-primary/5 shadow-lg scale-105"
                  : "border-border bg-background"
              }`}
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-muted-foreground">/month</span>
                  )}
                </div>

                {/* Button */}
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition mb-8 ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "border border-primary text-primary hover:bg-primary/5"
                  }`}
                >
                  Get Started
                </button>

                {/* Features List */}
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-foreground"
                    >
                      <span className="text-accent">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
