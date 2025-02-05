import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#202223] text-gray-300  min-h-[400px] flex flex-col justify-center items-center px-[35px] pt-[71px] pb-[91px] md:px-0 md:pt-[71px] md:pb-[91px]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-y-[15px] px-6  w-full md:px-[50px] lg:px-[170px]">
          {/* About Us Section */}
          <div>
            <h3 className="text-[19px] font-[700] font-Quicksand  mb-[25px] text-white ">
              About Us
            </h3>
            <p className="text-[14px] text-[#CFCFCF] w-[70%] md:w-full">
              Duis in lectus cursus liberoe orci ace consectetur accumsan et
              tortorom. Maecenas non lobortis tellus.
            </p>
            <h4 className="text-[19px] font-[700] font-Quicksand  mt-[15px] mb-[25px] text-white">
              Start Follow
            </h4>
            <div className="flex space-x-4 mt-3">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-secondary duration-150 transition-all rounded text-white"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
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
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[#CFCFCF] min-h-[20px] flex hover:text-secondary text-[14px] duration-200 group items-center "
                >
                  <FaArrowRight className="mr-[5px] text-[14px] hidden group-hover:block duration-150" />
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#CFCFCF] min-h-[20px] flex hover:text-secondary text-[14px] duration-200 group items-center "
                >
                  <FaArrowRight className="mr-[5px] text-[14px] hidden group-hover:block duration-150" />
                  AboutUs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#CFCFCF] min-h-[20px] flex hover:text-secondary text-[14px] duration-200 group items-center "
                >
                  <FaArrowRight className="mr-[5px] text-[14px] hidden group-hover:block duration-150" />
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#CFCFCF] min-h-[20px] flex hover:text-secondary text-[14px] duration-200 group items-center "
                >
                  <FaArrowRight className="mr-[5px] text-[14px] hidden group-hover:block duration-150" />
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#CFCFCF] min-h-[20px] flex hover:text-secondary text-[14px] duration-200 group items-center "
                >
                  <FaArrowRight className="mr-[5px] text-[14px] hidden group-hover:block duration-150" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Recent Posts Section */}
          <div>
            <h3 className="text-[19px] font-[700] font-Quicksand  mb-[25px] text-white">
              Recent Posts
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[#CFCFCF] min-h-[20px] flex hover:text-secondary text-[14px] duration-200 group items-center "
                >
                  <FaArrowRight className="mr-[5px] text-[14px] hidden group-hover:block duration-150" />
                  Anti-Age Hints
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#CFCFCF] min-h-[20px] flex hover:text-secondary text-[14px] duration-200 group items-center "
                >
                  <FaArrowRight className="mr-[5px] text-[14px] hidden group-hover:block duration-150" />
                  Best Vets
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#CFCFCF] min-h-[20px] flex hover:text-secondary text-[14px] duration-200 group items-center "
                >
                  <FaArrowRight className="mr-[5px] text-[14px] hidden group-hover:block duration-150" />
                  Coronary Exams
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#CFCFCF] min-h-[20px] flex hover:text-secondary text-[14px] duration-200 group items-center "
                >
                  <FaArrowRight className="mr-[5px] text-[14px] hidden group-hover:block duration-150" />
                  Elderly Care
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#CFCFCF] min-h-[20px] flex hover:text-secondary text-[14px] duration-200 group items-center "
                >
                  <FaArrowRight className="mr-[5px] text-[14px] hidden group-hover:block duration-150" />
                  Eye Exams
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#CFCFCF] min-h-[20px] flex hover:text-secondary text-[14px] duration-200 group items-center "
                >
                  <FaArrowRight className="mr-[5px] text-[14px] hidden group-hover:block duration-150" />
                  Great Facials
                </a>
              </li>
            </ul>
          </div>

          {/* Location Section */}
          <div>
            <h3 className="text-[19px] font-[700] font-Quicksand mb-[25px] text-white">
              Location
            </h3>
            <p className="mb-4 text-[#CFCFCF] text-[14px] w-[70%] md:w-full">
              Duis in lectus cursus liberoe orci ace consectetur accumsan et
              tortorom. Maecenas non lobortis tellus.
            </p>
            <p>
              <strong className="text-[14px]">Contact:</strong>
              <p>
                <a
                  href="https://wa.me/080025379901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#CFCFCF] text-[14px] hover:text-secondary duration-150 transition-all"
                >
                  +0800 2537 9901
                </a>
              </p>
            </p>
            <p className="text-[14px] mt-[20px]">
              <strong>Email:</strong>
              <p>
                <a
                  href="mailto:medipoint@example.com"
                  className="text-[#CFCFCF] text-[14px] hover:text-secondary duration-150 transition-all"
                >
                  medipoint@example.com
                </a>
              </p>
            </p>
          </div>
        </div>
      </footer>
      <div className="bg-[#1A1A1A] text-[#CFCFCF] text-[14px]  py-4 text-center h-[98px] md:h-[72px] flex items-center justify-center">
        <p className="text-[#BAB7B7] font-[700] text-[14px]">
          &copy; 2025 Medipoint. All rights reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
