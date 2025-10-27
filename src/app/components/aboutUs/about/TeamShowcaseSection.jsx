import Image from "next/image";

export default function TeamShowcaseSection() {
  return (
    <>
      {/* Hero Section with Team Image and Content */}
      <section className="container px-4 py-12 mx-auto lg:py-20">
        <div className="relative flex flex-col items-center gap-0 lg:flex-row">
          {/* Team Image - overlaps with content card */}
          <div className="relative w-full lg:w-[45%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl z-10 lg:mr-[-8%]">
            <Image
              src="/About/team.webp" // Direct path from public folder
              alt="Digital marketing team photo"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Card - image overlaps into this card */}
          <div className="bg-[#6B7C4E] rounded-3xl p-8 lg:p-12 lg:pl-24 text-white shadow-xl w-full lg:w-[65%] mt-[-2rem] lg:mt-0">
            <h1 className="mb-6 text-3xl font-bold lg:text-4xl text-balance">
              We Are Digital Marketing Experts
            </h1>

            <div className="space-y-4 text-base leading-relaxed lg:text-lg">
              <p>
                Thrive boasts a unique, close-knit team with experts in all facets of web marketing: strategic, creative
                and technical.
              </p>

              <p>
                As a recognized leader in digital marketing, Thrive has more than 160 employees across 34 states and
                located in 10 different countries. We work closely together to ensure smooth campaign development and
                execution for all of our clients.
              </p>

              <p>
                From the United States and South Africa to the Philippines and India, our digital marketing
                professionals from all over the world offer unique skill sets and years of industry expertise. In every
                project we handle, you can trust us to deliver custom web solutions that meet your long-term strategic
                goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results-Driven Section */}
      <section className="container px-4 py-12 mx-auto lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold lg:text-4xl text-neutral-900 text-balance">
            We're a Results-Driven Digital Marketing Agency
          </h2>

          <p className="text-lg leading-relaxed lg:text-xl text-neutral-700 text-pretty">
            At Thrive, we take a strategy-first approach to show you real results. Our digital marketing team goes above
            and beyond to ensure our web marketing campaigns do not just drum up new business for our clients but also
            support sustainable success.
          </p>
        </div>
      </section>
    </>
  );
}
