import React from 'react'
import footerLogo from "../../assets/Real Estate Agency Logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import { FaInstagram } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    heigth: '100%',
    width: '100%',
};

const FooterLinks = [
    {
        title: "Home",
        link: "/#"
    },
    {
        title: "About",
        link: "/#about"
    },
    {
        title: "Contact",
        link: "/#contact"
    },
    {
        title: "Blog",
        link: "/#blog"
    }
]

const Footer = () => {
  return (
    <div style={BannerImg} className='text-white'>
        <div className='container pb-44'>
            <div data-aos="zoom in" className='grid md:grid-cols-3 pt-5'>
                {/* campany details  */}
                <div className='py-8 px-4 '>
                    <h1 className='flex sm:text-3xl text-xl font-bold sm:text-left text-justify gap-3 item-center mb-3 '>
                        <img src={footerLogo} alt="footer logo" className='max-w-[50px] rounded-2xl' />Cyderus GC</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora amet, rerum inventore facere nihil natus?</p>
                </div>
                {/* footer links  */}
                <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify'>Important Links</h1>
                            <ul className='flex flex-col gap-3'>
                                {
                                    FooterLinks.map((items) => (
                                        <li key={items.title} className='mb-2 cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200 '>
                                            <span>{items.title}</span>
                                            
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        
                    </div>
                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify'>Links</h1>
                            <ul className='flex flex-col gap-3'>
                                {
                                    FooterLinks.map((items) => (
                                        <li key={items.title} className='mb-2 cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200 '>
                                            <span>{items.title}</span>
                                            
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        
                    </div>
                    {/* social links  */}
                    <div>
                        <div className='flex items-center gap-3 mt-6'>
                            <a href="">
                            <FaInstagram className='text-3xl'/>
                            </a>
                            <a href="">
                            <MdFacebook className='text-3xl'/>
                            </a> 
                            <a href="">
                            <FaLinkedin className='text-3xl'/>
                            </a>     
                        </div>
                        <div className='mt-6'>
                            <div className='flex items-center gap-3'>
                            <FaLocationArrow />
                            <p>Jijiga, Ethiopia</p>
                            </div>
                            <div className='flex items-center gap-3 mt-3'>
                            <FaMobileAlt />
                            <p>+251 912797388</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer