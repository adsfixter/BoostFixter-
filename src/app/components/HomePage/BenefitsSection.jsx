import { Check, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function BenefitsSection() {
  return (
    <section className="bg-gray-50 px-6">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* top div */}
        <div className="flex justify-between gap-4">
          <h1 className="text-3xl lg:text-5xl text-primary font-extrabold">
            Discover the <br/> Benefits with Us
          </h1>
          <div className="">
            <Image
              src={"/HomePage/team.png"}
              width={600}
              height={200}
              alt="our team image"
            ></Image>
          </div>
        </div>
        {/* text div */}
        <div className="flex gap-4">
           {/* left text */}
          <div className="space-y-20">
            <div className="space-y-5">
               <h1 className="text-primary font-extrabold text-3xl lg:text-5xl">Proven Track Record</h1>
            <p className="text-accent font-medium text-xl">Our portfolio showcases successful projects and satisfied clients, demonstrating our ability to deliver measurable results.</p>
           </div>
            <div className="space-y-5">
               <h1 className="text-primary font-extrabold text-3xl lg:text-5xl">Personalized Solutions</h1>
            <p className="text-accent font-medium text-xl">Every strategy is tailored to your business, audience, and objectives, ensuring maximum impact.</p>
           </div>
        </div>
        {/* right text */}
         <div className="mt-30 space-y-20">
            <div className="space-y-5">
               <h1 className="text-primary font-extrabold text-3xl lg:text-5xl">Proven Track Record</h1>
            <p className="text-accent font-medium text-xl">Our portfolio showcases successful projects and satisfied clients, demonstrating our ability to deliver measurable results.</p>
           </div>
            <div className="space-y-5">
               <h1 className="text-primary font-extrabold text-3xl lg:text-5xl">Personalized Solutions</h1>
            <p className="text-accent font-medium text-xl">Every strategy is tailored to your business, audience, and objectives, ensuring maximum impact.</p>
           </div>
        </div>
       </div>
      </div>
    </section>
  );
}
