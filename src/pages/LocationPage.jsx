import React from "react";
import HeaderLayout from "../component/layers/HeaderLayout/HeaderLayout";
import FooterLayout from "../component/sharedComponents/Footer";
import viewgallery from "../assets/images/view_gallery.webp";
import Nasircity from "../assets/images/Nasir_city.webp";
import Location from "../assets/images/Location.webp";
import HeroSection from "../component/sharedComponents/HeroSection";
import data from "../locales/en.json"; 

const imageMap = {
  viewgallery: viewgallery,
  Nasircity: Nasircity,
};

const LocationPage = () => {
  const { title, description, branches } = data.location;

  return (
    <div className="bg-custom-gradient-bg min-h-screen flex flex-col">
      {/* Header */}
      <HeaderLayout />

      {/* Hero Section */}
      <HeroSection
        backgroundImage={Location}
        title={title}
        description={description}
      />

      {/* Main Content */}
      <main className="">
        <div className="max-container flex flex-col md:flex-row w-full gap-5 p-5 lg:p-0">
          {/* Branches List */}
          <div className="w-full">
            {branches.map((branch, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 mb-3 bg-custom-gradient-card rounded-xl shadow-md"
              >
                <img
                  src={imageMap[branch.image]}
                  alt={branch.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-semibold">{branch.name}</h3>
                  <p className="text-gray-600">{branch.hours}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Google Map */}
          <div className="w-full rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.123456789!2d31.200000!3d30.050000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145841123456789%3A0xabcdef123456!2sExample+Location!5e0!3m2!1sen!2seg!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>

      {/* Footer */}
      <FooterLayout />
    </div>
  );
};

export default LocationPage;
