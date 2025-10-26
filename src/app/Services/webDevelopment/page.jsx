import AwardsAndRecognition from '@/app/components/services/WebDevelopment/AwardsAndRecognition'
import CaseStudiesSection from '@/app/components/services/WebDevelopment/CaseStudiesSection'
import ContactForm from '@/app/components/services/WebDevelopment/ContactForm'
import DevelopmentAbout from '@/app/components/services/WebDevelopment/DevelopmentAbout'
import DevelopmentGrowth from '@/app/components/services/WebDevelopment/DevelopmentGrowth'
import DevelopmentSevrices from '@/app/components/services/WebDevelopment/DevelopmentServices'
import Reviews from '@/app/components/services/WebDevelopment/Reviews'
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
    </div>
  )
}
