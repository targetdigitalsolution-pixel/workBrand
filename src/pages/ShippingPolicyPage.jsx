import React from "react";
import HeroSection from "../component/sharedComponents/HeroSection";
import shipping from "../assets/images/shiiping.webp";
import HeaderLayout from "../component/layers/HeaderLayout/HeaderLayout";
import Footer from "../component/sharedComponents/Footer";
import TermsCondition from "../component/sharedComponents/TermsCondition";

import data from "../locales/en.json";

const Privacypolicypage = () => {
  const shippingData = data.ShippingPolice;

  return (
    <main className=" bg-custom-gradient-bg">
      <HeaderLayout />
      <HeroSection
        backgroundImage={shipping}
        title={shippingData.ShippingPolicy}
        description={shippingData.ShippingPolicydes}
      />

      <section className=" max-container p-5 lg:p-0">
        <TermsCondition
          number="1"
          title={shippingData.OrderProcessingTime}
          list={shippingData.OrderProcessingTimelist}
        />

        <TermsCondition
          number="2"
          title={shippingData["ShippingAreas&Timeframes"]}
          description={shippingData["ShippingAreas&Timeframesdes"]}
          list={shippingData["ShippingAreas&Timeframeslist"]}
          description3={shippingData["ShippingAreas&Timeframesdes3"]}
        />

        <TermsCondition
          number="3"
          title={shippingData.ShippingCosts}
          list={shippingData.ShippingCostslist}
        />

        <TermsCondition
          number="4"
          title={shippingData.TrackingYourOrder}
          description={shippingData.TrackingYourOrderdes}
        />

        <TermsCondition
          number="5"
          title={shippingData.DeliveryProblems}
          description={shippingData.DeliveryProblemsdes}
          description1={shippingData.DeliveryProblemsdes1}
          description3={shippingData.DeliveryProblemsdes2}
        />

        <TermsCondition
          number="6"
          title={shippingData.DamagedorLostPackages}
          list={shippingData.DamagedorLostPackageslist}
        />

        <TermsCondition
          number="7"
          title={shippingData.SpecialShippingRequests}
          description={shippingData.SpecialShippingRequestsdes}
        />

        <TermsCondition
          number="8"
          title={shippingData.PolicyUpdates}
          description={shippingData.PolicyUpdatesdes}
        />


        <TermsCondition
          number=""
          title={shippingData.LastupdatedJuly2025}
          description={shippingData.LastupdatedJuly2025des}
        />
      </section>
      <Footer />
    </main>
  );
};

export default Privacypolicypage;
