import React from 'react'
import { Settings, CheckCircle, TrendingUp } from "lucide-react"

export default function FeaturesSection() {
  return (
    <section className="px-6 py-16 lg:px-32">
      <div className="grid gap-8 lg:grid-cols-3">

        {/* Generate Card */}
        <div className="flex flex-col items-center text-center">
          <div className="p-8 mb-4 bg-gray-100 rounded-2xl">
            <CheckCircle className="w-16 h-16 text-[#6B7F5A]" strokeWidth={1.5} />
          </div>
          <h3 className="mb-2 text-xl font-bold">GENERATE</h3>
          <p className="text-foreground/70">Targeted Results</p>
        </div>

        {/* Grow Card */}
        <div className="flex flex-col items-center text-center">
          <div className="p-8 mb-4 bg-gray-100 rounded-2xl">
            <TrendingUp className="w-16 h-16 text-[#6B7F5A]" strokeWidth={1.5} />
          </div>
          <h3 className="mb-2 text-xl font-bold">GROW</h3>
          <p className="text-foreground/70">Your Brand Online</p>
        </div>

        {/* Settings Card */}
        <div className="flex flex-col items-center text-center">
          <div className="p-8 mb-4 bg-gray-100 rounded-2xl">
            <Settings className="w-16 h-16 text-[#6B7F5A]" strokeWidth={1.5} />
          </div>
          <h3 className="mb-2 text-xl font-bold">OPTIMIZE</h3>
          <p className="text-foreground/70">Business Processes</p>
        </div>

      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col items-center justify-center gap-4 mt-12 sm:flex-row">
        <button className="bg-[#C87A1A] hover:bg-[#DB7803] text-white font-bold text-sm lg:text-base px-8 py-4 rounded-full transition-colors duration-300 uppercase tracking-wide">
          Strategy-First Agency
        </button>
        <button className="border-2 border-[#C87A1A] hover:bg-[#DB7803] text-[#C87A1A] hover:text-white font-bold text-sm lg:text-base px-8 py-4 rounded-full transition-colors duration-300 uppercase tracking-wide">
          Get My Free Proposal
        </button>
      </div>
    </section>
  )
}
