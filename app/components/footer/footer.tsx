'use client'
import React from 'react'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from 'react-icons/bi'
import { MdFoodBank } from 'react-icons/md'

const Footer = () => {
  return (
    <div id="footer" className=' pt-[5rem] pb-[3rem]  bg-red-900 opacity-90'>
        <div className='w-[80%] pb-[2rem]  border-b-[2px] border-b-gray-300 border-opacity-50 mx-auto
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem] items-center'>
            <div>
                <div className='flex item-center text-white space-x-2'>
                <MdFoodBank className='w-[5rem] h-[5rem] sm:w-[2.5rem] sm:h-[2.5rem] text-red-600'/>
                 <h1 className='text-[20px] sm:text-[30px] font-semibold'>Food Dinner</h1>
                </div>
                <p className='text-white text-opacity-60 mt-[0.6rem]'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                </p>
                <p className='text-white mt-2'>
                    suporte@example.com-
                </p>
                <p className='text-white mt-2'>
                    (83)98744-4554
                </p>
            </div>

            <div>
                <h1 className='text-[23px] font-semibold mb-[2rem] text-white '>Products</h1>
                <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer
                w-fit'>MilkShake</p>
                <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer
                w-fit'>FrenchFries</p>
                <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer
                w-fit'>Main course</p>
                <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer
                w-fit'>HamburguerX</p>

            </div>

            <div>
                <h1 className='text-[23px] font-semibold mb-[2rem] text-white '>Quick Link</h1>
                <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer
                w-fit'>Home</p>
                <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer
                w-fit'>About Us</p>
                <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer
                w-fit'>Service</p>
                <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer
                w-fit'>Delivery</p>
            </div>

            <div>
                <div className='flex item-center text-white space-x-2'>
                 <h1 className='text-[20px] sm:text-[30px] font-semibold'>Open Days</h1>
                </div>
                <p className='text-white text-opacity-60 mt-[0.6rem]'>
                    Monday at <span className='text-yellow-300'>10:50 PM</span> 
                </p>
                <p className='text-white text-opacity-60 mt-[0.6rem]'>
                    Saturday at <span className='text-yellow-300'>10:50 PM</span> 
                </p>
                <p className='text-white mt-2'>
                    (83)98744-4554
                </p>
                <p className='mt-3 flex items-center gap-3'>
                    <BiLogoFacebook className='text-yellow-300 cursor-pointer text-[30px]'/>
                    <BiLogoTwitter  className='text-yellow-300 cursor-pointer text-[30px]'/>
                    <BiLogoInstagram  className='text-yellow-300 cursor-pointer text-[30px]'/>
                </p>
            </div>
        </div>
        <div>
            <p className='text-white text-center mt-1 text-opacity-50'>
               CopyRight@ <span className='text-yellow-300 font-semibold text-opacity-55'>Caique Alvim Desenvolvedor Front-end</span> All rights reserved 
            </p>
        </div>

    </div>
  )
}

export default Footer