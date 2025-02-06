import { useTranslation } from "react-i18next";
import image from "../assets/DrMohamed 1.jpg";
import image2 from "../assets/DrMohamed 2.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";


const ContactUs = () => {
  const {t} = useTranslation();
  return (
    <div className="">
      {/* Title */}
      <div className="flex flex-col items-center justify-center  pt-[20px] gap-[20px] ">
        <h1 className="text-[40px] font-[700] leading-[50px] font-Quicksand">
          {t("contactus.main")}
        </h1>
        <div className="w-[48px] h-[4px] bg-secondary rounded-[4px]"></div>
        <p className="text-[#767676] text-center  font-Quicksand text-[20px] leading-[32px]">
        {t("contactus.desc")}
        </p>
      </div>
      <div className="pt-[70px] pb-[120px]">
        <div className="container w-full px-[35px] md:px-[50px] lg:px-[170px] h-full flex items-center justify-center">
          <div className="flex flex-col md:flex-row gap-[50px] ">
            <div className="flex items-center justify-center">
            <div className="flex flex-col gap-[30px]">
            <img
                src={image}
                alt="image-section"
                className="w-[600px] h-[400px] md:h-[380px] rounded-md"
              />
               <img
                src={image2}
                alt="image-section"
                className="w-[600px] h-[400px] md:h-[380px] rounded-md"
              />
            </div>
            </div>

            <div className="">
              <h1 className="text-center md:text-start text-[25px] md:text-[35px] font-bold font-Quicksand text-[#268ad6]">
              {t("contactus.title")}
              </h1>
              <form action="" className="mt-[20px] mb-[40px]">
                <div>
                  <div className="block md:flex items-center justify-center gap-[20px] mb-[30px]">
                    <input
                      type="text"
                      placeholder= {t("contactus.userName")}
                      className="font-Quicksand w-full mb-[30px] md:mb-[0px] py-[10px] px-[20px]  focus:border-[#268ad6] border-[1px] border-gray-300 bg-[#f0f4f6] outline-none rounded-[5px]"
                    />
                    <input
                      type="email"
                      placeholder= {t("contactus.email")}
                      className="font-Quicksand w-full py-[10px] px-[20px] focus:border-[#268ad6]  border-[1px] border-gray-300 bg-[#f0f4f6] outline-none rounded-[5px]"
                    />
                  </div>

                  <div className="block md:flex items-center justify-center gap-[20px] mb-[30px]">
                    <input
                      type="text"
                      placeholder= {t("contactus.subject")}
                      className="font-Quicksand w-full py-[10px] px-[20px] mb-[30px] md:mb-[0px] border-[1px] focus:border-[#268ad6]  border-gray-300 bg-[#f0f4f6] outline-none rounded-[5px]"
                    />
                    <input
                      type="number"
                      placeholder= {t("contactus.number")}
                      className="font-Quicksand w-full py-[10px] px-[20px] border-[1px] focus:border-[#268ad6]  border-gray-300 bg-[#f0f4f6] outline-none rounded-[5px]"
                    />
                  </div>
                  <textarea
                    rows={6}
                    placeholder= {t("contactus.send")}
                    className="mb-[30px] focus:border-[#268ad6]  font-Quicksand w-full py-[10px] px-[20px] border-[1px] border-gray-300 bg-[#f0f4f6] outline-none rounded-[5px]"
                  />
                  <button className="font-Quicksand md:text-[15px] font-[700] leading-[15px] bg-[#268AD6] text-white py-[15px] px-[35px] md:py-[19px] md:px-[46px] border-[1px] border-[#268AD6] rounded-[4px] hover:bg-[#5da0d3] hover:border-[#268AD6] transition-all duration-300">
                  {t("contactus.button")}
                  </button>
                </div>
              </form>

              <div>
              <h1 className="text-center md:text-start text-[25px] md:text-[35px] font-bold font-Quicksand text-[#268ad6]">
              {t("contactus.infoContact")}
              </h1 >

               <div className=" flex  items-start  justify-start gap-[25px] my-[20px]">
                <FaLocationDot className="mt-[5px] text-gray-500 text-[22px]"/> 
                <h1 className="text-secondary text-[20px]"> <span className="font-bold">{t("contactus.locationKeyword")}   </span>
                <span className="text-gray-700 font-[500]"> {t("contactus.location")}</span>
                </h1>
               </div>

                <div className=" flex  items-start  justify-start gap-[25px] my-[20px]">
                <FaPhoneAlt className="mt-[5px] text-gray-500 text-[20px]"/> 
                <h1 className="text-secondary text-[20px]"> <span className="font-bold"> {t("contactus.phoneKeyword")} </span>
                <span className="text-gray-700 font-[500]"> +02010 29229993 </span>
                </h1>
               </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
