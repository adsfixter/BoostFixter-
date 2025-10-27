import React from 'react'
import CustomLink from '../../Share/CustomLink'

export default function WhatSocialMediaAdvertising() {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Is Social Media Advertising?
          </h1>
          <p className="text-lg md:text-xl text-amber-700 font-medium">
            Generate High-Converting Leads and Increase Sales Exponentially
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              In today's digital age, conventional marketing methods are not enough to build a loyal and highly
              engaged customer base. You need to meet people where they are active and tailor your brand message to
              specific audience segments to reach more consumers at a low cost and generate a better ROI.
            </p>
            <p className="text-gray-700 leading-relaxed">
              More than any other marketing strategy, social media advertising helps maximize your brand's visibility
              and provides lucrative opportunities to attract and nurture leads and transform them into paying
              customers.
            </p>
          </div>

          {/* Right Column - Illustration */}
          <div className="flex justify-center h-56">
            <img
              src="/Benefits.jpg"
              alt="Social media advertising illustration"
              className="w-full max-w-md"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="space-y-12">
          {/* Question 1 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-start gap-3">
              <span className="text-amber-700 text-xl">●</span>
              <span className="italic">What is social media advertising?</span>
            </h3>
            <p className="text-gray-700 leading-relaxed ml-8">
              Social media advertising or paid social media marketing is one of the most popular and effective{' '}
              <a href="#" className="text-amber-700 underline hover:text-amber-800">
                digital marketing
              </a>{' '}
              methods for boosting conversion rates. Advertising on social media involves displaying paid social ads
              or sponsored content on various platforms, such as{' '}
              <a href="#" className="text-amber-700 underline hover:text-amber-800">
                Facebook
              </a>
              ,{' '}
              <a href="#" className="text-amber-700 underline hover:text-amber-800">
                LinkedIn
              </a>
              ,{' '}
              <a href="#" className="text-amber-700 underline hover:text-amber-800">
                Instagram
              </a>
              ,{' '}
              <a href="#" className="text-amber-700 underline hover:text-amber-800">
                Pinterest
              </a>
              ,{' '}
              <a href="#" className="text-amber-700 underline hover:text-amber-800">
                Twitter
              </a>{' '}
              and TikTok, and targeting specific customer demographics.
            </p>
          </div>

          {/* Question 2 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-start gap-3">
              <span className="text-amber-700 text-xl">●</span>
              <span className="italic">
                What is social media advertising's edge over other digital marketing methods? Is it worth the
                investment?
              </span>
            </h3>
            <div className="space-y-4 ml-8">
              <p className="text-gray-700 leading-relaxed">
                Social networks advertising allows you to direct your campaigns to specific audiences by criteria,
                such as location, age, online behavior, interests and device use. Unlike other online marketing
                initiatives, you only have to pay for the number of clicks or impressions your social ads get when
                you're advertising through social media. This makes social advertising a high-ROI marketing strategy.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Have you got big goals for your company? Harness the power of paid social media to boost your digital
                marketing efforts and connect with customers who are ready to convert!
              </p>
            </div>
          </div>
              </div>
              <div className='flex justify-center mt-10'>
                  <CustomLink text={"Hire A Trusted Social Ads Agency"}></CustomLink>
              </div>
      </div>
    </section>
  )
}
