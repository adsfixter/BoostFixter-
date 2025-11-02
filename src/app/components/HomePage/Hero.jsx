"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedButton from "../Share/AnimatedButton";
import CustomButton from "../Share/CustomButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-36 md:py-20 lg:py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-white" />

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="z-10 space-y-5 text-center md:text-left mb-14">
            <h1 className="text-3xl font-bold leading-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl">
              Leading AI-Powered Global{" "}
              <span className="text-accent">Digital Growth </span>
              Marketing Agency
            </h1>

            <p className="text-base font-medium text-accent sm:text-lg md:text-xl">
              Bangladesh's top digital marketing agency. Innovative strategies
              drive online success and business growth.
            </p>

            {/* Buttons */}
            <div className="flex flex-col items-center justify-center w-full gap-3 pt-4 sm:flex-row md:justify-start md:items-center">
              <AnimatedButton text="Free Consultation" />
              <CustomButton text="Portfolio" link="#" />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative flex items-center justify-center md:-mt-10 lg:-mt-10 mt-12 ">
            {/* Image 1 */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                x: [0, 10, 0],
                rotate: [0, 6, -6, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96"
            >
              <Image
                src="/HomePage/Icon_1st-Part.png"
                fill
                alt="BoostFixter Icon 1"
                className="object-contain"
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
              className="absolute w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96"
            >
              <Image
                src="/HomePage/Icon_2nd-Part.png"
                fill
                alt="BoostFixter Icon 2"
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
