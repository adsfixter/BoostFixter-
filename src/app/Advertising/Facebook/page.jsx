import AdManagement from '@/app/components/advertising/Facebook/AdManagement'
import CampaignsAchieve from '@/app/components/advertising/Facebook/CampaignsAchieve'
import FacebookAds from '@/app/components/advertising/Facebook/FacebookAds'
import FacebookAdvertising from '@/app/components/advertising/Facebook/FacebookAdvertising'
import FacebookAdvertisingProcess from '@/app/components/advertising/Facebook/FacebookAdvertisingProcess'
import FacebookFaq from '@/app/components/advertising/Facebook/FacebookFaq'
import FacebookHero from '@/app/components/advertising/Facebook/FacebookHero'
import NeedsFacebookAdvertising from '@/app/components/advertising/Facebook/NeedsFacebookAdvertising'
import ThrivesFacebookServices from '@/app/components/advertising/Facebook/ThrivesFacebookServices'
import Reviews from '@/app/components/services/WebDevelopment/Reviews'
import NavigateHero from '@/app/components/Share/NavigateHero'
import React from 'react'

export default function Facebook() {
  return (
    <div>
      <FacebookHero></FacebookHero>
      <NavigateHero text={"Advertising"} existingPage={"Facebook Advertising"}></NavigateHero>
      <CampaignsAchieve></CampaignsAchieve>
      <Reviews></Reviews>
      <FacebookAds></FacebookAds>
      <FacebookAdvertising></FacebookAdvertising>
      <NeedsFacebookAdvertising></NeedsFacebookAdvertising>
      <ThrivesFacebookServices></ThrivesFacebookServices>
      <FacebookAdvertisingProcess></FacebookAdvertisingProcess>
      <AdManagement></AdManagement>
      <FacebookFaq></FacebookFaq>
    </div>
  )
}
