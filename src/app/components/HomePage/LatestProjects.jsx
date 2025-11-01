import React from 'react'
import CustomButton from '../Share/CustomButton'

export default function LatestProjects() {
  return (
      <div className='px-6'>
          <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
              <div className='flex'>
                  <h1 className='text-accent font-extrabold text-3xl lg:text-6xl'>Our Latest Projects
                      We Have Done!</h1>
                  <CustomButton text={"See Our All Projects"} link={"#"}></CustomButton>
              </div>
          </div>
    </div>
  )
}
