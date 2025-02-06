import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="bg-[url('assets/home4.png')] bg-cover bg-center bg-opacity-20 flex items-center min-h-[100vh] pt-[100px] md:py-[70px]">
        <div className="container max-w-fuu w-full md:w-[70%] h-full">
          <div className="flex flex-col gap-8 md:pt-[40px] justify-center  md:justify-start h-full md:items-start">
            <span className="text-white text-[19px] md:text-[21px] leading-[31px] font-[500] font-Quicksand">
              {t("home.intro")}
            </span>
            <div className="">
              <p className="text-[39px] md:text-[89px] font-[700] md:leading-[100px] text-white font-Quicksand">
                {t("home.main")} {t("home.main2")}
                {/* {"Best Medical Treatment"} {"Proudly Introducing"} */}
              </p>
            </div>
            <div className="w-[314px] md:w-[618px]">
              <p className="text-[17px] md:text-[22px] leading-[32px] text-white">
                {t("home.text")}
              </p>
            </div>
            <div className="flex gap-4 ">
              <button className="font-Quicksand md:text-[15px] font-[700] leading-[15px] bg-[#FF5F40] text-white py-[15px] px-[35px] md:py-[19px] md:px-[46px] border-[1px] border-[#FF5F40] rounded-[4px] hover:bg-[#f67a61] hover:border-[#f67a61] transition-all duration-300">
                {" "}
                {t("home.button")}
              </button>
              <button className="font-Quicksand md:text-[15px] font-[700] leading-[15px] bg-white py-[15px] px-[35px] md:py-[19px] md:px-[46px] border-[1px] border-secondary rounded-[4px] hover:bg-[#FF5F40] hover:border-[#FF5F40] hover:text-white transition-all duration-300">
                {t("home.button")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
