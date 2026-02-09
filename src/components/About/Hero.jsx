import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className='flex bg-[#111827] p-13  '>
            <div className='w-[50%] flex flex-col gap-5 justify-center md:pl-30 pr-5 '>
                
                <div>
                    <p className='text-[#98DAD9] text-xs md:text-sm'>Hello, Welcome</p>
                </div>
                <div>
                    <p className='text-white text-2xl md:text-4xl font-bold'>I m Dr. Gaurav Jadon</p>
                </div>
                <div>
                    <p className='text-[#6B7280] text-xs md:text-sm'>Expert in Pediatrics, Neonatology, and Pediatric Intensive Care — committed to safe and evidence based child healthcare.</p>
                </div>
                <div>
                    <button className='p-2 md:p-3 pl-5 pr-5 bg-[#98DAD9] rounded-md'>
                        <p className='text-xs'>Contact</p>
                    </button>
                </div>


            </div>

            <div className='w-[50%] flex justify-center p-8 md:p-4'>
                <img className='scale-x-[-1] rounded-2xl ' src="./images/section5-dr.png" alt="" />

            </div>
        </div>
      
    </div>
  )
}

export default Hero
