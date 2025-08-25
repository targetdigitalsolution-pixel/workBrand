import React from "react";
import HeaderLayout from "../component/layers/HeaderLayout/HeaderLayout";
import HeroSection from "../component/sharedComponents/HeroSection";
import Footer from "../component/sharedComponents/Footer";
import ContactUs from "../component/Contact-us/ContactUs";
import MainTitle from "../component/sharedComponents/MainTittle";
import contact from '../assets/images/Contact_us.webp'
import CardLocation from "../component/home/CardLocation";
import almohandssen from '../assets/images/Almohandsin.webp';
import nasir from '../assets/images/Nacersity.webp'


const ContactUsPage = () => {
  return (
    <main className="bg-custom-gradient-bg">
      <HeaderLayout />
      <HeroSection
        backgroundImage={contact}
        title="Contact"
        description="Whether you need workspace info, legal setup help, or just want to explore your options — lets start the conversation."
      />
      <section className="p-5 max-container lg:p-0">
        <MainTitle
          title="Contact Us –"
          subdescription="Lets Talk"
          description="We’re here to help your business grow."
        />
        <ContactUs
          phones={["+20 120 559 9333", "+20 102 999 9210"]}
          email="info@workbrand.org"
          address="72 Gannet Al Dowal Al Arbaa St, Mohandessin, Giza, Egypt"
        />
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="w-full  md:w-1/2">
            <CardLocation
              image={almohandssen}
              title="Mohandessin Branch"
              description="Located in the heart of Mohandessin, this branch offers a professional setting with high-end design and easy city access."
              location="Giza, Egypt"
              buttonText="Explore Mohandessin Offices"
              whiteBackground={true}
            />
          </div>
          <div className="w-full md:w-1/2">
            <CardLocation
              image={nasir}
              title="Nasir city Branch"
              description="Perfectly positioned in bustling Nasr City, this branch suits startups seeking comfort, convenience, and a productive workspace."
              location="cairo, Egypt"
              buttonText="Explore Nasir offices"
              whiteBackground={true}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactUsPage;
