import Link from 'next/link'
import React from 'react'
import { BiCycling, BiShoppingBag } from 'react-icons/bi'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { MdFoodBank } from 'react-icons/md'

interface Props {
 openNav: ()=> void;
}

const NavBar = ({openNav}:Props) => {
  return (
    <div className='h-[12vh]  bg-white'>
      <div className='sm:w-[90%] w-[95%] mx-auto h-[100%] flex items-center justify-between'>
             {/* Logo Div */}
        <div className='flex items-center space-x-2'>
            <HiBars3BottomRight onClick={openNav} className='lg:hidden w-[5rem] h-[5rem]  text-black'/>
            <MdFoodBank className='w-[5rem] h-[5rem] sm:w-[2.5rem] sm:h-[2.5rem] text-red-600'/>
            <h1 className='text-[20px] sm:text-[30px] font-semibold'>Food Dinner</h1>
         </div>
               {/* Nav Links */}
       <ul className='hidden lg:flex items-center space-x-10'>
        <li className='text-[20px] font-medium hover:text-red-600'>
          <Link href='/'>Home</Link>
        </li>
        <li className='text-[20px] font-medium hover:text-red-600'>
          <Link href='/#BestFood'>Shop</Link>
        </li>
        <li className='text-[20px] font-medium hover:text-red-600'>
          <Link href='/#team'>Blog</Link>
        </li>
        <li className='text-[20px] font-medium hover:text-red-600'>
          <Link href='/#footer'>Contact</Link>
        </li> 
      </ul>
      {/* button */}
      <div className='flex items-center space-x-10'> 
        <button className='px-6 py-2 sm:px-8 sm:py-3 text-[14px] sm:text-[16px] bg-blue-950
        transition-all duration-200 hover:bg-red-600 flex items-center rounded-md space-x-2 text-white'>
          <span>
            <BiCycling/>
          </span>

          <span>
            Buy Now
          </span>
        </button>

        <button className='px-6 py-2 sm:px-6 sm:py-3 text-[14px] sm:text-[16px] bg-yellow-600
        transition-all duration-200 hover:bg-red-600 flex items-center rounded-md space-x-2 text-white'>
          <span>
            <BiShoppingBag className='w-[1.5rem] h-[1.5rem]'/>
          </span>
        </button>
       

      </div>

   </div>
</div>
  )
}

export default NavBar