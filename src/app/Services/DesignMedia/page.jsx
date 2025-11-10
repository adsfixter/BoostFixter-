import FAQPage from '@/app/components/services/DesignMedia/FAQPage'
import MediaProductionServices from '@/app/components/services/DesignMedia/MediaProductionServices'
import ProductionCompany from '@/app/components/services/DesignMedia/ProductionCompany'
import ProductionProcess from '@/app/components/services/DesignMedia/ProductionProcess'
import ProductionServices from '@/app/components/services/DesignMedia/ProductionServices'
import TestimonialVideos from '@/app/components/services/DesignMedia/TestimonialVideos'
import WhyChooseProduction from '@/app/components/services/DesignMedia/WhyChooseProduction'
import WhyMediaProduction from '@/app/components/services/DesignMedia/WhyMediaProduction'
import WorkSpeaks from '@/app/components/services/DesignMedia/WorkSpeaks'

import React from 'react'

export default function DesignMedia() {
  return (
    <div>
      <ProductionServices></ProductionServices>
      <ProductionCompany></ProductionCompany>
      <TestimonialVideos></TestimonialVideos>
      <WorkSpeaks></WorkSpeaks>
      <WhyMediaProduction></WhyMediaProduction>
      <MediaProductionServices></MediaProductionServices>
      <ProductionProcess></ProductionProcess>
      <WhyChooseProduction></WhyChooseProduction>
      <FAQPage></FAQPage>
    </div>
  )
}
