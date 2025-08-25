import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainTittle from "../sharedComponents/MainTittle";
import Premium_Notebook from "../../assets/images/Premium_Notebook.webp";
import simple_plans_bg from "../../assets/images/simple_plans_bg.webp";
import icon_1 from "../../assets/Icons/icon_1.svg";
import icon_2 from "../../assets/Icons/icon_2.svg";
import icon_3 from "../../assets/Icons/icon_3.svg";
import icon_4 from "../../assets/Icons/icon_4.svg";
import Virtual_Office_Icon from "../../assets/Icons/Virtual_Office_Icon.svg";
import Private_Office_Icon from "../../assets/Icons/Private_Office_Icon.svg";
import Meeting_Room_Icon from "../../assets/Icons/Meeting_Room_Icon.svg";
import Tranning_Room_Icon from "../../assets/Icons/Tranning_Room_Icon.svg";
import Membership_Icon from "../../assets/Icons/Membership_Icon.svg";
import Business_Lounge_Icon from "../../assets/Icons/Business_Lounge_Icon.svg";
import Coworking_Space_Icon from "../../assets/Icons/Coworking_Space_Icon.svg";
import white_1 from "../../assets/Icons/white-1.svg";
import white_2 from "../../assets/Icons/white-2.svg";
import white_3 from "../../assets/Icons/white-3.svg";
import white_4 from "../../assets/Icons/white-4.svg";
import white_5 from "../../assets/Icons/white-5.svg";
import white_6 from "../../assets/Icons/white-6.svg";
import { motion } from "framer-motion";

import Calligraphy_Pen_Set from "../../assets/images/Calligraphy_Pen_Set.webp";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import PlansCard from "./ServiesCard";
import { fadeInPlace, fadeInUp } from "../../utils/motionVariants";

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute left-0 z-10 hidden p-2 duration-300 -translate-y-1/2 rounded-full shadow bg-custom-primary hover:bg-opacity-80 top-1/2 lg:block"
      onClick={onClick}
    >
      <ChevronLeftIcon className="w-6 h-6 text-white" />
    </button>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute right-0 z-10 hidden block p-2 duration-300 -translate-y-1/2 rounded-full shadow bg-custom-primary hover:bg-opacity-80 top-1/2 lg:block"
      onClick={onClick}
    >
      <ChevronRightIcon className="w-6 h-6 text-white" />
    </button>
  );
};

