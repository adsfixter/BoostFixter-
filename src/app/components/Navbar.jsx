"use client"

import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="font-bold text-xl text-blue-700">BoostFixter</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-gray-700">
            <Link href="/" className="hover:text-blue-600 transition font-medium">
              Home
            </Link>

            {/* Services */}
            <div className="relative group">
              <Link
                href="/services"
                className="flex items-center gap-1 hover:text-blue-600 transition font-medium"
              >
                Services <ChevronDown size={16} />
              </Link>
              <div className="absolute left-0 mt-2 w-52 bg-white shadow-lg border border-gray-100 rounded-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200">
                <Link href="/services/digital-marketing" className="block px-4 py-2 hover:bg-gray-50">
                  Digital Marketing
                </Link>
                <Link href="/services/development" className="block px-4 py-2 hover:bg-gray-50 border-t">
                  Web Design & Development
                </Link>
                <Link href="/services/creativeSolution" className="block px-4 py-2 hover:bg-gray-50 border-t">
                  Creative Solution
                </Link>
                <Link href="/services/video-production" className="block px-4 py-2 hover:bg-gray-50 border-t">
                  Video Production
                </Link>
              </div>
            </div>

            <Link href="/portfolio" className="hover:text-blue-600 transition font-medium">
              Portfolio
            </Link>
            <Link href="/case-study" className="hover:text-blue-600 transition font-medium">
              Case Study
            </Link>
            <Link href="/blog" className="hover:text-blue-600 transition font-medium">
              Blog
            </Link>

            {/* Get in Touch */}
            <div className="relative group">
              <Link
                href="/contact-us"
                className="flex items-center gap-1 hover:text-blue-600 transition font-medium"
              >
                Get in Touch <ChevronDown size={16} />
              </Link>
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-lg shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/about-us" className="block px-4 py-2 hover:bg-gray-50">
                  About Us
                </Link>
                <Link href="/our-team" className="block px-4 py-2 hover:bg-gray-50 border-t">
                  Our Team
                </Link>
                <Link href="/career" className="block px-4 py-2 hover:bg-gray-50 border-t">
                  Career
                </Link>
                <Link href="/contact-us" className="block px-4 py-2 hover:bg-gray-50 border-t">
                  Contact Us
                </Link>
              </div>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden flex flex-col gap-1 pb-4 mt-2 text-gray-700">
            <Link href="/" className="py-2 px-3 rounded hover:bg-gray-100">
              Home
            </Link>

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => toggleDropdown("services")}
                className="w-full text-left py-2 px-3 flex justify-between items-center hover:bg-gray-100 rounded"
              >
                Services
                <ChevronDown size={16} className={`${openDropdown === "services" ? "rotate-180" : ""} transition-transform`} />
              </button>
              {openDropdown === "services" && (
                <div className="pl-4 flex flex-col">
                  <Link href="/services/digital-marketing" className="py-2 px-3 hover:bg-gray-50 text-sm">
                    Digital Marketing
                  </Link>
                  <Link href="/services/web-design" className="py-2 px-3 hover:bg-gray-50 text-sm">
                    Web Design & Development
                  </Link>
                  <Link href="/services/creative-solution" className="py-2 px-3 hover:bg-gray-50 text-sm">
                    Creative Solution
                  </Link>
                  <Link href="/services/video-production" className="py-2 px-3 hover:bg-gray-50 text-sm">
                    Video Production
                  </Link>
                </div>
              )}
            </div>

            <Link href="/portfolio" className="py-2 px-3 rounded hover:bg-gray-100">
              Portfolio
            </Link>
            <Link href="/case-study" className="py-2 px-3 rounded hover:bg-gray-100">
              Case Study
            </Link>
            <Link href="/blog" className="py-2 px-3 rounded hover:bg-gray-100">
              Blog
            </Link>

            {/* Mobile Get in Touch */}
            <div>
              <button
                onClick={() => toggleDropdown("getintouch")}
                className="w-full text-left py-2 px-3 flex justify-between items-center hover:bg-gray-100 rounded"
              >
                Get in Touch
                <ChevronDown size={16} className={`${openDropdown === "getintouch" ? "rotate-180" : ""} transition-transform`} />
              </button>
              {openDropdown === "getintouch" && (
                <div className="pl-4 flex flex-col">
                  <Link href="/about-us" className="py-2 px-3 hover:bg-gray-50 text-sm">
                    About Us
                  </Link>
                  <Link href="/our-team" className="py-2 px-3 hover:bg-gray-50 text-sm">
                    Our Team
                  </Link>
                  <Link href="/career" className="py-2 px-3 hover:bg-gray-50 text-sm">
                    Career
                  </Link>
                  <Link href="/contact-us" className="py-2 px-3 hover:bg-gray-50 text-sm">
                    Contact Us
                  </Link>
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
