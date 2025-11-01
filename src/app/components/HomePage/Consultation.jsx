import { ArrowUpRight } from "lucide-react";
import AnimatedButton from "../Share/AnimatedButton";



export default function ContactForm() {
  return (
    <div className="flex flex-col items-start my-10 rounded-lg p-18 md:flex-row bg-gray-50">
      <div className="mb-6 mr-8 md:w-1/2 md:mb-0">
        <h2 className="mb-4 text-4xl font-bold text-green-900 md:text-6xl lg:text-[56px]">Let's get started</h2>
        <p className="mb-4 text-gray-600 md:w-2/3 md:text-lg">
          Discuss your idea on a call. After discovery, we'll propose. Once approved, we start the work.
        </p>
        
        <div className="flex items-center gap-0 text-green-800 underline tex-2t-lg font-sgemibold md:text-xl">
          <a href="#" className="text-green-800 ">Direct Call </a>
           <ArrowUpRight></ArrowUpRight>
        </div>
      </div>
      <form className="flex flex-col p-8 space-y-6 bg-white shadow md:w-1/2 rounded-xl">
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
  );
}
