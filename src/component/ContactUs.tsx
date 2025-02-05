import image from "../assets/contactus.jpg";

const ContactUs = () => {
  return (
    <div className="">
      {/* Title */}
      <div className="flex flex-col items-center justify-center  pt-[20px] gap-[20px] ">
        <h1 className="text-[40px] font-[700] leading-[50px] font-Quicksand">
          Contact Us
        </h1>
        <div className="w-[48px] h-[4px] bg-secondary rounded-[4px]"></div>
        <p className="text-[#767676] text-center  font-Quicksand text-[20px] leading-[32px]">
          Contact us if you have any questions or need help. We are here to help
          you.
        </p>
      </div>
      <div className="pt-[70px] pb-[120px]">
        <div className="container w-full px-[35px] md:px-[50px] lg:px-[170px] h-full flex items-center justify-center">
          <div className="flex flex-col md:flex-row gap-[50px] ">
            <div className="flex items-center justify-center">
              <img
                src={image}
                alt="image-section"
                className="w-[600px] h-[400px] md:h-[500px] rounded-md"
              />
            </div>

            <div className="">
              <h1 className="text-center md:text-start text-[30px] md:text-[40px] font-bold font-Quicksand text-[#268ad6]">
                Meet Our Specialist This Doctor Meet
              </h1>
              <form action="" className="my-[40px]">
                <div>
                  <div className="block md:flex items-center justify-center gap-[20px] mb-[30px]">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="font-Quicksand w-full mb-[30px] md:mb-[0px] py-[10px] px-[20px]  focus:border-[#268ad6] border-[1px] border-gray-300 bg-[#f0f4f6] outline-none rounded-[5px]"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="font-Quicksand w-full py-[10px] px-[20px] focus:border-[#268ad6]  border-[1px] border-gray-300 bg-[#f0f4f6] outline-none rounded-[5px]"
                    />
                  </div>

                  <div className="block md:flex items-center justify-center gap-[20px] mb-[30px]">
                    <input
                      type="text"
                      placeholder="Your Subject"
                      className="font-Quicksand w-full py-[10px] px-[20px] mb-[30px] md:mb-[0px] border-[1px] focus:border-[#268ad6]  border-gray-300 bg-[#f0f4f6] outline-none rounded-[5px]"
                    />
                    <input
                      type="number"
                      placeholder="Your Number"
                      className="font-Quicksand w-full py-[10px] px-[20px] border-[1px] focus:border-[#268ad6]  border-gray-300 bg-[#f0f4f6] outline-none rounded-[5px]"
                    />
                  </div>
                  <textarea
                    rows={6}
                    placeholder="Your Message"
                    className="mb-[30px] focus:border-[#268ad6]  font-Quicksand w-full py-[10px] px-[20px] border-[1px] border-gray-300 bg-[#f0f4f6] outline-none rounded-[5px]"
                  />
                  <button className="font-Quicksand md:text-[15px] font-[700] leading-[15px] bg-[#268AD6] text-white py-[15px] px-[35px] md:py-[19px] md:px-[46px] border-[1px] border-[#268AD6] rounded-[4px] hover:bg-[#5da0d3] hover:border-[#268AD6] transition-all duration-300">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
