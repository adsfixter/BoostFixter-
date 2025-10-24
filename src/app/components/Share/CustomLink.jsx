import Link from 'next/link'
import React from 'react'

export default function CustomLink({text, link}) {
  return (
    <Link
                href="#_"
                className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold group "
              >
                {/* bottom left */}
                <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 text-secondary transition-all duration-300  group-hover:w-full group-hover:h-full"></span>
                
                {/* top right */}
                <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 text-secondary transition-all duration-300 group-hover:w-full group-hover:h-full"></span>

                {/* Full border on hover */}
                {/* <span className="absolute inset-0 transition-all duration-300 border-2 border-transparent pointer-events-none group-hover:border-red-500"></span> */}
                {/* Content */}
                <span className="relative flex items-center gap-2">
                {text}
                </span>
              </Link>
  )
}
