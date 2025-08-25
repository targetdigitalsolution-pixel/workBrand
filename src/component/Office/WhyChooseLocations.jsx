import React from "react";
import locationImage from "../../assets/images/WhyChooseOffice.webp"; 
import icon1 from "../../assets/Icons/Map.svg";
import icon2 from "../../assets/Icons/Easy_Access.svg";
import icon3 from "../../assets/Icons/Nearby_Cafés.svg";
import icon4 from "../../assets/Icons/Internet.svg";
import icon5 from "../../assets/Icons/Secure.svg";
import icon6 from "../../assets/Icons/Networking.svg";
import icon7 from "../../assets/Icons/Flexible_Solutions.svg";
import icon8 from "../../assets/Icons/OnSite.svg";
import icon9 from "../../assets/Icons/legal.svg";

const features = [
  { icon: icon1, text: "Strategic Addresses for Company Registration" },
  { icon: icon2, text: "Easy Access to Public Transport" },
  { icon: icon3, text: "Nearby Cafés, Banks, and Services" },
  { icon: icon4, text: "High-speed Internet & Modern Infrastructure" },
  { icon: icon5, text: "Secure and Private Workspaces" },
  { icon: icon6, text: "Networking Opportunities" },
  { icon: icon7, text: "Flexible Office Solutions" },
  { icon: icon8, text: "On-Site Staff Support" },
  { icon: icon9, text: "Legal and Administrative Support" },
];

const WhyChooseLocations = () => {
  return (
    <section className="flex flex-col items-center gap-5 max-container md:flex-row">
      <h2 className="block mb-6 text-3xl font-bold text-center md:text-5xl md:text-start text-custom-primary md:hidden">
        Why Choose <br />
        <span className="text-3xl font-bold text-black md:text-5xl">
          Our Locations
        </span>
        <span className="text-3xl font-bold md:text-5xl text-custom-primary">
          ?
        </span>
      </h2>
      <div className="flex justify-start w-[110%]  md:w-[130%]">
        <img src={locationImage} alt="Our Locations" className="h-[600px] w-[700px]" />
      </div>
      <div className="flex flex-col p-5 md:p-0 w-[100%] md:w-full">
        <h2 className="hidden mb-6 text-3xl font-bold text-center md:text-5xl md:text-start text-custom-primary md:block">
          Why Choose <br />
          <span className="text-3xl font-bold text-black md:text-5xl">
            Our Locations
          </span>
          <span className="text-3xl font-bold md:text-5xl text-custom-primary">
            ?
          </span>
        </h2>

        <ul className="flex flex-col gap-5">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-4">
              <img
                src={feature.icon}
                alt={feature.text}
                className="object-contain w-8 h-8"
              />
              <p className="text-lg text-gray-700">{feature.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseLocations;
