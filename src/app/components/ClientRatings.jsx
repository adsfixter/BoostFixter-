import Image from 'next/image'
import React from 'react'

const ratings = [
  { id: 1, image: "/ClientRatings/trustpilot-review-mono.png", link: "https://example.com/service1" },
  { id: 2, image: "/ClientRatings/sortlist.png", link: "https://example.com/service2" },
  { id: 3, image: "/ClientRatings/facebook-review-mono.png", link: "https://example.com/service3" },
  { id: 4, image: "/ClientRatings/GoodFirms.png", link: "https://example.com/service4" },
  { id: 5, image: "/ClientRatings/DesignRush.png", link: "https://example.com/service5" },
  { id: 6, image: "/ClientRatings/clutch-review.png", link: "https://example.com/service6" }
]

export default function ClientRatings() {
  return (
    <section className='bg-gray-50 px-6 py-20 md:px-12 md:py-32'>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-12 text-gray-900">
          Explore{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Client Ratings</span>
            <span className="absolute left-0 bottom-4 w-80 h-2 bg-secondary z-0"></span>
          </span>{" "}
          Showcase
              </h1>
              

              <div className='flex'>
                   <Image src="/ClientRatings/review-asset-5-min.png" className='mr-8'
      alt="Picture of the author"
      width={50}
                  height={50}
              ></Image>
                  <div className="flex sm:flex-2 gap-4">
  {ratings.map(rating => (
    <a 
      key={rating.id} 
      href={rating.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className=""
    >
      <img 
        src={rating.image} 
        alt={`Client Rating ${rating.id}`} 
        className=""
      />
    </a>
  ))}
              </div>
              <Image src="/ClientRatings/review-asset-4-min.png"
      alt="Picture of the author"
      width={50}
                  height={50}
              ></Image>
       </div>
      </div>
    </section>
  )
}
