import React from "react";
import HeroSection from "../component/sharedComponents/HeroSection";
import Faqss from "../assets/images/Faqs.webp";
import HeaderLayout from "../component/layers/HeaderLayout/HeaderLayout";
import Footer from "../component/sharedComponents/Footer";
import TermsCondition from "../component/sharedComponents/TermsCondition";

import faqsData from "../locales/en.json";

const FaqsPage = () => {
  return (
    <main className="bg-custom-gradient-bg">
      <HeaderLayout />

      <HeroSection
        backgroundImage={Faqss}
        title={faqsData.Faqs.FAQs}
        description={faqsData.Faqs.FAQsdes}
      />

      <section className="max-container p-5 lg:p-0">
        {faqsData.Faqs.questions.map((item, index) => (
          <div key={index} className="mt-3">
            <TermsCondition title={item.title} description={item.description} />
          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
};

export default FaqsPage;
