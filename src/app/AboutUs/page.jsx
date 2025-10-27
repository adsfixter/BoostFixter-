import React from "react";
import AboutHomePage from "../components/aboutUs/about/AboutHomePage";
import FeaturesSection from "../components/aboutUs/about/FeaturesSection";
import Reviews from "../components/services/WebDevelopment/Reviews";
import AboutSection from "../components/aboutUs/about/AboutSection";
import TeamShowcaseSection from "../components/aboutUs/about/TeamShowcaseSection";
import MarketingServices from "../components/aboutUs/about/MarketingServices";

export default function AboutUs() {
  return (
    <div>
      <AboutHomePage></AboutHomePage>
      {/* <FeaturesSection></FeaturesSection> */}
      <Reviews></Reviews>
      <AboutSection></AboutSection>
      <TeamShowcaseSection></TeamShowcaseSection>
      <MarketingServices></MarketingServices>
    </div>
  );
}
