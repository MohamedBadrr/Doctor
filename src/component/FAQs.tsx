import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
const FAQs = () => {
  const { t } = useTranslation();
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center pt-[20px] gap-[20px] ">
        <h1 className="text-[40px] font-[700] leading-[50px] font-Quicksand">
          FAQs
        </h1>
        <div className="w-[48px] h-[4px] bg-secondary rounded-[4px]"></div>
        <p className="text-[#767676] text-center  font-Quicksand text-[20px] leading-[32px] w-[75%] md:w-[50%]">
          Some of the most frequently asked questions are answered below. If you
          have any other questions, feel free to contact us.
        </p>
      </div>
      <div className="container w-full  md:w-[70%] px-[35px]  md:px-[15px] py-[60px] md:py-[90px]">
        {[0, 1, 2, 3, 4].map(() => (
          <Accordion className="mb-[2px] " type="single" collapsible>
            <AccordionItem value="item-1 hover:text-secondary">
              <AccordionTrigger className="hover:text-secondary hover:border-none hover:no-underline ps-[28px] pe-[17px] bg-[#F4F3F2] text-[#716F6F] text-[16px] font-normal">
                {t("faq.title")}
              </AccordionTrigger>
              <AccordionContent className="pt-[21px] pb-[38px] px-[37px] bg-white text-[15px] leading-[26px] text-[#716F6F]">
                {t("faq.text")}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
