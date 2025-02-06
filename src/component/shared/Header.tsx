import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowForward } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
import TranslateButton from "./TranslateButton";


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("HOME");
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("HOME");
      if (homeSection) {
        const homeBottom = homeSection.offsetHeight;
        setIsScrolled(window.scrollY > homeBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="shadow-sm">
      <div
        className={`fixed top-0 left-0 w-full z-10 h-[100px] md:h-[70px] transition-all duration-300 ${
          isScrolled ? "bg-white" : "bg-white md:bg-opacity-40"
        }`}
      >
        <div className="flex justify-between max-w-full w-[1100px] mx-auto items-center h-full px-[35px]">
          {/* Logo */}
          <div className="flex items-center">
            <span
              className={`text-2xl font-bold ${
                isScrolled ? "text-[#716f6f]" : "text-gray-400 md:text-white"
              }`}
            >
              {t("header.logo")}
            </span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex justify-center font-semibold">
            {["HOME", "SERVICES", "ABOUTUS", "FAQS", "CONTACTUS"].map(
              (section) => (
                <li key={section} className="mx-4">
                  <a
                    onClick={() => handleScroll(section)}
                    className={`font-[600] text-[16px] transition-all duration-150 md:pb-[20px] ${
                      activeSection === section
                        ? "text-secondary border-b-[3px] border-orange-500"
                        : isScrolled
                        ? "text-[#716f6f] border-transparent"
                        : "text-white border-transparent"
                    } hover:border-orange-500`}
                    style={{ cursor: "pointer" }}
                  >
                    {t(`header.${section.toLowerCase()}`)}
                  </a>
                </li>
              )
            )}
            <li className="flex items-center justify-center mx-4"><TranslateButton /></li>
          </ul>

     
          {/* Mobile Hamburger Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <IoMenuOutline size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[70px] left-0 w-full bg-white overflow-hidden transition-[max-height] duration-500 ease-in-out z-20 ${
          isMobileMenuOpen ? "max-h-auto" : "max-h-0"
        }`}
      >
        <ul className="space-y-1 text-gray-700 pt-3 px-[35px] pb-5">
          {["HOME", "ABOUTUS", "SERVICES", "FAQS", "CONTACTUS"].map(
            (section) => (
              <li key={section}>
                <a
                  onClick={() => {
                    handleScroll(section);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`py-[9px] text-[14px] leading-[18px] ${
                    activeSection === section
                      ? "text-orange-500"
                      : "text-[#8d8d8d]"
                  } hover:text-blue-500 transition-all duration-75 flex justify-between items-center`}
                  style={{ cursor: "pointer" }}
                >
                  {t(`header.${section.toLowerCase()}`)}
                  <IoIosArrowForward className="text-[#4b4a4a] font-bold" />
                </a>
              </li>
            )
          )}
            <li className="flex items-center justify-center mx-4 my-[10px] md:my-[0px]"><TranslateButton /></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
