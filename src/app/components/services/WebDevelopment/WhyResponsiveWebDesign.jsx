import Image from "next/image";
import CustomLink from "../../Share/CustomLink";

export default function UserExperience() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
          Why Your Business Needs Responsive Web Design
        </h2>
        <p className="text-green-600 font-medium text-lg mt-2 text-center">
          Future-Proof Your Website and Increase Your Mobile Traffic
        </p>
        <div className="grid md:grid-cols-2 gap-4 items-center">
          {/* Left Content */}
          <div>
            <div className="mt-8 space-y-5 text-gray-700 leading-relaxed">
              <p>
                Still on the fence about hiring a website design and development
                agency to build your website or optimize the one you currently
                have?
              </p>

              <p>
                It doesn’t matter if you own a startup or a large enterprise —
                you need responsive website design to promote your brand and
                create a strong digital footprint in this competitive
                marketplace.
              </p>

              <p>
                Today, several businesses have adopted responsive web design to
                gain more visitors and maximize conversions. Despite its growing
                popularity, many still settle for static sites. Don’t fall
                behind the competition — capitalize on personalized web design
                services and deliver the best online experience to your target
                customers.
              </p>
            </div>
          </div>
          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <Image
                src="/Benefits.jpg"
                alt="Responsive Design Illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
          
              </div>
              <div>
                  <p>
                Studies show that there are approximately{" "}
                <span className="font-semibold text-gray-900">
                  3.5 billion smartphone users
                </span>{" "}
                globally. An eMarketer survey also revealed that adults in the
                U.S. spend an average of{" "}
                <span className="font-semibold text-green-700">
                  2 hours and 55 minutes
                </span>{" "}
                daily on their mobile devices. With mobile usage increasing,
                it’s essential that your website is optimized for every screen
                size.
              </p>

              <p>
                Our web design team builds seamless, responsive websites that
                eliminate common issues like distorted images and awkward
                navigation, ensuring your users enjoy a smooth experience across
                all devices.
              </p>

              <p>
                By providing a consistently positive experience across
                platforms, our responsive design services help strengthen your
                brand credibility and increase engagement.
              </p>
              </div>
              <div className="flex mt-10 justify-center">
                  <CustomLink text={"Begin My Web Design"}></CustomLink>
              </div>
      </div>
    </section>
  );
}
