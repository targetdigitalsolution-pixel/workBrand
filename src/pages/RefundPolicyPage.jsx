import React from "react";
import HeroSection from "../component/sharedComponents/HeroSection";
import Refund from "../assets/images/Refund_Policy.webp";
import HeaderLayout from "../component/layers/HeaderLayout/HeaderLayout";
import Footer from "../component/sharedComponents/Footer";
import TermsCondition from "../component/sharedComponents/TermsCondition";
import content from "../locales/en.json";

const RefundPolicyPage = () => {
  const refund = content.Refundpolice;

  return (
    <main className="bg-custom-gradient-bg">
      <HeaderLayout />

      <HeroSection
        backgroundImage={Refund}
        title={refund.RefundPolicy}
        description={refund.RefundPolicydes}
      />

      <section className="max-container p-5 lg:p-0">
        {/* First section */}
        <TermsCondition
          number="1"
          title={refund.GeneralPolicy}
          description={refund.GeneralPolicydes}
        />

        {/* Second section */}
        <div className="flex flex-col md:flex-row gap-5 mb-5">
          <div className="flex-1">
            <TermsCondition
              number="2"
              title={refund.BeforeProjectKickoff}
              description={refund.BeforeProjectKickoffdes}
            />
          </div>
          <div className="flex-1">
            <TermsCondition
              number="3"
              title={refund.AfterProjectStart}
              description={refund.AfterProjectStartdes}
            />
          </div>
        </div>

        {/* Third section */}
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex-1">
            <TermsCondition
              number="4"
              title={refund.Exceptions}
              description={refund.Exceptionsdes}
              list={refund.Exceptionslist}
              description1={refund.Exceptionsdes2}
            />
          </div>
          <div className="flex-1">
            <TermsCondition
              number="5"
              title={refund.ClientResponsibilities}
              description={refund.ClientResponsibilitiesdes}
              list={refund.ClientResponsibilitieslist}
            />
          </div>
        </div>

        {/* Fourth section */}
        <div className="mt-5">
          <TermsCondition
            number="6"
            title={refund[" HowtoRequestaRefund"]}
            description={refund.description}
            description1={refund.description1}
            description2={refund.description2}
          />
        </div>

        {/* Fifth section */}
        <div className="flex flex-col md:flex-row gap-5 ">
          <div className="flex-1">
            <TermsCondition
              number="7"
              title={refund.FinalDecision}
              description={refund.FinalDecisiondes}
            />
          </div>
          <div className="flex-1">
            <TermsCondition
              number="8"
              title={refund.PolicyUpdates}
              description={refund.PolicyUpdatesdes}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default RefundPolicyPage;
