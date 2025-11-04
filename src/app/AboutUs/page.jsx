import React from "react";
import AboutHomePage from "../components/aboutUs/about/AboutHomePage";
import FeaturesSection from "../components/aboutUs/about/FeaturesSection";
import Reviews from "../components/services/WebDevelopment/Reviews";
import AboutSection from "../components/aboutUs/about/AboutSection";
import TeamShowcaseSection from "../components/aboutUs/about/TeamShowcaseSection";
import MarketingServices from "../components/aboutUs/about/MarketingServices";
// import CoreValuesTree from "../components/aboutUs/about/CoreValuesTree";
import CompanyHistory from "../components/aboutUs/about/CompanyHistory";
import Link from "next/link";
import OurVision from "../components/aboutUs/about/OurVision";
import WorkProcess from "../components/aboutUs/about/WorkProcess";

export default function AboutUs() {
  return (
    <div>
      <AboutHomePage></AboutHomePage>
      <OurVision></OurVision>
      <WorkProcess></WorkProcess>
      {/* <FeaturesSection></FeaturesSection> */}
      {/* <Reviews></Reviews> */}
      {/* <AboutSection></AboutSection> */}
      {/* <TeamShowcaseSection></TeamShowcaseSection> */}
      {/* <MarketingServices></MarketingServices> */}
      {/* <CoreValuesTree></CoreValuesTree> */}
      {/* <CompanyHistory></CompanyHistory> */}
    </div>
  );
}
