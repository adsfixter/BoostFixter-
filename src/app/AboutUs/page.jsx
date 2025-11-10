import React from "react";
import AboutHomePage from "../components/aboutUs/about/AboutHomePage";
import OurVision from "../components/aboutUs/about/OurVision";
import WorkProcess from "../components/aboutUs/about/WorkProcess";
import Squad from "../components/aboutUs/about/Squad";
import CareerOpportunities from "../components/aboutUs/about/CareerOpportunities";
import TalkAbout from "../components/aboutUs/about/TalkAbout";
import OurMemoriesMoments from "../components/aboutUs/about/OurMemoriesMoments";

export default function AboutUs() {
  return (
    <div>
      <AboutHomePage></AboutHomePage>
      <OurVision></OurVision>
      <OurMemoriesMoments></OurMemoriesMoments>
      <WorkProcess></WorkProcess>
      <Squad></Squad>
      <CareerOpportunities></CareerOpportunities>
      <TalkAbout></TalkAbout>
    </div>
  );
}
