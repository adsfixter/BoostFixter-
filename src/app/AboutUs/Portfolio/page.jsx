"use client"

import React from "react"
import Link from "next/link"

import BusinessProposes from "@/app/components/portfolio/BusinessProposes"
import ContentSection from "@/app/components/portfolio/contentSection"
import GraphicsDeliver from "@/app/components/portfolio/GraphicsDeliver"
import PortfolioHomePage from "@/app/components/portfolio/portfolioHomePage/home"
import PortfolioVideo from "@/app/components/portfolio/PortfolioVideo"
import SEOProjects from "@/app/components/portfolio/SEOProjects"
import SomeExplainerVideo from "@/app/components/portfolio/SomeExplainerVideo"
import VoiceOver from "@/app/components/portfolio/VoiceOver"
import WebApplications from "@/app/components/portfolio/WebApplications"

export default function Portfolio() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[40vh] flex items-center my-10 justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-6 text-center text-white">
          <h1 className="mb-4 text-3xl font-extrabold tracking-wide md:text-5xl">
            Contact
          </h1>
          <div className="flex items-center justify-center space-x-2 text-lg">
            <Link
              href="/"
              className="hover:underline hover:text-[#0AB99D] transition"
            >
              Home
            </Link>
            <span>||</span>
            <Link href="" className="text-[#0AB99D] font-semibold">
              Contact
            </Link>
          </div>
        </div>
      </section>

      <PortfolioHomePage />
      <ContentSection />
      <PortfolioVideo />
      <SomeExplainerVideo />
      <GraphicsDeliver />
      <WebApplications />
      <SEOProjects />
      <VoiceOver />
      <BusinessProposes />
    </div>
  )
}
