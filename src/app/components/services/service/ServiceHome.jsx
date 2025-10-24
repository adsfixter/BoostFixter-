"use client";
import Image from "next/image";

export default function ServiceHome() {
  return (
    <section className="py-20 px-6 bg-[#D7D7D8] relative overflow-hidden">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8  grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Text */}
        <div data-aos="fade-right">
          <h2 className="text-3xl sm:text-4xl font-semibold leading-snug text-secondary">
            From Strategy to Screen: IMBD Agency - <span className="font-bold text-praymary">Fueling</span> Your <span className="font-bold text-praymary">Digital Evolution</span> with excellence.
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed text-sm sm:text-base">
            Since our establishment in 2016, IMBD Agency has been the cornerstone
            of success for numerous international and local businesses. As your
            dedicated Digital Marketing Agency in Bangladesh, we’ve seamlessly
            blended innovation and expertise. From strategic inception to
            captivating screens, our journey has been marked by excellence. So
            partner with us as we continue to navigate the digital realm,
            ensuring your brand’s seamless and successful evolution in this
            dynamic landscape.
          </p>
        </div>

        {/* Right Image */}
        <div data-aos="fade-left" className="flex justify-center">
          <Image
            src="/Consultancy.png"
            alt="Boost Fixter LLC "
            width={550}
            height={400}
            className=" object-cover "
          />
        </div>
      </div>

      {/* Optional subtle gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-red-50/50 to-transparent" />
    </section>
  );
}
