// components/ServiceHome.js
import React from 'react';

const ServiceHome = () => (
  <section className="bg-cover bg-center min-h-screen flex items-center justify-center text-center relative" style={{ backgroundImage: 'url("/your-background-image.jpg")' }}>
    <div className="bg-black bg-opacity-60 p-10 rounded-xl max-w-xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">
        Digital Marketing Agency <br /> In Bangladesh
      </h1>
      <p className="mt-4 mb-10 text-lg text-gray-100">
        Maximize your brand's online impact with IMBD Agency. The leading Digital Marketing partner in Bangladesh.
      </p>
      <div className="flex justify-center gap-10 mb-8">
        <div>
          <div className="text-2xl font-bold text-white">9+</div>
          <div className="text-sm text-gray-200">Years of Experience</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-white">615</div>
          <div className="text-sm text-gray-200">Clients</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-white">150</div>
          <div className="text-sm text-gray-200">Active Projects</div>
        </div>
      </div>
      <div className="flex gap-4 justify-center">
        <button className="bg-white text-pink-700 font-bold px-6 py-3 rounded-md shadow hover:bg-gray-100 transition flex items-center gap-2">
          <span role="img" aria-label="calendar">📅</span>
          Book Free Consultation
        </button>
        <button className="bg-white text-pink-700 font-bold px-6 py-3 rounded-md shadow hover:bg-gray-100 transition">
          Working Scope With You
        </button>
      </div>
    </div>
  </section>
);

export default ServiceHome;
