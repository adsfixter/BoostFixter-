import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const benefits = [
  {
    title: "Extensive Expertise",
    description:
      "Benefit from a diverse team of seasoned professionals well-versed in a wide array of digital marketing disciplines, ensuring comprehensive support for all your online needs.",
  },
  {
    title: "Proven Track Record",
    description:
      "Our portfolio showcases successful projects and satisfied clients, demonstrating our ability to deliver measurable results.",
  },
  {
    title: "Innovative Strategies",
    description:
      "Stay ahead of the competition with cutting-edge approaches, leveraging AI, automation, and creative visuals.",
  },
  {
    title: "Personalized Solutions",
    description: "Every strategy is tailored to your business, audience, and objectives, ensuring maximum impact.",
  },
  {
    title: "Client-Centric Approach",
    description:
      "Experience transparent communication, regular updates, and ongoing support as we prioritize your success.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-gray-50 px-6 py-20 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-gray-900">
          Discover the{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-[#29554A]">Benefits </span>
            <span className="absolute left-0 bottom-4 w-48 h-2 bg-[#29554A]/30 rounded-sm z-0"></span>
            <span> with Us</span>
          </span>
        </h1>

        {/* Content Grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Benefits List */}
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-primary" strokeWidth={2.5} />
                </div>
                {/* Content */}
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
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
      </div>
    </section>
  );
}
