import FacebookConsultation from '@/app/components/advertising/Facebook/FacebookConsultation'
import AdvertisingInvestment from '@/app/components/advertising/Google/AdvertisingInvestment'
import AdvertisingWithGoogle from '@/app/components/advertising/Google/AdvertisingWithGoogle'
import BusinessManagement from '@/app/components/advertising/Google/BusinessManagement'
import Difference from '@/app/components/advertising/Google/Difference'
import GoogleAds from '@/app/components/advertising/Google/GoogleAds'
import GoogleAdsManager from '@/app/components/advertising/Google/GoogleAdsManager'
import GoogleFaq from '@/app/components/advertising/Google/GoogleFaq'
import GoogleHero from '@/app/components/advertising/Google/GoogleHero'
import GooglePricing from '@/app/components/advertising/Google/GooglePricing'
import ManagementProcess from '@/app/components/advertising/Google/ManagementProcess'
import NeedGoogleManager from '@/app/components/advertising/Google/NeedGoogleManager'
import ThrivesGoogleServices from '@/app/components/advertising/Google/ThrivesGoogleServices'
import WhatWeDoGoogle from '@/app/components/advertising/Google/WhatWeDoGoogle'
import WhyChooseThrive from '@/app/components/advertising/Google/WhyChooseThrive'
import React from 'react'

export default function Google() {
  return (
 
    <div>
      <GoogleAds></GoogleAds>
      <WhatWeDoGoogle></WhatWeDoGoogle>
      <GooglePricing></GooglePricing>
      <FacebookConsultation></FacebookConsultation>
      {/* <GoogleHero></GoogleHero>
      <NavigateHero text={"Advertising"} existingPage={"Google Ads Services"}></NavigateHero>
      <AdvertisingInvestment></AdvertisingInvestment>
      <NeedGoogleManager></NeedGoogleManager>
      <AdvertisingWithGoogle></AdvertisingWithGoogle>
      <GoogleAdsManager></GoogleAdsManager>
      <Difference></Difference>
      <BusinessManagement></BusinessManagement>
      <ThrivesGoogleServices></ThrivesGoogleServices>
      <ManagementProcess></ManagementProcess>
      <WhyChooseThrive></WhyChooseThrive>
      <GoogleFaq></GoogleFaq> */}
    </div>
  )
}
