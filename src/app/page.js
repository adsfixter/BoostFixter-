

import Spotlight from "./components/HomePage/Spotlight";
import Services from "./components/HomePage/Services";
import ConsultancyForm from "./components/HomePage/Consultation";
import BenefitsSection from "./components/HomePage/BenefitsSection";
import LatestBlogsSection from "./components/HomePage/LatestBlogsSection";
import ClientRatings from "./components/HomePage/ClientRatings";
import ClientsSays from "./components/HomePage/ClientsSays";
import OurStory from "./components/HomePage/OurStory";
import HomeReviw from "./components/HomePage/HomeReviw";
import LatestProjects from "./components/HomePage/LatestProjects";
import Hero from "./components/HomePage/Hero";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Spotlight></Spotlight>
      <OurStory></OurStory>
       <HomeReviw></HomeReviw>
      <Services></Services>
      <BenefitsSection></BenefitsSection>
      <ClientRatings></ClientRatings>
      <LatestProjects></LatestProjects>
      <ClientsSays></ClientsSays>
      <ConsultancyForm></ConsultancyForm>
       <LatestBlogsSection></LatestBlogsSection>
    </div>
  );
}
