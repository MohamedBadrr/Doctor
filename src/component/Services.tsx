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
  return (
    <div className="">
      {/* Title */}
      <div className="flex flex-col items-center justify-center pt-[120px] gap-[20px] ">
        <h1 className="text-[40px] font-[700] leading-[50px] font-Quicksand">
          Our Services
        </h1>
        <div className="w-[48px] h-[4px] bg-secondary rounded-[4px]"></div>
        <p className="text-[#767676] text-center  font-Quicksand text-[20px] leading-[32px]">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia
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
                className="flex flex-col items-center justify-center gap-[30px] p-[15px] "
              >
                <img src={image} alt="service" className="w-[78px] h-[78px]" />
                <h1 className="text-[19px] font-[700]  leading-[31px]   text-[#2d3134] font-Quicksand">
                  Diagnostics
                </h1>
                <p className="text-center text-[15px] text-[#716f6f] leading-[26px] ">
                  Phasellus venenatis porta rhoncus. Integer et viverra felis
                  itai.
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
