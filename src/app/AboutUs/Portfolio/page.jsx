import React from 'react'


import BusinessProposes from "@/app/components/portfolio/BusinessProposes";
import ContentSection from "@/app/components/portfolio/contentSection";
import GraphicsDeliver from "@/app/components/portfolio/GraphicsDeliver";
import PortfolioHomePage from "@/app/components/portfolio/portfolioHomePage/home";
import PortfolioVideo from "@/app/components/portfolio/PortfolioVideo";
import SEOProjects from "@/app/components/portfolio/SEOProjects";
import SomeExplainerVideo from "@/app/components/portfolio/SomeExplainerVideo";
import VoiceOver from "@/app/components/portfolio/VoiceOver";
import WebApplications from "@/app/components/portfolio/WebApplications";

export default function portfolio() {
  return (
    <div>
      <PortfolioHomePage></PortfolioHomePage>
      <ContentSection></ContentSection>
      <PortfolioVideo></PortfolioVideo>
      <SomeExplainerVideo></SomeExplainerVideo>
      <GraphicsDeliver></GraphicsDeliver>
      <WebApplications></WebApplications>
      <SEOProjects></SEOProjects>
      <VoiceOver></VoiceOver>
      <BusinessProposes></BusinessProposes>
      
     
    </div>
  )
}
