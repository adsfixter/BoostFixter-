"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"

const COUNTRY_CODES = [
  { code: "+880", country: "Bangladesh", flag: "🇧🇩" },
  { code: "+1", country: "USA", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+86", country: "China", flag: "🇨🇳" },
  { code: "+81", country: "Japan", flag: "🇯🇵" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+39", country: "Italy", flag: "🇮🇹" },
  { code: "+34", country: "Spain", flag: "🇪🇸" },
]

const SERVICES = ["Design", "Development", "Cybersecurity", "Facebook Ads", "Google Ads", "TikTok Ads"]

const MARKETING_BUDGETS = ["$1,000 - $5,000", "$5,000 - $10,000", "$10,000 - $25,000", "$25,000 - $50,000", "$50,000+"]

export default function ContactForm() {
  const [countryCode, setCountryCode] = useState("+880")
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (data) => {
      const formData = { ...data, phone: `${countryCode}${data.phone}` }
      alert("yout data succefully save")
    console.log(formData)
    reset()
  }

  return (
    <div className=" bg-gradient-to-br from-slate-50 to-slate-100 px-6 py-20 md:px-12 md:py-32">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="bg-gradient-to-br from-green-700 to-green-800 rounded-2xl p-8 text-white flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-4">Experience Real Results</h1>
              <p className="text-green-100 mb-8 text-lg">
                Partner with Thrive Internet Marketing Agency and scale your business.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold">+810%</div>
                  <div className="text-sm text-green-100">Facebook Impressions</div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold">+257%</div>
                  <div className="text-sm text-green-100">Facebook Page Views</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-green-600">
              <p className="text-sm text-green-100">
                In a hurry? Give us a call now at{" "}
                <a href="tel:866-434-4748" className="font-bold hover:text-white">
                  866-434-4748
                </a>
              </p>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Get Your Free Proposal</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* First Name & Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name*</label>
                  <input
                    type="text"
                    {...register("firstName")}
                    placeholder="First Name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name*</label>
                  <input
                    type="text"
                    {...register("lastName")}
                    placeholder="Last Name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    required
                  />
                </div>
              </div>

              {/* Company & Website */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Company/Organization*</label>
                  <input
                    type="text"
                    {...register("company")}
                    placeholder="Company Name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Website</label>
                  <input
                    type="text"
                    {...register("website")}
                    placeholder="https://example.com"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address*</label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="your@email.com"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  required
                />
              </div>

              {/* Phone with Country Code */}
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Country Code*</label>
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  >
                    {COUNTRY_CODES.map((item) => (
                      <option key={item.code} value={item.code}>
                        {item.flag} {item.code}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Phone Number*</label>
                  <input
                    type="text"
                    {...register("phone")}
                    placeholder="1812-345678"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    required
                  />
                </div>
              </div>

              {/* Services */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Services*</label>
                <select
                  {...register("services")}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  required
                >
                  <option value="">Select a service</option>
                  {SERVICES.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Monthly Marketing Budget */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Monthly Marketing Budget*</label>
                <select
                  {...register("budget")}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  required
                >
                  <option value="">Select budget range</option>
                  {MARKETING_BUDGETS.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
              </div>

              {/* How Did You Hear About Us */}
              <div>
                <label className="block text-sm font-medium text-gray-700">How Did You Hear About Thrive?</label>
                <input
                  type="text"
                  {...register("hearAbout")}
                  placeholder="Tell us how you found us"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Tell us about your business</label>
                <textarea
                  {...register("message")}
                  placeholder="Describe your business and goals..."
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 min-h-[6rem] resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-full text-lg"
              >
                SEND MY FREE PROPOSAL
              </button>
            </form>

            <p className="text-xs text-gray-600 mt-4 text-center">
              By submitting your phone number, you agree to receiving texts from Thrive Ideas.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
