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
              <img
                src="/BoostFixter_Website.png"
                alt="BoostFixter Logo"
                className="h-8 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="items-center hidden gap-8 md:flex">
            {/* Home */}
            <Link
              href="/"
              className="font-medium text-primary transition hover:text-accent"
            >
              Home
            </Link>

            {/* Advertising Dropdown */}
            <div className="relative group">
              <Link
                href="/Advertising"
                className="flex items-center gap-1 font-medium text-primary transition hover:text-accent"
              >
                Advertising <ChevronDown size={16} />
              </Link>
              <div className="absolute left-0 invisible mt-2 transition-all duration-200 bg-white border border-gray-100 rounded-lg shadow-lg opacity-0 w-52 group-hover:opacity-100 group-hover:visible">
                <Link
                  href="/Advertising/Facebook"
                  className="block px-4 py-2 text-primary transition hover:text-accent hover:bg-gray-50"
                >
                  Facebook
                </Link>
                <Link
                  href="/Advertising/TikTok"
                  className="block px-4 py-2 border-t text-primary transition hover:text-accent hover:bg-gray-50"
                >
                  TikTok
                </Link>
                <Link
                  href="/Advertising/Google"
                  className="block px-4 py-2 border-t text-primary transition hover:text-accent hover:bg-gray-50"
                >
                  Google
                </Link>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <Link
                href="/Services"
                className="flex items-center gap-1 font-medium text-primary transition hover:text-accent"
              >
                Services <ChevronDown size={16} />
              </Link>
              <div className="absolute left-0 invisible mt-2 transition-all duration-200 bg-white border border-gray-100 rounded-lg shadow-lg opacity-0 w-52 group-hover:opacity-100 group-hover:visible">
                <Link
                  href="/Services/DesignMedia"
                  className="block px-4 py-2 text-primary transition hover:text-accent hover:bg-gray-50"
                >
                  Design Media
                </Link>
                <Link
                  href="/Services/webDevelopment"
                  className="block px-4 py-2 border-t text-primary transition hover:text-accent hover:bg-gray-50"
                >
                  Web Development
                </Link>
                <Link
                  href="/Services/CyberSecurity"
                  className="block px-4 py-2 border-t text-primary transition hover:text-accent hover:bg-gray-50"
                >
                  Cyber Security
                </Link>
              </div>
            </div>

            {/* About Us Dropdown */}
            <div className="relative group">
              <Link
                href="/AboutUs"
                className="flex items-center gap-1 font-medium text-primary transition hover:text-accent"
              >
                About Us <ChevronDown size={16} />
              </Link>
              <div className="absolute left-0 invisible mt-2 transition-all duration-200 bg-white border border-gray-100 rounded-lg shadow-lg opacity-0 w-52 group-hover:opacity-100 group-hover:visible">
                <Link
                  href="/AboutUs/Portfolio"
                  className="block px-4 py-2 text-primary transition hover:text-accent hover:bg-gray-50"
                >
                  Portfolio
                </Link>
                <Link
                  href="/AboutUs/OurTeam"
                  className="block px-4 py-2 border-t text-primary transition hover:text-accent hover:bg-gray-50"
                >
                  Our Team
                </Link>
                <Link
                  href="/AboutUs/PrivacyPolicy"
                  className="block px-4 py-2 border-t text-primary transition hover:text-accent hover:bg-gray-50"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>

            {/* Blog & Contact */}
            <Link
              href="/blog"
              className="font-medium text-primary transition hover:text-accent"
            >
              Blog
            </Link>

            <Link
              href="/Contact"
              className="font-medium text-primary transition hover:text-accent"
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
      </div>
    </header>
  );
}
