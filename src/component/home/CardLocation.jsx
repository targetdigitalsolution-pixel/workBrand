import React from "react";
import CustomMainButton from "../sharedComponents/CustomMainButton";
import TripleArrowIcon from "../sharedComponents/TripleArrowIcon";
import { useNavigate } from "react-router-dom";

const CardLocation = ({
  image,
  imageBG,
  title,
  description,
  location,
  buttonText,
  textfeature,
  keyfeatures = [],
  whiteBackground = false,
}) => {
  const isMobile = window.innerWidth <= 768;
  const navigate = useNavigate();

  return (
    <div
      className="relative w-full overflow-hidden rounded-lg md:pb-16 border-button custom-radius"
      style={{
        backgroundImage:
          whiteBackground || isMobile ? "none" : `url(${imageBG})`,
        backgroundColor: whiteBackground || isMobile ? "white" : "transparent",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        filter: "drop-shadow(0px 0px 4px #d4d4d4)",
      }}
    >
      <div className="relative">
        <div className="w-full h-64 overflow-hidden rounded-lg">
          <img
            src={image}
            className="object-cover w-full h-64 duration-500 hover:scale-150"
            alt={title}
          />
        </div>

        <button
          className="absolute flex items-center gap-1 px-2 py-1 bg-white shadow top-5 left-2 rounded-3xl"
          onClick={() => navigate("/coming-soon")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-custom-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <span className="text-sm rounded-lg">{location}</span>
        </button>
      </div>

      <div className="p-5">
        <div className="flex gap-3 mb-4 cursor-pointer hover:text-custom-primary duration-300">
          <button className="bg-custom-primary w-[15px] h-[15px] rounded mt-2"></button>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-base text-black">{description}</p>
        <h1 className="text-xl text-black cursor-pointer hover:text-custom-primary duration-300">
          {textfeature}
        </h1>

        {keyfeatures.length > 0 && (
          <ul className="flex flex-col gap-5 mt-4">
            {keyfeatures.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full text-custom-primary">
                  {item.icon}
                </span>
                <span className="text-gray-600">{item.text}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex w-full p-5">
        <div className="w-full">
          <CustomMainButton
            fullWidth
            TripleArrow={<TripleArrowIcon color={"white"} />}
            text={buttonText || "Explore Offices"}
            onClick={() => navigate("/coming-soon")}
          />
        </div>
      </div>
    </div>
  );
};

export default CardLocation;