const PlansSection = () => {
  const [activeTab, setActiveTab] = useState("VirtualOffice");

  const settings = {
    dots: true,
    arrows: false,
    // infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerMode: true,
    centerPadding: "0px",
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  // Settings for tabs carousel on mobile
  const tabsSettings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    centerMode: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const VirtualOfficeData = [
    {
      photo: Premium_Notebook,
      title: "Company Formation Services",
      description:
        "Flexible systems to set up your business with ease. We offer We Handle ...",
      key_features: [
        {
          icon: icon_1,
          title: "Full company registration from A to Z",
        },
        {
          icon: icon_2,
          title: "Ongoing access to legal consultants",
        },
      ],
    },
    {
      photo: Calligraphy_Pen_Set,
      title: "Virtual Offices",
      description:
        "Work remotely while maintaining a prestigious business address and ...",
      key_features: [
        {
          icon: icon_3,
          title: "Virtual office solutions available",
        },
        {
          icon: icon_4,
          title: "Flexible pricing based on your needs",
        },
      ],
    },
  ];

  const PrivateOfficeData = [
    {
      photo: Calligraphy_Pen_Set,
      title: "Premium Stationery",
      description:
        "High-quality writing instruments and office supplies for professionals...",
      key_features: [
        {
          icon: icon_1,
          title: "Premium quality materials",
        },
        {
          icon: icon_2,
          title: "Custom branding options",
        },
      ],
    },
    {
      photo: Premium_Notebook,
      title: "Business Notebooks",
      description:
        "Professional notebooks designed for modern business needs...",
      key_features: [
        {
          icon: icon_3,
          title: "Elegant design and durability",
        },
        {
          icon: icon_4,
          title: "Multiple size options",
        },
      ],
    },
  ];

  const MeetingRoomData = [
    {
      photo: Premium_Notebook,
      title: "Digital Solutions",
      description:
        "Comprehensive digital transformation services for your business...",
      key_features: [
        {
          icon: icon_1,
          title: "Cloud-based infrastructure",
        },
        {
          icon: icon_2,
          title: "24/7 technical support",
        },
      ],
    },
    {
      photo: Calligraphy_Pen_Set,
      title: "Consulting Services",
      description:
        "Expert business consulting to help you achieve your goals...",
      key_features: [
        {
          icon: icon_3,
          title: "Strategic planning assistance",
        },
        {
          icon: icon_4,
          title: "Industry expertise",
        },
      ],
    },
  ];

  const TranningRoomData = [
    {
      photo: Premium_Notebook,
      title: "Digital Solutions",
      description:
        "Comprehensive digital transformation services for your business...",
      key_features: [
        {
          icon: icon_1,
          title: "Cloud-based infrastructure",
        },
        {
          icon: icon_2,
          title: "24/7 technical support",
        },
      ],
    },
    {
      photo: Calligraphy_Pen_Set,
      title: "Consulting Services",
      description:
        "Expert business consulting to help you achieve your goals...",
      key_features: [
        {
          icon: icon_3,
          title: "Strategic planning assistance",
        },
        {
          icon: icon_4,
          title: "Industry expertise",
        },
      ],
    },
  ];

  const MembershipData = [
    {
      photo: Premium_Notebook,
      title: "Digital Solutions",
      description:
        "Comprehensive digital transformation services for your business...",
      key_features: [
        {
          icon: icon_1,
          title: "Cloud-based infrastructure",
        },
        {
          icon: icon_2,
          title: "24/7 technical support",
        },
      ],
    },
    {
      photo: Calligraphy_Pen_Set,
      title: "Consulting Services",
      description:
        "Expert business consulting to help you achieve your goals...",
      key_features: [
        {
          icon: icon_3,
          title: "Strategic planning assistance",
        },
        {
          icon: icon_4,
          title: "Industry expertise",
        },
      ],
    },
  ];

  const BusinessLoungeData = [
    {
      photo: Premium_Notebook,
      title: "Digital Solutions",
      description:
        "Comprehensive digital transformation services for your business...",
      key_features: [
        {
          icon: icon_1,
          title: "Cloud-based infrastructure",
        },
        {
          icon: icon_2,
          title: "24/7 technical support",
        },
      ],
    },
    {
      photo: Calligraphy_Pen_Set,
      title: "Consulting Services",
      description:
        "Expert business consulting to help you achieve your goals...",
      key_features: [
        {
          icon: icon_3,
          title: "Strategic planning assistance",
        },
        {
          icon: icon_4,
          title: "Industry expertise",
        },
      ],
    },
  ];

  const CoworkingSpaceData = [
    {
      photo: Premium_Notebook,
      title: "Digital Solutions",
      description:
        "Comprehensive digital transformation services for your business...",
      key_features: [
        {
          icon: icon_1,
          title: "Cloud-based infrastructure",
        },
        {
          icon: icon_2,
          title: "24/7 technical support",
        },
      ],
    },
    {
      photo: Calligraphy_Pen_Set,
      title: "Consulting Services",
      description:
        "Expert business consulting to help you achieve your goals...",
      key_features: [
        {
          icon: icon_3,
          title: "Strategic planning assistance",
        },
        {
          icon: icon_4,
          title: "Industry expertise",
        },
      ],
    },
  ];

  const tabsData = {
    VirtualOffice: VirtualOfficeData,
    PrivateOffice: PrivateOfficeData,
    MeetingRoom: MeetingRoomData,
    TranningRoom: TranningRoomData,
    Membership: MembershipData,
    BusinessLounge: BusinessLoungeData,
    CoworkingSpace: CoworkingSpaceData,
  };

  const tabs = [
    {
      id: "VirtualOffice",
      label: "Virtual Office",
      icon: Virtual_Office_Icon,
      iconWhite: white_6,
    },
    {
      id: "PrivateOffice",
      label: "Private Office",
      icon: Private_Office_Icon,
      iconWhite: white_2,
    },
    {
      id: "MeetingRoom",
      label: "Meeting Room",
      icon: Meeting_Room_Icon,
      iconWhite: white_3,
    },
    {
      id: "TranningRoom",
      label: "Tranning Room",
      icon: Tranning_Room_Icon,
      iconWhite: white_1,
    },
    {
      id: "Membership",
      label: "Membership",
      icon: Membership_Icon,
      iconWhite: white_5,
    },
    {
      id: "BusinessLounge",
      label: "Business Lounge",
      icon: Business_Lounge_Icon,
      iconWhite: white_4,
    },
    {
      id: "CoworkingSpace",
      label: "Coworking Space",
      icon: Coworking_Space_Icon,
      iconWhite: white_2,
    },
  ];

  return (
    <section
      className="pt-12 pb-24 Plan-section"
      style={{
        backgroundImage: `url(${simple_plans_bg})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <style>{`
      .Plan-section .slick-dots {
        bottom: -0.75rem !important;
      }
    `}</style>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInPlace}
      >
        <MainTittle
          title="Showcase Your Products"
          description="Our clients can display and sell their offerings through our premium digital store — with full support from branding to logistics."
          colorDesc="white"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="mb-12 rounded-lg lg:pb-8 max-container lg:bg-custom-gradient-bg xl:px-0">
          {/* Desktop Layout */}
          <div className="items-center justify-center hidden lg:flex">
            {/* Desktop Tabs Section */}
            <div className="flex items-start w-1/3 h-full p-6">
              <div className="w-full space-y-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex justify-center text-center px-4 py-3 rounded-lg transition-all duration-300 border-2 ${
                      activeTab === tab.id
                        ? "bg-custom-gradient-orange text-white border-custom-primary shadow-lg transform "
                        : "bg-custom-gradient-transparent text-custom-primary  border-custom-primary hover:text-custom-primary hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <img
                        src={activeTab === tab.id ? tab.iconWhite : tab.icon}
                        alt={tab.label}
                        className="w-6 h-6 transition duration-300"
                      />
                      <div className="font-semibold">{tab.label}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop Carousel Section */}
            <div className="relative w-2/3 lg:px-6 lg:pt-6">
              <Slider {...settings}>
                {tabsData[activeTab]?.map((plan, index) => (
                  <div key={`${activeTab}-${index}`} className="p-2 ">
                    <PlansCard {...plan} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Mobile Tabs Carousel */}
            <div className="px-2 py-6">
              <Slider {...tabsSettings}>
                {tabs.map((tab) => (
                  <div key={tab.id} className="px-2">
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex justify-center text-center p-3 rounded-lg transition-all duration-300 border-2 text-sm ${
                        activeTab === tab.id
                          ? "bg-custom-gradient-orange text-white border-custom-primary shadow-lg transform scale-95"
                          : "bg-custom-gradient-transparent text-custom-primary border-custom-primary hover:text-custom-primary hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-center justify-center gap-2 space-y-1">
                        {tab.icon && (
                          <img
                            src={
                              activeTab === tab.id ? tab.iconWhite : tab.icon
                            }
                            alt={tab.label}
                            className="w-6 h-6 transition duration-300"
                          />
                        )}
                        <div className="font-medium leading-tight text-center">
                          {tab.label}
                        </div>
                      </div>
                    </button>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Mobile Carousel Section */}
            <div className="relative ">
              <Slider {...settings}>
                {tabsData[activeTab]?.map((plan, index) => (
                  <div key={`${activeTab}-${index}`} className="p-4 lg:my-6">
                    <PlansCard {...plan} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PlansSection;
