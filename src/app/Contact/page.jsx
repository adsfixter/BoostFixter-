import React from 'react'
import ContactHero from '../components/contact/ContactHero'
import NeedConsultation from '../components/services/service/NeedConsultation'
import LocationMap from '../components/contact/LocationMap'

export default function Contact() {
  return (
    <div>
      <ContactHero></ContactHero>
      <LocationMap></LocationMap>
      <NeedConsultation></NeedConsultation>
    </div>
  )
}
