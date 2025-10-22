"use client";
import { useState } from "react";

export default function ConsultancyForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    company: "",
    designation: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  return (
    <div className="flex flex-col md:flex-row  bg-white text-[#1a1a1a]">
      {/* Left Image Section */}
      <div className="md:w-1/2 w-full flex items-center justify-center bg-gray-50 p-6">
        <img
          src="/Consultancy.png"
          alt="Marketing Strategy"
          className="rounded-2xl shadow-xl object-cover w-full max-w-md md:max-w-lg transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Right Form Section */}
      <div className="md:w-1/2 w-full flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-lg bg-white rounded-2xl p-8 shadow-2xl border border-gray-200">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Book a{" "}
            <span className="text-[#29554A] border-b-4 border-[#29554A]">
              Free Consultancy
            </span>
          </h2>

          {/* Step Indicator */}
          <div className="flex justify-between mb-10">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex flex-col items-center flex-1">
                <div
                  className={`rounded-full w-8 h-8 flex items-center justify-center font-semibold transition-all duration-300 
                    ${
                      step === num
                        ? "bg-[#29554A] text-white shadow-lg shadow-[#29554A]/40"
                        : "bg-gray-100 text-gray-500 border border-gray-300"
                    }`}
                >
                  {num}
                </div>
                <span
                  className={`text-xs mt-2 ${
                    step === num
                      ? "text-[#29554A] font-semibold"
                      : "text-gray-500"
                  }`}
                >
                  {num === 1
                    ? "Personal Info"
                    : num === 2
                    ? "Contact Info"
                    : "Message"}
                </span>
              </div>
            ))}
          </div>

          {/* Step 1 */}
          {step === 1 && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleNext();
              }}
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 py-3 px-4 rounded-md outline-none focus:border-[#29554A] focus:ring-1 focus:ring-[#29554A] transition"
                required
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={form.company}
                onChange={handleChange}
                className="w-full border border-gray-300 py-3 px-4 rounded-md outline-none focus:border-[#29554A] focus:ring-1 focus:ring-[#29554A] transition"
                required
              />
              <input
                type="text"
                name="designation"
                placeholder="Designation"
                value={form.designation}
                onChange={handleChange}
                className="w-full border border-gray-300 py-3 px-4 rounded-md outline-none focus:border-[#29554A] focus:ring-1 focus:ring-[#29554A] transition"
                required
              />
              <button
                type="submit"
                className="w-full py-3 mt-4 bg-[#29554A] hover:bg-[#1d3e34] text-white rounded-md font-semibold transition-all"
              >
                Next
              </button>
            </form>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleNext();
              }}
              className="space-y-4"
            >
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 py-3 px-4 rounded-md outline-none focus:border-[#29554A] focus:ring-1 focus:ring-[#29554A]"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 py-3 px-4 rounded-md outline-none focus:border-[#29554A] focus:ring-1 focus:ring-[#29554A]"
                required
              />
              <div className="flex justify-between pt-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-6 py-2 border border-gray-400 text-gray-700 rounded-md hover:bg-gray-100 transition"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#29554A] hover:bg-[#1d3e34] text-white rounded-md font-semibold transition"
                >
                  Next
                </button>
              </div>
            </form>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Form submitted successfully!");
              }}
              className="space-y-4"
            >
              <textarea
                name="message"
                placeholder="Write your message..."
                value={form.message}
                onChange={handleChange}
                className="w-full border border-gray-300 py-3 px-4 rounded-md outline-none focus:border-[#29554A] focus:ring-1 focus:ring-[#29554A] min-h-[120px]"
                required
              />
              <div className="flex justify-between pt-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-6 py-2 border border-gray-400 text-gray-700 rounded-md hover:bg-gray-100 transition"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#29554A] hover:bg-[#1d3e34] text-white rounded-md font-semibold transition"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
