import React from "react";
import CustomLink from "../../Share/CustomLink";

export default function AdvertisingInvestment() {
  return (
    <section className="py-20 px-6 ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Grid with equal height columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Left Content */}
          <div className="space-y-6 flex flex-col">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Get Maximum Returns on Your Advertising Investment
            </h1>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Google Ads is a powerful marketing platform, but it can also be a money pit with the wrong strategy.
              It is one of the most effective lead generation tools, generating an estimated{" "}
              <span className="font-bold text-foreground">$8 return in profits</span> for every{" "}
              <span className="font-bold text-foreground">$1 a business spends</span>.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Across all industries, the average conversion rate for Google search ads is{" "}
              <span className="font-bold text-foreground">4.2%</span>, with survey data showing that this can climb up
              to <span className="font-bold text-foreground">6%</span> for some sectors.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              The Google Ads platform is user-friendly, and anyone can set up an ad campaign in minutes. However, better
              platform management leads to better returns on ad spend and a greater bottom line.
            </p>

            {/* Help Section */}
            <div className="pt-4 space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                Need help setting up your Google Ads Manager?
              </h2>

              <p className="text-lg text-foreground/80 leading-relaxed">
                Our Google Ads experts set up, monitor and optimize campaigns to send targeted leads to your website and
                other online properties. Drive advertising revenue while lowering acquisition costs with Thrive Internet
                Marketing Agency's Google Ads management services.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                From campaign setup to managing creatives, our certified Google Ads specialists help you reach the right
                audience and drive qualified leads to your website. Our Google Ads management agency gets real results
                while lowering your cost per lead and increasing ad conversions.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                Maximize your advertising budget and leverage the platform to its full potential with Thrive's Google
                Ads Management services.
              </p>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end items-stretch">
            <img
              src="/Benefits.jpg"
              alt="Woman with megaphone showing Google Ads analytics on smartphone"
              className="w-full max-w-md lg:max-w-lg rounded-xl shadow-lg h-full object-cover"
            />
          </div>
              </div>
              <div className="flex justify-center mt-10">
                  <CustomLink text={"Boost My Ad Revenue"}></CustomLink>
              </div>
      </div>
    </section>
  );
}
