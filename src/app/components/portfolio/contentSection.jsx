import Image from "next/image";
import Link from "next/link";
import CustomLink from "../Share/CustomLink";


export default function ContentSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4">
          {/* left site text div */}
          <div>
            <h1 className="text-3xl font-medium mb-8">
              Flourish Brands in the Digital Landscape Through Expert Video Production
            </h1>
            <p>
              At IMBD Agency, our passion lies in harnessing the immense impact of expert video production to drive business success in the digital realm. Our extensive video portfolio stands as a testament to our unwavering commitment to delivering measurable results. <br/>

A recent study by Wyzowl revealed that 92% of marketers consider video an essential part of their marketing strategy, underlining its significance. Remarkably, 84% of consumers have been persuaded to make a purchase after viewing a brand’s video, and a substantial 74% of users who watched a product explainer video expressed a higher likelihood of making a purchase. <br/>

Our work speaks volumes about the diverse businesses we’ve collaborated with and the growth we’ve helped them achieve. Let our portfolio inspire your digital journey. When you’re ready to harness the potential of video in the digital world, IMBD Agency is your dedicated partner for success.
            </p>
        </div>
        {/* right site div */}
          <div>
            {/* buttom div */}
            <div className="flex justify-end gap-4 mb-3">
              <Link
                href="#"
                className="bg-red-500 px-6 py-1 rounded-full"
              >
                Explainer Video </Link>
              <Link
                href="#"
                 className="bg-red-500 px-6 py-1 rounded-full"
              >TVC/OVC </Link>
              <Link
                href="#"
                 className="bg-red-500 px-6 py-1 rounded-full"
              >Animation </Link>
            </div>
            <div className="mb-4">
              <Image
                        src="/portfolio/Untitled-2.jpg"
                        alt="Boost Fixter LLC "
                        width={600}
                        height={100}
                        className=" object-cover "
            />
            </div>
            <CustomLink text={"Explore Video Solutions"}></CustomLink>
        </div>
        </div>
      </div>
   </section>
  );
}
