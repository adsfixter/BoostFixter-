import AwardsAndRecognition from '@/app/components/services/WebDevelopment/AwardsAndRecognition'
import CaseStudiesSection from '@/app/components/services/WebDevelopment/CaseStudiesSection'
import CompetitiveAdvantages from '@/app/components/services/WebDevelopment/CompetitiveAdvantages'
import ContactForm from '@/app/components/services/WebDevelopment/ContactForm'
import DevelopmentAbout from '@/app/components/services/WebDevelopment/DevelopmentAbout'
import DevelopmentFaq from '@/app/components/services/WebDevelopment/DevelopmentFaq'
import DevelopmentGrowth from '@/app/components/services/WebDevelopment/DevelopmentGrowth'
import DevelopmentSevrices from '@/app/components/services/WebDevelopment/DevelopmentServices'
import DigitalPlaceholder from '@/app/components/services/WebDevelopment/DigitalPlaceholder'
import MetricsSection from '@/app/components/services/WebDevelopment/MetricsSection'
import Reviews from '@/app/components/services/WebDevelopment/Reviews'
import ServicesOptimization from '@/app/components/services/WebDevelopment/ServicesOptimization'
import ThrivesDevelopment from '@/app/components/services/WebDevelopment/ThrivesDevelopment'
import UserExperience from '@/app/components/services/WebDevelopment/UserExperience'
import WhyResponsiveWebDesign from '@/app/components/services/WebDevelopment/WhyResponsiveWebDesign'
import { WordPressServiceSection } from '@/app/components/services/WebDevelopment/WordPressServiceSection'
import NavigateHero from '@/app/components/Share/NavigateHero'
import React from 'react'

export default function webDevelopment() {
  return (
    <div>
      <DevelopmentSevrices></DevelopmentSevrices>
      <NavigateHero text={"Services"} existingPage={"WebDevelopment"}></NavigateHero>
      <DevelopmentAbout></DevelopmentAbout>
      <Reviews></Reviews>
      <DevelopmentGrowth></DevelopmentGrowth>
      <ContactForm></ContactForm>
      <DigitalPlaceholder></DigitalPlaceholder>
      <WhyResponsiveWebDesign></WhyResponsiveWebDesign>
      <CompetitiveAdvantages></CompetitiveAdvantages>
      <AwardsAndRecognition></AwardsAndRecognition>
      <UserExperience></UserExperience>
      <MetricsSection></MetricsSection>
      <ServicesOptimization></ServicesOptimization>
      <CaseStudiesSection></CaseStudiesSection>
      <WordPressServiceSection></WordPressServiceSection>
      <ThrivesDevelopment></ThrivesDevelopment>
      <DevelopmentFaq></DevelopmentFaq>
    </div>
  )
}
