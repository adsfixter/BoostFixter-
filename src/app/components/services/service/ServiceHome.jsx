"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative bg-black text-white py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Text */}
        <div data-aos="fade-right">
          <h2 className="text-3xl sm:text-4xl font-semibold leading-snug">
            <span className="text-red-600">
              From Strategy To Screen:
            </span>{" "}
            IMBD Agency -{" "}
            <span className="font-bold text-red-600">Fueling</span> Your{" "}
            <span className="font-bold text-red-600">Digital Evolution</span> With
            Excellence.
          </h2>

          <p className="text-gray-400 mt-6 leading-relaxed text-sm sm:text-base">
            Since our establishment in 2016, IMBD Agency has been the cornerstone of success 
            for numerous international and local businesses. As your dedicated Digital 
            Marketing Agency in Bangladesh, we’ve seamlessly blended innovation and 
            expertise. From strategic inception to captivating screens, our journey has been 
            marked by excellence. So partner with us as we continue to navigate the digital 
            realm, ensuring your brand’s seamless and successful evolution in this dynamic 
            landscape.
          </p>
        </div>

        {/* Right Image */}
        <div data-aos="fade-left" className="flex justify-center">
          <Image
            src="/team-meeting.png"
            alt="IMBD Agency Team"
            width={550}
            height={400}
            className="rounded-2xl object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Optional gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/80 to-transparent" />
    </section>
  );
}
