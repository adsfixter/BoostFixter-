"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import CustomButton from "../../Share/CustomButton";

const MotionImage = motion(Image);

export default function DigitalMarketingComponent() {
  const services = [
    {
      number: "01",
      title: "Network Security",
      description:
        "Protect your infrastructure from threats and vulnerabilities with advanced network protection strategies.",
    },
    {
      number: "02",
      title: "Data Protection & Encryption",
      description:
        "Secure your sensitive data with military-grade encryption and protection protocols.",
    },
    {
      number: "03",
      title: "Vulnerability Assessment",
      description:
        "Identify and address security weaknesses before attackers can exploit them.",
    },
    {
      number: "04",
      title: "Threat Detection & Monitoring",
      description:
        "Real-time threat identification and rapid response to security incidents.",
    },
    {
      number: "05",
      title: "Firewall & Endpoint Security",
      description:
        "Advanced protection for all your endpoints with intelligent firewall systems.",
    },
    {
      number: "06",
      title: "Security Audits & Compliance",
      description:
        "Ensure compliance with industry standards and security best practices.",
    },
    {
      number: "07",
      title: "Incident Response & Recovery",
      description:
        "Swift and effective response to security incidents and business continuity.",
    },
    {
      number: "08",
      title: "Employee Security Training",
      description:
        "Educate your team on security best practices and threat awareness.",
    },
  ];

  return (
    <div className="bg-[#F8F8F8]">
      {/* -------- Hero Section -------- */}
      <section className="px-4 py-14 md:py-16">
        <div className="grid items-center grid-cols-1 gap-10 mx-auto max-w-7xl lg:grid-cols-2">
          {/* Text Section */}
          <div className="space-y-5 text-center lg:text-left">
            <h1 className="title text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#00473E]">
             Digital Marketing
            </h1>
            <p className="max-w-xl mx-auto leading-relaxed text-gray-600 description lg:mx-0">
             When it comes to digital marketing, we create strategies that drive real business growth. Our goal is to help your brand reach the right audience, increase engagement, and convert leads into customers.
            </p>

            <div className="flex justify-center lg:justify-start">
              <CustomButton text={"Quick a Call"} link={"#"} />
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center w-full lg:justify-end">
            <img
              src="/service/marketing.png"
              alt="Cyber Security"
              className="object-cover w-full max-w-[450px] rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* -------- Services Grid -------- */}
      <section className="px-4 pb-14 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.number}
                className="flex flex-col justify-between p-6 transition-all duration-300 bg-white shadow-sm rounded-xl hover:shadow-md"
              >
                <div>
                  <div className="subtitle">{service.number}</div>
                  <h3 className="subtitle">{service.title}</h3>
                </div>

                <div className="mt-4 flex underline items-center gap-1 text-sm font-semibold text-[#00473E] hover:gap-2 transition-all duration-300 cursor-pointer">
                  Details
                  <ArrowRight className="w-5 h-5 transform rotate-[-45deg]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------- Expert Connect Section -------- */}
      <section className="pb-10 overflow-hidden ">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
            {/* IMAGE SIDE */}
            <div className="relative flex justify-center md:justify-start md:col-span-2">
              <Image
                alt="Expert"
                src="/About/Abdul-Kadir.png"
                width={220}
                height={220}
               className="relative  w-[200px] sm:w-[180px] md:w-[200px] rounded-2xl"
              />

              {/* Animated Star */}
              <MotionImage
                src="/HomePage/Star.png"
                alt="Star"
                width={150}
                height={150}
                animate={{
                  x: [0, 5, 0],
                  y: [0, -5, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-[40%] md:top-[40%] left-[80%] -translate-x-[50%] xl:left-[50%]  md:left-[85%] lg:left-[70%] -translate-y-[50%] w-[130px] sm:w-[100px] md:w-[190px]"
              />
            </div>

            {/* TEXT SIDE */}
            <div className="space-y-5 text-center md:text-left md:col-span-3">
              <h1 className="title">
             Connect with our Marketing Experts Today!
              </h1>
              <p className=" description">
                Have a project in mind? Let’s collaborate and create something
                extraordinary. Reach out to us, and we’ll help turn your ideas
                into impactful digital experiences.
              </p>

              <div className="flex justify-center md:justify-start">
                <CustomButton text={"Quick a Call"} link={"#"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
