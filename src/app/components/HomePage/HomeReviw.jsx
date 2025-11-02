import React from "react";

export default function HomeReviw() {
  return (
    <div className="px-6 bg-gray-100 py-40">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* 1 card */}
        <div className="bg-[#F8F8F8] p-8">
          <p className="text-gray-400 text-4xl mb-2">01</p>
          <div className="mt-20">
            <h3 className="text-accent font-medium text-3xl mb-6">
              Projects Completed
            </h3>
            <p className="text-primary text-4xl font-bold">100 +</p>
          </div>
        </div>
        {/* 2 card */}
        <div className="bg-[#F8F8F8] p-8">
          <p className="text-gray-400 text-4xl mb-2">02</p>
          <div className="mt-20">
            <h3 className="text-accent font-medium text-3xl mb-6">
              Happy <br/> Clients
            </h3>
            <p className="text-primary text-4xl font-bold">95 %</p>
          </div>
        </div>
        {/* 3 card */}
        <div className="bg-[#F8F8F8] p-8">
          <p className="text-gray-400 text-4xl mb-2">03</p>
          <div className="mt-20">
            <h3 className="text-accent font-medium text-3xl mb-6">
              Years of <br/> Services
            </h3>
            <p className="text-primary text-4xl font-bold">3 +</p>
          </div>
        </div>
        {/* 4 card */}
        <div className="bg-[#F8F8F8] p-8">
          <p className="text-gray-400 text-4xl mb-2">04</p>
          <div className="mt-20">
            <h3 className="text-accent font-medium text-3xl mb-6">
              Team <br/> Members
            </h3>
            <p className="text-primary text-4xl font-bold">20 +</p>
          </div>
        </div>
      </div>
    </div>
  );
}
