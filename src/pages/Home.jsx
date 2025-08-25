import React from "react";
import HeaderLayout from "../component/layers/HeaderLayout/HeaderLayout";
import SliderMain from "../component/home/SliderMain";
import ServiceSection from "../component/home/ServiceSection";
import LocationSection from "../component/home/LocationSection";
import WhyChooseUs from "../component/home/WhyChooseUs";
import OurImpactSection from "../component/sharedComponents/OurImpactSection";
import SuccessSection from "../component/home/SuccessSection";
import CreateWebsiteSection from "../component/home/CreateWebsiteSection";
import ProductSection from "../component/home/ProductSection";
import LeadingBusinesses from "../component/home/LeadingBusinesses";
import InsightsSection from "../component/home/InsightsSwction";
import Footer from "../component/sharedComponents/Footer";
import HeroCarousel from "../component/home/HeroCarasoual";
import PlansSection from "../component/home/PlansSection";

const Home = () => {
  return (
    <div className="relative w-full bg-custom-gradient-bg">
      <HeaderLayout />
      <SliderMain />
      <ServiceSection />
      <PlansSection />
      <LocationSection />
      <HeroCarousel />
      <WhyChooseUs />
      <OurImpactSection />
      <SuccessSection />
      <CreateWebsiteSection />
      <ProductSection />
      <LeadingBusinesses />
      <InsightsSection />
      <Footer />
    </div>
  );
};

export default Home;
