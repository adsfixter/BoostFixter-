"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import CustomLink from "../../Share/CustomLink";

export default function GoogleAdsManager() {
  const freeFeatures = [
    "Access to Google's AdSense network and additional third-party networks",
    "Optimized for mobile and video ads",
    "Line item management, forecasting and targeting capabilities",
    "Historical data",
    "Customized reporting",
    "Access to application programming interface (API) for ad trafficking and optimization",
  ];

  const paidFeatures = [
    "Direct support from Google",
    "Access to first-party audience segments",
    "Advanced video options (e.g., dynamic ad insertion and plodding)",
    "Ad units with five levels of hierarchy (only 2 for the free version)",
    "Advanced reporting capabilities, such as data protection reports, data transfer log files, conversion reporting and future sell-through",
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            The Two Types of Google Ads Manager Accounts
          </h1>
          <p className="text-lg text-muted-foreground mb-6 text-balance">
            The free version of Google Ads Manager (GAM) is already impressive,
            but Google also offers a paid version with additional features and
            benefits.
          </p>
          <p className="text-base text-muted-foreground text-balance">
            Here are the fundamental differences between the two and how your
            business can benefit from each:
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Free Version */}
          <div className="rounded-lg overflow-hidden border border-border bg-card">
            <div className="bg-primary text-primary-foreground px-6 py-4">
              <h2 className="text-2xl font-bold">
                Ad Manager for Small Businesses
              </h2>
              <p className="text-sm font-semibold mt-1 opacity-90">(FREE)</p>
            </div>
            <div className="p-6 space-y-6">
              <p className="text-foreground font-medium mb-2">
                Google Ad Manager for small businesses is a free ad server ideal
                for starting enterprises or publishers lacking sufficient
                resources to invest in advertising.
              </p>

              <div>
                <p className="text-foreground font-semibold mb-4">
                  Here are some key benefits:
                </p>
                <ul className="space-y-3">
                  {freeFeatures.map((feature, index) => (
                    <li key={index} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Paid Version */}
          <div className="rounded-lg overflow-hidden border border-border bg-card">
            <div className="bg-[#6b8e23] text-white px-6 py-4">
              <h2 className="text-2xl font-bold">Ad Manager 360</h2>
              <p className="text-sm font-semibold mt-1 opacity-90">(PAID)</p>
            </div>
            <div className="p-6 space-y-6">
              <p className="text-foreground font-medium mb-2">
                Google Ad Manager 360 is a premium service that offers all the
                features of the standard version, with added capabilities for
                enhanced ad inventory management and revenue optimization.
              </p>

              <div>
                <p className="text-foreground font-semibold mb-4">
                  Here are some key benefits:
                </p>
                <ul className="space-y-3">
                  {paidFeatures.map((feature, index) => (
                    <li key={index} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#6b8e23] flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-muted rounded-lg p-8 text-center">
          <p className="text-foreground mb-2">
            <span className="font-bold">
              Not sure which is right for your business?
            </span>{" "}
            Let Thrive's Google Ads agency guide you in selecting the best
            Google Ad Manager account for your unique needs.
          </p>
          <p className="text-muted-foreground">
            Get in touch today for a free consultation with our Adwords PPC
            management specialists.
          </p>
        </div>
        <div className="flex justify-center mt-10">
          <CustomLink text={"Get A Free Consultation"}></CustomLink>
        </div>
      </div>
    </section>
  );
}
