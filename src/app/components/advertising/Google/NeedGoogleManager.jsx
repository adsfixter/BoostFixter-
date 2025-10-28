import React from "react";

export default function NeedGoogleManager() {
  return (
    <main className="px-6 py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}

        <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4 text-center">
          What You Need To Know About Google Ads Manager
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          To be successful in Google Ads management, you need to understand how
          the platform works and how to use it to your advantage.
        </p>

        {/* Content */}
        <article className="mt-10 space-y-12">
          {/* Section 1: What Are Google Ads? */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">What Are Google Ads?</h2>

            <p className="text-base leading-relaxed text-foreground">
              Google Ads (formerly Google AdWords) is an advertising platform
              where businesses pay to display advertisements, product listings
              and video content online.
            </p>

            <p className="text-base leading-relaxed text-foreground">
              These ads appear on various Google platforms, such as search
              results pages, YouTube videos and partner websites, making it
              easier for prospects to find your business and your offerings.
            </p>

            <p className="text-base leading-relaxed text-foreground">
              Google Ads offers brands many ways to be seen:
            </p>

            {/* Bullet List */}
            <ul className="space-y-3 ml-6">
              <li className="flex gap-3">
                <span className="font-bold text-primary flex-shrink-0">•</span>
                <span className="text-base leading-relaxed">
                  <span className="font-bold">Search Network:</span> Ads appear
                  on Google search results pages when users search for keywords
                  related to your business.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary flex-shrink-0">•</span>
                <span className="text-base leading-relaxed">
                  <span className="font-bold">Display Network:</span> Ads are
                  displayed on websites partnered with Google, giving you a
                  wider reach.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary flex-shrink-0">•</span>
                <span className="text-base leading-relaxed">
                  <span className="font-bold">Video Ads:</span> Video ads appear
                  on YouTube before or during a video.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary flex-shrink-0">•</span>
                <span className="text-base leading-relaxed">
                  <span className="font-bold">Shopping Ads:</span> These product
                  listings appear in Google search results when users search for
                  specific products.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 2: How Does Google Ads Work? */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">How Does Google Ads Work?</h2>

            <p className="text-base leading-relaxed text-foreground">
              The Google Ads platform works through a pay-per-click (PPC) system
              where businesses pay each time someone clicks on their ad.
            </p>

            <p className="text-base leading-relaxed text-foreground">
              However, unlike traditional pay-per-click advertising, Google Ads
              also considers ad relevance and quality to determine which ads are
              displayed and in what order.
            </p>

            <p className="text-base leading-relaxed text-foreground">
              Ads targeting specific keywords will appear on the search results
              page when someone searches for that keyword. The more relevant
              your ad is to the user's search query, the higher it will rank on
              the page.
            </p>

            <p className="text-base leading-relaxed text-foreground">
              This means that businesses need to strategically choose their
              keywords and create high-quality ads to see success with Google
              Ads.
            </p>

            <p className="text-base leading-relaxed text-foreground">
              A Google Ads management agency like Thrive can help enterprises
              navigate the complexities of the platform and ensure ad campaigns
              are set up for success.
            </p>
          </section>
        </article>

        {/* Footer spacing */}
        <div className="h-12" />
      </div>
    </main>
  );
}
