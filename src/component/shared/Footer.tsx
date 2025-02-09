
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
  const {t} = useTranslation();
  return (
    <>
      <footer className="bg-[#202223] text-gray-300  min-h-[400px] flex flex-col justify-center items-center px-[35px] pt-[71px] pb-[91px] md:px-0 md:pt-[71px] md:pb-[91px]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-y-[15px] px-6  w-full md:px-[50px] lg:px-[170px]">
          {/* About Us Section */}
          <div>
            <h3 className="text-[19px] font-[700] font-Quicksand  mb-[25px] text-white ">
              {t("footer.AboutUs")}
            </h3>
            <p className="text-[14px] text-[#CFCFCF] w-[70%] md:w-full">
            {t("footer.desc")}
            </p>
            <h4 className="text-[19px] font-[700] font-Quicksand  mt-[15px] mb-[25px] text-white">
            {t("footer.start")}
            </h4>
            <div className="flex space-x-4 mt-3">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-secondary duration-150 transition-all rounded text-white"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.facebook.com/Dr.Mohamed.ElHodiby"
                className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-secondary duration-150 transition-all rounded text-white"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-secondary duration-150 transition-all rounded text-white"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-[19px] font-[700] font-Quicksand  mb-[25px] text-white">
            {t("footer.QuickLinks")}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[#CFCFCF] min-h-[20px] flex hover:text-secondary text-[14px] duration-200 group items-center "
                >
                  <FaArrowRight className="mr-[5px] text-[14px] hidden group-hover:block duration-150" />
                  {t("footer.home")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#CFCFCF] min-h-[20px] flex hover:text-secondary text-[14px] duration-200 group items-center "
                >
                  <FaArrowRight className="mr-[5px] text-[14px] hidden group-hover:block duration-150" />
                  {t("footer.aboutus")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#CFCFCF] min-h-[20px] flex hover:text-secondary text-[14px] duration-200 group items-center "
                >
                  <FaArrowRight className="mr-[5px] text-[14px] hidden group-hover:block duration-150" />
                  {t("footer.services")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#CFCFCF] min-h-[20px] flex hover:text-secondary text-[14px] duration-200 group items-center "
                >
                  <FaArrowRight className="mr-[5px] text-[14px] hidden group-hover:block duration-150" />
                  {t("footer.faqs")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#CFCFCF] min-h-[20px] flex hover:text-secondary text-[14px] duration-200 group items-center "
                >
                  <FaArrowRight className="mr-[5px] text-[14px] hidden group-hover:block duration-150" />
                  {t("footer.contactus")}
                </a>
              </li>
            </ul>
          </div>

          {/* Recent Posts Section */}
          <div>
            <h3 className="text-[19px] font-[700] font-Quicksand  mb-[25px] text-white">
            {t("footer.RecentPosts")}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[#CFCFCF] min-h-[20px] flex hover:text-secondary text-[14px] duration-200 group items-center "
                >
                  <FaArrowRight className="mr-[5px] text-[14px] hidden group-hover:block duration-150" />
                  {t("footer.Anti")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#CFCFCF] min-h-[20px] flex hover:text-secondary text-[14px] duration-200 group items-center "
                >
                  <FaArrowRight className="mr-[5px] text-[14px] hidden group-hover:block duration-150" />
                  {t("footer.best")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#CFCFCF] min-h-[20px] flex hover:text-secondary text-[14px] duration-200 group items-center "
                >
                  <FaArrowRight className="mr-[5px] text-[14px] hidden group-hover:block duration-150" />
                  {t("footer.Coronary")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#CFCFCF] min-h-[20px] flex hover:text-secondary text-[14px] duration-200 group items-center "
                >
                  <FaArrowRight className="mr-[5px] text-[14px] hidden group-hover:block duration-150" />
                  {t("footer.Elderly")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#CFCFCF] min-h-[20px] flex hover:text-secondary text-[14px] duration-200 group items-center "
                >
                  <FaArrowRight className="mr-[5px] text-[14px] hidden group-hover:block duration-150" />
                  {t("footer.Eye")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#CFCFCF] min-h-[20px] flex hover:text-secondary text-[14px] duration-200 group items-center "
                >
                  <FaArrowRight className="mr-[5px] text-[14px] hidden group-hover:block duration-150" />
                  {t("footer.Great")}
                </a>
              </li>
            </ul>
          </div>

          {/* Location Section */}
          <div>
            <h3 className="text-[19px] font-[700] font-Quicksand mb-[25px] text-white">
            {t("footer.location")}
            </h3>
            <p className="mb-4 text-[#CFCFCF] text-[14px] w-[70%] md:w-full">
            {t("footer.locationDetails")}
            </p>
            <p>
              <strong className="text-[14px]">{t("footer.contact")}</strong>
              <p>
                <a
                  href="https://wa.me/080025379901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#CFCFCF] text-[14px] hover:text-secondary duration-150 transition-all"
                >
                  +02010 29229993
                </a>
              </p>
            </p>
            <p className="text-[14px] mt-[20px]">
              <strong>{t("footer.email")}</strong>
              <p>
                <a
                  href="mailto:medipoint@example.com"
                  className="text-[#CFCFCF] text-[14px] hover:text-secondary duration-150 transition-all"
                >
                  El-Hodiby@example.com
                </a>
              </p>
            </p>
          </div>
        </div>
      </footer>
      <div className="bg-[#1A1A1A] text-[#CFCFCF] text-[14px]  py-4 text-center h-[98px] md:h-[72px] flex items-center justify-center">
        <p className="text-[#BAB7B7] font-[700] text-[14px]">
          &copy; 2025 El-Hodiby, {t("footer.allRights")}

        </p>
      </div>
    </>
  );
};

export default Footer;
