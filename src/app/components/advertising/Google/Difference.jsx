"use client";

import Link from "next/link";
import React from "react";

export default function Difference() {
  const comparisonData = [
    {
      feature: "Inventory types available",
      adManager: "Web + App",
      adSense: "Web",
      adMob: "App",
      adMobNetwork: "App",
    },
    {
      feature: "Use other ad networks or negotiate directly-sold ads",
      adManager: "Yes",
      adSense: "No",
      adMob: "Yes",
      adMobNetwork: "No",
    },
    {
      feature: "Just tag pages to see ads",
      adManager: "Yes, if you allow AdSense to show through Ad Manager",
      adSense: "Yes",
      adMob: "N/A",
      adMobNetwork: "N/A",
    },
    {
      feature:
        "Make AdSense or AdMob network compete with other ad networks to maximize revenue",
      adManager: "Yes",
      adSense: "No",
      adMob: "Yes",
      adMobNetwork: "No",
    },
    {
      feature: "Consistent reporting across all ad serving activities",
      adManager: "Yes",
      adSense: "N/A",
      adMob: "Yes",
      adMobNetwork: "Yes",
    },
    {
      feature:
        "Google manages payments to you and billing your advertisers or collecting payable amounts from ad networks",
      adManager:
        "Yes, for Authorized Buyers, Open Bidding, and transactions through Programmatic Direct\n\nNo, for traditionally negotiated line items, payments to you come directly from your advertisers or ad networks and you manage billing and collection",
      adSense: "Yes",
      adMob:
        "No, payments to you come directly from your advertisers or ad networks and you manage billing and collection",
      adMobNetwork: "Yes",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ad Manager, AdSense and AdMob: What Is the Difference?
          </h1>
          <p className="text-base text-muted-foreground mb-6">
            While all three platforms fall under the Google advertising
            umbrella, they serve different purposes and target different types
            of publishers.
          </p>
          {/* Platform Descriptions */}
          <div className="space-y-3 mb-8">
            <p className="text-sm">
              <span className="font-semibold text-foreground">
                Google AdSense
              </span>
              <span className="text-muted-foreground">
                {" "}
                enables small to medium-sized publishers to earn revenue by
                displaying ads on their websites.
              </span>
            </p>
            <p className="text-sm">
              <span className="font-semibold text-foreground">
                Google AdMob
              </span>
              <span className="text-muted-foreground">
                {" "}
                is geared towards mobile app developers and monetization of
                in-app ad inventory. It allows developers to serve ads in their
                mobile applications and earn revenue through clicks or
                impressions.
              </span>
            </p>
            <p className="text-sm">
              <span className="font-semibold text-foreground">
                Google Ad Manager
              </span>
              <span className="text-muted-foreground">
                {" "}
                allows brands to monetize their ad inventory across various
                platforms, including websites, mobile apps, videos and games. It
                provides more advanced features for larger publishers who have
                significant direct sales.
              </span>
            </p>
          </div>
          <p className="text-sm font-medium text-foreground mb-6">
            This chart from Google highlights the key differences between these
            three platforms:
          </p>
        </div>
        {/* Comparison Table */}
        <div className="overflow-x-auto border border-border rounded-lg max-w-5xl mx-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted border-b border-border">
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground min-w-[250px] border-r border-border">
                  Feature
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground min-w-[180px] border-r border-border">
                  <div className="font-bold">Google Ad Manager</div>
                  <div className="text-xs font-normal text-muted-foreground">
                    (ad platform)
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground min-w-[140px] border-r border-border">
                  <div className="font-bold">Google AdSense</div>
                  <div className="text-xs font-normal text-muted-foreground">
                    (ad network)
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground min-w-[140px] border-r border-border">
                  <div className="font-bold">Google AdMob</div>
                  <div className="text-xs font-normal text-muted-foreground">
                    (ad platform)
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground min-w-[140px]">
                  <div className="font-bold">Google AdMob</div>
                  <div className="text-xs font-normal text-muted-foreground">
                    (ad network)
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-border ${
                    index % 2 === 0 ? "bg-background" : "bg-muted/30"
                  } hover:bg-muted/50 transition-colors`}
                >
                  <td className="px-4 py-4 text-sm font-medium text-foreground border-r border-border">
                    {row.feature}
                  </td>
                  <td className="px-4 py-4 text-sm text-foreground whitespace-pre-wrap border-r border-border">
                    {row.adManager}
                  </td>
                  <td className="px-4 py-4 text-sm text-foreground border-r border-border">
                    {row.adSense}
                  </td>
                  <td className="px-4 py-4 text-sm text-foreground border-r border-border">
                    {row.adMob}
                  </td>
                  <td className="px-4 py-4 text-sm text-foreground">
                    {row.adMobNetwork}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-10 text-center text-black font-semibold">
          <span>Source: </span>
          <Link href="#" className="text-secondary">
            Google
          </Link>
        </div>
        <h1 className="mt-4">
          All three platforms work in tandem to help businesses achieve their
          advertising goals and generate revenue through ad placements. No
          matter which platform(s) are right for your business needs, Thrive’s
          Google Ads services can help you manage your ad campaigns with ease.
        </h1>
      </div>
    </section>
  );
}
