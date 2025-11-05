"use client";

import CareerOpportunities from "@/app/components/aboutUs/about/CareerOpportunities";
import BoostfixterFamily from "@/app/components/aboutUs/OurTeam/BoostfixterFamily";
import OurTeamHero from "@/app/components/aboutUs/OurTeam/OurTeamHero";
import TeamInsights from "@/app/components/aboutUs/OurTeam/TeamInsights";
import React from "react";

const OurTeam = () => {
  return (
    <section >
      <OurTeamHero></OurTeamHero>
      <BoostfixterFamily></BoostfixterFamily>
      <CareerOpportunities></CareerOpportunities>
      <TeamInsights></TeamInsights>
    </section>
  );
};

export default OurTeam;
