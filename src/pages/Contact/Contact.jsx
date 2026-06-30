import { Helmet } from "react-helmet-async";
import ContactHero from "../../components/Contact_page/ContactHero/ContactHero";
import ContactInfo from "../../components/Contact_page/ContactInfo/ContactInfo";
import ContactForm from "../../components/Contact_page/ContactForm/ContactForm";
import Map from "../../components/Contact_page/Map/Map";
import SocialLinks from "../../components/Contact_page/SocialLinks/SocialLinks";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Veloura Drive</title>
        <meta
          name="description"
          content="Get in touch with Veloura Drive for premium car rentals and support."
        />
      </Helmet>
      <ContactHero />
      <ContactInfo />

      <section className="bg-[var(--page-bg)] px-4 py-12 text-[var(--text-primary)] transition-colors duration-300 md:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="min-w-0">
            <Map />
          </div>
          <div className="min-w-0">
            <ContactForm />
          </div>
        </div>
      </section>

      <SocialLinks />
    </>
  );
}
