import React from "react";
import logo from "../../assets/images/Logo WorkBrand.webp";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faWhatsapp,
  faLinkedin,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const services = {
    "Services ": "/coming-soon",
    "Offices ": "/coming-soon",
    "Consulting ": "/coming-soon",
    "Create Website": "/coming-soon",
    "Media Agency": "/coming-soon",
  };

  const importantLinks = {
    "Store ": "/coming-soon",
    "Insights ": "/coming-soon",
    "About Us": "/coming-soon",
    "Contact us": "/contact-us",
  };

  const Link = {
    "FAQS ": "/faqs",
    "Terms and Conditions": "/terms-condition",
    "Privacy Policy": "/privacy-police",
    "Refund Policy": "/refund-police",
    "Shipping Policy": "/shipping-police",
  };

  return (
    <footer
      className="pb-8 text-white lg:pt-20 md:bg-cover md:bg-no-repeat footer"
      style={{
        // backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col justify-between gap-8 px-4 py-10 max-container md:flex-row">
        <div className="md:w-1/3">
          <div className="flex justify-center md:justify-start">
            <a href="/">
              <img src={logo} alt="WorkBrand" className="w-32 mb-4 md:w-32" />
            </a>
          </div>

          <p className="text-sm leading-6 text-[#FEF2D4]">
            We empower entrepreneurs to launch and grow with ease offering smart
            offices and digital tools designed for real success.
          </p>
        </div>

        <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8 md:mt-[40px]">
          {/* Services */}
          <div>
            <ul>
              {Object.entries(services).map(([name, url], i) => (
                <li
                  key={i}
                  className="flex mb-4 duration-300 cursor-pointer hover:text-custom-primary text-[#FEF2D4] group"
                >
                  <ChevronRightIcon className="w-4 h-4 mt-1 text-[#FEF2D4] duration-300 group-hover:text-custom-primary" />
                  <a href={url}>{name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <ul>
              {Object.entries(importantLinks).map(([name, url], i) => (
                <li
                  key={i}
                  className="flex mb-4 duration-300 cursor-pointer hover:text-custom-primary text-[#FEF2D4] group"
                >
                  <ChevronRightIcon className="w-4 h-4 mt-1 text-[#FEF2D4] duration-300 group-hover:text-custom-primary" />
                  <a href={url}>{name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <ul>
              {Object.entries(Link).map(([name, url], i) => (
                <li
                  key={i}
                  className="flex mb-4 duration-300 cursor-pointer text-[#FEF2D4] hover:text-custom-primary group"
                >
                  <ChevronRightIcon className="w-4 h-4 mt-1 text-[#FEF2D4] duration-300 group-hover:text-custom-primary" />
                  <a href={url}>{name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Socials */}
      <div className="flex items-center w-full">
        <div className="flex-grow h-[2px] bg-custom-primary"></div>

        <div className="flex items-center justify-center w-8 h-8 mx-2 text-white border rounded-full shadow-md group border-custom-primary">
          <a href="">
            <XMarkIcon className="w-6 h-6 duration-300 text-custom-primary group-hover:text-white" />
          </a>
        </div>

        <div className="flex items-center justify-center w-8 h-8 mx-2 border rounded-full shadow-md group border-custom-primary">
          <a
            href="https://twitter.com/اسم_الحساب"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-lg duration-300 text-custom-primary group-hover:text-white"
            />
          </a>
        </div>

        <div className="flex items-center justify-center w-8 h-8 mx-2 text-white border rounded-full shadow-md group border-custom-primary">
          <a href="">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-lg duration-300 text-custom-primary group-hover:text-white"
            />
          </a>
        </div>

        <div className="flex items-center justify-center w-8 h-8 mx-2 border rounded-full shadow-md group border-custom-primary">
          <a
            href="https://wa.me/201234567890"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="text-lg duration-300 text-custom-primary group-hover:text-white"
            />
          </a>
        </div>

        <div className="flex items-center justify-center w-8 h-8 mx-2 border rounded-full shadow-md group border-custom-primary">
          <a
            href="https://www.linkedin.com/in/اسم_الحساب"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-lg duration-300 text-custom-primary group-hover:text-white"
            />
          </a>
        </div>

        <div className="flex items-center justify-center w-8 h-8 mx-2 border rounded-full shadow-md group border-custom-primary">
          <a
            href="https://www.tiktok.com/@اسم_الحساب"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faTiktok}
              className="text-lg duration-300 text-custom-primary group-hover:text-white"
            />
          </a>
        </div>

        <div className="flex-grow h-[2px] bg-custom-primary"></div>
      </div>

      {
        /* <div className="p-5 pt-4 mt-8 text-sm text-center md:p-0 text-[#FEF2D4]">
        ©2025 All rights reserved WorkBrand.org Developed by target digital
        solutions
      </div> */
        <div className="p-5 pt-4 mt-8 text-sm text-center md:p-0 text-[#FEF2D4]">
          ©2025 All rights reserved{" "}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="underline duration-300 hover:text-custom-primary"
          >
            WorkBrand.org
          </a>{" "}
          Developed by{" "}
          <a
            href="https://target-group.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline duration-300 hover:text-custom-primary"
          >
            target digital solutions
          </a>
        </div>
      }
    </footer>
  );
}
