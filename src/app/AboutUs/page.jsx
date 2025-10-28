import React from "react";
import AboutHomePage from "../components/aboutUs/about/AboutHomePage";
import FeaturesSection from "../components/aboutUs/about/FeaturesSection";
import Reviews from "../components/services/WebDevelopment/Reviews";
import AboutSection from "../components/aboutUs/about/AboutSection";
import TeamShowcaseSection from "../components/aboutUs/about/TeamShowcaseSection";
import MarketingServices from "../components/aboutUs/about/MarketingServices";
// import CoreValuesTree from "../components/aboutUs/about/CoreValuesTree";
import CompanyHistory from "../components/aboutUs/about/CompanyHistory";
import Link from "next/link";

export default function AboutUs() {
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
        <div className="absolute inset-0 bg-black/50"></div>
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


      <AboutHomePage></AboutHomePage>
      {/* <FeaturesSection></FeaturesSection> */}
      <Reviews></Reviews>
      <AboutSection></AboutSection>
      <TeamShowcaseSection></TeamShowcaseSection>
      <MarketingServices></MarketingServices>
      {/* <CoreValuesTree></CoreValuesTree> */}
      <CompanyHistory></CompanyHistory>
    </div>
  );
}
