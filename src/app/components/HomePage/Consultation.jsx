import { ArrowUpRight } from "lucide-react";
import AnimatedButton from "../Share/AnimatedButton";

export default function ContactForm() {
  return (
    <section className=" pb-10 pt-10 bg-[#F8F8F8]">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-start my-10 rounded-lg md:flex-row ">
          {/* text div - 30% */}
          <div className="mb-6 md:w-[40%] md:mb-0">
            <h2 className="mb-4 text-3xl font-extrabold text-accent sm:text-3xl md:text-4xl lg:text-5xl">
              Let's Get <br/> Started
            </h2>
            <p className="mb-4 text-lg text-gray-600">
              Discuss your idea on a call. After <br/> discovery, we'll propose. Once
              approved, <br/> we start the work.
            </p>

            <div className="flex items-center gap-0 text-green-800 underline tex-2t-lg font-sgemibold md:text-xl">
              <a href="#" className="text-green-800 ">
                Direct Call{" "}
              </a>
              <ArrowUpRight />
            </div>
          </div>

          {/* form div - 70% */}
          <form className="flex flex-col p-8 space-y-6 bg-white border-none md:w-[60%] rounded-xl">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-1/2 py-2 border-b-2 border-gray-200 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="w-1/2 py-2 border-b-2 border-gray-200 focus:outline-none"
              />
            </div>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Phone Number"
                className="w-1/2 py-2 border-b-2 border-gray-200 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-1/2 py-2 border-b-2 border-gray-200 focus:outline-none"
              />
            </div>
            <textarea
              placeholder="Project Details"
              className="py-2 border-b-2 border-gray-200 resize-none focus:outline-none"
            />
            <div className="">
              <AnimatedButton text={"Send Inquiry"} link="#"></AnimatedButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
