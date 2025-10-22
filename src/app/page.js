
import {Hero} from "./components/Hero";
import Spotlight from "./components/Spotlight";
import Services from "./components/Services";
import ConsultancyForm from "./components/Consultation";
import BenefitsSection from "./components/BenefitsSection";
import LatestBlogsSection from "./components/LatestBlogsSection";
import Option from "./components/Option";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Spotlight></Spotlight>
      <Services></Services>
      <ConsultancyForm></ConsultancyForm>
      <BenefitsSection></BenefitsSection>
      <LatestBlogsSection></LatestBlogsSection>
      <Option></Option>
    </div>
  );
}
