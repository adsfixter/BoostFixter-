import React from 'react'
import PortfolioHomePage from '../components/portfolio/portfolioHomePage/home'
import ContentSection from '../components/portfolio/contentSection'
import PortfolioVideo from '../components/portfolio/PortfolioVideo'

export default function portfolio() {
  return (
    <div>
     <PortfolioHomePage></PortfolioHomePage>
      <ContentSection></ContentSection>
      <PortfolioVideo></PortfolioVideo>
    </div>
  )
}
