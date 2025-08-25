import React from "react";
import { useParams } from "react-router-dom";
import HeaderLayout from "../component/layers/HeaderLayout/HeaderLayout";
import HeroSection from "../component/sharedComponents/HeroSection";
import Footer from "../component/sharedComponents/Footer";
import ServiceHeroDetails from "../component/SingleService/ServiceHeroDetails";
import ServiceFeaturesList from "../component/SingleService/ServiceFeaturesList";
import ServiceGallery from "../component/SingleService/ServiceGallery";
import ServicePricing from "../component/SingleService/ServicePricing";
import ServiceBooking from "../component/SingleService/ServiceBooking";
import WhyChooseVirtualOffice from "../component/SingleService/WhyChooseVirtualOffice";
import MapSection from "../component/SingleService/MapSection";
import RightPlace from "../component/sharedComponents/RightPlace";

// Service data
const servicesData = {
  "virtual-office": {
    id: 1,
    title: "Virtual Office",
    subtitle: "Solutions",
    heroImage: require("../assets/images/Premium_Notebook.webp"),
    description: "Work remotely while maintaining a prestigious business address and professional presence in Cairo's prime locations.",
    longDescription: "Our Virtual Office solutions provide you with everything you need to establish a professional business presence without the overhead costs of a physical office. Perfect for startups, freelancers, and remote businesses looking to establish credibility and legal compliance in Egypt.",
    features: [
      "Legal business registration address in prime Cairo locations",
      "Professional mail handling and forwarding services",
      "Call forwarding and professional reception services",
      "Access to meeting rooms when needed",
      "Business license and legal documentation support",
      "Professional business phone number",
      "Digital mail scanning and forwarding",
      "Access to coworking spaces"
    ],
    gallery: [
      require("../assets/images/gallery_WhyChooseUS_img1.webp"),
      require("../assets/images/gallery_WhyChooseUS_img2.webp"),
      require("../assets/images/gallery_WhyChooseUS_img3.webp"),
      require("../assets/images/Premium_Notebook.webp")
    ],
    pricing: [
      {
        name: "Basic Virtual Office",
        price: "500",
        period: "month",
        features: [
          "Business address registration",
          "Mail handling service",
          "Basic phone support",
          "2 hours meeting room access"
        ]
      },
      {
        name: "Premium Virtual Office",
        price: "800",
        period: "month",
        popular: true,
        features: [
          "Everything in Basic",
          "Professional call forwarding",
          "Digital mail scanning",
          "5 hours meeting room access",
          "Legal consultation support"
        ]
      },
      {
        name: "Enterprise Virtual Office",
        price: "1200",
        period: "month",
        features: [
          "Everything in Premium",
          "Dedicated phone line",
          "Unlimited meeting room access",
          "Priority legal support",
          "Custom business solutions"
        ]
      }
    ]
  },
  "private-office": {
    id: 2,
    title: "Private Office",
    subtitle: "Spaces",
    heroImage: require("../assets/images/Calligraphy_Pen_Set.webp"),
    description: "Fully equipped private offices in premium locations, designed for productivity and professional growth.",
    longDescription: "Our Private Office spaces offer you a dedicated, fully furnished workspace in Cairo's most prestigious business districts. Each office comes with high-speed internet, modern furniture, and access to all building amenities.",
    features: [
      "Fully furnished private workspace",
      "High-speed fiber internet included",
      "24/7 secure access to your office",
      "Professional business address",
      "Utilities and maintenance included",
      "Access to meeting rooms and common areas",
      "Professional reception services",
      "Parking space availability"
    ],
    gallery: [
      require("../assets/images/gallery_WhyChooseUS_img2.webp"),
      require("../assets/images/gallery_WhyChooseUS_img1.webp"),
      require("../assets/images/gallery_WhyChooseUS_img3.webp"),
      require("../assets/images/Calligraphy_Pen_Set.webp")
    ],
    pricing: [
      {
        name: "Small Private Office",
        price: "2000",
        period: "month",
        features: [
          "10-15 sqm private office",
          "Desk and chair included",
          "High-speed internet",
          "Basic utilities included"
        ]
      },
      {
        name: "Medium Private Office",
        price: "3500",
        period: "month",
        popular: true,
        features: [
          "20-25 sqm private office",
          "Full furniture package",
          "Meeting room access",
          "Reception services",
          "Parking space"
        ]
      },
      {
        name: "Large Private Office",
        price: "5000",
        period: "month",
        features: [
          "30+ sqm private office",
          "Premium furniture",
          "Unlimited meeting rooms",
          "Dedicated phone line",
          "Priority support"
        ]
      }
    ]
  },
  "meeting-rooms": {
    id: 3,
    title: "Meeting Rooms",
    subtitle: "& Conference Facilities",
    heroImage: require("../assets/images/Leather_Journal.webp"),
    description: "Professional meeting spaces equipped with modern technology for presentations, client meetings, and team collaborations.",
    longDescription: "Our meeting rooms are designed to impress your clients and facilitate productive discussions. Each room is equipped with state-of-the-art presentation technology, comfortable seating, and professional ambiance.",
    features: [
      "State-of-the-art presentation equipment",
      "High-speed WiFi and video conferencing",
      "Flexible booking by hour or day",
      "Professional reception services",
      "Catering services available",
      "Whiteboard and flip charts",
      "Air conditioning and comfortable seating",
      "Technical support available"
    ],
    gallery: [
      require("../assets/images/gallery_WhyChooseUS_img3.webp"),
      require("../assets/images/gallery_WhyChooseUS_img1.webp"),
      require("../assets/images/gallery_WhyChooseUS_img2.webp"),
      require("../assets/images/Leather_Journal.webp")
    ],
    pricing: [
      {
        name: "Small Meeting Room",
        price: "100",
        period: "hour",
        features: [
          "4-6 person capacity",
          "Basic AV equipment",
          "WiFi access",
          "Whiteboard included"
        ]
      },
      {
        name: "Conference Room",
        price: "200",
        period: "hour",
        popular: true,
        features: [
          "8-12 person capacity",
          "Full AV setup",
          "Video conferencing",
          "Catering options",
          "Reception support"
        ]
      },
      {
        name: "Boardroom",
        price: "350",
        period: "hour",
        features: [
          "15-20 person capacity",
          "Premium AV equipment",
          "Executive seating",
          "Full catering service",
          "Dedicated support staff"
        ]
      }
    ]
  },
  "training-rooms": {
    id: 4,
    title: "Training Rooms",
    subtitle: "& Workshop Spaces",
    heroImage: require("../assets/images/Training_Programs.webp"),
    description: "Spacious training facilities perfect for workshops, seminars, and corporate training programs with all necessary amenities.",
    longDescription: "Our training rooms provide the perfect environment for educational workshops, corporate training, and seminars. With flexible seating arrangements and modern equipment, we can accommodate various training formats.",
    features: [
      "Flexible seating arrangements",
      "Audio-visual equipment included",
      "Catering services available",
      "Parking facilities for attendees",
      "Breakout areas available",
      "High-speed internet for all attendees",
      "Professional lighting and acoustics",
      "Technical support throughout event"
    ],
    gallery: [
      require("../assets/images/Training_Programs.webp"),
      require("../assets/images/gallery_WhyChooseUS_img1.webp"),
      require("../assets/images/gallery_WhyChooseUS_img2.webp"),
      require("../assets/images/gallery_WhyChooseUS_img3.webp")
    ],
    pricing: [
      {
        name: "Workshop Room",
        price: "300",
        period: "day",
        features: [
          "20-30 person capacity",
          "Basic AV equipment",
          "Flexible seating",
          "WiFi for all attendees"
        ]
      },
      {
        name: "Training Hall",
        price: "500",
        period: "day",
        popular: true,
        features: [
          "40-60 person capacity",
          "Full AV setup",
          "Breakout areas",
          "Catering included",
          "Parking spaces"
        ]
      },
      {
        name: "Conference Center",
        price: "800",
        period: "day",
        features: [
          "80-100 person capacity",
          "Premium equipment",
          "Multiple breakout rooms",
          "Full catering service",
          "Event coordination"
        ]
      }
    ]
  }
};

const SingleServicePage = () => {
  const { serviceSlug } = useParams();
  const service = servicesData[serviceSlug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-custom-primary mb-4">Service Not Found</h1>
          <p className="text-gray-600">The service you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-custom-gradient-bg">
      <HeaderLayout />
      <HeroSection
        backgroundImage={service.heroImage}
        title={`${service.title} ${service.subtitle}`}
        description={service.description}
      />
      <ServiceHeroDetails service={service} />
      <WhyChooseVirtualOffice />
      <MapSection />
      <Footer />
    </section>
  );
};

export default SingleServicePage;