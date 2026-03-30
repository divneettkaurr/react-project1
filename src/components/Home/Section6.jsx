import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Section6 = () => {
  return (
    <div>
        <div className='text-center sm:text-left gap-10 pt-20 pb-20 pl-10 pr-10 justify-between flex-col flex sm:flex-row md:justify-around bg-[#D9D9D9] items-center md:p-30 md:pl-0 md:pr-0 mt-30'>
            <div>
                <p className='text-[#5B8291] text-md sm:text-xl'>In case of EMERGENCY, call +91 9701757017</p>
            </div>
            <div>
                <button className='flex gap-2 p-3 sm:p-4 bg-[#2E424D] items-center rounded-md'>
                    <p className='text-[#98DAD9] text-xs sm:text-sm'>OR SEND US MESSAGE</p>
                    <FaArrowRightLong className='text-[#98DAD9]' />
                </button>
            </div>
        </div>
      
    </div>
  )
}

export default Section6
