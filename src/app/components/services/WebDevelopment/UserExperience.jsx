import Image from "next/image";

export default function UserExperience() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
          How Responsive Web Design Improves User Experience
        </h2>
        <p className="text-green-600 font-medium text-lg mt-2 text-center">
          Boost Your Site Performance And Create Unparalleled Brand Interaction
        </p>
        <div className="grid md:grid-cols-2 gap-4 items-center">
          {/* Left Content */}
          <div>
            <div className="mt-8 space-y-5 text-gray-700 leading-relaxed">
              <p>
                The significant role of responsive web design in improving user
                experience cannot be overemphasized. Responsive website design
                delivers a consistent experience across different screen
                resolutions. It eliminates unnecessary page elements and
                provides users with a great online experience. Whether you’re a
                business owner or a marketer, capitalizing on WordPress website
                design services gives you an advantage.
              </p>

              <p>
                In March 2021, Google introduced Core Web Vitals, a set of new
                metrics that measure websites’ speed and real-time user
                experience. These factors have been added to its existing
                signals to determine a website’s page experience score. The Core
                Web Vitals are also now part of a core Google algorithm update
                that provides a new way of evaluating and ranking sites based on
                the page experience they offer.
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
            Thrive’s WordPress web design services are centered on optimizing
            your website for user experience and achieving long-term success.
            Our WordPress web design agency ensures your website checks off
            every part of Google’s Core Web Vitals:
          </p>
        </div>
      </div>
    </section>
  );
}
