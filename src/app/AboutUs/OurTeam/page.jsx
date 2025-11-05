"use client";

import CareerOpportunities from "@/app/components/aboutUs/about/CareerOpportunities";
import BoostfixterFamily from "@/app/components/aboutUs/OurTeam/BoostfixterFamily";
import TeamInsights from "@/app/components/aboutUs/OurTeam/TeamInsights";
import React from "react";

const OurTeam = () => {
  return (
    <section >
      <BoostfixterFamily></BoostfixterFamily>
      <CareerOpportunities></CareerOpportunities>
      <TeamInsights></TeamInsights>
    </section>
  );
};

export default OurTeam;
