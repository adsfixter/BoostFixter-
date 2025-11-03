"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function HomeReviw() {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.1, 
  });

  return (
    <div ref={ref} className="bg-white pb-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* 1 card */}
        <div className="bg-[#F8F8F8] p-8">
          <p className="text-gray-400 text-4xl mb-2">01</p>
          <div className="mt-20">
            <h3 className="text-accent font-medium text-3xl mb-6">
              Projects Completed
            </h3>
            <p className="text-primary text-4xl font-bold">
              <CountUp start={0} end={inView ? 100 : 0} duration={3} redraw={true} /> +
            </p>
          </div>
        </div>

        {/* 2 card */}
        <div className="bg-[#F8F8F8] p-8">
          <p className="text-gray-400 text-4xl mb-2">02</p>
          <div className="mt-20">
            <h3 className="text-accent font-medium text-3xl mb-6">
              Happy <br /> Clients
            </h3>
            <p className="text-primary text-4xl font-bold">
              <CountUp start={0} end={inView ? 95 : 0} duration={3} redraw={true} /> %
            </p>
          </div>
        </div>

        {/* 3 card */}
        <div className="bg-[#F8F8F8] p-8">
          <p className="text-gray-400 text-4xl mb-2">03</p>
          <div className="mt-20">
            <h3 className="text-accent font-medium text-3xl mb-6">
              Years of <br /> Services
            </h3>
            <p className="text-primary text-4xl font-bold">
              <CountUp start={0} end={inView ? 3 : 0} duration={2} redraw={true} /> +
            </p>
          </div>
        </div>

        {/* 4 card */}
        <div className="bg-[#F8F8F8] p-8">
          <p className="text-gray-400 text-4xl mb-2">04</p>
          <div className="mt-20">
            <h3 className="text-accent font-medium text-3xl mb-6">
              Team <br /> Members
            </h3>
            <p className="text-primary text-4xl font-bold">
              <CountUp start={0} end={inView ? 20 : 0} duration={2.5} redraw={true} /> +
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
