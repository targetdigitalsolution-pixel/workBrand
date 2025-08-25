import React, { useState } from "react";
import {
  EnvelopeIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";

const ResetPasswordForm = ({
  title,
  subtitle,
  emailPlaceholder,
  passwordPlaceholder,
  signInText,
  imageSrc,
  Iconlock,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col p-6 bg-white shadow-md rounded-2xl md:flex-row md:p-0">
      {/* Left Image */}
      <div className="flex items-center justify-center w-full mb-6 md:w-1/2 md:mb-0">
        <img
          src={imageSrc}
          alt="Illustration"
          className="w-full md:h-full md:rounded-s-2xl md:rounded-none rounded-xl h-[325px] object-cover"
        />
      </div>

      {/* Right Form */}
      <div className="flex flex-col justify-center md:my-6 md:gap-6 md:mx-12 md:w-1/2">
        <div className="justify-center mb-4 md:justify-start">
          <span className="p-2 rounded-full">{Iconlock}</span>
          <h2 className="text-2xl font-bold md:text-3xl text-custom-black">
            {title}
          </h2>
          <p className="mt-3 text-custom-black">{subtitle}</p>
        </div>

        <form className="flex flex-col gap-5 mt-6">
          {/* Email Field */}
          <div className="relative">
            <span className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2">
              <EnvelopeIcon className="w-5 h-5" />
            </span>
            <input
              type="email"
              placeholder={emailPlaceholder}
              className="w-full p-3 pl-12 text-lg border border-gray-300 rounded-lg focus:outline-none focus:border-custom-primary"
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <span className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2">
              <LockClosedIcon className="w-5 h-5" />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder={passwordPlaceholder}
              className="w-full p-3 pl-12 pr-12 text-lg border border-gray-300 rounded-lg focus:outline-none focus:border-custom-primary"
            />
            <span
              className="absolute text-gray-400 -translate-y-1/2 cursor-pointer right-3 top-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeIcon className="w-5 h-5" />
              ) : (
                <EyeSlashIcon className="w-5 h-5" />
              )}
            </span>
          </div>

          <button
            type="submit"
            className="py-3 text-lg font-semibold text-white transition rounded-lg bg-custom-gradient-orange hover:opacity-90"
          >
            {signInText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
