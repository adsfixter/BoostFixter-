"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function AdvertisingWithGoogle() {
  return (
    <main className="px-6 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Hero Section */}
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance text-center">
              Advertising With Google Ad Manager
            </h1>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Google Ad Manager is a powerful ad management platform for large
              publishers with significant direct sales. It provides granular
              controls and supports multiple ad exchanges and networks,
              including third-party networks, AdSense and Ad Exchange.
            </p>

            <p className="text-base font-semibold text-foreground mb-6">
              Ad Manager is the ideal solution if you need:
            </p>

            <ul className="space-y-4 mb-12 ml-8">
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">
                  A centralized platform to monetize various types of inventory
                  (websites, mobile apps, videos or games)
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">
                  Efficiently manage substantial ad revenue from direct deals
                  with buyers
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">
                  Utilize third-party networks to compete for advertising space
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">
                  Access more detailed reports for in-depth insights
                </span>
              </li>
            </ul>
        {/* How It Works Section */}
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              How Google Ad Manager Works
            </h2>

            <p className="text-base text-foreground/80 mb-8 leading-relaxed">
              With Ad Manager, you have the flexibility and control to create,
              manage and report on all your ad campaigns. Here's a breakdown of
              the process:
            </p>
            <ul className="space-y-4 mb-12 ml-8">
              <li className="flex gap-3">
                <span className="font-bold text-primary min-w-fit">
                  Define your ad units
                </span>
                <span className="text-foreground">
                  – the designated locations on your website or app to display
                  ads.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary min-w-fit">
                  Generate a unique tag
                </span>
                <span className="text-foreground">
                  (a snippet of code) for each ad unit to be inserted into your
                  webpage or app.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary min-w-fit">
                  The ad tag requests an ad from Ad Manager
                </span>
                <span className="text-foreground">
                  when a user visits the webpage or app.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary min-w-fit">
                  Create orders and line items
                </span>
                <span className="text-foreground">
                  to manage your transactions with advertisers or buyers of your
                  ad inventory.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary min-w-fit">
                  Serve an ad for the request
                </span>
                <span className="text-foreground">
                  by targeting campaigns to the ad unit. At the time of the
                  request, the Ad Manager selects the most suitable ad to serve.
                </span>
              </li>
            </ul>
        {/* Data Access Section */}
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              What Data Can You Access on Google Ad Manager?
            </h2>

            <p className="text-base text-foreground/80 mb-6 leading-relaxed">
              Google Ad Manager offers access to an extensive amount of data.
            </p>

            <p className="text-base text-foreground/80 mb-6 leading-relaxed">
              Users can generate reports to analyze performance over weeks,
              quarters, months or specific date ranges.
            </p>

            <p className="text-base text-foreground/80 mb-8 leading-relaxed">
              Additionally, reports can be sorted based on various dimensions
              such as Activity, Activity Group, Ad Location, Advertiser,
              Verticals, Agencies, Salespeople, Ad Sources and bid ranges.
            </p>

            {/* CTA Section */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 sm:p-8 mb-6">
              <p className="text-base">
                <span className="font-bold text-foreground">
                  Ready to boost your ad revenue?
                </span>
                <span className="text-foreground/80">
                  {" "}
                  Thrive's AdWords management agency can optimize your ad
                  campaigns, ensuring every ad dollar is well-invested in
                  driving qualified leads to your website.
                </span>
              </p>
            </div>
         
      </div>
    </main>
  );
}
