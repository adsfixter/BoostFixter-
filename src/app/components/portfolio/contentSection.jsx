// components/PortfolioAgencySection.js

export default function ContentSection() {
  return (
    <section className="flex flex-col items-center justify-between px-6 py-10 text-white bg-black md:px-14 md:flex-row">
      {/* Left side text */}
      <div className="md:w-1/2">
        <h2 className="mb-5 text-3xl font-extrabold leading-tight md:text-4xl">
          Flourish Brands in the Digital Landscape <br className="hidden md:block" />
          Through Expert Video Production
        </h2>
        <p className="mb-3">
          At IMBD Agency, our passion lies in harnessing the immense impact of expert video production to drive business success in the digital realm. Our extensive video portfolio stands as a testament to our unwavering commitment to delivering measurable results.
        </p>
        <p className="mb-3">
          A recent study by Wyzowl revealed that 92% of marketers consider video an essential part of their marketing strategy, underlining its significance. Remarkably, 84% of consumers have been persuaded to make a purchase after viewing a brand’s video, and a substantial 74% of users who watched a product explainer video expressed a higher likelihood of making a purchase.
        </p>
        <p>
          Our work speaks volumes about the diverse businesses we've collaborated with and the growth we’ve helped them achieve. Let our portfolio inspire your digital journey. When you’re ready to harness the potential of video in the digital world, IMBD Agency is your dedicated partner for success.
        </p>
        <button className="px-6 py-2 mt-6 text-white transition bg-transparent border-2 border-red-500 rounded hover:bg-red-600 hover:border-red-600 hover:text-white">
          Explore Video Solutions
        </button>
      </div>

      {/* Right side image grid */}
      <div className="mt-8 md:mt-0 md:ml-8 md:w-1/2">
        <div className="grid grid-cols-3 gap-2">
          {/* Replace src with your image links */}
          <img src="/img1.jpg" alt="Portfolio 1" className="object-cover rounded-md aspect-video" />
          <img src="/img2.jpg" alt="Portfolio 2" className="object-cover rounded-md aspect-video" />
          <img src="/img3.jpg" alt="Portfolio 3" className="object-cover rounded-md aspect-video" />
          <img src="/img4.jpg" alt="Portfolio 4" className="object-cover rounded-md aspect-video" />
          <img src="/img5.jpg" alt="Portfolio 5" className="object-cover rounded-md aspect-video" />
          <img src="/img6.jpg" alt="Portfolio 6" className="object-cover rounded-md aspect-video" />
        </div>
      </div>
    </section>
  );
}
