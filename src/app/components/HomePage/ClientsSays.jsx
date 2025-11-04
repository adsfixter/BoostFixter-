"use client";

import Image from "next/image";

export default function ClientSay() {
  const testimonials = [
    {
      id: 1,
      name: "Farzana Munni",
      role: "Founder & CEO @MetLife",
      image: "/HomePage/farzana.png",
      feedback:
        "In today's digital age, apps have become an integral part of our daily lives. From communication and entertainment to productivity and learning, there's an app for just about everything.",
      marginTop: "mt-0",
    },
    {
      id: 2,
      name: "Mubin Mia",
      role: "Founder & CEO @Betopia",
      image: "/HomePage/mubin.png",
      feedback:
        "In today's digital age, apps have become an integral part of our daily lives. From communication and entertainment to productivity and learning, there's an app for just about everything.",
      marginTop: "mt-0",
    },
    {
      id: 3,
      name: "Kazi Maruf",
      role: "CEO @Unicare",
      image: "/HomePage/kazi.png",
      feedback:
        "In today's digital age, apps have become an integral part of our daily lives. From communication and entertainment to productivity and learning, there's an app for just about everything.",
      marginTop: "mt-0",
    },
  ];

  return (
    <section className=" bg-white pb-20 pt-10">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="text-2xl lg:text-5xl font-bold text-accent mb-10">
          Clients Say
        </h1>

        {/* main card grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          {testimonials.map((client) => (
            <div
              key={client.id}
              className={`space-y-4 ${client.marginTop}`}
            >
              <div>
                <Image
                  src={client.image}
                  width={100}
                  height={400}
                  className="w-full h-[280px] object-cover rounded-3xl"
                  alt={client.name}
                />
              </div>
              <h1 className="text-accent text-3xl font-bold">{client.name}</h1>
              <h2 className="text-lg text-gray-500 font-bold">{client.role}</h2>
              <p className="text-accent font-normal text-lg">
                {client.feedback}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
