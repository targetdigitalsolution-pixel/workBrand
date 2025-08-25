import React from "react";
import OTPImage from "../assets/images/OTP.webp";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import OTPForm from "../component/Register/OTPForm";
import HeaderLayout from "../component/layers/HeaderLayout/HeaderLayout";
import Footer from "../component/sharedComponents/Footer";

const OTPVerificationPage = () => {
  const OTPData = {
    title: "OTP Verification",
    subtitle: "Check your email to see the verification code",
    otpPlaceholder: "Enter OTP Code",
    signInText: "Verify",
    imageSrc: OTPImage,
    Iconlock: (
      <EnvelopeIcon className="h-10 w-10 text-custom-brown bg-[rgba(192,128,0,0.1)] p-1 rounded-full" />
    ),
    text: "Resend code in",
  };

  return (
    <section className="bg-custom-gradient-bg">
      <HeaderLayout relative={true} />
      <div className="max-container w-[90%] lg:w-[80%] my-12">
        <OTPForm {...OTPData} />
      </div>
      <Footer />
    </section>
  );
};

export default OTPVerificationPage;
