import React from 'react'
import Image from 'next/image'

interface Props{
    name:string,
    image:string,
    position:string
}

const TeamCard = ({name,image,position}:Props) => {
  return (
    <div>
      <Image src={image} alt={name} height={400} width={400} className='rounded-2xl' />
      <h1 className='text-[40px] text-gray-800 mt-2 text-center font-bold'>{name}</h1>
      <p className='mt-[0.6rem] mb-2 px-4 py-1 bg-red-500 text-white mx-auto w-fit font-medium'>
        {position}
      </p>
      <p className='text-center md:w-[70%] mx-auto text-gray-600 mt-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolorem pariatur mollitia exercitationem doloribus porro,
      </p>
    </div>
  )
}

export default TeamCard
