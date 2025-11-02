import React from "react";
import CustomButton from "../Share/CustomButton";
import Image from "next/image";
import Marquee from "react-fast-marquee";
const projects = [
  {
    id: 1,
    image: "/project/project1.png",
    url: "https://www.apexfootwearltd.com/",
  },
  {
    id: 2,
    image: "/project/project2.png",
    url: "https://www.apexfootwearltd.com/",
  },
  {
    id: 3,
    image: "/project/project3.png",
    url: "https://www.apexfootwearltd.com/",
  },
  {
    id: 4,
    image: "/project/project4.png",
    url: "https://www.apexfootwearltd.com/",
  },
  {
    id: 5,
    image: "/project/project5.png",
    url: "https://www.apexfootwearltd.com/",
  },
  {
    id: 6,
    image: "/project/project6.png",
    url: "https://www.apexfootwearltd.com/",
  },
  {
    id: 7,
    image: "/project/project7.png",
    url: "https://www.apexfootwearltd.com/",
  },
  {
    id: 8,
    image: "/project/project8.png",
    url: "https://www.apexfootwearltd.com/",
  },
  {
    id: 9,
    image: "/project/project9.png",
    url: "https://www.apexfootwearltd.com/",
  },
  {
    id: 10,
    image: "/project/project10.png",
    url: "https://www.apexfootwearltd.com/",
  },
  {
    id: 11,
    image: "/project/project11.png",
    url: "https://www.apexfootwearltd.com/",
  },
];

export default function LatestProjects() {
  return (
    <div className="px-6">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* top div */}
        <div className="flex justify-between mb-12">
          <h1 className="text-accent font-bold text-3xl lg:text-6xl">
            Our Latest Projects <br />
            We Have Done!
          </h1>
          <CustomButton text={"See Our All Projects"} link={"#"}></CustomButton>
        </div>
        {/* animation main card */}
        <div className=" py-10 space-y-6">
          {/* top Marquee */}
          <Marquee
            pauseOnHover={true}
            gradient={false}
            speed={50}
            className="pb-4"
          >
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className=" mx-2 flex items-center justify-center" // 👈 gap কমানোর জন্য mx-8 → mx-4
              >
                <div className="w-full h-[140px] flex items-center justify-center">
                  {" "}
                  {/* 👈 image একটু বড় */}
                  <Image
                    src={project.image}
                    alt={`Company ${project.id} logo`}
                    width={180}
                    height={100}
                    className=" object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </a>
            ))}
          </Marquee>
          {/* top Marquee */}
          <Marquee
            direction=""
            pauseOnHover={true}
            gradient={false}
            speed={50}
            className="pb-4"
          >
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className=" mx-2 flex items-center justify-center" // 👈 gap কমানোর জন্য mx-8 → mx-4
              >
                <div className="w-full h-[140px] flex items-center justify-center">
                  {" "}
                  {/* 👈 image একটু বড় */}
                  <Image
                    src={project.image}
                    alt={`Company ${project.id} logo`}
                    width={180}
                    height={100}
                    className=" object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </a>
            ))}
          </Marquee>
          {/* top Marquee */}
          <Marquee
            pauseOnHover={true}
            gradient={false}
            speed={50}
            className="pb-4"
          >
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className=" mx-2 flex items-center justify-center" // 👈 gap কমানোর জন্য mx-8 → mx-4
              >
                <div className="w-full h-[140px] flex items-center justify-center">
                  {" "}
                  {/* 👈 image একটু বড় */}
                  <Image
                    src={project.image}
                    alt={`Company ${project.id} logo`}
                    width={180}
                    height={100}
                    className=" object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </a>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
