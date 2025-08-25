import React from "react";
import AboutUs from "../component/About/AboutUs";
import HeroSection from "../component/sharedComponents/HeroSection";
import bgAbout from "../assets/images/AboutUs.webp";
import SecAbout from "../assets/images/AboutSection.webp";
import StatementSection from "../component/About/StatementSection";
import MainTitle from "../component/sharedComponents/MainTittle";
import TimeLine from "../component/About/TimeLine";
import MainTittle from "../component/sharedComponents/MainTittle";
import OurImpactSection from "../component/sharedComponents/OurImpactSection";
import RightPlace from "../component/sharedComponents/RightPlace";
import Footer from "../component/sharedComponents/Footer";
import HeaderLayout from "../component/layers/HeaderLayout/HeaderLayout";
const AboutUsPage = () => {
  return (
    <section className="bg-custom-gradient-bg">
      <>
        <HeaderLayout />
        <HeroSection
          backgroundImage={bgAbout}
          title="About Us"
          description="More than just office space — we’re your launchpad for success. Join a visionary community built for entrepreneurs."
        />
        <AboutUs
          image={SecAbout}
          title="About"
          subtitle="Us"
          describtion="From day one, our mission has been clear — to help every business owner, entrepreneur, or visionary turn ideas into lasting success. We’re not just about office spaces — we offer full business solutions.

                Since 2017, we’ve grown from a small floor in Nasr City into a multi-service hub. In 2019, we launched our media production studio. By 2021, we expanded into business consulting and executive training. With growing demand, we opened our Mohandessin branch in 2022 and launched our VIP workspace experience in 2023.

                Over 8 years, we’ve supported 2,000+ companies with workspaces, media, training, and consultancy — and we’re just getting started.

                We create environments built for real growth, backed by smart tools, expert guidance, and a passion for helping people move forward."
          decmobile="We’re your partner — in growth, innovation, and success."
        />
        <StatementSection />
        <MainTitle
          title="Who"
          subdescription="We Are"
          description="Your trusted partner in business growth since 2017"
        />
        <TimeLine />
        <OurImpactSection />
        <RightPlace />
        <Footer />
      </>
    </section>
  );
};

export default AboutUsPage;
