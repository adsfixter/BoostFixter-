import React from "react";
import CustomButton from "../Share/CustomButton";


export default function OurStory() {
  return (
    <div className="px-6">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 ">
          {/* left site */}
          <div className="space-y-5">
            <h1 className="text-3xl text-primary">Our Story</h1>
          </div>
          {/* right site */}
          <div className="space-y-9">
            <h1 className="text-3xl lg:text-5xl font-bold text-primary">
              We're a Results-Driven Digital Marketing Agency
            </h1>
            <p className="text-xl text-accent">
              Established in 2023, BoostFixter empowers businesses with
              AI-powered digital marketing strategies and innovative solutions
              that drive growth and measurable results.
            </p>
            <div className="w-3/10">
              <CustomButton text={"View Details"} link={"#"}></CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
