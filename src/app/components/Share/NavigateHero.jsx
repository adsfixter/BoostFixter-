import { House } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function NavigateHero({text, existingPage}) {
  return (
      <div className='bg-[#F7FCEE] text-center'>
          <div className='flex justify-center gap-2 py-3'>
              <House />
              <Link
              href="#"
              >
              Home /
              </Link>
              <Link
              href="#"
              >
              {text} /
              </Link>
              <h1>{existingPage}</h1>
          </div>
    </div>
  )
}
