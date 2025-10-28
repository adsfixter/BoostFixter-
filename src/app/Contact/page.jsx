import Link from "next/link";
import AwardSection from "../components/contact/AwardSection";
import ClientResults from "../components/contact/ClientResults";
import ContactForm from "../components/contact/ContactForm";
import TestimonialsSection from "../components/contact/TestimonialsSection";


export default function ContactPage() {
  return (
    <div className="px-6 py-20 bg-white">

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[40vh] flex items-center mb-10 rounded-2xl justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
        
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-6 text-center text-white">
          <h1 className="mb-4 text-3xl font-extrabold tracking-wide md:text-5xl">
            Contact
          </h1>
          <div className="flex items-center justify-center space-x-2 text-lg ">
            <Link
              href="/"
              className="hover:underline hover:text-[#0AB99D] transition"
            >
              Home
            </Link>
            <span>||</span>
            <Link href="" className="text-[#0AB99D] font-semibold">
              Contact
            </Link>
          </div>
        </div>
      </section>

      <ContactForm></ContactForm>
      <ClientResults></ClientResults>
      <TestimonialsSection></TestimonialsSection>
     <AwardSection></AwardSection>
    </div>
  );
}
