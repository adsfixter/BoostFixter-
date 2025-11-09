import React from 'react'
import AdvertisHero from '../components/advertising/advertis/AdvertisHero'

import SocialMediaSection from '../components/advertising/advertis/SocialMediaSection'

import AdvertisFaq from '../components/advertising/advertis/AdvertisFaq'
import OurAdsExperts from '../components/advertising/advertis/OurAdsExperts'

export default function Advertising() {
  return (
      <div>
      <AdvertisHero></AdvertisHero>
      
      
      <SocialMediaSection></SocialMediaSection>
     <OurAdsExperts></OurAdsExperts>
      {/* <AdvertisFaq></AdvertisFaq> */}
    </div>
  )
}
