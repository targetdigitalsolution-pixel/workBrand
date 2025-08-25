import React from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import UnderLineForm from "../sharedComponents/UnderLineForm";
import translations from "../../locales/en.json";

const ContactUs = ({ phones, email, address }) => {
  const { contactus } = translations;

  return (
    <section className="grid grid-cols-1 gap-8 my-10 max-container md:grid-cols-1 lg:grid-cols-2">
      {/* Left Side - Contact Info */}
      <div className="flex flex-col justify-start space-y-6 text-white bg-black shadow-md text-start max-auto rounded-2xl">
        <div className="flex flex-col justify-start text-start mx-auto bg-black text-white rounded-2xl space-y-4 py-16 shadow-md w-[50%]">
          <h2 className="text-2xl font-bold">{contactus.contactus}</h2>
          <p className="text-gray-400">{contactus.contactdes}</p>

          {/* Phones */}
          <div className="space-y-2">
            {phones.map((phone, index) => (
              <div key={index} className="flex items-start justify-start gap-3">
                <DevicePhoneMobileIcon className="w-5 h-5 text-white" />
                {/* <PhoneIcon className="w-5 h-5 text-white" /> */}
                <span>{phone}</span>
              </div>
            ))}
          </div>

          {/* Email */}
          <div className="flex items-start justify-start gap-3">
            <EnvelopeIcon className="w-5 h-5 text-white" />
            <a
              href={`mailto:${email}`}
              className="text-white duration-300 hover:text-custom-primary"
            >
              {email}
            </a>
          </div>

          {/* Address */}
          <div className="flex items-start justify-start gap-3">
            <MapPinIcon className="w-8 h-8 text-white" />
            <span>{address}</span>
          </div>

          {/* Social Media */}
          <div className="flex items-start justify-start w-full gap-4 text-2xl max-container">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-white transition hover:scale-110"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-white transition hover:scale-110"
              />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faTiktok}
                className="text-white transition hover:scale-110"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <UnderLineForm />
    </section>
  );
};

export default ContactUs;
