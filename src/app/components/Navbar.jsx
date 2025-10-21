"use client";
import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-gray-900 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left: Logo + Name */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-10 h-10 cursor-pointer"
            />
          </Link>
          <Link href="/">
            <span className="font-bold text-xl cursor-pointer mx-3 text-gray-800">
              Boost Fixter LLC
            </span>
          </Link>
        </div>

        {/* Right: Links + Button (Desktop) */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            <li className="hover:text-red-600 transition">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-red-600 transition">
              <Link href="/services">Services</Link>
            </li>
            <li className="hover:text-red-600 transition">
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className="hover:text-red-600 transition">
              <Link href="/case-study">Case Study</Link>
            </li>
            <li className="hover:text-red-600 transition">
              <Link href="/get-in-touch">Get in Touch</Link>
            </li>
          </ul>

          <Link href="/join-ui">
            <button className="bg-red-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-red-700 transition">
              Join Us
            </button>
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-7 h-7 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white text-gray-900 flex flex-col items-center md:hidden py-4 space-y-4 shadow-md">
            <li className="list-none hover:text-red-600 transition">
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className="list-none hover:text-red-600 transition">
              <Link href="/services" onClick={() => setIsOpen(false)}>
                Services
              </Link>
            </li>
            <li className="list-none hover:text-red-600 transition">
              <Link href="/portfolio" onClick={() => setIsOpen(false)}>
                Portfolio
              </Link>
            </li>
            <li className="list-none hover:text-red-600 transition">
              <Link href="/case-study" onClick={() => setIsOpen(false)}>
                Case Study
              </Link>
            </li>
            <li className="list-none hover:text-red-600 transition">
              <Link href="/get-in-touch" onClick={() => setIsOpen(false)}>
                Get in Touch
              </Link>
            </li>
            <Link href="/join-ui" onClick={() => setIsOpen(false)}>
              <button className="bg-red-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-red-700 transition">
                Join Us
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
