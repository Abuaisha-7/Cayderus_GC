import React, { useState } from "react";
import Image1 from "../../assets/hero-carousel/hero-carousel-1.jpg";
import Image2 from "../../assets/hero-carousel/hero-carousel-2.jpg";
import Image3 from "../../assets/hero-carousel/hero-carousel-3.jpg";
import Image4 from "../../assets/hero-carousel/hero-carousel-4.jpg";
import Image5 from "../../assets/hero-carousel/hero-carousel-5.jpg";
import Slider from "react-slick";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";

const ImageList = [
  {
    id: 1,
    img: Image1,
  },
  {
    id: 2,
    img: Image2,
  },
  {
    id: 3,
    img: Image3,
  },
  {
    id: 4,
    img: Image4,
  },
  {
    id: 5,
    img: Image5,
  },
];


const Hero = () => {
  const [curentIndex, setCurrentIndex] =useState(0);
 
  const BannerImg = {
    backgroundImage: `url(${ImageList[curentIndex].img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    heigth: "100%",
    width: "100%",
    
  };

  const preSlide = () => {
    const index = curentIndex === 0 ? ImageList.length - 1 : curentIndex - 1;
    setCurrentIndex(index);
  };
  const nextSlide = () => {
    const index = curentIndex === ImageList.length - 1 ? 0 : curentIndex + 1;
    setCurrentIndex(index);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  
  return (
    
    <div
      className="group relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
      style={BannerImg}
    >
      {/* baground pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 rounded-3xl right-0 -rotate-45 -z-9">
        {" "}
      </div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <div>
          <div className="flex flex-col justify-center items-center text-center">
            {/* text container setion */}
            <div className="flex flex-col justify-center items-center text-center md:w-[700px] dark:text-black">
              <h1
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true"
                className="text-5xl lg:text-7xl font-bold mb-3 hover:underline"
              >
                Welcome to Cayderus General Construction 
              </h1>
              <p
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
                className="text-2xl mb-3 text-black font-bold"
              >
                We are a leading construction company with over 10 years of
                experience.
                
              </p>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="300"
              >
                <button className="bg-primary text-white px-4 py-2 rounded-full font-bold hover:bg-secondary transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <dir className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full bg-white/30 hover:bg-white/50 cursor-pointer p-2">
      <MdOutlineKeyboardArrowLeft onClick={preSlide} size={60} />
      </dir>
      <dir className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full bg-white/30 hover:bg-white/50 cursor-pointer p-2">
      <MdOutlineKeyboardArrowRight onClick={nextSlide} size={60}  />
      </dir>
      <div className="flex absolute bottom-5 justify-center items-center py-2 rounded-full bg-gray-100/50 hover:bg-gray-100/70 ">
        {
          ImageList.map((item , index) => (

          <div key={index} onClick={() => goToSlide(index)} className="text-2xl cursor-pointer " >
            <RxDotFilled className="hover:text-primary transition-all duration-300" />
          </div>
          )
        )}
      </div>
    </div>
  );
};

export default Hero;
