import React from "react";

const LightButton = ({ text = "", icon = null, onClick, TripleArrow }) => {
  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden h-[50px] border-2 px-4 py-2 rounded-lg shadow w-full md:w-full mx-auto flex justify-center items-center gap-2 text-center font-medium border-custom-primary text-custom-primary group`}
    >
      <span className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-custom-gradient-orange group-hover:opacity-100"></span>

      {/* Text & Icons */}
      <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
        {text}
      </span>
      {icon && <span className="relative z-10 flex items-center">{icon}</span>}
      {TripleArrow && <span className="relative z-10">{TripleArrow}</span>}
    </button>
  );
};

export default LightButton;
