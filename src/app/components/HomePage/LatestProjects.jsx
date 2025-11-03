import React from "react";
import CustomButton from "../Share/CustomButton";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    "id": 1,
    "name": "EccokValy",
    "link": "https://reactjs.org",
    "image": "/project/project1.png"
  },
  {
    "id": 2,
    "name": "Creato Care",
    "link": "",
    "image": "/project/project2.png"
  },
  {
    "id": 3,
    "name": "Jannatul Maowa Dental",
    "link": "https://tailwindcss.com",
    "image": "/project/project3.png"
  }
]


export default function LatestProjects() {
  return (
    <div className=" bg-white py-16 ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* top div */}
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-accent font-semibold text-3xl lg:text-5xl">
            Our Latest Projects <br />
            We Have Done!
          </h1>
          <CustomButton text={"See Our All Projects"} link={"#"}></CustomButton>
        </div>
        {/* animation main card */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          {
            projects.map((project) => (
              <div key={project.id}>
                <Image
                  src={project.image}
                  alt={project.name}
                  width={300}
                  height={300}
                  className="w-full"
                ></Image>
                <Link
                  className="text-accent font-normal text-lg flex mt-4 text-center justify-center underline "
                href={project.link}
                >{project.name}<ArrowUpRight /></Link>
              </div>
            ))
         }
        </div>
      </div>
    </div>
  );
}
