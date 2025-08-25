import React from "react";
import TermsCondition from "../component/sharedComponents/TermsCondition";
import HeroSection from "../component/sharedComponents/HeroSection";
import Terms from "../assets/images/Terms.webp";
import HeaderLayout from "../component/layers/HeaderLayout/HeaderLayout";
import Footer from "../component/sharedComponents/Footer";
const TermsConditionPage = () => {
  return (
    <main className=" bg-custom-gradient-bg">
      <HeaderLayout />
      <HeroSection
        backgroundImage={Terms}
        title="Terms and condition"
        description="Welcome to WorkBrand! We are committed to providing a comprehensive and advanced work environment that combines office space solutions, training, consulting, digital services, marketing, and e-commerce. Please read the following Terms and Conditions carefully before using any of our services to ensure a safe and satisfactory experience for all."
      />
      <section className="p-5">
        <TermsCondition
          number="1"
          title=" Definitions"
          list={[
            "Platform: Refers to WorkBrand in all its digital and physical branches.",
            "User: Any natural or legal person who engages with or benefits from our services.",
            "Services: All activities and products offered on the platform (workspaces, media, consulting, e-store, training, artificial intelligence, etc.).",
          ]}
        />
        <TermsCondition
          number="2"
          title="Acceptance of Terms"
          description="By using WorkBrand’s services, registering, or booking any of our digital or physical services, the user is deemed to have accepted and agreed to all terms of this agreement."
        />
        <TermsCondition
          number="3"
          title="Use of the Platform and Services"
          list={[
            "Users must be 18 years or older to book meeting or training rooms.",
            "The platform is committed to protecting user data and will not share it with third parties except for official authorities or with explicit user consent.",
            "Misuse of services or causing harm to WorkBrand or its users in any way is strictly prohibited.",
            "Booking and service applications are subject to internal regulations, and the platform reserves the right to accept or reject requests in the best interest of operations.",
          ]}
        />
        <TermsCondition
          number="4"
          title=" Booking, Payment, and Cancellation"
          list={[
            "Bookings are available via the website and are considered confirmed upon electronic payment or bank transfer.",
            "Payments are non-refundable once confirmed, except in cases approved by the platform or due to errors on our part.",
            "Users may modify their bookings according to each service’s change policies.",
          ]}
        />
        <TermsCondition
          number="5"
          title=" Commitments and Conduct"
          list={[
            "Users must not cause any material or moral damage to work premises, equipment, or digital services.",
            "Users bear the cost of any damages caused by them or their guests.",
            "Any activities that are illegal or violate public decency standards are strictly prohibited within all WorkBrand services.",
          ]}
        />
        <TermsCondition
          number="6"
          title=" Intellectual Property and Privacy"
          list={[
            "All trademarks, logos, text, and visual content are the exclusive property of the platform and may not be used or reproduced without prior written consent.",
            "The platform is committed to protecting user data according to the highest standards and only collects, stores, or processes information for service improvement or order fulfillment.",
          ]}
        />
        {/* <TermsCondition
          number="7"
          title=" Specific Conditions for Support Services"
          description="Workbrand will not be held liable for any direct, indirect, or consequential loss or damage resulting from the use of our services or any delay/failure caused by factors beyond our control."
        /> */}
        <div className="h-full max-container mb-6 drop-shadow-sm rounded-lg border bg-white border-gray-200 p-6">
          {/* العنوان الرئيسي */}
          <h3 className="text-xl font-bold text-black mb-6">
            7. Specific Conditions For Support Services
          </h3>

          {/* الأقسام الفرعية */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* 7.1 */}
            <div>
              <h4 className="text-base font-semibold text-black mb-3">
                7.1 Office And Virtual Spaces :
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm">
                <li>
                  Spaces May Only Be Used For Legitimate Office And Professional
                  Purposes.
                </li>
                <li>
                  Use Of The Space For Any Commercial Activity That Violates
                  Egyptian Law Is Prohibited.
                </li>
                <li>
                  Long Absences Without Prior Notice May Result In Cancellation
                  Of The Booking.
                </li>
              </ul>
            </div>

            {/* 7.2 */}
            <div>
              <h4 className="text-base font-semibold text-black mb-3">
                7.2 Consulting And Training Programs :
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm">
                <li>
                  Users Must Adhere To Session Or Program Schedules. If Delayed
                  By More Than 15 Minutes, The Platform Has The Right To Cancel
                  The Appointment Without Refund.
                </li>
                <li>
                  Recording Or Filming Any Training Session Or Consultation
                  Without Prior Written Permission Is Not Allowed.
                </li>
              </ul>
            </div>

            {/* 7.3 */}
            <div>
              <h4 className="text-base font-semibold text-black mb-3">
                7.3 Digital Services (AI, Websites, E-Stores):
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm">
                <li>
                  Users Are Responsible For The Accuracy And Validity Of The
                  Data They Provide During Website Development Or Marketing
                  Campaigns.
                </li>
                <li>
                  The Platform Is Committed Not To Sell Unauthorized Products Or
                  Services.
                </li>
              </ul>
            </div>

            {/* 7.4 */}
            <div>
              <h4 className="text-base font-semibold text-black mb-3">
                7.4 Media And Marketing Services:
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm">
                <li>
                  Users Must Comply With Intellectual Property Rights And May
                  Not Submit Any Material Or Ideas That Infringe On Others’
                  Rights.
                </li>
                <li>
                  The Platform Reserves The Right To Reject Any Inappropriate Or
                  Non-Compliant Content.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <TermsCondition
          number="8"
          title="Limitation of Liability"
          list={[
            "The platform strives to provide services at the highest quality but is not responsible for outages beyond its control (such as internet disruption or emergencies).",
            "Users are responsible for all activities conducted through their accounts or bookings.",
            "The platform reserves the right to make changes to its policies or service terms without prior notice",
          ]}
        />
        <TermsCondition
          number="9"
          title="Termination"
          list={[
            "The platform reserves the right to suspend or terminate any account or booking immediately in case of violations.",
            "Users may request termination of service, provided they comply with the specified cancellation and refund terms.",
          ]}
        />
        <TermsCondition
          number="10"
          title="Dispute Resolution and Governing Law"
          list={[
            "These terms are governed by the laws of the Arab Republic of Egypt.",
            "Any disputes will be resolved amicably, and if unresolved, Egyptian courts shall have jurisdiction.",
          ]}
        />
        <TermsCondition
          number="11"
          title="Contact and Support"
          description="For inquiries or support, please contact us through our official channels, email, or phone numbers listed on the website."
        />
      </section>
      <Footer />
    </main>
  );
};

export default TermsConditionPage;
