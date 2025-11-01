import React from 'react'
import CustomButton from '../Share/CustomButton'
import Image from 'next/image'

export default function LatestProjects() {
  return (
      <div className='px-6'>
          <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
              {/* top div */}
              <div className='flex justify-between mb-12'>
                  <h1 className='text-accent font-bold text-3xl lg:text-6xl'>Our Latest Projects <br/>
                      We Have Done!</h1>
                  <CustomButton text={"See Our All Projects"} link={"#"}></CustomButton>
              </div>
              {/* main card div */}
              <div className='grid grid-cols-2 gap-4 justify-between'>
                  {/* left card div */}
                  <div className='space-y-20'>
                      {/* card 1 */}
                      <div className='space-y-3'>
                          <Image
                              width={200}
                              height={200}
                              alt='e-commerce'
                              src={"/HomePage/digital_marketing.png"}
                              className='w-[600px] h-[450px]'
                          ></Image>
                          <h1 className='text-primary font-normal text-2xl'>TrendTrunk</h1>
                          <p className='text-[#676E72] font-extrabold text-4xl'>E-commerce</p>
                      </div>
                      {/* card 2 */}
                        <div className='space-y-3'>
                          <Image
                              width={200}
                              height={200}
                              alt='e-commerce'
                              src={"/HomePage/digital_marketing.png"}
                              className='w-[600px] h-[450px]'
                          ></Image>
                          <h1 className='text-primary font-normal text-2xl'>Hey House</h1>
                          <p className='text-[#676E72] font-extrabold text-4xl'>Real Estate</p>
                      </div>
                  </div>
                  {/* right site card div */}
                    <div className='mt-30 space-y-20'>
                      {/* card 3 */}
                       <div className='space-y-3'>
                          <Image
                              width={200}
                              height={200}
                              alt='e-commerce'
                              src={"/HomePage/digital_marketing.png"}
                              className='w-[600px] h-[450px]'
                          ></Image>
                          <h1 className='text-primary font-normal text-2xl'>Green Eats</h1>
                          <p className='text-[#676E72] font-extrabold text-4xl'>Food Delivery</p>
                      </div>
                      {/* card 4 */}
                        <div className='space-y-3'>
                          <Image
                              width={200}
                              height={200}
                              alt='e-commerce'
                              src={"/HomePage/digital_marketing.png"}
                              className='w-[600px] h-[450px]'
                          ></Image>
                          <h1 className='text-primary font-normal text-2xl'>Dentix</h1>
                          <p className='text-[#676E72] font-extrabold text-4xl'>Dental Clinic</p>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}
