import React from 'react'
import { BiWorld } from 'react-icons/bi'
import { FaUserFriends, FaUserMd } from 'react-icons/fa'
import { FaUserDoctor } from 'react-icons/fa6'

const Section4 = () => {
  return (
    <div>
    <div className='relative mt-15'>
        <div>
            <img className='h-screen w-screen object-cover' src="./images/section4-bg.png" alt="" />
        </div>
        
        <div className='absolute flex-col pl-6 sm:pl-0 sm:items-center top-23 sm:top-1/4 flex sm:flex-row gap-20 md:gap-27 left-9 right-10 md:left-55 '>

            <div className='flex sm:flex-col gap-9 items-center'>
                <FaUserDoctor className='h-35 w-30 sm:w-35 md:h-50 md:w-45 text-white'/>
                <div className='flex flex-col gap-5 sm:gap-7 md:gap-10 sm:items-center'>
                   <p className='text-3xl md:text-4xl font-medium text-white'>28+  Years</p>
                   <p className='text-2xl md:text-3xl text-white'>Clinical Experience</p>
                </div>
            
            </div>

            <div className='flex sm:flex-col  gap-9 items-center'>
                <FaUserFriends className='h-35 w-40 md:h-50 md:w-45 text-white'/>
                <div className='flex flex-col gap-5 sm:gap-7 md:gap-10 sm:items-center'>
                   <p className='text-3xl md:text-4xl font-medium text-white'>50,000+</p>
                   <p className='text-2xl md:text-3xl text-white'>Pediatric Patients Treated</p>
                </div>
            
            </div>

            <div className='flex sm:flex-col gap-9 items-center'>
                <BiWorld className='h-35 w-35 md:h-50 md:w-45 text-white'/>
                <div className='flex flex-col gap-5 sm:gap-7 md:gap-10 sm:items-center'>
                   <p className='text-3xl md:text-4xl font-medium text-white'>3 Countries</p>
                   <p className='text-2xl md:text-3xl text-white'>India • Kuwait • UAE</p>
                </div>
            
            </div>

        </div>

        
        
      
    </div>
    </div>
  )
}

export default Section4
