"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const buttons = [
  { id: 1, button_name: "CRM System", button_id: "btn-get-started" },
  { id: 2, button_name: "POS System", button_id: "btn-learn-more" },
  { id: 3, button_name: "ERP System", button_id: "btn-contact-us" },
  { id: 4, button_name: "HR Connect", button_id: "btn-view-projects" },
  { id: 5, button_name: "WorkForce 360", button_id: "btn-subscribe-now" },
  { id: 6, button_name: "Horizon HR", button_id: "btn-join-community" },
];

const applications = [
  {
    id: 1,
    title: "Some of the mentionable features of our CRM are given as following",
    description:
      "We are delighted to develop our own CRM and it obtains each and every feature one believes to be there for employee management and client management. We are also highly appreciated from our clients for this dynamic tech works as they can easily reach us and overview our works instantly which are related to their development.",
    key_features: [
      "Employee Information Management",
      "Attendance and Time Tracking",
      "Leave Management and Approval Workflow",
      "Performance Evaluation and Feedback",
      "Recruitment and Onboarding Automation",
      "Training and Development Modules",
    ],
    img_url: "/portfolio/Graphics.png",
  },
  {
    id: 2,
    title: "Key features of our POS systems include",
    description:
      "We take pride in crafting state-of-the-art POS solutions tailored to streamline business operations, enhance customer experiences, and optimize sales management. Our POS applications are applauded by clients for their seamless integration, intuitive interfaces, and robust functionality.",
    key_features: [
      "Sales & Inventory Tracking",
      "Customer Management",
      "Billing Automation",
      "Reporting and Analytics",
      "Multi-Store Integration",
    ],
   img_url: "/portfolio/Graphics.png",
  },
  {
    id: 3,
    title: "ERP Management Platform",
    description:
      "A fully integrated ERP platform designed to unify business operations and improve productivity across departments with real-time data access.",
    key_features: [
      "Finance and Accounting",
      "Procurement Automation",
      "Inventory & Supply Chain",
      "HR & Payroll Integration",
      "Reporting Dashboard",
    ],
    img_url: "/portfolio/Graphics.png",
  },
  {
    id: 4,
    title: "HRConnect",
    description:
      "HRConnect brings all HR processes under one roof — from hiring to performance evaluation — ensuring smooth and transparent operations.",
    key_features: [
      "Employee Profile Management",
      "Onboarding and Offboarding Automation",
      "Attendance & Leave Approval",
      "Feedback and Evaluation System",
      "Compliance Management",
    ],
    img_url: "/portfolio/Graphics.png",
  },
  {
    id: 5,
    title: "WorkForce 360",
    description:
      "A next-generation HRM system for medium to large organizations focusing on productivity and engagement through digital HR processes.",
    key_features: [
      "Employee Data Management",
      "Performance Review Tools",
      "Training Programs",
      "Leave and Attendance Module",
      "Document Compliance Tools",
    ],
    img_url: "/portfolio/Graphics.png",
  },
  {
    id: 6,
    title: "Horizon HR",
    description:
      "A flexible and scalable HRM platform tailored for startups and growing companies to manage HR processes effectively.",
    key_features: [
      "Attendance Tracking",
      "Leave Requests & Approvals",
      "Performance Monitoring",
      "Recruitment Management",
      "Employee Document Storage",
    ],
    img_url: "/portfolio/Graphics.png",
  },
];

export default function WebApplications() {
  const [activeButton, setActiveButton] = useState(1);

  const activeApp = applications.find((app) => app.id === activeButton);

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-8 text-center">
          Some{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Web Applications </span>
            <span className="absolute left-0 bottom-2 w-full h-3 bg-secondary z-0"></span>
          </span>{" "}
          made by us
        </h1>

        {/* Button Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-16 place-items-center">
          {buttons.map((button) => (
            <button
              key={button.id}
              id={button.button_id}
              onClick={() => setActiveButton(button.id)}
              className={`border-2 border-secondary font-medium px-2 py-4 rounded-3xl text-center w-full transition-all duration-300
                ${
                  activeButton === button.id
                    ? "bg-secondary text-white"
                    : "hover:bg-primary hover:text-white"
                }`}
            >
              {button.button_name}
            </button>
          ))}
        </div>

        {/* Active Application Data */}
        {activeApp && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">{activeApp.title}</h2>
              <p className="text-gray-600 mb-6 text-justify">
                {activeApp.description}
              </p>

              <h3 className="text-lg font-semibold mb-2 text-primary">
                Key Features:
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                {activeApp.key_features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Right Image Section */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-lg overflow-hidden">
                <Image
                  src={activeApp.img_url || "/default-image.jpg"}
                  alt={activeApp.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
