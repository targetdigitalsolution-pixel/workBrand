import React from "react";
import CustomMainButton from "../sharedComponents/CustomMainButton";
import LightButton from "../sharedComponents/LightButton";
import TripleArrowIcon from "../sharedComponents/TripleArrowIcon";
const RightPlace = () => {
  return (
    <section className="max-container py-16 mb-12 bg-custom-gradient-card shadow-lg rounded-3xl">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-custom-primary mb-4 leading-snug">
          Start From <span className="text-black">The Right Place</span>
        </h2>

        <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-5">
          Get your business up and running from one of the most strategic spots
          in Cairo.
        </h3>

        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
          Whether you're starting small or scaling fast — we've got the space
          and support to match your ambition. 👉 Don’t wait — take the first
          step today!
        </p>

        <div className="flex justify-center w-full md:w-1/2 mx-auto">
          <CustomMainButton
            fullWidth
            text="Explore Training Tracks"
            TripleArrow={
              <TripleArrowIcon color="text-white" hoverColor="white" />
            }
          />
        </div>
      </div>
    </section>
  );
};

export default RightPlace;
