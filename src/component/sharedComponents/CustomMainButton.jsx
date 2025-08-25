import React from "react";
import PropTypes from "prop-types";

const CustomMainButton = ({
  onClick,
  text,
  Icon,
  image,
  fullWidth,
  TripleArrow,
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative inline-flex items-center justify-center gap-3 px-4 py-2 text-sm text-white rounded-md lg:px-6 lg:py-1 sm:text-base group overflow-hidden
    ${
      fullWidth
        ? "w-full h-[50px] mx-auto px-5"
        : " hover:text-black duration-300"
    }
  `}
    >
      <span className="absolute inset-0 transition-opacity duration-300 ease-in-out opacity-100 bg-custom-gradient-orange group-hover:opacity-0"></span>
      {fullWidth ? (
        <>
          <span className="absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 bg-custom-gradient-dark group-hover:opacity-100"></span>
        </>
      ) : (
        <>
          <span className="absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 bg-custom-gradient-white group-hover:opacity-100"></span>
        </>
      )}
      <span className="relative z-10">{text}</span>
      {Icon && (
        <Icon
          className={`relative z-10 w-4 h-4 duration-300 ${
            fullWidth ? "text-white" : "group-hover:text-black"
          }`}
        />
      )}
      {TripleArrow && <span className="relative z-10">{TripleArrow}</span>}
      {image && (
        <img
          src={image}
          alt="Button icon"
          className="relative z-10 w-2.5 h-2.5 ml-2"
        />
      )}
    </button>
  );
};

CustomMainButton.propTypes = {
  text: PropTypes.node.isRequired,
  image: PropTypes.string,
  onClick: PropTypes.func,
};

CustomMainButton.defaultProps = {
  image: null,
  onClick: () => {},
};

export default CustomMainButton;
