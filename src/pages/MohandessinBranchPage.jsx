import React from "react";
import MohandessinBranch from "../component/MohandessinBranch/MohandessinBranch";
import HeroSection from "../component/sharedComponents/HeroSection";
import bgcover from "../assets/images/Almohandsin_cover.webp";
import KeyFeature from "../component/sharedComponents/KeyFeature";
import RightPlace from "../component/sharedComponents/RightPlace";
import Footer from "../component/sharedComponents/Footer";
import icon1 from "../assets/Icons/Meeting_Room_Icon.svg";
import icon2 from "../assets/Icons/LEGALLL.svg";
import icon3 from "../assets/Icons/cafe.svg";
import icon4 from "../assets/Icons/Fernature.svg";
import icon5 from "../assets/Icons/Lock.svg";
import icon6 from "../assets/Icons/Car.svg";
import icon7 from "../assets/Icons/logistic.svg";
const data = [
  { image: icon1, description: "VIP Meeting Rooms" },
  { image: icon2, description: "Legal Registration-Ready" },
  {
    image: icon3,
    description: "Surrounded by cafés, major banks, and essential services",
  },
  {
    image: icon4,
    description:
      "Premium furniture with a variety of layouts and space options",
  },
  { image: icon5, description: "24/7 secure access" },
  { image: icon6, description: "Nearby parking spots" },
  { image: icon7, description: "Top-tier logistical support" },
];
const MohandessinBranchPage = () => {
  return (
    <div className="bg-custom-gradient-bg">
      <HeroSection
        backgroundImage={bgcover}
        title="Mohandessin Branch"
        description="Located in the heart of Mohandessin, this branch offers a professional setting with high-end design and easy city access."
      />
      <MohandessinBranch />
      <KeyFeature
        title="Our Features"
        icons={data}
        align="center"
        white={true}
      />
      <RightPlace />
      <Footer />
    </div>
  );
};

export default MohandessinBranchPage;
