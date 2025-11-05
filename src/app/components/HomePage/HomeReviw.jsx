"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaProjectDiagram, FaSmile, FaClock, FaUsers } from "react-icons/fa";

export default function HomeReviw() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const cards = [
    {
      icon: <FaProjectDiagram className="text-5xl text-primary" />,
      title: "Projects Completed",
      end: 100,
      suffix: "+",
      duration: 3,
    },
    {
      icon: <FaSmile className="text-5xl text-primary" />,
      title: "Happy Clients",
      end: 95,
      suffix: "%",
      duration: 3,
    },
    {
      icon: <FaClock className="text-5xl text-primary" />,
      title: "Years of Services",
      end: 3,
      suffix: "+",
      duration: 2,
    },
    {
      icon: <FaUsers className="text-5xl text-primary" />,
      title: "Team Members",
      end: 20,
      suffix: "+",
      duration: 2.5,
    },
  ];

  return (
    <div ref={ref} className="pb-20 bg-white">
      <div className="grid grid-cols-1 gap-4 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => (
          <div key={index} className="bg-[#F8F8F8] p-8 flex flex-col items-center">
            <div className="mb-6">{card.icon}</div>
            <h3 className="mb-6 text-3xl font-medium text-center text-accent">{card.title}</h3>
            <p className="text-4xl font-bold text-primary">
              <CountUp start={0} end={inView ? card.end : 0} duration={card.duration} redraw={true} />
              {card.suffix}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
