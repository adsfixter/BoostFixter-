import AwardSection from "../components/contact/AwardSection";
import ClientResults from "../components/contact/ClientResults";
import ContactForm from "../components/contact/ContactForm";
import TestimonialsSection from "../components/contact/TestimonialsSection";


export default function ContactPage() {
  return (
    <div className="px-6 py-20 bg-white">
      <ContactForm></ContactForm>
      <ClientResults></ClientResults>
      <TestimonialsSection></TestimonialsSection>
     <AwardSection></AwardSection>
    </div>
  );
}
