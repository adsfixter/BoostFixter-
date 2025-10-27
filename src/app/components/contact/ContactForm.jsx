"use client"

import { useForm } from "react-hook-form"

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    alert("Thank you for your submission! We'll be in touch soon to discuss your free proposal.")
  }

  const services = [
    "SEO", "PPC", "AI Search Optimization", "Social Media Ads", "CRO", "Web Design",
    "Reputation / Reviews", "Content Writing", "Local SEO", "Photography / Video",
    "Amazon Marketing", "Social Media Organic", "Email Marketing", "Link Building", "ADA Compliance"
  ]

  return (
    <div className="flex flex-col items-center gap-8 px-4 py-12 mx-auto bg-white max-w-7xl sm:px-6 lg:px-8 lg:flex-row lg:gap-12">
      {/* Form Section */}
      <div className="flex flex-col w-full lg:w-1/2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-1 w-full p-8 space-y-4 bg-white border border-gray-200 shadow-xl rounded-3xl"
        >
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Experience Real Results</h2>
          <p className="text-sm text-gray-600">Partner with Thrive Internet Marketing Agency and scale your business.</p>

          {/* First/Last Name */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input {...register("firstName", { required: "First name is required." })} placeholder="First Name*" className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:outline-none"/>
            <input {...register("lastName", { required: "Last name is required." })} placeholder="Last Name*" className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:outline-none"/>
          </div>

          {/* Company/Website */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input {...register("company", { required: true })} placeholder="Company/Organization*" className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:outline-none"/>
            <input {...register("website")} placeholder="Website" className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:outline-none"/>
          </div>

        {/* Email & Phone */}
<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
  {/* Email */}
  <input
    {...register("email", { 
      required: "Email is required", 
      pattern: { value: /^\S+@\S+$/i, message: "Invalid email." }
    })}
    placeholder="Email Address*"
    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:outline-none"
  />

  {/* Phone with country code dropdown */}
  <div className="relative w-full">
    <input
      {...register("phone", { required: "Phone number is required" })}
      placeholder="Phone Number*"
      className="w-full py-3 pl-24 pr-4 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:outline-none"
    />
    <select
      {...register("countryCode")}
      className="absolute inset-y-0 left-0 px-3 py-3 text-sm border border-gray-300 rounded-l-lg bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:outline-none"
      defaultValue="+880"
    >
      <option value="+880">🇧🇩 +880</option>
      <option value="+1">🇺🇸 +1</option>
      <option value="+44">🇬🇧 +44</option>
      <option value="+91">🇮🇳 +91</option>
    </select>
    {errors.phone && <span className="absolute mt-1 text-xs text-red-600 top-full">{errors.phone.message}</span>}
  </div>
</div>


          {/* Budget & Reference */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <select {...register("budget", { required: true })} defaultValue="" className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:outline-none">
              <option value="" disabled>Monthly Marketing Budget*</option>
              <option value="$1-2k">$1,000–2,000</option>
              <option value="$2-5k">$2,000–5,000</option>
              <option value="5k+">$5,000+</option>
            </select>
            <input {...register("reference")} placeholder="How did you hear about Thrive?" className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:outline-none"/>
          </div>

          {/* Services */}
          <div>
            <div className="mb-2 text-sm font-semibold text-gray-900">Services*</div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(service => (
                <label key={service} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input type="checkbox" {...register("services", { required: true })} value={service} className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"/>
                  {service}
                </label>
              ))}
            </div>
            {errors.services && <span className="text-xs text-red-600">Select at least one service.</span>}
          </div>

          {/* About Business */}
          <textarea {...register("about")} placeholder="Tell us about your business" rows={4} className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg resize-none bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:outline-none"/>

          {/* Consent */}
          <label className="flex items-start gap-2 text-sm text-gray-700 cursor-pointer">
            <input type="checkbox" {...register("consent")} className="w-4 h-4 mt-1 text-orange-500 border-gray-300 rounded focus:ring-orange-500"/>
            <span>I consent to receive notifications and promotional messages</span>
          </label>

          <button type="submit" className="w-full px-6 py-4 text-sm font-bold text-white uppercase bg-orange-500 rounded-lg shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">
            SEND MY FREE PROPOSAL
          </button>

          <p className="mt-4 text-sm text-center text-gray-600">
            In a hurry? Call now: <a href="tel:866-908-4748" className="font-semibold text-orange-500 hover:underline">866-908-4748</a>
          </p>
        </form>

        <div className="px-4 mt-6 text-xs leading-relaxed text-gray-500">
          By checking the box above, you consent to receive SMS and appointment reminders. Msg & data rates may apply. Unsubscribe anytime by replying STOP. <a href="#" className="underline">Privacy Policy & Terms</a>.
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 p-8 text-white bg-[#6A8238] rounded-3xl shadow-xl flex flex-col">
        <div className="flex items-start gap-3 mb-4">
          <div className="p-2 bg-white rounded-full">
            <svg className="w-6 h-6 text-[#6A8238]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Ready to Dominate Your Market?</h2>
            <p className="mt-2 text-sm opacity-90">Jumpstart your digital marketing success in 3 easy steps:</p>
          </div>
        </div>

        <ol className="flex-1 mt-8 space-y-8">
          {[
            { step: 1, title: "Contact Us", desc: "Fill out our brief contact form, and we'll be in touch soon." },
            { step: 2, title: "Launch Targeted Campaigns", desc: "We implement data-driven strategies that drive business growth." },
            { step: 3, title: "Achieve Lasting Growth", desc: "Solidify your digital presence and see outstanding results month-over-month." }
          ].map(({ step, title, desc }) => (
            <li key={step} className="flex gap-4">
              <div className="flex items-center justify-center w-12 h-12 text-xl font-bold bg-white border-4 border-white rounded-full text-[#6b7c4a]">{step}</div>
              <div className="flex-1">
                <div className="text-lg font-bold">{title}</div>
                <div className="text-sm leading-relaxed opacity-90">{desc}</div>
              </div>
            </li>
          ))}
        </ol>

        {/* Contact info */}
        <div className="pt-6 mt-8 space-y-3 text-sm border-t border-white/20">
          <div>
            <span className="font-bold">Headquarters:</span><br/>
            4604 Park Springs Blvd Suite 140<br/>
            Arlington, TX 76017<br/>
            <span className="opacity-90">(817) 642-9686</span>
          </div>
          <div>
            <span className="font-bold">Office Hours:</span><br/>
            <span className="opacity-90">Mon-Fri, 8:30am – 5:30pm CT</span>
          </div>
          <div>
            <span className="font-bold">Main Phone:</span><br/>
            <span className="text-lg font-bold">(866) 908-4748</span>
          </div>
        </div>
      </div>
    </div>
  )
}
