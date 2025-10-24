import Image from 'next/image'
import React from 'react'

export default function GraphicsDeliver() {
  return (
      <div className="py-20 px-6 bg-red-700">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-20">
              <div className='grid grid-cols-2 gap-8'>
                  {/* left site */}
                  <div className=''>
                      <Image
                                              src="/portfolio/Graphics.png"
                                              alt="Boost Fixter LLC "
                                              width={600}
                                              height={100}
                                              className=" object-cover "
                                  />
                  </div>
                  {/* right site */}
                  <div className='mt-8'>
                      <h1 className='text-3xl font-semibold mb-5'>
                          Graphics that Deliver Business Growth
                      </h1>
                          At IMBD Agency, our commitment to delivering business growth through impactful design has been unwavering since 2016. Our global and local clients have witnessed the transformative power of our visuals, meticulously crafted by our dynamic graphic design team. Each project is a success story, showcasing how our designs play a vital role in achieving our clients’ goals. We take pride in our ability to create visuals that not only captivate but also drive tangible business results. Explore our portfolio and witness firsthand the potential of graphics that deliver business growth.<br/> <br/>

                      <p>
 

Our portfolio stands as a testament to the success stories woven into each project, illustrating the pivotal role our designs play in realizing and surpassing our clients’ goals. We consider every undertaking not merely as an assignment but as an opportunity to create visual narratives that resonate and drive tangible business results.
                      </p>
                  </div>
                  
              </div>
              
          </div>
          
    </div>
  )
}
