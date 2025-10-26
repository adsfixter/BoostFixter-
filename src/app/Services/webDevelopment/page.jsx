import DevelopmentAbout from '@/app/components/services/WebDevelopment/DevelopmentAbout'
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
    </div>
  )
}
