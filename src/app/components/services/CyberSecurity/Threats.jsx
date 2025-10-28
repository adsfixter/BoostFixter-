import React from "react";

export default function Threats() {
  const threats = [
    { name: "Ransomware", risk: "Critical" },
    { name: "Phishing Attacks", risk: "High" },
    { name: "DDoS Attacks", risk: "Critical" },
    { name: "Malware", risk: "High" },
    { name: "Data Breaches", risk: "Critical" },
    { name: "Insider Threats", risk: "Medium" },
  ];

  return (
    <section id="threats" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Threats We Protect Against
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive protection against the most common and dangerous cyber threats
          </p>
        </div>

        {/* Threat Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {threats.map((threat, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-lg border border-border flex items-center justify-between"
            >
              <span className="font-semibold text-primary">{threat.name}</span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  threat.risk === "Critical"
                    ? "bg-red-100 text-red-700"
                    : threat.risk === "High"
                    ? "bg-orange-100 text-orange-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {threat.risk}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
