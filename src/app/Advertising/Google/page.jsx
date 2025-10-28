import AdvertisingInvestment from '@/app/components/advertising/Google/AdvertisingInvestment'
import AdvertisingWithGoogle from '@/app/components/advertising/Google/AdvertisingWithGoogle'
import BusinessManagement from '@/app/components/advertising/Google/BusinessManagement'
import Difference from '@/app/components/advertising/Google/Difference'
import GoogleAdsManager from '@/app/components/advertising/Google/GoogleAdsManager'
import GoogleFaq from '@/app/components/advertising/Google/GoogleFaq'
import GoogleHero from '@/app/components/advertising/Google/GoogleHero'
import ManagementProcess from '@/app/components/advertising/Google/ManagementProcess'
import NeedGoogleManager from '@/app/components/advertising/Google/NeedGoogleManager'
import ThrivesGoogleServices from '@/app/components/advertising/Google/ThrivesGoogleServices'
import WhyChooseThrive from '@/app/components/advertising/Google/WhyChooseThrive'
import NavigateHero from '@/app/components/Share/NavigateHero'
import React from 'react'

export default function Google() {
  return (
 
    <div>
      <GoogleHero></GoogleHero>
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
      <GoogleFaq></GoogleFaq>
    </div>
  )
}
