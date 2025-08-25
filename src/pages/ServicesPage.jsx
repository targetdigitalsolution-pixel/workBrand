import React from "react";
import HeaderLayout from "../component/layers/HeaderLayout/HeaderLayout";
import HeroSection from "../component/sharedComponents/HeroSection";
import Footer from "../component/sharedComponents/Footer";
import ServicesGrid from "../component/Services/ServicesGrid";
import ServiceDetailSection from "../component/Services/ServiceDetailSection";
import ServiceFeatures from "../component/Services/ServiceFeatures";
import RightPlace from "../component/sharedComponents/RightPlace";
import OurImpactSection from "../component/sharedComponents/OurImpactSection";
import servicesHero from "../assets/images/Servies_img.webp";

const ServicesPage = () => {
  return (
    <section className="bg-custom-gradient-bg">
      <HeaderLayout />
      <HeroSection
        backgroundImage={servicesHero}
        title="Our Services"
        description="From launching an idea to scaling your business — we support every step with comprehensive solutions designed for real growth."
      />
      <ServicesGrid />
      <ServiceDetailSection />
      <ServiceFeatures />
      <OurImpactSection />
      <RightPlace />
      <Footer />
    </section>
  );
};

export default ServicesPage;