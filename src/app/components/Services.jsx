import React from "react"

const services = [
  {
    "icon": "💻",
    "name": "Digital Marketing",
    "description": "Elevate your online presence with our strategic digital marketing solutions, merging proven tactics and the latest trends to navigate your brand toward substantial growth."
  },
  {
    "icon": "📱",
    "name": "Social Media Management",
    "description": "Manage and grow your social media presence with tailored strategies that increase engagement and reach."
  },
  {
    "icon": "🎨",
    "name": "Graphic Design",
    "description": "Create stunning visuals and branding materials that captivate your audience and elevate your brand identity."
  },
  {
    "icon": "⚡",
    "name": "SEO Optimization",
    "description": "Optimize your website to rank higher in search engines and attract targeted organic traffic consistently."
  },
  {
    "icon": "✍️",
    "name": "Content Creation",
    "description": "Deliver compelling content across platforms that educates, entertains, and converts your audience."
  },
  {
    "icon": "📊",
    "name": "Analytics & Reporting",
    "description": "Track and analyze performance metrics to ensure your campaigns are effective and ROI-focused."
  },
]

function Services() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-gray-900">
          Our{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-[#29554A]">Services</span>
            <span className="absolute left-0 bottom-1 w-full h-2 bg-[#29554A]/30 rounded-sm z-0"></span>
          </span>
        </h1>

        {/* Subtitle and Button */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
          <p className="text-gray-600 max-w-xl mb-4 sm:mb-0">
            Focused on results we seek to raise the level of our customers.
          </p>
          <button className="bg-[#29554A] text-white px-6 py-2 rounded-md hover:bg-[#1f4035] transition">
            VIEW ALL
          </button>
        </div>

        {/* Services Cards Parent div with border */}
        <div className="relative p-6">
  {/* Four corner borders */}
  <span className="absolute top-0 left-0 w-12 h-1 bg-gray-200"></span> {/* top-left horizontal */}
  <span className="absolute top-0 left-0 w-1 h-12 bg-gray-200"></span> {/* top-left vertical */}

  <span className="absolute top-0 right-0 w-12 h-1 bg-gray-200"></span> {/* top-right horizontal */}
  <span className="absolute top-0 right-0 w-1 h-12 bg-gray-200"></span> {/* top-right vertical */}

  <span className="absolute bottom-0 left-0 w-12 h-1 bg-gray-200"></span> {/* bottom-left horizontal */}
  <span className="absolute bottom-0 left-0 w-1 h-12 bg-gray-200"></span> {/* bottom-left vertical */}

  <span className="absolute bottom-0 right-0 w-12 h-1 bg-gray-200"></span> {/* bottom-right horizontal */}
  <span className="absolute bottom-0 right-0 w-1 h-12 bg-gray-200"></span> {/* bottom-right vertical */}

  {/* Cards grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
    {services.map((service, index) => (
      <div
        key={index}
        className="group flex flex-col h-full px-10 py-12 space-y-4 border shadow-sm transition transform hover:-translate-y-2 hover:bg-gray-50 hover:shadow-lg"
      >
        {/* icon div */}
        <div className="flex justify-center">
          <h1 className="p-8 rounded-full bg-red-500 text-white text-2xl">{service.icon}</h1>
        </div>

        <h3 className="text-xl font-semibold mb-2 text-center">{service.name}</h3>
        <p className="text-gray-600 flex-grow">{service.description}</p>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  )
}

export default Services
