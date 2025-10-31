import Image from "next/image";
import CustomLink from "../../Share/CustomLink";

export default function DevelopmentAbout() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-5">
            <h1 className="text-3xl lg:text-4xl font-semibold">
              Showcase Your Thought Leadership With High-Performing Web Design
            </h1>
            <p className="text-lg text-gray-700">
              Don’t miss out on sales-qualified leads by having a subpar website
              that doesn’t meet user intent. The internet is a goldmine of
              opportunities for all kinds of businesses worldwide. Approximately
              92% of consumers land on a brand’s website with the intention to
              buy, research and compare offerings against competitors and read
              online reviews (Episerver).
            </p>
            <p className="text-lg text-gray-700">
              Don’t miss out on sales-qualified leads by having a subpar website
              that doesn’t meet user intent. The internet is a goldmine of
              opportunities for all kinds of businesses worldwide. Approximately
              92% of consumers land on a brand’s website with the intention to
              buy, research and compare offerings against competitors and read
              online reviews (Episerver).
            </p>
          </div>

          {/* Right Content (Image) */}
          <div className="relative w-full aspect-[3/2]">
            <Image
              src="/Benefits.jpg"
              alt="Website Benefits"
              fill
              className="object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <CustomLink text={"Build My Website"}></CustomLink>
        </div>
      </div>
    </section>
  );
}
