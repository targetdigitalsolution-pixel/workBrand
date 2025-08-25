import React from "react";
import HeroSection from "../component/sharedComponents/HeroSection";
import bgcover from '../assets/images/Nasir_city.webp';
import Footer from "../component/sharedComponents/Footer";
import NasrCityBranch from '../component/NasrCityBranch/NasrCityBranch'
import KeyFeature from "../component/sharedComponents/KeyFeature";
import RightPlace from "../component/sharedComponents/RightPlace";
const NasrCityBranchPage = () => {
  return (
    <div className="bg-custom-gradient-bg">
      <HeroSection
        backgroundImage={bgcover}
        title="Nasr City Branch"
        description="Perfectly positioned in bustling Nasr City, this branch suits startups seeking comfort, convenience, and a productive workspace."
      />
      <NasrCityBranch />
      <KeyFeature title="Key Features" />
      <RightPlace />
      <Footer />
    </div>
  );
};

export default NasrCityBranchPage;
