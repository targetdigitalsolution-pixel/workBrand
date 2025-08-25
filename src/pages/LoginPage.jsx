import React from "react";
import Welcome from "../assets/images/welcome.webp";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import HeaderLayout from "../component/layers/HeaderLayout/HeaderLayout";
import Footer from "../component/sharedComponents/Footer";
import LoginForm from "../component/Register/LoginForm";

const LoginPage = () => {
  const signFormData = {
    title: "Welcome Back",
    subtitle: "Sign in to your account",
    emailPlaceholder: "E-mail",
    passwordPlaceholder: " Password",
    rememberMeText: "Remember",
    forgotPasswordText: "Forget Password",
    signInText: " Sign up",
    googleSignInText: "Sign in with Google  ",
    additionalText: "  Don’t have an account?",
    additionalLinkText: " Sign up",
    additionalLinkHref: "/register",
    imageSrc: Welcome,
    Iconmail: <EnvelopeIcon className="w-6 h-6 text-gray-500" />,
    Iconlock: <LockClosedIcon className="w-6 h-6 text-gray-500" />,
    GoogleIcon: (
      <FontAwesomeIcon
        icon={faGoogle}
        className="text-xl text-custom-primary"
      />
    ),
  };

  return (
    <section className="bg-custom-gradient-bg">
      <HeaderLayout relative={true} />
      <div className="max-container w-[90%] lg:w-[80%] my-12">
        <LoginForm {...signFormData} />
      </div>
      <Footer />
    </section>
  );
};

export default LoginPage;
