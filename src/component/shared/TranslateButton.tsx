import i18 from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { FaGlobe } from "react-icons/fa";

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
  const [isArabic] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const lng = Cookies.get("i18next") || "en";
  useEffect(() => {
    window.document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
    window.document.dir = i18.dir();
  }, [lng]);

  return (
    <div className="relative">
    {/* Earth Icon Button */}
    <div
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      className="flex items-center justify-center  cursor-pointer"
    >
      <FaGlobe className="text-xl  text-gray-500  hover:text-secondary transition-all" />
    </div>

    {/* Dropdown Menu */}
    {isDropdownOpen && (
      <div className="absolute top-[25px] left-0 z-50  bg-white rounded-md shadow-lg border border-gray-300">
        <ul className="flex flex-col">
          <li
            onClick={() => {
              i18.changeLanguage(isArabic ? "ar" : "en");
              setIsDropdownOpen(false);
            }}
            className={"px-8 cursor-pointer hover:bg-gray-100 text-center"}
          >
            EN
          </li>
          <li
            onClick={() => {
              i18.changeLanguage(isArabic ? "en" : "ar");
              setIsDropdownOpen(false);
            }}
            className={"px-8 cursor-pointer hover:bg-gray-100 text-center"}
          >
           AR
          </li>
        </ul>
      </div>
    )}
  </div>
  );
};

export default TranslateButton;
