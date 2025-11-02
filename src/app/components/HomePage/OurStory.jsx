import React from "react";
import CustomButton from "../Share/CustomButton";

export default function OurStory() {
  return (
    <section className=" py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
              Our Story
            </h2>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-2xl font-bold text-primary sm:text-3xl lg:text-5xl">
              We're a Results-Driven <br className="hidden sm:block" />
              Digital Marketing Agency
            </h1>

            <p className="text-base text-accent sm:text-lg md:text-xl leading-relaxed">
              Established in 2023, BoostFixter empowers businesses with
              AI-powered digital marketing strategies and innovative solutions
              that drive growth and measurable results.
            </p>

            <div className="flex justify-center md:justify-start">
              <CustomButton text={"View Details"} link={"#"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
