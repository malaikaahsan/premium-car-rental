import { Helmet } from "react-helmet-async";
import AboutHero from "../../components/About_page/AboutHero/AboutHero";
import MissionVision from "../../components/About_page/MissionVision/MissionVision";
import Stats from "../../components/About_page/Stats/Stats";
import Brands from "../../components/About_page/Brands/Brands";
import Team from "../../components/About_page/Team/Team";
import AboutCTA from "../../components/About_page/AboutCTA/AboutCTA";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Veloura Drive</title>
        <meta
          name="description"
          content="Learn about Veloura Drive and our premium car rental experience."
        />
      </Helmet>
      <AboutHero />
      <MissionVision />
      <Stats />
      <Brands />
      <Team />
      <AboutCTA />
    </>
  );
}
