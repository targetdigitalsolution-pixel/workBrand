import React from "react";
import HeroSection from "../component/sharedComponents/HeroSection";
import privacy from "../assets/images/privacy_police.webp";
import HeaderLayout from "../component/layers/HeaderLayout/HeaderLayout";
import Footer from "../component/sharedComponents/Footer";
import TermsCondition from "../component/sharedComponents/TermsCondition";

// استيراد الجيسون
import content from "../locales/en.json"; // أو أي مكان حاطط فيه النصوص

const Privacypolicypage = () => {
  const data = content.Privacypolicy;

  return (
    <main className=" bg-custom-gradient-bg">
      <HeaderLayout />
      <HeroSection
        backgroundImage={privacy}
        title={data.Privacypolicy}
        description={data.Privacypolicydes}
      />

      <section className=" max-container p-5 lg:p-0">
        <TermsCondition
          number="1"
          title={data.Introduction}
          description={data.Introductiondes}
        />

        {/* second section */}
        <div className="flex flex-col md:flex-row gap-4 mb-3">
          <div className="flex-1">
            <TermsCondition
              number="2"
              title={data.InformationWeCollect}
              description={data.InformationWeCollectdes}
              list={data.InformationWeCollectdeslist}
            />
          </div>
          <div className="flex-1">
            <TermsCondition
              number="3"
              title={data.HowWeUseYourData}
              description={data.HowWeUseYourDatades}
              list={data.HowWeUseYourDatadeslist}
            />
          </div>
        </div>

        {/* third section */}
        <div className="mt-5">
          <TermsCondition
            number="4"
            title={data.HowWeProtectYourData}
            description={data.HowWeProtectYourDatades}
            list={data.HowWeProtectYourDatadeslist}
          />
        </div>

        {/* fourth section */}
        <div className="mt-3">
          <TermsCondition
            number="5"
            title={data.YourRights}
            description={data.YourRightsdes}
            list={data.YourRightslist}
            description1={data.YourRightsdes1}
            description2={data.YourRightsdes2}
          />
        </div>

        {/* cookies & third-party */}
        <div className="flex flex-col md:flex-row gap-5 mb-5">
          <div className="flex-1 ">
            <TermsCondition
              number="6"
              title={data.Cookies}
              description={data.Cookiesdes}
            />
          </div>
          <div className="flex-1">
            <TermsCondition
              number="7"
              title={data["Third-PartyLinks"]}
              description={data["Third-PartyLinksdes"]}
            />
          </div>
        </div>

        {/* children & policy updates */}
        <div className="flex flex-col md:flex-row gap-5 mb-5">
          <div className="flex-1 ">
            <TermsCondition
              number="8"
              title={data.ChildrensPrivacy}
              description={data.ChildrensPrivacydes}
            />
          </div>
          <div className="flex-1">
            <TermsCondition
              number="9"
              title={data.PolicyUpdates}
              description={data.PolicyUpdatesdes}
            />
          </div>
        </div>

        {/* last updated */}
        <div className="mt-3">
          <TermsCondition
            number=""
            title={data.LastUpdatedJuly2025}
            description={data.LastUpdatedJuly2025des}
            description1={data.LastUpdatedJuly2025des1}
          />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Privacypolicypage;
