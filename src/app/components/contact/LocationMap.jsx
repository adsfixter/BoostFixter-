import React from "react";

export default function LocationMap() {
  return (
    <section className="pb-16 text-center bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="title">
          Find Us on the Map
        </h2>
        <p className="description mb-8">
          Visit our office at Rafiq Place, 5th Floor, Opp. BM College Mosque Gate, Barishal 8200, Bangladesh.
        </p>

        {/* Google Map Embed */}
        <div className="w-full h-[450px] md:h-[550px] rounded-xl overflow-hidden shadow-lg border border-slate-200">
          <iframe
            title="Rafiq Place 5th Floor, Barishal"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d367.5018239117396!2d90.35432532254086!3d22.713017337348987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375535308ea718af%3A0xae0789064e7e576a!2zQkNTIENvbmZpZGVuY2UgQmFyaXNoYWwgQkNTIOCmleCmqOCmq-Cmv-CmoeCnh-CmqOCnjeCmuCDgpqzgprDgpr_gprbgpr7gprI!5e1!3m2!1sen!2sbd!4v1762766225365!5m2!1sen!2sbd"
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
