"use client";

import Image from "next/image";

export default function ClientSay() {
  return (
    <section className=" py-20 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="text-accent text-3xl lg:text-6xl font-bold mb-10">
          What Our <br />
          Clients Say
        </h1>
        {/* main card */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          {/* 1 card */}
          <div className="space-y-4 mt-14">
            <div>
              <Image
                src={"/HomePage/farzana.png"}
                width={100}
                height={400}
                className="w-full"
                alt="farzana munni"
              ></Image>
            </div>
            <h1 className="text-accent text-3xl font-bold">Farzana Munni</h1>
            <h1 className="text-lg text-gray-500 font-bold">
              Founder & CEO @MetLife
            </h1>
            <p className="text-accent font-normal text-lg">
              In today's digital age, apps have become an integral part of our
              daily lives. From communication and entertainment to productivity
              and learning, there's an app for just about everything.
            </p>
          </div>
          {/* 2 card */}
          <div className="space-y-4">
            <div>
              <Image
                src={"/HomePage/mubin.png"}
                width={100}
                height={400}
                className="w-full h-[550px]"
                alt="farzana munni"
              ></Image>
            </div>
            <h1 className="text-accent text-3xl font-bold">Mubin Mia</h1>
            <h1 className="text-lg text-gray-500 font-bold">
              Founder & CEO @Betopia
            </h1>
            <p className="text-accent font-normal text-lg">
              In today's digital age, apps have become an integral part of our
              daily lives. From communication and entertainment to productivity
              and learning, there's an app for just about everything.
            </p>
          </div>
          {/* 3 card */}
          <div className="space-y-4 mt-14">
            <div>
              <Image
                src={"/HomePage/kazi.png"}
                width={100}
                height={400}
                className="w-full "
                alt="farzana munni"
              ></Image>
            </div>
            <h1 className="text-accent text-3xl font-bold">Kazi Maruf</h1>
            <h1 className="text-lg text-gray-500 font-bold">CEO @Unicare</h1>
            <p className="text-accent font-normal text-lg">
              In today's digital age, apps have become an integral part of our
              daily lives. From communication and entertainment to productivity
              and learning, there's an app for just about everything.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
