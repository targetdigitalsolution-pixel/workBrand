import React from "react";
import HeaderLayout from "../component/layers/HeaderLayout/HeaderLayout";
import HeroSection from "../component/sharedComponents/HeroSection";
import Footer from "../component/sharedComponents/Footer";
import ServicesGrid from "../component/Services/ServicesGrid";
import ServiceDetailSection from "../component/Services/ServiceDetailSection";
import ServiceFeatures from "../component/Services/ServiceFeatures";
import RightPlace from "../component/sharedComponents/RightPlace";
import OurImpactSection from "../component/sharedComponents/OurImpactSection";
import servicesHero from "../assets/images/office_space.webp";

const ServicesPage = () => {
  return (
    <section className="bg-custom-gradient-bg">
      <HeaderLayout />
      <HeroSection
        backgroundImage={servicesHero}
        title="Our Services"
        description="Comprehensive business solutions designed to accelerate your growth. From office spaces to digital services, we provide everything you need to succeed."
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