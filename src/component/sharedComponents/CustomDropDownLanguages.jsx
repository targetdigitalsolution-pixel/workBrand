import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
// import arrow from "../../assets/Icons/Arrow Down.svg";
import USImg from "../../assets/images/us.png";
import flagSaudi from "../../assets/images/flagSaudi.webp";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const menuItemsLanguages = [
  { id: 1, code: "EN", label: "US", flag: USImg },
  { id: 2, code: "AR", label: "AR", flag: flagSaudi },
];

const CustomDropDownLanguages = ({ light }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (code) => {
    setSelectedLanguage(code);
    setIsOpen(false);
    console.log(`Selected Language Code: ${code}`);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const textColor = light ? "black" : "white";

  return (
    <div style={{ position: "relative", zIndex: 100 }}>
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        style={{
          display: "flex",
          alignItems: "center",
          background: "transparent",
          border: "none",
          color: textColor,
          gap:"2px"
        }}
      >
        <FontAwesomeIcon icon={faGlobe} />
        <span style={{ color: textColor }}>
          {selectedLanguage
            ? menuItemsLanguages.find((item) => item.code === selectedLanguage)
                ?.label
            : "US"}
        </span>
        <ChevronDownIcon
          className={`w-4 h-4 text-${light ? "black" : "white"}`}
        />
      </button>

      {isOpen && (
        <ul
          ref={dropdownRef}
          className="z-50 rounded-custom"
          style={{
            padding: 2,
            margin: 0,
            top: 30,
            right: 0,
            position: "absolute",
            background: "white",
            borderRadius: "5px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            width: "125px",
          }}
        >
          {menuItemsLanguages.map((item) => (
            <li
              key={item.id}
              onClick={() => handleSelect(item.code)}
              style={{
                padding: "5px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background:
                  selectedLanguage === item.code ? "#f0f0f0" : "transparent",
                borderRadius: "5px",
                color: "black",
              }}
            >
              <img src={item.flag} alt={item.label} className="w-6" />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropDownLanguages;
