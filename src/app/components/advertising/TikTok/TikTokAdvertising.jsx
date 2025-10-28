"use client";

import Image from "next/image";
import { Facebook } from "lucide-react";
import CustomLink from "../../Share/CustomLink";

export default function TikTokAdvertising() {
  return (
    <section className="bg-white text-gray-800 py-20 px-6">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* --- Top Section: Title + Subtitle --- */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 flex justify-center items-center gap-2">
            <Facebook className="text-blue-600 w-8 h-8" />
            What Is Facebook Advertising?
          </h2>
          <p className="text-green-600 font-medium text-lg">
            Reach the Right People With the Right Message
          </p>
        </div>

        {/* --- Middle Section: Left Text + Right Image --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Text */}
          <div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Finding and retaining customers is a never-ending challenge for many businesses across
              industries.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              With the right strategy and execution, Facebook advertising can{" "}
              <strong>
                drive qualified leads and traffic to your website and boost your conversion rate.
              </strong>
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Facebook advertising refers to the promotion of products, services or brands on the
              platform and its affiliated networks, including Instagram and Messenger.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Facebook ads appear in various formats such as videos, images, carousels and text. Its
              advanced targeting capabilities help you{" "}
              <strong>
                reach potential customers based on demographics, interests, behaviors and location.
              </strong>
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <Image
                src="/Benefits.jpg"
                alt="Facebook advertising example"
                width={500}
                height={400}
                className="rounded-2xl object-cover"
              />
              <div className="absolute -top-5 -right-5 w-64 h-64 bg-green-200/40 rounded-full -z-10 blur-2xl"></div>
            </div>
          </div>
        </div>

        {/* --- Bottom Section: More Text --- */}
        <div className="max-w-4xl mx-auto text-gray-600 leading-relaxed space-y-4">
          <p>
            Whether you’re just getting started on social media or exploring new lead generation
            strategies, Facebook advertising is a cost-effective way to achieve your goals.
          </p>
          <p>
            Thrive is a trusted Facebook ads agency with years of experience managing results-driven
            ad campaigns across various industries. As a leading Facebook marketing company, we
            combine data-driven strategies with our creative excellence to optimize your campaigns
            for maximum return on investment (ROI).
          </p>
          <p>
            Discover how our advertising agency’s Facebook experts can help your business stand out
            and grow in a competitive digital landscape.
          </p>
              </div>
              <div className="flex justify-center mt-10">
                  <CustomLink text={"Launch Facebook Ads"}></CustomLink>
              </div>
      </div>
    </section>
  );
}
