"use client";
import React from "react";

export function WordPressServiceSection() {
  const services = [
    { title: "Thorough WordPress web design process", icon: "✓" },
    { title: "Expert frontend developers", icon: "✓" },
    { title: "Website performance tests", icon: "✓" },
    { title: "Comprehensive campaign reports", icon: "✓" },
    { title: "WordPress website design professionals", icon: "✓" },
    { title: "Custom website design service", icon: "✓" },
    { title: "Client-centered project management", icon: "✓" },
    { title: "Transparent website design service", icon: "✓" },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
          WordPress Web Design Experts
        </h1>
        <p className="text-lg text-muted-foreground">
          Build a Custom Website That Reflects Your Brand
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-foreground leading-relaxed">
              The WordPress market share is by far the largest worldwide.
              Statistics show that{" "}
              <span className="font-semibold text-accent">
                59.4% of all websites globally
              </span>{" "}
              utilize WordPress as a content management system (CMS). WordPress
              powers nearly{" "}
              <span className="font-semibold text-accent">
                35% of the internet
              </span>{" "}
              and is also responsible for the additional{" "}
              <span className="font-semibold text-accent">
                1.1 million domain registrations
              </span>{" "}
              every six months.
            </p>

            <p className="text-foreground leading-relaxed">
              These numbers are not surprising given WordPress' user-friendly
              and easy-to-update CMS. With WordPress, you can log in to your
              website and make immediate changes. It also offers numerous plugin,
              support and security options to help website owners create a
              seamless user experience.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-foreground leading-relaxed">
              Establish a robust digital framework and zoom past the competition
              with our{" "}
              <a
                href="#"
                className="text-accent font-semibold hover:underline"
              >
                WordPress website design services
              </a>
              . Our WordPress website design agency works closely with your
              project managers to ensure every aspect of your website aligns
              with your unique branding and goals. We stay abreast of the latest
              trends and industry developments to give you WordPress web design
              services that meet your needs and specifications.
            </p>

            <p className="text-foreground leading-relaxed font-semibold">
              Here's what you can expect when you partner with our WordPress web
              design agency:
            </p>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-md">
            <svg
              viewBox="0 0 400 400"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background frame */}
              <rect x="50" y="40" width="300" height="240" fill="#e8e8e8" rx="8" />
              <rect x="60" y="50" width="280" height="30" fill="#d0d0d0" rx="4" />
              <circle cx="70" cy="65" r="3" fill="#999" />
              <circle cx="80" cy="65" r="3" fill="#999" />
              <circle cx="90" cy="65" r="3" fill="#999" />

              {/* Desk */}
              <rect x="40" y="260" width="320" height="12" fill="#8b7355" rx="2" />
              <rect x="50" y="272" width="8" height="60" fill="#8b7355" />
              <rect x="342" y="272" width="8" height="60" fill="#8b7355" />

              {/* Person */}
              <circle cx="200" cy="140" r="20" fill="#d4a574" /> {/* Head */}
              <path d="M 180 140 Q 180 120 200 120 Q 220 120 220 140" fill="#1a1a1a" /> {/* Hair */}
              <rect x="175" y="160" width="50" height="60" fill="#f5a623" rx="4" /> {/* Body */}
              <rect x="140" y="170" width="35" height="12" fill="#d4a574" rx="6" /> {/* Left Arm */}
              <rect x="225" y="170" width="35" height="12" fill="#d4a574" rx="6" /> {/* Right Arm */}
              <rect x="180" y="220" width="12" height="40" fill="#2d5016" /> {/* Left Leg */}
              <rect x="208" y="220" width="12" height="40" fill="#2d5016" /> {/* Right Leg */}
              <ellipse cx="186" cy="260" rx="8" ry="6" fill="#1a1a1a" /> {/* Left Shoe */}
              <ellipse cx="214" cy="260" rx="8" ry="6" fill="#1a1a1a" /> {/* Right Shoe */}

              {/* Laptop on desk */}
              <rect x="220" y="240" width="80" height="50" fill="#c0c0c0" rx="2" />
              <rect x="225" y="245" width="70" height="35" fill="#e8f4f8" rx="1" />

              {/* Coffee cup */}
              <rect x="120" y="245" width="25" height="30" fill="#f5a623" rx="2" />
              <ellipse cx="132.5" cy="245" rx="12.5" ry="4" fill="#e8941f" />
            </svg>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {services.map((service, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="text-accent font-bold text-lg mt-1 flex-shrink-0">○</span>
            <p className="text-foreground leading-relaxed">{service.title}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <a
          href="#"
          className="text-accent font-semibold hover:underline inline-block"
        >
          Contact our web design company today and get in touch with our WordPress experts.
        </a>
      </div>
    </section>
  );
}
