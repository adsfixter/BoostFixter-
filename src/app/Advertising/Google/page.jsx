import FacebookConsultation from '@/app/components/advertising/Facebook/FacebookConsultation'
import GoogleAds from '@/app/components/advertising/Google/GoogleAds'
import GooglePricing from '@/app/components/advertising/Google/GooglePricing'
import WhatWeDoGoogle from '@/app/components/advertising/Google/WhatWeDoGoogle'
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
