
import {Hero} from "./components/Hero";
import Spotlight from "./components/Spotlight";
import Services from "./components/Services";
import ConsultancyForm from "./components/Consultation";

import Test from "./components/test"

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Spotlight></Spotlight>
      <Services></Services>
      <ConsultancyForm></ConsultancyForm>
      <Test></Test>
    </div>
  );
}
