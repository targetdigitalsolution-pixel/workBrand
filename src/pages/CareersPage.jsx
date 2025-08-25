import React from "react";
import HeaderLayout from "../component/layers/HeaderLayout/HeaderLayout";
import HeroSection from "../component/sharedComponents/HeroSection";
import carres from "../assets/images/carrer.webp";
import MainTitle from "../component/sharedComponents/MainTittle";
import KeyFeature from "../component/sharedComponents/KeyFeature";
import UnderLineForm from "../component/sharedComponents/UnderLineForm";
import Underline from "../assets/images/Underlinecomponant.webp";
import Footer from "../component/sharedComponents/Footer";
import icon1 from "../assets/Icons/rocket.svg";
import icon2 from "../assets/Icons/hand.svg";
import icon3 from "../assets/Icons/lamba.svg";
import icon4 from "../assets/Icons/boook.svg";
import icon5 from "../assets/Icons/earth.svg";

const CareersPage = () => {
  const data = [
    {
      image: icon1,
      description: "Fast-growing startup in the business solutions space",
    },
    {
      image: icon2,
      description: "Supportive & collaborative team environment",
    },
    {
      image: icon3,
      description: "Opportunity to innovate and make real impact",
    },
    {
      image: icon4,
      description: "Ongoing training & personal development",
    },
    {
      image: icon5,
      description: "Flexible workspace / Hybrid roles available",
    },
  ];
  return (
    <section className=" bg-custom-gradient-bg">
      <HeaderLayout />
      <HeroSection
        backgroundImage={carres}
        title="Careers"
        description="We’re not just building offices — we’re building the future of how people work."
      />
      <main className="max-container ">
        <MainTitle title="Why Work With Us?" />
        <KeyFeature
          title="Our Features"
          align="center"
          white={true}
          icons={data}
          showTitle={false}
        />
        <MainTitle title="Application Form" />
        <div className="flex flex-col p-5 bg-white lg:flex-row lg:p-0 ">
          <div className="flex-1 ">
            <img
              src={Underline}
              alt="Underline"
              className="w-full rounded-lg h-[570px] object-cover"
            />
          </div>

          <div className="flex-1 ">
            <UnderLineForm showPosition={true} showResume={true} />
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
};

export default CareersPage;
