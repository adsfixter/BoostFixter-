import React from 'react'
import AdvertisHero from '../components/advertising/advertis/AdvertisHero'
import SocialMediaAds from '../components/advertising/advertis/SocialMediaAds'
import Reviews from '../components/services/WebDevelopment/Reviews'
import WhatSocialMediaAdvertising from '../components/advertising/advertis/WhatSocialMediaAdvertising'
import ContactForm from '../components/services/WebDevelopment/ContactForm'
import AdvertisingSectionSecond from '../components/advertising/advertis/AdvertisingSectionSecond'
import WhyNeedsAdvertising from '../components/advertising/advertis/WhyNeedsAdvertising'
import CaseStudies from '../components/advertising/advertis/CaseStudies'
import SocialMediaSection from '../components/advertising/advertis/SocialMediaSection'
import Awards from '../components/advertising/advertis/Awards'
import AdvertisFaq from '../components/advertising/advertis/AdvertisFaq'

export default function Advertising() {
  return (
      <div>
      <AdvertisHero></AdvertisHero>
      <SocialMediaAds></SocialMediaAds>
      <Reviews></Reviews>
      <WhatSocialMediaAdvertising></WhatSocialMediaAdvertising>
      <ContactForm></ContactForm>
      <AdvertisingSectionSecond></AdvertisingSectionSecond>
      <WhyNeedsAdvertising></WhyNeedsAdvertising>
      <CaseStudies></CaseStudies>
      <SocialMediaSection></SocialMediaSection>
      <Awards></Awards>
      <AdvertisFaq></AdvertisFaq>
    </div>
  )
}
