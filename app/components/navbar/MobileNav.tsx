import React from 'react'
import { ImCross } from 'react-icons/im'
import Link from 'next/link'

interface props{
  Show: boolean;
  closeNav:()=>void;
}

const MobileNav = ({Show,closeNav}:props) => {

  const navStyle = Show ? 'translate-x-0' : 'translate-x-[100%]'; 

  return (
    <div className={`fixed ${navStyle} right-0 transition-all duration-500 left-0 top-0 bottom-0 h-[100vh] bg-[#000000e0] z-[1002]`}>

    <ImCross   onClick={closeNav}
     className='absolute top-[2rem] right-[4rem] w-[4rem] h-[2rem] text-white'/>

      {/* nav div */}
      <div className= {`bg-emerald-700 ${navStyle} transition-all duration-500 delay-200 flex flex-col items-center justify-center w-[70%] h-[100%]`}>
    {/* nav link */}
      <div>
      <ul className='space-y-10'>
        <li className='text-[35px] font-medium hover:text-red-600'>
          <Link href='/'>Home</Link>
        </li>
        <li className='text-[35px] font-medium hover:text-red-600'>
          <Link href='/#BestFood'>Shop</Link>
        </li>
        <li className='text-[35px] font-medium hover:text-red-600'>
          <Link href='/#team'>Blog</Link>
        </li>
        <li className='text-[35px] font-medium hover:text-red-600'>
          <Link href='/#footer'>Contact</Link>
        </li> 
      </ul>
      </div>
      </div>
   </div>
  )
}

export default MobileNav