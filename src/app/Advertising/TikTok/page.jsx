import NeedsTikTokAdvertising from '@/app/components/advertising/TikTok/NeedsTikTokAdvertising'
import ThrivesTikTokServices from '@/app/components/advertising/TikTok/ThrivesTikTokServices'
import TikTokAdManagement from '@/app/components/advertising/TikTok/TikTokAdManagement'
import TikTokAds from '@/app/components/advertising/TikTok/TikTokAds'
import TikTokAdvertising from '@/app/components/advertising/TikTok/TikTokAdvertising'
import TikTokAdvertisingProcess from '@/app/components/advertising/TikTok/TikTokAdvertisingProcess'
import TikTokCampaignsAchieve from '@/app/components/advertising/TikTok/TikTokCampaignsAchieve'
import TikTokFaq from '@/app/components/advertising/TikTok/TikTokFaq'
import TikTokHero from '@/app/components/advertising/TikTok/TikTokHero'
import Reviews from '@/app/components/services/WebDevelopment/Reviews'
import NavigateHero from '@/app/components/Share/NavigateHero'
import React from 'react'

export default function TikTok() {
  return (
    <div>
      <TikTokHero></TikTokHero>
      <NavigateHero text={"Advertising"} existingPage={"TikTok Advertisting"}></NavigateHero>
      <TikTokCampaignsAchieve></TikTokCampaignsAchieve>
      <Reviews></Reviews>
      <TikTokAds></TikTokAds>
      <TikTokAdvertising></TikTokAdvertising>
      <NeedsTikTokAdvertising></NeedsTikTokAdvertising>
      <ThrivesTikTokServices></ThrivesTikTokServices>
      <TikTokAdvertisingProcess></TikTokAdvertisingProcess>
      <TikTokAdManagement></TikTokAdManagement>
      <TikTokFaq></TikTokFaq>
    </div>
  )
}
