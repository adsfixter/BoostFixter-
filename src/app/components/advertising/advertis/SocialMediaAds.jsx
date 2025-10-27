import React from 'react';
import CustomLink from '../../Share/CustomLink';

export default function SocialMediaAds() {
  return (
    <section className="py-20 px-4 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
          Data-Driven Social Media Ads Services
        </h2>
        <p className="text-xl text-center text-gray-700 mb-12">
          That Accelerate Your Growth
        </p>

        {/* Content */}
        <div className="space-y-6 max-w-4xl mx-auto text-gray-700 text-base md:text-lg leading-relaxed">
          <p>
            Experiencing a dip in organic reach, audience engagement or conversions? Tackle your marketing hurdles
            head-on and stay ahead of the curve with Thrive Internet Marketing Agency’s growth-driven paid social
            media advertising services.
          </p>
          <p>
            We leverage data to dissect your audience demographics, identify customer preferences and pain points
            and craft a social media advertising strategy that delivers unmatched results.
          </p>
          <p>
            Our comprehensive approach combines platform-specific expertise, AI-powered targeting and continuous
            optimization to maximize your advertising return on investment (ROI).
          </p>
          <p>
            Partner with our social media advertising agency and let us position your brand directly in front of
            high-converting prospects.
          </p>
              </div>
              <div className='flex justify-center mt-10'>
                  <CustomLink text={"Launch My Social Ad Campaign"}></CustomLink>
              </div>
      </div>
    </section>
  );
}
