"use client";

import { Facebook, Globe } from "lucide-react";
import { SiTiktok } from "react-icons/si";

export default function SocialMediaSection() {
  return (
    <section className="bg-white text-gray-800 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* --- Top Heading Section --- */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
            Social Media Platforms Your Business Should Consider Using for Advertising
          </h2>
          <p className="text-green-600 font-medium mb-4">
            Ensure the Most Efficient Use of Your Resources
          </p>
          <p className="text-gray-600 leading-relaxed">
            Global social media statistics reveal that, on average, online users visit{" "}
            <strong>more than six different social media platforms per month</strong> and spend
            approximately <strong>2.5 hours using social media every day.</strong> With so many
            platforms available, choosing the right one for your business is crucial for success.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            At our agency, we help you select the best advertising platforms for your niche,
            ensuring the highest ROI and efficient use of your marketing budget.
          </p>
        </div>

        {/* --- Section Title --- */}
        <h3 className="text-center text-2xl sm:text-3xl font-bold mb-12">
          Social Media Platforms for Business Niches With Different Needs:
        </h3>

        {/* --- Three Columns --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Facebook Ads */}
          <div className="border border-gray-200 rounded-2xl shadow-sm p-8 hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Facebook className="text-blue-600 w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Facebook Advertising</h4>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Facebook Ads help businesses target audiences with precision using image, video, and
              carousel ads. With over <strong>3 billion monthly active users</strong>, it’s ideal for
              creating brand awareness and generating leads quickly. Ads are typically approved
              within <strong>24 hours</strong>.
            </p>
            <h5 className="font-semibold text-gray-900 mb-2">
              What Our Facebook Ads Agency Can Do for You:
            </h5>
            <p className="text-gray-600 leading-relaxed">
              We develop custom Facebook campaigns to match your brand goals. Our team sets up{" "}
              <span className="text-blue-600 font-semibold underline cursor-pointer">
                Facebook Pixel
              </span>{" "}
              to track performance, optimize targeting, and increase conversions effectively.
            </p>
          </div>

          {/* TikTok Ads */}
          <div className="border border-gray-200 rounded-2xl shadow-sm p-8 hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-black/5 p-3 rounded-full">
                <SiTiktok className="text-black w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">TikTok Advertising</h4>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              TikTok Ads are perfect for brands aiming to reach younger audiences through engaging
              short-form videos. With over <strong>1.5 billion monthly users</strong>, TikTok
              delivers viral reach potential and high engagement for creative campaigns.
            </p>
            <h5 className="font-semibold text-gray-900 mb-2">
              What Our TikTok Ads Agency Can Do for You:
            </h5>
            <p className="text-gray-600 leading-relaxed">
              We use TikTok’s advanced ad tools and trends to create viral content, optimize
              delivery for conversions, and manage ad spending effectively — ensuring your brand
              connects with the next generation of customers.
            </p>
          </div>

          {/* Google Ads */}
          <div className="border border-gray-200 rounded-2xl shadow-sm p-8 hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <Globe className="text-yellow-600 w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Google Ads</h4>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Google Ads (Search & Display) allow you to target customers actively searching for
              your products or services. With billions of daily searches, Google ensures your
              business appears at the right place and time.
            </p>
            <h5 className="font-semibold text-gray-900 mb-2">
              What Our Google Ads Agency Can Do for You:
            </h5>
            <p className="text-gray-600 leading-relaxed">
              We craft keyword-optimized campaigns, manage bidding strategies, and continuously
              refine your ads to maximize ROI. From search campaigns to YouTube video ads — we
              ensure your business dominates visibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
