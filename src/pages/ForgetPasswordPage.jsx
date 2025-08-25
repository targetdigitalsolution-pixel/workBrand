import React from "react";
import PasswordPage from "../assets/images/Password.webp";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import ForgetPasswordForm from "../component/Register/ForgetPasswordForm";
import HeaderLayout from "../component/layers/HeaderLayout/HeaderLayout";
import Footer from "../component/sharedComponents/Footer";
const ForgetPasswordPage = () => {
  const signFormData = {
    title: "Forgot Password?",
    subtitle: "Enter your email to reset your password",
    emailPlaceholder: "E-mail",
    passwordPlaceholder: "password",
    signInText: "submit",
    imageSrc: PasswordPage,
    Iconmail: <EnvelopeIcon className="w-6 h-6 text-gray-500" />,
    Iconlock: (
      <LockClosedIcon className="h-8 w-8 text-custom-brown bg-[rgba(192,128,0,0.1)] p-1 rounded-full" />
    ),
  };

  return (
    <section className="bg-custom-gradient-bg">
      <HeaderLayout relative={true} />
      <div className="max-container w-[90%] lg:w-[80%] my-12">
        <ForgetPasswordForm {...signFormData} />
      </div>
      <Footer />
    </section>
  );
};

export default ForgetPasswordPage;
