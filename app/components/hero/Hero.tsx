'use client'
import Image from 'next/image';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Foodimg from "@/public/images/food1.png"
import Hamburguer from "@/public/images/hambuguer.webp"
import MilkShake from "@/public/images/Milkshake.png"
import { MdShoppingBasket } from "react-icons/md";


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 
    }
  };

const Hero = () => {
  return (
    <Carousel additionalTransfrom={0} arrows={false} autoPlaySpeed={2000} autoPlay={true}
    centerMode={false} infinite responsive={responsive} showDots={true} itemClass='item'>

        <div data-aos="fade-up"  data-aos-duration="1000" className='w-[100%] h-[88vh] flex items-center justify-center flex-co bg-red-900 md:clip_path'>
            <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[5rem] mx-auto'>
                <Image src={Foodimg}  alt='prato-de-comida' className='hidden md:block'/>
                <div className='flex flex-col justify-center gap-5'>
                <h1 className='text-[40px] font-semibold text-yellow-300'>Fast Food For You</h1>
                 <h1 className='text-[90px] leading-[5rem] uppercase text-white font-bold '>
                    The Best <br /> Price of the City
                </h1>
                <p className=' text-zinc-200 text-opacity-70'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Fugiat beatae perspiciatis recusandae, voluptas tempore sunt amet cupiditate atque modi?
                 Asperiores eaque deserunt omnis tempora suscipit nam odio ipsam expedita quas.
                </p>
                <div>
                <button className='px-6 py-2 sm:px-10 sm:py-3 text-[14px] sm:text-[16px] bg-blue-950
                 transition-all duration-200 hover:bg-green-600 flex items-center rounded-md space-x-2 text-white'>
          <span>
          <MdShoppingBasket />
          </span>

          <span>
            Buy Now
          </span>
        </button>
                </div>
              </div>
            </div>
        </div>

        <div className='w-[100%] h-[88vh] flex items-center justify-center flex-co bg-red-900 md:clip_path'>
            <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[5rem] mx-auto'>
                <Image src={Hamburguer}  alt='hamburguer' className='hidden md:block'/>
                <div className='flex flex-col justify-center gap-5'>
                <h1 className='text-[40px] font-semibold text-yellow-300'>Fast Food For You</h1>
                 <h1 className='text-[90px] leading-[5rem] uppercase text-white font-bold '>
                    The Best <br /> Price of the City
                </h1>
                <p className=' text-zinc-200 text-opacity-70'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Fugiat beatae perspiciatis recusandae, voluptas tempore sunt amet cupiditate atque modi?
                 Asperiores eaque deserunt omnis tempora suscipit nam odio ipsam expedita quas.
                </p>
                <div>
                <button className='px-6 py-2 sm:px-10 sm:py-3 text-[14px] sm:text-[16px] bg-blue-950
                 transition-all duration-200 hover:bg-green-600 flex items-center rounded-md space-x-2 text-white'>
          <span>
          <MdShoppingBasket />
          </span>

          <span>
            Buy Now
          </span>
        </button>
                </div>
            </div>       
            </div>
        </div>

        <div className='w-[100%] h-[88vh] flex items-center justify-center flex-co bg-red-900 md:clip_path'>
            <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[5rem] mx-auto'>
                <Image src={MilkShake}  alt='milkshake' className='hidden md:block'/>
                <div className='flex flex-col justify-center gap-5'>
                <h1 className='text-[40px] font-semibold text-yellow-300'>Fast Food For You</h1>
                 <h1 className='text-[90px] leading-[5rem] uppercase text-white font-bold '>
                    The Best <br /> Price of the City
                </h1>
                <p className=' text-zinc-200 text-opacity-70'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Fugiat beatae perspiciatis recusandae, voluptas tempore sunt amet cupiditate atque modi?
                 Asperiores eaque deserunt omnis tempora suscipit nam odio ipsam expedita quas.
                </p>
                <div>
                <button className='px-6 py-2 sm:px-10 sm:py-3 text-[14px] sm:text-[16px] bg-blue-950
                 transition-all duration-200 hover:bg-green-600 flex items-center rounded-md space-x-2 text-white'>
          <span>
          <MdShoppingBasket />
          </span>

          <span>
            Buy Now
          </span>
        </button>
                </div>
            </div>
    
           
            </div>
        </div>



    </Carousel>
  )
}

export default Hero