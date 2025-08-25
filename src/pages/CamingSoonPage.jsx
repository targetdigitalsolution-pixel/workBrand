import React from "react";
import { Link } from "react-router-dom";
import CustomMainButton from "../component/sharedComponents/CustomMainButton";
import TripleArrowIcon from "../component/sharedComponents/TripleArrowIcon";
import LightButton from "../component/sharedComponents/LightButton";

const ComingSoonPage = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-custom-gradient-black">
      <div className="px-4 text-center">
        <h1 className="pb-4 text-5xl font-bold text-transparent md:text-7xl bg-custom-gradient-orange bg-clip-text">
          Coming Soon
        </h1>
        <p className="mt-4 text-lg md:text-xl text-custom-yellow">
          We are working hard to bring something amazing. Stay tuned!
        </p>
        <div className="flex flex-col items-center justify-center gap-4 mt-8 md:flex-row">
          <Link to="/" className="">
            <CustomMainButton
              text={"Back to Home"}
              fullWidth
              TripleArrow={<TripleArrowIcon />}
            />
          </Link>
          <Link
            to="/contact-us"
            className=""
          >
            <LightButton
              text="Contact Us"
              TripleArrow={
                <TripleArrowIcon
                  color={"custom-primary"}
                  hoverColor={"white"}
                />
              }
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
