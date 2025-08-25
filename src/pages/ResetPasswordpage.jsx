import React from "react";
import NewPassword from "../assets/images/NewPassword.webp";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import ResetPasswordForm from "../component/Register/ResetPasswordForm";
import Footer from "../component/sharedComponents/Footer";
import HeaderLayout from "../component/layers/HeaderLayout/HeaderLayout";


const ResetPasswordpage = () => {
  const Newpassword = {
    title: "Set New Password",
    subtitle: "Enter your new password to complete the reset process",
    otpPlaceholder: "Enter OTP Code",
    signInText: "Save New Password",
    imageSrc: NewPassword,
    Iconlock: (
      <LockClosedIcon className="h-10 w-10 text-custom-brown bg-[rgba(192,128,0,0.1)] p-1 rounded-full" />
    ),
    text: "Resend code in",
    additionalText: "New Password",
    TittleLabel: "New Password",
    emailPlaceholder: "email",
    password: "Enter your password",
    passwordPlaceholder: "password",
  };

  return (
    <section className="bg-custom-gradient-bg">
      <HeaderLayout relative={true} />
      <div className="max-container w-[90%] lg:w-[80%] my-12">
        <ResetPasswordForm {...Newpassword} />
      </div>
      <Footer />
    </section>
  );
};

export default ResetPasswordpage;
