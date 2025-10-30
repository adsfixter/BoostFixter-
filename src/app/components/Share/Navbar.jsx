"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center rounded-lg">
              <img src="/BoostFixter_Website.png" alt="BoostFixter Logo" />
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="items-center hidden gap-8 text-gray-700 md:flex">
            <Link
              href="/"
              className="font-medium transition hover:text-red-600"
            >
              Home
            </Link>

            {/* advertising Dropdown */}
            <div className="relative group">
              <Link
                href="/Advertising"
                className="flex items-center gap-1 font-medium transition hover:text-red-600"
              >
                Advertising <ChevronDown size={16} />
              </Link>
              <div className="absolute left-0 invisible mt-2 transition-all duration-200 bg-white border border-gray-100 rounded-lg shadow-lg opacity-0 w-52 group-hover:opacity-100 group-hover:visible">
                <Link
                  href="/Advertising/Facebook"
                  className="block px-4 py-2 hover:bg-gray-50 hover:text-red-600"
                >
                  Facebook
                </Link>
                <Link
                  href="/Advertising/TikTok"
                  className="block px-4 py-2 border-t hover:bg-gray-50 hover:text-red-600"
                >
                  TikTok
                </Link>
                <Link
                  href="/Advertising/Google"
                  className="block px-4 py-2 border-t hover:bg-gray-50 hover:text-red-600"
                >
                  Google
                </Link>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <Link
                href="/Services"
                className="flex items-center gap-1 font-medium transition hover:text-red-600"
              >
                Services <ChevronDown size={16} />
              </Link>
              <div className="absolute left-0 invisible mt-2 transition-all duration-200 bg-white border border-gray-100 rounded-lg shadow-lg opacity-0 w-52 group-hover:opacity-100 group-hover:visible">
                <Link
                  href="/Services/DesignMedia"
                  className="block px-4 py-2 hover:bg-gray-50 hover:text-red-600"
                >
                  Design Media
                </Link>
                <Link
                  href="/Services/webDevelopment"
                  className="block px-4 py-2 border-t hover:bg-gray-50 hover:text-red-600"
                >
                  Web Development
                </Link>
                <Link
                  href="/Services/CyberSecurity"
                  className="block px-4 py-2 border-t hover:bg-gray-50 hover:text-red-600"
                >
                  Cyber Security
                </Link>
              </div>
            </div>

            {/* About us Dropdown */}
            <div className="relative group">
              <Link
                href="/AboutUs"
                className="flex items-center gap-1 font-medium transition hover:text-red-600"
              >
                About Us <ChevronDown size={16} />
              </Link>
              <div className="absolute left-0 invisible mt-2 transition-all duration-200 bg-white border border-gray-100 rounded-lg shadow-lg opacity-0 w-52 group-hover:opacity-100 group-hover:visible">
                <Link
                  href="/AboutUs/Portfolio"
                  className="block px-4 py-2 hover:bg-gray-50 hover:text-red-600"
                >
                  Portfolio
                </Link>
                <Link
                  href="/AboutUs/OurTeam"
                  className="block px-4 py-2 border-t hover:bg-gray-50 hover:text-red-600"
                >
                  Our Team
                </Link>
                <Link
                  href="/AboutUs/PrivacyPolicy"
                  className="block px-4 py-2 border-t hover:bg-gray-50 hover:text-red-600"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>

            {/* <Link href="/portfolio" className="font-medium transition hover:text-red-600">
              Portfolio
            </Link>
            <Link href="/case-study" className="font-medium transition hover:text-red-600">
              Case Study
            </Link> */}
            <Link
              href="/blog"
              className="font-medium transition hover:text-red-600"
            >
              Blog
            </Link>

            <Link
              href="/Contact"
              className="font-medium transition hover:text-red-600"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="text-gray-700 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="flex flex-col gap-1 pb-4 mt-2 text-gray-700 md:hidden">
            <Link
              href="/"
              className="px-3 py-2 rounded hover:bg-gray-100 hover:text-red-600"
            >
              Home
            </Link>

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => toggleDropdown("services")}
                className="flex items-center justify-between w-full px-3 py-2 text-left rounded hover:bg-gray-100 hover:text-red-600"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`${
                    openDropdown === "services" ? "rotate-180" : ""
                  } transition-transform`}
                />
              </button>
              {openDropdown === "services" && (
                <div className="flex flex-col pl-4">
                  <Link
                    href="/services/digital-marketing"
                    className="px-3 py-2 text-sm hover:bg-gray-50 hover:text-red-600"
                  >
                    Digital Marketing
                  </Link>
                  <Link
                    href="/services/development"
                    className="px-3 py-2 text-sm hover:bg-gray-50 hover:text-red-600"
                  >
                    Web Design & Development
                  </Link>
                  <Link
                    href="/services/creative-solution"
                    className="px-3 py-2 text-sm hover:bg-gray-50 hover:text-red-600"
                  >
                    Creative Solution
                  </Link>
                  <Link
                    href="/services/video-production"
                    className="px-3 py-2 text-sm hover:bg-gray-50 hover:text-red-600"
                  >
                    Video Production
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/blog"
              className="px-3 py-2 rounded hover:bg-gray-100 hover:text-red-600"
            >
              Blog
            </Link>

            {/* Mobile Get in Touch */}
            <div>
              <button
                onClick={() => toggleDropdown("getintouch")}
                className="flex items-center justify-between w-full px-3 py-2 text-left rounded hover:bg-gray-100 hover:text-red-600"
              >
                Get in Touch
                <ChevronDown
                  size={16}
                  className={`${
                    openDropdown === "getintouch" ? "rotate-180" : ""
                  } transition-transform`}
                />
              </button>
              {openDropdown === "getintouch" && (
                <div className="flex flex-col pl-4">
                  <Link
                    href="/getInTouch/about-us"
                    className="px-3 py-2 text-sm hover:bg-gray-50 hover:text-red-600"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/getInTouch/our-team"
                    className="px-3 py-2 text-sm hover:bg-gray-50 hover:text-red-600"
                  >
                    Our Team
                  </Link>
                  <Link
                    href="/getInTouch/career"
                    className="px-3 py-2 text-sm hover:bg-gray-50 hover:text-red-600"
                  >
                    Career
                  </Link>
                  <Link
                    href="/getInTouch/contactUs"
                    className="px-3 py-2 text-sm hover:bg-gray-50 hover:text-red-600"
                  >
                    Contact Us
                  </Link>
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
