"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
const Slider = dynamic(() => import("react-slick"), { ssr: false });
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimatedButton from "../Share/AnimatedButton";
import CustomButton from "../Share/CustomButton";


export function Hero() {

  return (
    <section className="relative overflow-hidden text-black bg-white md:py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-white" />

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          {/* LEFT CONTENT */}
          <div className="z-10 space-y-6 m">
            <h1 className="text-6xl font-bold text-primary">Leading AI-Powered Global <span className="text-accent">Digital Growth </span>Marketing Agency</h1>

           <p className="text-lg text-accent font-bold">Bangladesh's top digital marketing agency. Innovative strategies drive online success and business growth.</p>

            {/* Buttons */}
            <div className="flex flex-col w-full gap-4 pt-4 sm:flex-row sm:justify-start sm:items-center">
              <div>
                <AnimatedButton text="Get a Free Consultation"></AnimatedButton>
              </div>

              <div>
                <CustomButton text={"Portfolio"} link={"#"}></CustomButton>
             </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full">
            <div className=" w-full h-full  mt-4">
              <Image
                src={"/BoostFixter_Website.png"}
                width={400}
                height={400}
                alt="BoostFixter Website Preview"
              >
              </Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
