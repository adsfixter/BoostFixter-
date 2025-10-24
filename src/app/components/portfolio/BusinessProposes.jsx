import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const links = [
  "Creative Web Design",
  "SEO Optimization",
  "Digital Branding",
  "E-commerce Solutions",
  "Social Media Strategy",
  "Content Marketing",
  "UI/UX Design",
  "Mobile App Development",
  "Lead Generation",
  "Video Marketing",
  "Email Campaigns",
  "Website Maintenance",
  "Conversion Tracking",
  "Performance Analysis",
  "Cloud Integration",
  "Online Reputation",
  "Analytics & Reporting",
  "Client Support & Training",
]

export default function BusinessProposes() {
  return (
    <section className="bg-gray-50 px-6 py-20 md:px-12 md:py-32">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
          A Creative Website can fulfil <br /> business proposes
        </h1>

        {/* Content Grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Side - Links */}
          <div className="flex flex-wrap gap-4">
            {links.map((item, index) => (
              <Link
                href="#"
                key={index}
                className="bg-secondary font-medium py-2 px-5 flex items-center hover:bg-primary transition-all duration-300 whitespace-nowrap"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right Side - Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full overflow-hidden h-[500px] shadow-lg">
              <Image
                src="/portfolio/website.jpg"
                alt="Agency office workspace"
                fill
                className="object-cover"
                          />
                         
                      </div>
                       <Link
                              href='#'
                              className=' absolute bottom-12 right-12 border p-2 hover:bg-secondary text-white'
                          >
                              Visit Site
                          </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
