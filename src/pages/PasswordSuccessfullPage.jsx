import React from "react";
import NewPassword from "../assets/images/NewPassword.webp";
import PasswordSuccessfull from "../component/Register/PasswordSuccessfull";
import { CheckIcon } from "@heroicons/react/24/outline";

const PasswordSuccessfullPage = () => {
  const sucess = {
    title: "Your Password Successfully Changed",
    subtitle: "Sign in to your account with your new password",
    emailPlaceholder: "email",
    password: "Enter your password",
    signInText: "Sign in",
    imageSrc: NewPassword,
    Iconlock: (
      <CheckIcon className="h-10 w-10 text-white bg-green-600 p-1 rounded-full" />
    ),
  };

  return (
    <div className="max-container w-[80%]">
      <PasswordSuccessfull {...sucess} />
    </div>
  );
};

export default PasswordSuccessfullPage;
