import React, { useState, useEffect, useRef } from "react";
import Logo from "../../../assets/images/Logo WorkBrand.webp";
import {
  Button,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
} from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import CustomMainButton from "../../sharedComponents/CustomMainButton";
import {
  PhoneIcon,
  BellIcon,
  UserIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import CustomStaticFlyoutMenu from "./CustomStaticFlyoutMenu";
import Servies_img from "../../../assets/images/Servies_img.webp";
import Offices_img from "../../../assets/images/Offices_img.webp";
import consulting_img from "../../../assets/images/consulting_img.webp";
import store_img from "../../../assets/images/store_img.webp";
import media_agency_img from "../../../assets/images/media_agency_img.webp";
import more_img from "../../../assets/images/more_img.webp";
import profile from "../../../assets/images/profile.webp";
import ShoppingMenu from "./ShoppingMenu";
import BellMenu from "./BellMenu";
import MobileMenu from "./MobileMenu";

const menuDataDes = {
  Services: {
    dropdown: true,
    image: Servies_img,
    name: "Services",
    move: -150,
    footerText: "Explore our Services",
    footerLinks: [
      { name: "Quick Links", link: "/coming-soon" },
      { name: "Join Today", link: "/coming-soon" },
      { name: "Contact Us", link: "/coming-soon" },
      { name: "Download", link: "/coming-soon" },
    ],
    sections: [
      {
        id: 1,
        headline1: "Workspaces",
        subItems: [
          { name: "Private Offices", link: "/coming-soon" },
          { name: "Virtual Office", link: "/coming-soon" },
          { name: "Meeting rooms", link: "/coming-soon" },
        ],
      },
      {
        id: 2,
        headline1: "",
        subItems: [
          { name: "Training halls", link: "/coming-soon" },
          { name: "Production Studio", link: "/coming-soon" },
          { name: "Organizing events", link: "/coming-soon" },
        ],
      },
    ],
  },
  Offices: {
    dropdown: true,
    image: Offices_img,
    name: "Offices",
    move: -100,
    footerText: "Explore our Offices",
    footerLinks: [
      { name: "Quick Links", link: "/coming-soon" },
      { name: "Join Today", link: "/coming-soon" },
      { name: "Contact Us", link: "/coming-soon" },
      { name: "Download", link: "/coming-soon" },
    ],
    sections: [
      {
        id: 1,
        headline1: "Offices",
        subItems: [
          { name: "Mohandeseen Branch", link: "/coming-soon" },
          { name: "Nasr City Branch", link: "/coming-soon" },
        ],
      },
    ],
  },
  Consulting: {
    dropdown: true,
    image: consulting_img,
    name: "Consulting",
    move: -50,
    footerText: "Shop at our Consulting",
    footerLinks: [
      { name: "Quick Links", link: "/coming-soon" },
      { name: "Join Today", link: "/coming-soon" },
      { name: "Contact Us", link: "/coming-soon" },
      { name: "Download", link: "/coming-soon" },
    ],
    sections: [
      {
        id: 1,
        headline1: "Business Consulting",
        subItems: [
          { name: "Book Your Consultation", link: "/coming-soon" },
          { name: "Who We Are", link: "/coming-soon" },
          { name: "Our Consulting Services", link: "/coming-soon" },
        ],
      },
      {
        id: 2,
        headline1: "Training Programs",
        subItems: [
          { name: "Book your training", link: "/coming-soon" },
          { name: "About the Programs", link: "/coming-soon" },
          { name: "Program Topics", link: "/coming-soon" },
          { name: "The Trainer", link: "/coming-soon" },
          { name: "Our Programs", link: "/coming-soon" },
        ],
      },
    ],
  },
  Media_Agency: {
    dropdown: true,
    image: media_agency_img,
    name: "Media Agency",
    move: 0,
    footerText: "Join our Media Agency",
    footerLinks: [
      { name: "Quick Links", link: "/coming-soon" },
      { name: "Join Today", link: "/coming-soon" },
      { name: "Contact Us", link: "/coming-soon" },
      { name: "Download", link: "/coming-soon" },
    ],
    sections: [
      {
        id: 1,
        headline1: "Media Agency Services",
        subItems: [
          { name: "Media Coverage", link: "/coming-soon" },
          { name: "Models Supply for Photoshoots", link: "/coming-soon" },
          { name: "Voiceover Services", link: "/coming-soon" },
          { name: "Podcast Hosting Services", link: "/coming-soon" },
          { name: "Creative Development", link: "/coming-soon" },
          {
            name: "Professional Studios",
            link: "/coming-soon",
          },
        ],
      },
      {
        id: 2,
        headline1: "    ",
        subItems: [
          { name: "Video Production", link: "/coming-soon" },
          { name: "Animation", link: "/coming-soon" },
          { name: "Broadcast Video Production", link: "/coming-soon" },
          { name: "Photography", link: "/coming-soon" },
          { name: "Video Editing (Montage)", link: "/coming-soon" },
          { name: "Media Coverage", link: "/coming-soon" },
        ],
      },
    ],
  },
  Create_Website: {
    name: "Create Website",
    link: "/coming-soon",
  },
  Store: {
    dropdown: true,
    image: store_img,
    name: "Store",
    move: 100,
    footerText: "Read our Store",
    footerLinks: [
      { name: "Quick Links", link: "/coming-soon" },
      { name: "Join Today", link: "/coming-soon" },
      { name: "Contact Us", link: "/coming-soon" },
      { name: "Download", link: "/coming-soon" },
    ],
    sections: [
      {
        id: 1,
        headline1: "Featured Products",
        subItems: [
          { name: "WorkBrand Branded Items", link: "/coming-soon" },
          { name: "Monthly Deals", link: "/coming-soon" },
          { name: "Equipment for Rent", link: "/coming-soon" },
        ],
      },
      {
        id: 2,
        headline1: "Services & Support",
        subItems: [
          { name: "Custom Orders", link: "/coming-soon" },
          { name: "Shipping & Returns", link: "/coming-soon" },
          { name: "Help Center", link: "/coming-soon" },
        ],
      },
    ],
  },
  More: {
    dropdown: true,
    image: more_img,
    name: "More",
    move: 100,
    footerText: "Read our Store",
    footerLinks: [
      { name: "Quick Links", link: "/coming-soon" },
      { name: "Join Today", link: "/coming-soon" },
      { name: "Contact Us", link: "/coming-soon" },
      { name: "Download", link: "/coming-soon" },
    ],
    sections: [
      {
        id: 1,
        headline1: "Insights",
        subItems: [
          { name: "Articles", link: "/coming-soon" },
          { name: "Tips & Guides", link: "/coming-soon" },
          { name: "News & Updates", link: "/coming-soon" },
        ],
      },
      {
        id: 2,
        headline1: "Event",
        subItems: [
          { name: "Upcoming Events", link: "/coming-soon" },
          { name: "Past Events", link: "/coming-soon" },
          { name: "Book an Event", link: "/coming-soon" },
        ],
      },
    ],
  },
};

const menuDataMob = {
  Services: {
    dropdown: true,
    name: "Services",
    sections: [
      {
        id: 1,
        headline1: "Workspaces",
        subItems: [
          { name: "Private Offices", link: "/coming-soon" },
          { name: "Virtual Office", link: "/coming-soon" },
          { name: "Meeting rooms", link: "/coming-soon" },
          { name: "Training halls", link: "/coming-soon" },
          { name: "Production Studio", link: "/coming-soon" },
          { name: "Organizing events", link: "/coming-soon" },
        ],
      },
    ],
  },
  Offices: {
    dropdown: true,
    name: "Offices",
    sections: [
      {
        id: 1,
        headline1: "Offices",
        subItems: [
          { name: "Mohandeseen Branch", link: "/coming-soon" },
          { name: "Nasr City Branch", link: "/coming-soon" },
        ],
      },
    ],
  },
  Consulting: {
    dropdown: true,
    name: "Consulting",
    sections: [
      {
        id: 1,
        headline1: "Business Consulting",
        subItems: [
          { name: "Book Your Consultation", link: "/coming-soon" },
          { name: "Who We Are", link: "/coming-soon" },
          { name: "Our Consulting Services", link: "/coming-soon" },
        ],
      },
      {
        id: 2,
        headline1: "Training Programs",
        subItems: [
          { name: "Book your training", link: "/coming-soon" },
          { name: "About the Programs", link: "/coming-soon" },
          { name: "Program Topics", link: "/coming-soon" },
          { name: "The Trainer", link: "/coming-soon" },
          { name: "Our Programs", link: "/coming-soon" },
        ],
      },
    ],
  },
  Media_Agency: {
    dropdown: true,
    name: "Media Agency",
    sections: [
      {
        id: 1,
        headline1: "Media Agency Services",
        subItems: [
          { name: "Media Coverage", link: "/coming-soon" },
          { name: "Models Supply for Photoshoots", link: "/coming-soon" },
          { name: "Voiceover Services", link: "/coming-soon" },
          { name: "Podcast Hosting Services", link: "/coming-soon" },
          { name: "Creative Development", link: "/coming-soon" },
          {
            name: "Professional Studios",
            link: "/coming-soon",
          },
          { name: "Video Production", link: "/coming-soon" },
          { name: "Animation", link: "/coming-soon" },
          { name: "Broadcast Video Production", link: "/coming-soon" },
          { name: "Photography", link: "/coming-soon" },
          { name: "Video Editing (Montage)", link: "/coming-soon" },
          { name: "Media Coverage", link: "/coming-soon" },
        ],
      },
    ],
  },
  Create_Website: {
    name: "Create Website",
    link: "/coming-soon",
    section: false,
  },
  Store: {
    dropdown: true,
    name: "Store",
    sections: [
      {
        id: 1,
        headline1: "Featured Products",
        subItems: [
          { name: "WorkBrand Branded Items", link: "/coming-soon" },
          { name: "Monthly Deals", link: "/coming-soon" },
          { name: "Equipment for Rent", link: "/coming-soon" },
        ],
      },
      {
        id: 2,
        headline1: "Services & Support",
        subItems: [
          { name: "Custom Orders", link: "/coming-soon" },
          { name: "Shipping & Returns", link: "/coming-soon" },
          { name: "Help Center", link: "/coming-soon" },
        ],
      },
    ],
  },
  More: {
    dropdown: true,
    name: "More",
    sections: [
      {
        id: 1,
        headline1: "Insights",
        subItems: [
          { name: "Articles", link: "/coming-soon" },
          { name: "Tips & Guides", link: "/coming-soon" },
          { name: "News & Updates", link: "/coming-soon" },
        ],
      },
      {
        id: 2,
        headline1: "Event",
        subItems: [
          { name: "Upcoming Events", link: "/coming-soon" },
          { name: "Past Events", link: "/coming-soon" },
          { name: "Book an Event", link: "/coming-soon" },
        ],
      },
    ],
  },
};
const Navbar = ({ relative }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [isShoppingOpen, setIsShoppingOpen] = useState(false);
  const [isBellDrawerOpen, setIsBellDrawerOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState({});
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClickCart = () => {
    navigate("/CheckoutUser");
  };
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1025);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoStyle = {
    width: isMobile ? "60px" : "80px",
  };

  const toggleDrawer = () => setIsShoppingOpen(!isShoppingOpen);
  const toggleBellDrawer = () => setIsBellDrawerOpen(!isBellDrawerOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setIsOpen({});
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const toggleDropdown = (item) => {
    setIsOpen((prev) => {
      const newState = {};
      Object.keys(menuDataDes).forEach((key) => {
        newState[key] = key === item ? !prev[key] : false;
      });
      return newState;
    });
  };

  const closeDropdowns = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen({});
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdowns);
    return () => {
      document.removeEventListener("mousedown", closeDropdowns);
    };
  }, []);

  return (
    <section
      className={`z-50 w-full transition duration-300 ${
        isScrolled
          ? "fixed top-0 bg-custom-gradient-black shadow-md"
          : `${relative ? "relative bg-custom-black" : "absolute bg-inherit"} `
      }`}
    >
      <div
        className={`px-2 max-container ${
          isScrolled
            ? "bg-transparent"
            : "bg-custom-gradient-black lg:bg-custom-gradient-transparent"
        } transition duration-300`}
      >
        <div className="z-10 w-full md:py-2">
          <div className="flex items-center justify-between py-2">
            <Link to="/">
              <img style={logoStyle} src={Logo} alt="Logo" />
            </Link>
            <div className="items-center justify-center hidden lg:block">
              <CustomStaticFlyoutMenu menuData={menuDataDes} />
            </div>
            <div className="items-center hidden gap-4 lg:flex">
              <Button onClick={toggleBellDrawer}>
                <BellIcon className="w-6 text-white duration-300 hover:text-custom-primary" />
              </Button>
              <Button onClick={toggleDrawer}>
                <ShoppingCartIcon className="w-6 text-white duration-300 hover:text-custom-primary" />
              </Button>
              <Menu as="div" className="relative">
                <MenuButton className="flex items-center text-gray-700 group">
                  <div className="head-user-container">
                    <UserIcon className="w-6 text-white duration-300 hover:text-custom-primary" />
                  </div>
                </MenuButton>
                <MenuItems className="absolute right-0 z-50 p-4 mt-6 transition origin-top-right bg-white rounded-md shadow-md w-60 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="flex items-center gap-2">
                    <div className="w-2/6 aspect-square">
                      <img
                        src={profile}
                        className="object-cover w-full h-full rounded-full"
                        alt="Profile"
                      />
                    </div>
                    <main className="w-4/6">
                      <h1 className="font-bold ">Khaled Mohamed</h1>
                      <p className="text-sm duration-300 cursor-pointer hover:text-custom-primary">
                        Edit Profile
                      </p>
                    </main>
                  </div>

                  <MenuItem>
                    <a
                      href="/coming-soon"
                      className="block py-2 text-sm text-gray-700 duration-300 hover:text-custom-primary"
                    >
                      Account
                    </a>
                  </MenuItem>

                  <MenuItem>
                    <a
                      href="/coming-soon"
                      className="block py-2 text-sm text-gray-700 duration-300 hover:text-custom-primary"
                    >
                      Orders
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="/coming-soon"
                      className="block py-2 text-sm text-gray-700 duration-300 hover:text-custom-primary"
                    >
                      Bookmarks
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="/coming-soon"
                      className="block py-2 text-sm text-gray-700 duration-300 hover:text-custom-primary"
                    >
                      Downloads
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="/coming-soon"
                      className="block py-2 text-sm text-gray-700 duration-300 hover:text-custom-primary"
                    >
                      Help
                    </a>
                  </MenuItem>
                  <hr />
                  <MenuItem>
                    <a
                      href="/coming-soon"
                      className="block py-2 text-sm text-gray-700 duration-300 hover:text-custom-primary"
                    >
                      Sign In
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>
              <CustomMainButton
                text={t("Enquire")}
                icon={PhoneIcon}
                hover_white={true}
                onClick={() => navigate("/coming-soon")}
              />
            </div>
            {/* menu Mobile */}
            <div className="flex gap-2 lg:hidden">
              <Button onClick={() => setIsShoppingOpen(!isShoppingOpen)}>
                <ShoppingCartIcon className="w-6 text-white duration-300 hover:text-custom-primary" />
              </Button>
              <Button onClick={() => setIsBellDrawerOpen(!isBellDrawerOpen)}>
                <BellIcon className="w-6 text-white duration-300 hover:text-custom-primary" />
              </Button>
              <Button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <Bars3Icon className="text-white duration-300 hover:text-custom-primary w-7 h-7" />
              </Button>
            </div>
          </div>
        </div>

        {/* Shopping Cart Drawer */}
        {isShoppingOpen && (
          <ShoppingMenu
            isShoppingOpen={isShoppingOpen}
            toggleDrawer={toggleDrawer}
            handleClickCart={handleClickCart}
          />
        )}

        {/* Bell Drawer */}
        {isBellDrawerOpen && (
          <BellMenu
            isBellDrawerOpen={isBellDrawerOpen}
            toggleBellDrawer={toggleBellDrawer}
          />
        )}

        {/* Mobile Dropdown Drawer */}
        {isDropdownOpen && (
          <MobileMenu
            isDropdownOpen={isDropdownOpen}
            setIsDropdownOpen={setIsDropdownOpen}
            menuDataMob={menuDataMob}
            toggleDropdown={toggleDropdown}
            isOpen={isOpen}
          />
        )}
      </div>
    </section>
  );
};

export default Navbar;
