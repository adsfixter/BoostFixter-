"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    projectImage: "/ClientSays/Top-10-Proven-Tricks-To-Get-Your-Clients.jpg",
    feedback:
      "We were absolutely delighted with the professionalism and creativity of this team. They understood our vision perfectly and delivered a user experience that exceeded expectations. Their communication was clear throughout the project, and their design thinking helped us stand out. We’re thrilled with the results and will continue working with them.",
    clientImage: "/ClientSays/client.jpeg",
    clientName: "Nina Fanquibe",
    clientRole: "Founder & CEO",
    company: "TheFinch",
  },
  {
    projectImage: "/ClientSays/What-to-Tell-Clients-Who-Say-Youre-too-Expensive.webp",
    feedback:
      "Working with this agency was a refreshing experience. They handled our project with care, delivering high-quality work ahead of schedule. Their digital marketing insights helped us reach a wider audience and achieve measurable growth. I appreciate their transparency, strategic mindset, and dedication to ensuring our brand voice remained authentic throughout the process.",
    clientImage: "/ClientSays/client.jpeg",
    clientName: "John Carter",
    clientRole: "CMO",
    company: "SolarGate",
  },
  {
    projectImage:
      "/ClientSays/How-To-Listen-To-Your-Clients-And-Hear-What-They_re-Not-Saying-2_2048x.progressive.webp",
    feedback:
      "Their team brought our app idea to life with an intuitive and seamless design. They truly understand how to merge user experience with clean, scalable functionality. Every step was organized, transparent, and efficient. The end result is an app our users genuinely enjoy using every single day. Highly recommended service.",
    clientImage: "/ClientSays/client.jpeg",
    clientName: "Maria Lopez",
    clientRole: "CTO",
    company: "EcoApp",
  },
  {
    projectImage: "/ClientSays/what-our-clients-say-text-260nw-2688052927.webp",
    feedback:
      "From start to finish, the collaboration was smooth and inspiring. The team paid close attention to every detail and consistently went the extra mile to enhance our brand’s identity. Their UI/UX expertise helped us simplify complex workflows. The final design reflects both elegance and usability — a perfect combination.",
    clientImage: "/ClientSays/client.jpeg",
    clientName: "Samuel Li",
    clientRole: "Head of Product",
    company: "Airmax",
  },
];

const transition = { type: "spring", duration: 0.6, bounce: 0.25 };

export default function ClientSay() {
  const [current, setCurrent] = useState(0);

  // ✅ Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const handlePagination = (idx) => setCurrent(idx);

  return (
    <section className="px-4 py-16 bg-white md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="mb-10 text-3xl font-semibold text-gray-900 md:text-4xl">
          What Our <br /> Clients Say
        </h2>

        <div className="flex flex-col items-center gap-10 md:flex-row">
          {/* Left: Project Image */}
          <div className="relative flex items-center justify-center w-full overflow-hidden bg-black shadow-2xl rounded-2xl aspect-video md:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[current].projectImage}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={transition}
                className="relative w-full h-full"
              >
                <Image
                  src={testimonials[current].projectImage}
                  alt="Project Screenshot"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Feedback */}
          <div className="flex flex-col justify-between w-full gap-5 md:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[current].feedback}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={transition}
                className="flex flex-col gap-5"
              >
                <p className="text-base leading-relaxed text-gray-700 md:text-lg">
                  {testimonials[current].feedback}
                </p>

                {/* Client info */}
                <div className="flex items-center gap-4 mt-3">
                  <div className="relative flex-shrink-0 overflow-hidden shadow rounded-xl md:w-40 md:h-40">
                    <Image
                      src={testimonials[current].clientImage}
                      alt={testimonials[current].clientName}
                      fill
                      className="object-cover "
                    />
                  </div>
                  <div>
                    <div className="text-lg text-green-900 font-slemibold md:text-2xl">
                      {testimonials[current].clientName}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonials[current].clientRole}
                    </div>
                    <div className="text-base font-semibold text-green-800">
                      {testimonials[current].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handlePagination(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === idx
                  ? "bg-gray-800 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
