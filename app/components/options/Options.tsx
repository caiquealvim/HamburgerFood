import React from 'react'
import Image from 'next/image'
import img1 from "@/public/images/Milkshake.png"
import img2 from "@/public/images/food1.png"
import img3 from "@/public/images/hambuguer.webp"

const Options = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]' data-aos="fade-down"  data-aos-duration="1000">
      <h1 className='heading'>
        the best burguers you will find here <br /> Love and
       Care
      </h1>

  
      <div className='w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]'>
          <div >
              <div className='p-6 hover:bg-zinc-300 cursor-pointer rounded-lg transition-all duration-200 mt-[5rem]'>
              <Image src={img1} alt='food1' className=' rounded-lg'/>
              <h1 className='font-semibold mt-2 text-center text-[28px] text-black'>
               <i>Milkshake </i> 
              </h1>
              <p className='mt-[0.2rem] opacity-70 text-zinc-900  text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, earum laudantium molestiae autem pariatur
                assumenda ut quo? Accusamu
                 omnis numquam nam consequatur quo modi praesentium, deserunt quas aperiam delectus quod.
              </p>
              </div>
          </div>
          <div >
              <div className='p-6 hover:bg-zinc-300 cursor-pointer rounded-lg transition-all duration-200'>
              <Image src={img2} alt='food1' className=' rounded-lg'/>
              <h1 className='font-semibold mt-2 text-center text-[28px] text-black'>
               <i>FrenchFries </i> 
              </h1>
              <p className='mt-[0.2rem] opacity-70 text-zinc-900  text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, earum laudantium molestiae autem pariatur
                assumenda ut quo? Accusamu
                 omnis numquam nam consequatur quo modi praesentium, deserunt quas aperiam delectus quod.
              </p>
              </div>
          </div>
          <div >
              <div className='p-6 hover:bg-zinc-300 cursor-pointer rounded-lg transition-all duration-200 mt-[5rem]'>
              <Image src={img3} alt='food1' className=' rounded-lg'/>
              <h1 className='font-semibold mt-2 text-center text-[28px] text-black'>
               <i>Burguer</i> 
              </h1>
              <p className='mt-[0.2rem] opacity-70 text-zinc-900  text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, earum laudantium molestiae autem pariatur
                assumenda ut quo? Accusamu
                 omnis numquam nam consequatur quo modi praesentium, deserunt quas aperiam delectus quod.
              </p>
              </div>
          </div>  
      </div>
    </div>
  )
}

export default Options