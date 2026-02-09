import React from 'react'



const Hero = () => {
  return (
    
    <div>
      <div className='relative'>
        <img className='w-screen h-screen object-cover' src="./images/hero-img.png" alt="" />
      </div>
      
      <div className='absolute text-center flex flex-col gap-4 top-1/2 translate-y-1/4 left-1/2 -translate-x-1/2'>
        <h1 className='text-3xl md:text-5xl font-medium text-[#98DAD9] '>A decade of experience as an <span className='text-4xl md:text-5xl text-[#98DAD9] font-extrabold'>Orthopaedician.</span></h1>
        <p className='text-xl md:text-3xl text-white'>Experience best-in-class consultation & treatment plans</p>
      </div>
      
    </div>
  )
}

export default Hero
