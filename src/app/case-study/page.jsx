import React from 'react'
import ClickSwiperNavation from '../components/Share/ClickSwiperNavation'
import BusinessesGrow from '../components/case-study/BusinessesGrow'

export default function CaseStudy() {
  return (
    <div>
      <div className='py-20 px-6 bg-white mx-auto max-w-7xl sm:px-6 lg:px-8'>
         <ClickSwiperNavation></ClickSwiperNavation>
      </div>
      <BusinessesGrow></BusinessesGrow>
    </div>
  )
}
