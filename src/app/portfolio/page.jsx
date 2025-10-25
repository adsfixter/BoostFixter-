import React from 'react'
import PortfolioHomePage from '../components/portfolio/portfolioHomePage/home'
import ContentSection from '../components/portfolio/contentSection'
import PortfolioVideo from '../components/portfolio/PortfolioVideo'
import SomeExplainerVideo from '../components/portfolio/SomeExplainerVideo'
import GraphicsDeliver from '../components/portfolio/GraphicsDeliver'
import SEOProjects from '../components/portfolio/SEOProjects'
import BusinessProposes from '../components/portfolio/BusinessProposes'
import WebApplications from '../components/portfolio/WebApplications'
import VoiceOver from '../components/portfolio/VoiceOver'

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
