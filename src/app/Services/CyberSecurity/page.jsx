import CyberSecurityHero from '@/app/components/services/CyberSecurity/CyberSecurityHero'
import OurServices from '@/app/components/services/CyberSecurity/OurServices'
import Pricing from '@/app/components/services/CyberSecurity/Pricing'
import SecurityFeatures from '@/app/components/services/CyberSecurity/SecurityFeatures'
import Solutions from '@/app/components/services/CyberSecurity/Solutions'
import Testimonials from '@/app/components/services/CyberSecurity/Testimonials'
import Threats from '@/app/components/services/CyberSecurity/Threats'
import Reviews from '@/app/components/services/WebDevelopment/Reviews'
import React from 'react'

export default function CyberSecurity() {
  return (
    <div>
      <CyberSecurityHero></CyberSecurityHero>
      <SecurityFeatures></SecurityFeatures>
      <OurServices></OurServices>
      <Reviews></Reviews>
      <Threats></Threats>
      <Solutions></Solutions>
      <Testimonials></Testimonials>
      <Pricing></Pricing>
    </div>
  )
}
