import FacebookConsultation from '@/app/components/advertising/Facebook/FacebookConsultation'
import TikTokAds from '@/app/components/advertising/TikTok/TikTokAds'
import TikTokPricing from '@/app/components/advertising/TikTok/TikTokPricing'
import WhatWeDoTikTok from '@/app/components/advertising/TikTok/WhatWeDoTikTok'
import React from 'react'

export default function TikTok() {
  return (
    <div>
      <TikTokAds></TikTokAds>
      <WhatWeDoTikTok></WhatWeDoTikTok>
      <TikTokPricing></TikTokPricing>
      <FacebookConsultation></FacebookConsultation>
    </div>
  )
}
