import doctor from "../assets/doctor.jpg";

const AboutUs = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center  pt-[20px] gap-[20px] ">
        <h1 className="text-[40px] font-[700] leading-[50px] font-Quicksand">
          About Us
        </h1>
        <div className="w-[48px] h-[4px] bg-secondary rounded-[4px]"></div>
        <p className="text-[#767676] text-center  font-Quicksand text-[20px] leading-[32px]">
          This is a short description about my self and my work.
        </p>
      </div>
      <div className="container w-full">
        <div className="container w-full md:px-[50px] lg:px-[90px] h-full flex items-center justify-between flex-wrap">
          <div className="flex items-center justify-between flex-col-reverse md:flex-row gap-[30px] py-[50px]  ">
            <div className="text-center md:text-start w-full md:w-[60%]">
              <h1 className="text-[21px] font-[500] leading-[31px] mt-[15px]  text-secondary font-Quicksand">
                Who We Are?
              </h1>
              <p className="text-[15px] leading-[26px] my-[25px]">
                <p className="text-[38px] text-[#2D3134] leading-[50px] font-[300] font-Quicksand">
                  Vivamus Vestibulum{" "}
                  <span className="font-bold">Rhonc Ex, Non Bibendum Erat</span>{" "}
                </p>
              </p>
              <p className="text-[#716F6F] text-[16px] my-[10px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur varius ligula quis turpis ornare, a eleifend leo
                tempor. Nullam euismod, purus eu rhoncus rhoncus, purus elit
                semper lorem, eu condimentum lorem metus id nisi. Vestibulum
                semper mollis cursus. Pellentesque eros turpis, imperdiet sit
                amet ultricies vel, pharetra non sapien. Sed quis porttitor
                enim.
              </p>
            </div>
            <img src={doctor} alt="service" className="w-[395px] h-[515px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
