import i18 from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

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

const TranslateButton = () => {
  const [isArabic, setIsArabic] = useState(false);
  const lng = Cookies.get("i18next") || "en";
  useEffect(() => {
    window.document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
    window.document.dir = i18.dir();
  }, [lng]);
  const toggleLanguage = () => {
    setIsArabic(!isArabic);
  };

  return (
    <div
      onClick={() => {
        toggleLanguage();
        i18.changeLanguage(isArabic ? "en" : "ar");
      }}
      className={`w-[50px] h-[10px]  ${
        isArabic ? "bg-secondary" : "bg-gray-200"
      }  flex items-center rounded-[45%]  cursor-pointer `}
    >
      <div className="w-[25px] h-[23px] bg-white text-[12px] border-[1px] border-gray-400 text-gray-800 p-1 rounded-[50%] flex items-center justify-center">
        {isArabic ? "EN" : "AR"}
      </div>
    </div>
  );
};

export default TranslateButton;
