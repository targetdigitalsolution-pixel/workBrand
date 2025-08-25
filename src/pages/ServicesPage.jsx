import React from "react";
import HeaderLayout from "../component/layers/HeaderLayout/HeaderLayout";
import HeroSection from "../component/sharedComponents/HeroSection";
import Footer from "../component/sharedComponents/Footer";
import ServicesDetailSections from "../component/Services/ServicesDetailSections";
import RightPlace from "../component/sharedComponents/RightPlace";
import servicesHero from "../assets/images/Servies_img.webp";

const ServicesPage = () => {
  return (
    <section className="bg-custom-gradient-bg">
      <HeaderLayout />
      <HeroSection
        backgroundImage={servicesHero}
        title="Our Services"
        description="We empower entrepreneurs to launch and grow with ease offering smart offices and digital tools designed for real success."
      />
      <ServicesDetailSections />
      <RightPlace />
      <Footer />
    </section>
  );
};

export default ServicesPage;