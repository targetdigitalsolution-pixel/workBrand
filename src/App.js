import * as React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import OTPVerification from "./pages/OTPVerification.jsx";
import PasswordSuccessfullPage from "./pages/PasswordSuccessfullPage.jsx";
import StartedNowPage from "./pages/StartedNowPage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import Offices from "./component/Office/Offices.jsx";
import MohandessinBranchPage from "./pages/MohandessinBranchPage.jsx";
import NasrCityBranchPage from "./pages/NasrCityBranchPage.jsx";
import TermsConditionPage from "./pages/TermsConditionPage.jsx";
import RefundPolicyPage from "./pages/RefundPolicyPage.jsx";
import Privacypolicy from "./pages/Privacypolicypage.jsx";
import ShippingPolicy from "./pages/ShippingPolicyPage.jsx";
import FaqsPage from "./pages/FaqsPage.jsx";
import ContactUsPage from "./pages/Contact-UsPage.jsx";
import CareersPage from "./pages/CareersPage.jsx";
import LocationPage from "./pages/LocationPage.jsx";

import "../src/style.css";
import ComingSoonPage from "./pages/CamingSoonPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ForgetPasswordPage from "./pages/ForgetPasswordPage.jsx";
import ResetPasswordpage from "./pages/ResetPasswordpage.jsx";
const ResetScroll = ({ children }) => {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return children;
};

const App = () => {
  return (
    <div className="App">
      <ResetScroll>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Authentication */}
          <Route path="login" element={<LoginPage />} />
          <Route path="forget-password" element={<ForgetPasswordPage />} />
          <Route path="otp" element={<OTPVerification />} />
          <Route path="reset-password" element={<ResetPasswordpage />} />
          {/* <Route
            path="password-sucessfull"
            element={<PasswordSuccessfullPage />}
          /> */}
          {/* <Route path="start-now" element={<StartedNowPage />} /> */}
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="offices" element={<Offices />} />
          <Route
            path="mohandessin-branch"
            element={<MohandessinBranchPage />}
          />
          <Route path="nasr-city-branch" element={<NasrCityBranchPage />} />
          <Route path="terms-condition" element={<TermsConditionPage />} />
          <Route path="refund-police" element={<RefundPolicyPage />} />
          <Route path="privacy-police" element={<Privacypolicy />} />
          <Route path="shipping-police" element={<ShippingPolicy />} />
          <Route path="faqs" element={<FaqsPage />} />
          <Route path="contact-us" element={<ContactUsPage />} />
          <Route path="career" element={<CareersPage />} />
          <Route path="location" element={<LocationPage />} />
          <Route path="coming-soon" element={<ComingSoonPage />} />
        </Routes>
      </ResetScroll>
    </div>
  );
};

export default App;
