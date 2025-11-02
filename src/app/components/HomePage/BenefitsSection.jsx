import { Check, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function BenefitsSection() {
  return (
    <section className="bg-[#F8F8F8] py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* top div */}
        <div className="flex justify-between gap-4">
          <h1 className="text-3xl lg:text-5xl text-accent font-bold">
            Discover the <br /> Benefits with Us
          </h1>
          <div>
            <Image
              src={"/HomePage/team.png"}
              width={600}
              height={200}
              alt="our team image"
            />
          </div>
        </div>

        {/* text div */}
        <div className="flex gap-4">
          {/* left text */}
          <div className="space-y-20">
            {/* 1st */}
            <div className="space-y-5">
              <h1 className="text-primary font-normal text-3xl lg:text-5xl">
                Proven Track Record
              </h1>
              <p className="text-gray-500 font-normal text-2xl">
                Our portfolio showcases successful projects and satisfied
                clients, demonstrating our ability to deliver measurable
                results.
              </p>
            </div>
            {/* 2nd */}
            <div className="space-y-5">
              <h1 className="text-primary font-normal text-3xl lg:text-5xl">
                Personalized Solutions
              </h1>
              <p className="text-gray-500 font-normal text-2xl">
                Every strategy is tailored to your business, audience, and
                objectives, ensuring maximum impact.
              </p>
            </div>
          </div>

          {/* right text */}
          <div className="mt-30 space-y-20">
            {/* 3rd */}
            <div className="space-y-5">
              <h1 className="text-primary font-normal text-3xl lg:text-5xl">
                Innovative Strategies
              </h1>
              <p className="text-gray-500 font-normal text-2xl">
                Stay ahead of the competition with cutting-edge approaches,
                leveraging AI, automation, and creative visuals.
              </p>
            </div>
            {/* 4rt */}
            <div className="space-y-5">
              <h1 className="text-primary font-normal text-3xl lg:text-5xl">
                Safe Payment Gateway
              </h1>
              <p className="text-gray-500 font-normal text-2xl">
                Experience transparent communication, regular updates, and
                ongoing support as we prioritize your success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
