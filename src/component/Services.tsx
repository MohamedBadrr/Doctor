import { useTranslation } from "react-i18next";
import image1 from "../assets/service1.png";
import image2 from "../assets/service2.png";
import image3 from "../assets/service3.png";
import image4 from "../assets/service4.png";
import image5 from "../assets/service5.png";
import image6 from "../assets/service6.png";
import image7 from "../assets/service7.png";
import image8 from "../assets/service8.png";

const Services = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];
  const { t } = useTranslation();
  return (
    <div className="">
      {/* Title */}
      <div className="flex flex-col items-center justify-center pt-[120px] gap-[20px] ">
        <h1 className="text-[40px] font-[700] leading-[50px] font-Quicksand">
          {t("services.main")}
        </h1>
        <div className="w-[48px] h-[4px] bg-secondary rounded-[4px]"></div>
        <p className="text-[#767676] text-center w-[85%] md:w-[100%] font-Quicksand text-[20px] leading-[32px]">
        {t("services.desc")}
        </p>
      </div>
      {/* services */}
      <div className="pt-[70px] pb-[120px]">
        <div className="container w-full md:px-[50px] lg:px-[170px] h-full flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-[20px] ">
            {/* one service */}
            {images.map((image, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-[30px] p-[15px] group"
              >
                <img src={image} alt="service" className="w-[78px] h-[78px] transform transition-transform duration-300 group-hover:-translate-y-[15px]  " />
                <h1 className="text-[19px] font-[700]  leading-[31px]   text-[#2d3134] font-Quicksand">
                {t("services.name")}
                </h1>
                <p className="text-center text-[15px] text-[#716f6f] leading-[26px] ">
                {t("services.text")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
