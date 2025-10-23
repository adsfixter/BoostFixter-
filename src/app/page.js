
import {Hero} from "./components/Hero";
import Spotlight from "./components/Spotlight";
import Services from "./components/Services";
import ConsultancyForm from "./components/Consultation";
import BenefitsSection from "./components/BenefitsSection";
import LatestBlogsSection from "./components/LatestBlogsSection";
import ClientRatings from "./components/ClientRatings";
import SuccessTogether from "./components/SuccessTogether";
import ClientsSays from "./components/ClientsSays";
import VideoSection from "./components/VideoSection";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Spotlight></Spotlight>
      <VideoSection></VideoSection>
      <Services></Services>
      <ConsultancyForm></ConsultancyForm>
      <ClientRatings></ClientRatings>
      <BenefitsSection></BenefitsSection>
      <SuccessTogether></SuccessTogether>
      <ClientsSays></ClientsSays>
      <LatestBlogsSection></LatestBlogsSection>
    </div>
  );
}
