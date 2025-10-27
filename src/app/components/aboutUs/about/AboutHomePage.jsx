import Image from "next/image"
import { Settings, CheckCircle, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="grid gap-4 lg:grid-cols-2"> {/* gap-4 diye horizontal gap */}
  {/* Left Content */}
  <div className="bg-[#6B7F5A] flex items-center justify-center px-8 py-16 lg:py-24 rounded-tr-[4rem] rounded-br-[4rem]">
    <div className="max-w-md text-center text-white">
      <h1 className="mb-4 text-4xl font-bold lg:text-5xl text-balance">Who We Are</h1>
      <p className="text-lg lg:text-xl text-white/90">Your Trusted Digital Marketing Partner</p>
    </div>
  </div>

  {/* Right Image */}
  <div className="relative h-[300px] lg:h-auto rounded-tl-[4rem] rounded-bl-[4rem] overflow-hidden">
    <Image
      src="/About/large-team-photo-of-diverse-marketing-professional.jpg"
      alt="Our team"
      fill
      className="object-cover"
      priority
    />
  </div>
</section>


      {/* Image Grid Section */}
      <section className="px-4 py-12 mx-auto lg:py-16 max-w-7xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div className="relative h-64 overflow-hidden rounded-2xl">
            <Image
              src="/About/three-professional-women-collaborating-at-laptop-i.jpg"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative h-64 overflow-hidden rounded-2xl">
            <Image
              src="/About/professional-presenter-speaking-to-audience-in-con.jpg"
              alt="Team presentation"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative h-64 overflow-hidden rounded-2xl">
            <Image
              src="/About/two-professionals-working-together-at-computer-scr.jpg"
              alt="Team working"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative h-64 overflow-hidden rounded-2xl">
            <Image
              src="/About/three-professionals-having-friendly-conversation-o.jpg"
              alt="Team discussion"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="max-w-4xl px-4 py-8 mx-auto lg:py-12">
        <p className="text-base leading-relaxed text-center text-foreground/80 lg:text-lg">
          Thrive Internet Marketing Agency is an award-winning digital marketing company that offers a full spectrum of
          data-driven web marketing services. We develop growth-oriented online marketing campaigns that make a positive
          impact on businesses.
        </p>
      </section>


      

      {/* Features Section */}
      <section className="max-w-6xl px-4 py-12 mx-auto lg:py-16">
        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-3 lg:gap-8">
          {/* Optimize Card */}
          <div className="flex flex-col items-center text-center">
            <div className="p-8 mb-4 bg-gray-100 rounded-2xl">
              <Settings className="w-32 h-32 text-[#6B7F5A]" strokeWidth={1.5} />
            </div>
            <h3 className="mb-2 text-xl font-bold">OPTIMIZE</h3>
            <p className="text-foreground/70">Marketing Processes</p>
          </div>

          {/* Generate Card */}
          <div className="flex flex-col items-center text-center">
            <div className="p-8 mb-4 bg-gray-100 rounded-2xl">
              <CheckCircle className="w-32 h-32 text-[#6B7F5A]" strokeWidth={1.5} />
            </div>
            <h3 className="mb-2 text-xl font-bold">GENERATE</h3>
            <p className="text-foreground/70">Targeted Results</p>
          </div>

          {/* Grow Card */}
          <div className="flex flex-col items-center text-center">
            <div className="p-8 mb-4 bg-gray-100 rounded-2xl">
              <TrendingUp className="w-32 h-32 text-[#6B7F5A]" strokeWidth={1.5} />
            </div>
            <h3 className="mb-2 text-xl font-bold">GROW</h3>
            <p className="text-foreground/70">Your Brand Online</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="bg-[#C87A1A] hover:bg-[#DB7803] text-white font-bold text-sm lg:text-base px-8 py-4 rounded-full transition-colors duration-300 uppercase tracking-wide">
            Strategy-First Agency
          </button>
          <button className="border-2 border-[#C87A1A] hover:bg-[#DB7803] text-[#C87A1A] hover:text-white font-bold text-sm lg:text-base px-8 py-4 rounded-full transition-colors duration-300 uppercase tracking-wide">
            Get My Free Proposal
          </button>
        </div>
      </section>
    </main>
  )
}
