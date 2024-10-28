import React from 'react'
import Slider from 'react-slick'

const TestimonialData = [
    {
        id: 1,
        img: 'https://picsum.photos/seed/picsum/101/101',
        name: 'Victor',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 2,
        img: 'https://picsum.photos/seed/picsum/102/102',
        name: 'Satya Nadella',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 3,
        img: 'https://picsum.photos/seed/picsum/103/103',
        name: 'John Doe',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 4,
        img: 'https://picsum.photos/seed/picsum/104/104',
        name: 'Heyru Bedru',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 5,
        img: 'https://picsum.photos/seed/picsum/105/105',
        name: 'Kebe Kamala',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
]

const Testimonials = () => {

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: 10000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
                          },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            },
          }
        ]
      };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section  */}
        <div className="text-center mb-8 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className=" text-primary">What our customers are saying</p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">Testimonials</h1>
          <p data-aos="fade-up" className="text-gray-400 text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi
          </p>
        </div >
        {/* Testimonials section  */}
        <div 
        
        data-aos="zoom-in"
        >
          <Slider {...settings}>
            {TestimonialData.map((items) => (
                <div className='mb-6'>
                    <div 
                    key={items.id}
                    className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative'>
                        <div
                            data-aos="fade-up"
                            className="mb-4"
                        >
                            <img src={items.img} alt="" className="w-20 h-20  rounded-full" />
                        </div>
                        <div className='flex flex-col items-center gap-4'>
                            <div className='space-y-3'>
                                <p className="text-gray-500 text-sm">{items.text}</p>
                                <h3 className="text-xl font-bold mt-4 text-black/80 dark:text-light">{items.name}</h3>
                            </div>
                        </div>
                        <p className='absolute top-0 right-0 text-black/20 text-9xl font-serif '>
                            ,,
                        </p>
                    </div>
                </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonials