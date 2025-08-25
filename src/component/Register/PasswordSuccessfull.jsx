import React from "react";

const PasswordSuccessfull = ({
  title,
  subtitle,
  signInText,
  imageSrc,
  Iconlock,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-2xl p-6 md:p-12 gap-8">
      {/* Left Image */}
      <div className="md:w-1/2 flex justify-center items-center">
        <img src={imageSrc} alt="Illustration" className="max-w-[80%] h-auto" />
      </div>

      {/* Right Form */}
      <div className="md:w-1/2 w-full flex flex-col justify-center gap-6">
        {/* Header */}
          <span className="p-2 rounded-full">{Iconlock}</span>
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-custom-black">
            {title}
          </h2>
        </div>
        <p className="text-lg md:text-xl text-gray-700 mb-6">{subtitle}</p>

        {/* Form */}
        <form className="flex flex-col gap-6">
          

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-custom-gradient-orange text-white rounded-2xl py-3 text-lg font-semibold hover:opacity-90 transition"
          >
            {signInText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordSuccessfull;
