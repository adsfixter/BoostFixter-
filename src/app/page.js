
import {Hero} from "./components/HomePage/Hero";
import Spotlight from "./components/HomePage/Spotlight";
import Services from "./components/HomePage/Services";
import ConsultancyForm from "./components/HomePage/Consultation";
import BenefitsSection from "./components/HomePage/BenefitsSection";
import LatestBlogsSection from "./components/HomePage/LatestBlogsSection";
import ClientRatings from "./components/HomePage/ClientRatings";
import SuccessTogether from "./components/HomePage/SuccessTogether";
import ClientsSays from "./components/HomePage/ClientsSays";
import VideoSection from "./components/HomePage/VideoSection";
import MemoriesMoments from "./components/HomePage/MemoriesMoments";
import OurStory from "./components/HomePage/OurStory";
import HomeReviw from "./components/HomePage/HomeReviw";
import LatestProjects from "./components/HomePage/LatestProjects";

export default function Home() {
  return (
    <div className="space-y-36">
      <Hero></Hero>
      <Spotlight></Spotlight>
      {/* <VideoSection></VideoSection> */}
      <OurStory></OurStory>
      <HomeReviw></HomeReviw>
      <Services></Services>
      <ConsultancyForm></ConsultancyForm>
      <ClientRatings></ClientRatings>
      <BenefitsSection></BenefitsSection>
      <LatestProjects></LatestProjects>
      <SuccessTogether></SuccessTogether>
      <ClientsSays></ClientsSays>
      <MemoriesMoments></MemoriesMoments>
      <LatestBlogsSection></LatestBlogsSection>
    </div>
  );
}
