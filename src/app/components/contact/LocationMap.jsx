import React from "react";

export default function LocationMap() {
  return (
    <section className="pb-16 text-center bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Our Office Location
        </h2>
        <p className="text-lg text-slate-600 mb-8">
          Visit our office at Rafiq Place, 5th Floor, Opp. BM College Mosque Gate, Barishal 8200, Bangladesh.
        </p>

        {/* Google Map Embed */}
        <div className="w-full h-[450px] md:h-[550px] rounded-xl overflow-hidden shadow-lg border border-slate-200">
          <iframe
            title="Rafiq Place 5th Floor, Barishal"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.029468188395!2d90.3515200751988!3d22.71314602921723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755353d6a6f7fb3%3A0x5e28b6da7794b91f!2s22%C2%B042'47.3%22N%2090%C2%B021'14.7%22E!5e0!3m2!1sen!2sbd!4v1731243600000!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
