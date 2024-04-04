import React from 'react'

const Email = () => {
  return (
    <div className='pt-[5rem] pb-[5rem] bg-zinc-200'>
            <div data-aos="fade-up"  data-aos-duration="2000" className='text-center' >
                    <h1 className='text-[18px] sm:text-[28px] md:text-[35px] text-black md:w-[60%] mx-auto font-bold'>
                    Send your Email for join hot offers
                    </h1>
                    <p className='text-black opacity-70 w-[65%] md:[50%] mx-auto mt-6'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Doloribus, explicabo rerum? Asperiores, voluptatum
                    nisi ipsum est vel ipsam magnam dolor tempora 
                    eaque quas molestias voluptatibus quisquam ullam illum animi expedita.
                </p>
                <div className='flex flex-col gap-6 items-center space-x-2 mt-[3rem] justify-center  lg:flex-row '>
                    <input type="email" placeholder='email adress' 
                    className='px-5 py-4 bg-blue-200 w-[40%] outline-none rounded-lg placeholder:text-white placeholder:font-semibold' />
                    <button className='px-8 py-4 bg-green-500 hover:bg-green-300 transition-all duration-200
                    rounded-md text-white font-bold'>
                    Subscribe
                    </button>
                </div>
                    
            </div>
                
    </div>
  )
}

export default Email

