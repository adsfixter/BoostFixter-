
import {Hero} from "./components/Hero";
import Spotlight from "./components/Spotlight";
import Services from "./components/Services";
import ConsultancyForm from "./components/Consultation";

import Test from "./components/test"
import BenefitsSection from "./components/BenefitsSection";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Spotlight></Spotlight>
      <Services></Services>
      <ConsultancyForm></ConsultancyForm>
      <h1 className="primaryText">app dfljadsklfjsdkl</h1>
      <Test></Test>
      <BenefitsSection></BenefitsSection>
    </div>
  );
}
