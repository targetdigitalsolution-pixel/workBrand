import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomMainButton from "../sharedComponents/CustomMainButton";
import TripleArrowIcon from "../sharedComponents/TripleArrowIcon";
import { useNavigate } from "react-router-dom";

export default function PlansCard({
  photo,
  authorName,
  title,
  description,
  buttonText,
  key_features,
  onButtonClick,
  iconbutton,
}) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col max-w-md bg-white border rounded-lg shadow-md">
      <div className="w-full h-64 overflow-hidden rounded-lg">
        <img
          src={photo}
          alt={authorName}
          className="object-cover w-full h-64 duration-500 rounded-lg hover:scale-150"
        />
      </div>
      <section className="flex flex-col gap-4 p-5">
        <div>
          <h2 className="mb-1 font-bold cursor-pointer lg:text-xl hover:text-custom-primary duration-300">
            {title}
          </h2>
          <p className="text-sm text-gray-700 line-clamp-2">{description}</p>
        </div>

        <div className="flex flex-col items-start gap-2">
          <p className="font-bold text-black lg:text-xl">Key Features:</p>
          {key_features?.map((key, index) => (
            <div key={index} className="flex items-center gap-2">
              <img
                src={key.icon}
                alt={key.title}
                className="p-1 bg-opacity-25 rounded-full w-[26px] h-[26px] bg-custom-primary"
              />
              <p className="text-lg line-clamp-1">{key.title}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2 text-[#131212] text-2xl font-semibold w-1/2">
            <CustomMainButton
              text={"Get a Quote"}
              fullWidth
              TripleArrow={<TripleArrowIcon />}
              onClick={() => navigate("/coming-soon")}
            />
          </div>

          <button
            // onClick={onButtonClick}
            onClick={() => navigate("/coming-soon")}
            className="flex items-center gap-2 px-5 py-2 transition-colors duration-300 bg-white text-custom-primary hover:text-black"
          >
            Explore More
          </button>
        </div>
      </section>
    </div>
  );
}
