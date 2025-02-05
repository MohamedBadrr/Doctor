import i18 from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import Cookies from "js-cookie";
import { useEffect } from "react";
import Header from "./component/shared/Header";
import Home from "./component/Home";
import FAQs from "./component/FAQs";
import Footer from "./component/shared/Footer";
import Services from "./component/Services";
import Number from "./component/Number";
import AboutUs from "./component/AboutUs";
import ContactUs from "./component/ContactUs";

i18
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection: {
      order: ["cookie", "htmlTag", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "locales/{{lng}}/translation.json",
    },
  });

export default function App() {
  const lng = Cookies.get("i18next") || "en";
  useEffect(() => {
    window.document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
    window.document.dir = i18.dir();
  }, [lng]);
  return (
    <>
      <Header />
      <div id="HOME">
        <Home />
      </div>
      <div id="SERVICES">
        <Services />
      </div>
    
      <div id="ABOUTUS">
        <AboutUs />
      </div>
      <div id="NUMBER">
        <Number />
      </div>
      <div id="FAQS">
        <FAQs />
      </div>
      <div id="CONTACTUS">
        <ContactUs />
      </div>

      <Footer />
      {/* <button onClick={() => i18.changeLanguage("en")}>en</button>
      <button onClick={() => i18.changeLanguage("ar")}>ar</button> */}
    </>
  );
}
