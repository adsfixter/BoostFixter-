import FacebookConsultation from '@/app/components/advertising/Facebook/FacebookConsultation'
import NeedsTikTokAdvertising from '@/app/components/advertising/TikTok/NeedsTikTokAdvertising'
import ThrivesTikTokServices from '@/app/components/advertising/TikTok/ThrivesTikTokServices'
import TikTokAdManagement from '@/app/components/advertising/TikTok/TikTokAdManagement'
import TikTokAds from '@/app/components/advertising/TikTok/TikTokAds'
import TikTokAdvertising from '@/app/components/advertising/TikTok/TikTokAdvertising'
import TikTokAdvertisingProcess from '@/app/components/advertising/TikTok/TikTokAdvertisingProcess'
import TikTokCampaignsAchieve from '@/app/components/advertising/TikTok/TikTokCampaignsAchieve'
import TikTokFaq from '@/app/components/advertising/TikTok/TikTokFaq'
import TikTokPricing from '@/app/components/advertising/TikTok/TikTokPricing'
import WhatWeDoTikTok from '@/app/components/advertising/TikTok/WhatWeDoTikTok'
import Reviews from '@/app/components/services/WebDevelopment/Reviews'
import React from 'react'

export default function TikTok() {
  return (
    <div>
      <TikTokAds></TikTokAds>
      <WhatWeDoTikTok></WhatWeDoTikTok>
      <TikTokPricing></TikTokPricing>
      <FacebookConsultation></FacebookConsultation>
      {/* <TikTokCampaignsAchieve></TikTokCampaignsAchieve>
      <Reviews></Reviews>
    
      <TikTokAdvertising></TikTokAdvertising>
      <NeedsTikTokAdvertising></NeedsTikTokAdvertising>
      <ThrivesTikTokServices></ThrivesTikTokServices>
      <TikTokAdvertisingProcess></TikTokAdvertisingProcess>
      <TikTokAdManagement></TikTokAdManagement>
      <TikTokFaq></TikTokFaq> */}
    </div>
  )
}
