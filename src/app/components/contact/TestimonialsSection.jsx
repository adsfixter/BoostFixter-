// components/TestimonialsSection.js
import Link from "next/link";
import { FaHome, FaMicrochip } from "react-icons/fa";

export default function TestimonialsSection() {
  const testimonials = [
    {
      icon: <FaHome className="text-4xl text-white" />,
      quote: `“What Thrive does is they bring a depth of knowledge to our account.
      They have a team that is very deep in each of the digital services.
      When you have some concerns or an issue you need to address, there
      are multiple people who can come to the table to address the
      concerns from their knowledge base versus another agency that would
      just give you one or two people. The level of knowledge of the
      account management team is superior. Their ability to bring
      innovative ideas to use, they think outside of the box and they are
      always planning ahead. They fit their talent perfectly with our
      account.”`,
      author: "— Multi-Location Property Restoration Company",
    },
    {
      icon: <FaMicrochip className="text-4xl text-white" />,
      quote: `“We realized almost immediate search engine and web traffic gains
      through our work with Thrive. They worked closely to keep us
      apprised of the many and varied metrics we track. We have been
      pleased with the behind-the-scenes work which Thrive drove through
      link building and keyword optimization and their expertise in
      advising us of related web improvements. We are impressed with the
      sustained improvements that our continued work with Thrive yields
      and look forward to further growth and expansion of our SEO and PPC
      programs.”`,
      author: "— Technology Manufacturer",
    },
  ];

  return (
    <section className="py-16 text-center bg-white">
      <h2 className="mb-12 text-4xl font-bold text-[#6B7F3C]">
        Join Our Success Stories
      </h2>
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative flex-1 max-w-md p-8 shadow-md bg-gray-50 rounded-2xl flex flex-col justify-between min-h-[500px]"
          >
            <div className="absolute p-4 -translate-x-1/2 bg-[#6B7F3C] rounded-full -top-8 left-1/2">
              {testimonial.icon}
            </div>
            <p className="mt-8 italic text-gray-700">{testimonial.quote}</p>
            <Link href="#">
              <p className="mt-6 font-semibold text-[#6B7F3C] underline">
                {testimonial.author}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
