import React from "react";
import StartedNowPage from "../component/Register/StartedNow";
import startNow from "../assets/images/startNow.webp";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";


const StartedNow = () => {
  const data = {
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
    imageSrc: startNow,
    Iconmail: <EnvelopeIcon className="h-6 w-6 text-gray-500" />,
    Iconlock: <LockClosedIcon className="h-6 w-6 text-gray-500" />,
    titilelabel1: "Email",
    titilelabel2: "Password",
    GoogleIcon: (
      <FontAwesomeIcon
        icon={faGoogle}
        className="text-custom-primary 0text-xl"
      />
    ),
  };

  return (
    <div className="max-container w-[80%] mx-auto">
      <StartedNowPage {...data} />
    </div>
  );
};

export default StartedNow;
