import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="bg-[url('assets/test2.jpg')] bg-cover md:bg-[length:100%_100%] bg-no-repeat bg-opacity-20 flex items-center min-h-[100vh] pt-[100px] mt-[70px] md:mt-[0px] md:py-[70px]">
        <div className="container max-w-fuu w-full md:w-[70%] h-full">
          <div className="flex flex-col gap-8 md:pt-[40px] justify-center  md:justify-start h-full md:items-start">
            <span className="text-white text-[19px] md:text-[21px] leading-[31px] font-[500] font-Quicksand">
              {t("home.intro")}
            </span>
            <div className="">
            <p className="text-[36px] md:text-[70px] flex flex-col flex-wrap font-[700] md:leading-[100px] text-white font-Quicksand">
              <p>{t("home.main")}</p> <p>{t("home.main2")}</p>
              </p>
            </div>
            <div className="w-[95%] md:w-[618px]">
              <p className="text-[17px] md:text-[22px] leading-[32px] text-white">
                {t("home.text")}
              </p>
            </div>
            <div className="flex gap-4 ">
              <button className="font-Quicksand md:text-[15px] font-[700] leading-[15px] bg-[#FF5F40] text-white py-[15px] px-[35px] md:py-[19px] md:px-[46px] border-[1px] border-[#FF5F40] rounded-[4px] hover:bg-[#f67a61] hover:border-[#f67a61] transition-all duration-300">
                {" "}
                <a href="#SERVICES">{t("home.button1")}</a>
              </button>
              <button className="font-Quicksand md:text-[15px] font-[700] leading-[15px] bg-white py-[15px] px-[35px] md:py-[19px] md:px-[46px] border-[1px] border-secondary rounded-[4px] hover:bg-[#FF5F40] hover:border-[#FF5F40] hover:text-white transition-all duration-300">
              <a href="#CONTACTUS">{t("home.button2")}</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
