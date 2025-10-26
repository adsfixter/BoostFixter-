import MediaProductionServices from '@/app/components/services/DesignMedia/MediaProductionServices'
import ProductionCompany from '@/app/components/services/DesignMedia/ProductionCompany'
import ProductionProcess from '@/app/components/services/DesignMedia/ProductionProcess'
import ProductionServices from '@/app/components/services/DesignMedia/ProductionServices'
import TestimonialVideos from '@/app/components/services/DesignMedia/TestimonialVideos'
import WhyMediaProduction from '@/app/components/services/DesignMedia/WhyMediaProduction'
import WorkSpeaks from '@/app/components/services/DesignMedia/WorkSpeaks'
import NavigateHero from '@/app/components/Share/NavigateHero'
import React from 'react'

export default function DesignMedia() {
  return (
    <div>
      <ProductionServices></ProductionServices>
      <NavigateHero text={"Services"} existingPage={"DesignMedia"}></NavigateHero>
      <ProductionCompany></ProductionCompany>
      <TestimonialVideos></TestimonialVideos>
      <WorkSpeaks></WorkSpeaks>
      <WhyMediaProduction></WhyMediaProduction>
      <MediaProductionServices></MediaProductionServices>
      <ProductionProcess></ProductionProcess>
    </div>
  )
}
