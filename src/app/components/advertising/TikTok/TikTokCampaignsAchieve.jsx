import Image from "next/image";
import CustomLink from "../../Share/CustomLink";

export default function TikTokCampaignsAchieve() {
  return (
    <section className="bg-gray-50 px-6 py-20 md:px-12 md:py-32">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Content Grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Benefits List */}
          <div>
            {/* Title */}
            <h1 className="text-2xl font-extrabold leading-tight mb-4 ">
              Your One-Stop Media Production Company
            </h1>
            <div className="space-y-4">
              <h1>
                Strengthen your digital footprint and communicate your brand
                story effectively with multimedia content that attracts
                attention and prompts desired action.
              </h1>
              <h1>
                Thrive Internet Marketing Agency has everything you need to
                execute digital media production, from concept development to
                delivery.
              </h1>
              <h1>
                Through strategic planning and execution, we ensure your message
                stands out and leaves a lasting impression on your target
                audience. Furthermore, we stay at the forefront of digital
                trends and technologies, enabling us to deliver cutting-edge
                solutions that keep you ahead of the competition.
              </h1>
              <h1>
                From social media campaigns to website enhancements, we tailor
                our media production services to meet your specific goals and
                achieve maximum impact
              </h1>
              <h1>
                Partner with Thrive and let us create a cohesive digital media
                strategy that effectively communicates your unique brand story.
              </h1>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex items-center justify-center">
            <div className="relative  w-full overflow-hidden h-[500px] shadow-lg">
              <Image
                src="/Benefits.jpg"
                alt="Agency office workspace"
                fill
                className="object-cover"
              />
            </div>
          </div>
              </div>
              <div className="flex justify-center mt-10">
                  <CustomLink text={"Talk To a Creative Expert"}></CustomLink>
              </div>
      </div>
    </section>
  );
}
