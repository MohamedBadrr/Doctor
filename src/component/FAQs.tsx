import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
const FAQs = () => {
  const { t } = useTranslation();

  const faqs = [
    {
      question : t("faq.q1") ,
      answer : t("faq.a1") ,
    },
    {
      question : t("faq.q2") ,
      answer : t("faq.a2") ,
    },
    {
      question : t("faq.q3") ,
      answer : t("faq.a3") ,
    },
    {
      question : t("faq.q4") ,
      answer : t("faq.a4") ,
    },
    {
      question : t("faq.q5") ,
      answer : t("faq.a5") ,
    },
  ]
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center pt-[20px] gap-[20px] ">
        <h1 className="text-[40px] font-[700] leading-[50px] font-Quicksand">
        {t("faq.main")}
        </h1>
        <div className="w-[48px] h-[4px] bg-secondary rounded-[4px]"></div>
        <p className="text-[#767676] text-center  font-Quicksand text-[20px] leading-[32px] w-[75%] md:w-[50%]">
        {t("faq.desc")}
        </p>
      </div>
      <div className="container w-full  md:w-[70%] px-[35px]  md:px-[15px] py-[60px] md:py-[90px]">
        {faqs.map((faq , index) => (
          <Accordion key={index} className="mb-[2px] " type="single" collapsible>
            <AccordionItem value="item-1 hover:text-secondary">
              <AccordionTrigger className="hover:text-secondary hover:border-none text-start hover:no-underline ps-[28px] pe-[17px] bg-[#F4F3F2] text-[#716F6F] text-[16px] font-normal">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pt-[21px] pb-[38px] px-[37px] bg-white text-[15px] leading-[26px] text-start text-[#716F6F]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
