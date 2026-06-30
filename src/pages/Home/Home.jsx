import { Helmet } from "react-helmet-async";
import Hero from "../../components/Home_page/Hero/Hero";
import SearchSection from "../../components/Home_page/SearchSection/SearchSection";
import Categories from "../../components/Home_page/Categories/Categories";
import FeaturedCars from "../../components/Home_page/FeaturedCars/FeaturedCars";
import WeddingCollection from "../../components/Home_page/WeddingCollection/WeddingCollection";
import WhyChooseUs from "../../components/Home_page/WhyChooseUs/WhyChooseUs";
import Testimonials from "../../components/Home_page/Testimonials/Testimonials";
import CTA from "../../components/Home_page/CTA/CTA";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Veloura Drive | Premium Car Rental</title>
        <meta
          name="description"
          content="Discover premium cars for rent in Pakistan with Veloura Drive."
        />
      </Helmet>
      <Hero />
      <SearchSection />
      <Categories />
      <FeaturedCars />
      <WeddingCollection />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  );
}
