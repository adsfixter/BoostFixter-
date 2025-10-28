import React from "react";

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Customized Security Solutions
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We understand that every business is unique. Our security experts
              work with you to design a comprehensive protection strategy
              tailored to your specific needs and industry requirements.
            </p>

            <ul className="space-y-4">
              {[
                "Industry-specific compliance",
                "Scalable infrastructure",
                "Custom threat models",
                "Dedicated support team",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-sm font-bold">
                    ✓
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Visual Box */}
          <div className="relative h-96 bg-primary/10 rounded-2xl border border-primary/20 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🎯</div>
              <p className="text-primary/70">Tailored Security Strategy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
