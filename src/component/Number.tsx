import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Number = () => {
  const {t} = useTranslation();
  const stats = [ 
    { value: 125, label: t("number.one") }, // ندوات طبية 
    { value: 672, label: t("number.two")}, // عمليه ولادة ناجحه 
    { value: 258, label: t("number.three") },  //  حالات عقم 
    { value: 487, label: t("number.four")}, // عملية حقن مجهري 
  ];
  
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById("stats-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  return (
    <div
      id="stats-section"
      className="bg-[#54c0ff] min-h-[325px] py-[70px] flex items-center justify-center "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-[30px]">
        {stats.map((stat, index) => (
          <StatItem
            key={index}
            endValue={stat.value}
            label={stat.label}
            inView={inView}
          />
        ))}
      </div>
    </div>
  );
};

const StatItem = ({
  endValue,
  label,
  inView,
}: {
  endValue: number;
  label: string;
  inView: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      // const start = 0;
      const duration = 2000; 
      const startTime = performance.now();

      const step = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        setCount(Math.floor(progress * endValue));

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }
  }, [inView, endValue]);

  return (
    <div className="flex flex-col flex-wrap items-center gap-[25px] text-white m-[30px] md:m-[15px] md:mb-[0px]">
      <h2 className="text-[53px] leading-[53px] font-Quicksand font-[500]">
        {count}
      </h2>
      <div className="h-[2.5px] rounded-[10px]  w-[48px] bg-white mt-[10px]"></div>
      <p className="text-[19px] font-[700] leading-[30px] font-Quicksand">
        {label}
      </p>
    </div>
  );
};

export default Number;
