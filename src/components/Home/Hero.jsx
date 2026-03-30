import React, { useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'



const Hero = () => {

  // const [index, setIndex]=useState(0)
  const [CurrentIndex, setCurrentIndex]=useState(0)

  const data=[
    {
      img:"./images/hero-img.png"
    },
    {
      img:"./images/hero-bg1.webp"
    },
    {
      img:"./images/hero-bg2.webp"
    }
  ]

  useEffect(()=>{
    let timer = setInterval(()=>{
       setIndex(prev=>(prev+1)%data.length)
    },3000);

    return()=>clearInterval(timer)
  },[])

  const prevSlide=()=>{
    setCurrentIndex(prev=>
      prev===0?data.length-1:prev-1
    )
  }

  const nextSlide=()=>{
    setCurrentIndex(prev=>
      prev===data.length-1?0:prev+1
    )
  }

  return (
    
    <div>
      <div className='relative' >
        {/* <img className='w-screen h-screen object-cover' src="./images/hero-img.png" alt="" /> */}
        {/* <img className='w-screen h-screen object-cover duration-700' src={data[index].img} alt="" /> */}
        <img className='w-screen h-screen object-cover duration-700 ' src={data[CurrentIndex].img} alt="" />
        {/* <img key={data[CurrentIndex].index} className={`w-screen h-screen object-cover duration-700 ${index===CurrentIndex?"opacity-100":"opacity-0"}`} src={data[CurrentIndex].img} alt="" /> */}
      </div>
      
      <div className='absolute text-center flex flex-col gap-4 top-1/2 translate-y-1/4 left-1/2 -translate-x-1/2'>
        <h1 className='text-3xl md:text-5xl font-medium text-[#98DAD9] '>A decade of experience as an <span className='text-4xl md:text-5xl text-[#98DAD9] font-extrabold'>Orthopaedician.</span></h1>
        <p className='text-xl md:text-3xl text-white'>Experience best-in-class consultation & treatment plans</p>
      </div>

       <div className=' flex  '>
          <button onClick={prevSlide} className='p-2 backdrop-blur-xl m-5 rounded-xl text-white absolute top-[60%] left-0'><IoIosArrowBack /></button>
          <button onClick={nextSlide} className='p-2 backdrop-blur-xl m-5 rounded-xl text-white absolute top-[60%] right-0'><IoIosArrowForward/></button>

        </div>
      
    </div>
  )
}

export default Hero
