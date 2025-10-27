import AwardsAndRecognition from '@/app/components/services/WebDevelopment/AwardsAndRecognition'
import CaseStudiesSection from '@/app/components/services/WebDevelopment/CaseStudiesSection'
import ContactForm from '@/app/components/services/WebDevelopment/ContactForm'
import DevelopmentAbout from '@/app/components/services/WebDevelopment/DevelopmentAbout'
import DevelopmentFaq from '@/app/components/services/WebDevelopment/DevelopmentFaq'
import DevelopmentGrowth from '@/app/components/services/WebDevelopment/DevelopmentGrowth'
import DevelopmentSevrices from '@/app/components/services/WebDevelopment/DevelopmentServices'
import Reviews from '@/app/components/services/WebDevelopment/Reviews'
import ThrivesDevelopment from '@/app/components/services/WebDevelopment/ThrivesDevelopment'
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
      <AwardsAndRecognition></AwardsAndRecognition>
      <CaseStudiesSection></CaseStudiesSection>
      <ContactForm></ContactForm>
      <ThrivesDevelopment></ThrivesDevelopment>
      <DevelopmentFaq></DevelopmentFaq>
    </div>
  )
}
