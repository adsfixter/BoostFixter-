"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion"; // ✅ Animation
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
          <div className="z-10 space-y-6">
            <h1 className="text-6xl font-bold text-primary">
              Leading AI-Powered Global{" "}
              <span className="text-accent">Digital Growth </span>
              Marketing Agency
            </h1>

            <p className="text-lg text-accent font-bold">
              Bangladesh's top digital marketing agency. Innovative strategies
              drive online success and business growth.
            </p>

            {/* Buttons */}
            <div className="flex flex-col w-full gap-4 pt-4 sm:flex-row sm:justify-start sm:items-center">
              <AnimatedButton text="Get a Free Consultation" />
              <CustomButton text="Portfolio" link="#" />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative flex items-center justify-center mt-4">
            {/* Image 1 */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                rotate: [0, 6, -6, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute"
            >
              <Image
                src="/HomePage/Icon_1st-Part.png"
                width={400}
                height={400}
                alt="BoostFixter Icon 1"
              />
            </motion.div>

            {/* Image 2 */}
            <motion.div
              animate={{
                y: [0, 20, 0],
                x: [0, -10, 0],
                rotate: [0, -10, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute"
            >
              <Image
                src="/HomePage/Icon_2nd-Part.png"
                width={400}
                height={400}
                alt="BoostFixter Icon 2"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
