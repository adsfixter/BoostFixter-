import React from 'react'
import PortfolioHomePage from '../components/portfolio/portfolioHomePage/home'
import ContentSection from '../components/portfolio/contentSection'
import PortfolioVideo from '../components/portfolio/PortfolioVideo'
import SomeExplainerVideo from '../components/portfolio/SomeExplainerVideo'

export default function portfolio() {
  return (
    <div>
     <PortfolioHomePage></PortfolioHomePage>
      <ContentSection></ContentSection>
      <PortfolioVideo></PortfolioVideo>
      <SomeExplainerVideo></SomeExplainerVideo>
    </div>
  )
}
