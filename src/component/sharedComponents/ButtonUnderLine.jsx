import React from "react";

const ButtonUnderLine = ({ name, link}) => {
  return (
    <a
      href={link}
      className="relative px-1 ml-1 mr-1 text-sm text-white duration-300 hover:text-custom-primary focus:text-custom-primary active:primary-color"
    >
      {name}
      <span className=" absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transition-transform duration-300 transform scale-x-0 group-active:scale-x-100 group-focus:scale-x-100" />
    </a>
  );
};

export default ButtonUnderLine;
