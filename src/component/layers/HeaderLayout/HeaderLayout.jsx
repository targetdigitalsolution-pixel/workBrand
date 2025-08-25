import React, { useState, useEffect } from "react";
import Head from "./Head";
import Navbar from "./Navbar";
import CustomStaticFlyoutMenu from "./CustomStaticFlyoutMenu";
import CustomDivider from "../../sharedComponents/Customdivider";

const HeaderLayout = ({ relative }) => {
  const [isNavBarVisible, setIsNavBarVisible] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      setIsNavBarVisible(currentScrollTop > 100);
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`transition-all duration-300 ${
          isNavBarVisible ? "pt-16" : "pt-0"
        }`}
      >
        <Head />
        <Navbar relative={relative} />
      </div>
    </>
  );
};

export default HeaderLayout;
