import React from "react";

export default function OurServices() {
  const services = [
    {
      title: "Vulnerability Assessment",
      description:
        "Comprehensive scanning and analysis of your systems to identify weaknesses",
    },
    {
      title: "Penetration Testing",
      description:
        "Authorized security testing to find and fix vulnerabilities before attackers do",
    },
    {
      title: "Security Consulting",
      description:
        "Expert guidance on implementing best practices and compliance standards",
    },
    {
      title: "Incident Response",
      description:
        "Rapid response team available 24/7 to handle security incidents",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored security solutions for your unique business needs
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-background rounded-xl border-l-4 border-accent hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-bold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
