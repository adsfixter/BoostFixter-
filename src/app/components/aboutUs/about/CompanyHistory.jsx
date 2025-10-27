// components/CompanyHistory.js

import Image from 'next/image';

export default function CompanyHistory() {
  return (
    <section className="bg-[#748943] py-10 px-4 md:px-16 rounded-3xl text-white max-w-7xl mx-auto my-10">
      <div className="grid items-center gap-8 mb-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-3xl font-bold">Our History</h2>
          <p className="mb-4">
            Thrive Internet Marketing Agency is the brainchild of Matt Bowman, Thrive’s president and founder. Bowman grew up in an entrepreneurial family and was inspired to continue his grandparents’ legacy of running a business. He saw how his grandparents took care of their customers and employees and gave back to the community and wanted to adopt this culture.
          </p>
          <p className="mb-4">
            In 2005, Bowman ventured into digital marketing and established MLB Web Design (now called Thrive). The team started expanding as the company grew in its early years and in 2012, MLB Web Design was renamed Thrive Internet Marketing Agency.
          </p>
          <p>
            What started as a small team has now grown into a full-service digital marketing company with more than 160 employees across the globe. Thrive now has employees in 34 states.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <Image
            src="/About/about-weare-image-new.webp" // Replace with path to image
            width={700}
            height={500}
            className="object-cover rounded-lg"
            alt="Founder"
          />
         
        </div>
      </div>
   {/* Timeline */}
<div className="flex flex-col items-stretch mt-8 space-y-8 md:flex-row md:space-x-4 md:space-y-0">
  {/* 2005 */}
  <div className="flex flex-col flex-1 mb-8 md:mb-0 relative rounded-xl border-l-4 border-r-4 border-t-4 border-[#566731] p-4 text-center h-full">
    <div className="absolute -top-10 -left-5 bg-white text-[#7D8557] rounded-full w-14 h-14 flex items-center justify-center font-bold text-xl">
      2005
    </div>
    <div className="pt-16">
      Matt Bowman became a fifth-generation business owner by starting MLB Web Design.
    </div>
  </div>

  {/* 2012 */}
  <div className="flex flex-col flex-1 mb-8 md:mb-0 relative rounded-xl border-l-4 border-r-4 border-t-4 border-[#566731] p-4 text-center h-full">
    <div className="absolute -top-10 -left-5 bg-white text-[#7D8557] rounded-full w-14 h-14 flex items-center justify-center font-bold text-xl">
      2012
    </div>
    <div className="pt-16">
      In 2012, MLB Web Design rebranded to Thrive Internet Marketing Agency.
    </div>
  </div>

  {/* 2016 */}
  <div className="flex flex-col flex-1 mb-8 md:mb-0 relative rounded-xl border-l-4 border-r-4 border-t-4 border-[#566731] p-4 text-center h-full">
    <div className="absolute -top-10 -left-5 bg-white text-[#7D8557] rounded-full w-14 h-14 flex items-center justify-center font-bold text-xl">
      2016
    </div>
    <div className="pt-16">
      Matt Bowman partnered with Kurt Knapton, a strategic investor, to support Thrive’s growth.
    </div>
  </div>

  {/* 2020 */}
  <div className="flex flex-col flex-1 mb-8 md:mb-0 relative rounded-xl border-l-4 border-r-4 border-t-4 border-[#566731] p-4 text-center h-full">
    <div className="absolute -top-10 -left-5 bg-white text-[#7D8557] rounded-full w-14 h-14 flex items-center justify-center font-bold text-xl">
      2020
    </div>
    <div className="pt-16">
      Thrive reached <span className="font-semibold">15 years</span> in business, establishing itself as one of the nation’s leading internet marketing agencies.
    </div>
  </div>

  {/* 2023 */}
  <div className="flex flex-col flex-1 relative rounded-xl border-l-4 border-r-4 border-t-4 border-[#566731] p-4 text-center h-full">
    <div className="absolute -top-10 -left-5 bg-white text-[#7D8557] rounded-full w-14 h-14 flex items-center justify-center font-bold text-xl">
      2023
    </div>
    <div className="pt-16">
      For the <span className="font-semibold">seventh consecutive year</span>, Thrive was named to the Inc. 5000 list of fastest-growing companies in America.
    </div>
  </div>
</div>

    </section>
  );
}
