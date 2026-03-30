import React from 'react'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'

const Section4 = () => {

  const data=[
    {
      img:"./images/quotes.png",
      desc:"Amazing team and amazing treatment from the best doctor in the world",
      img1:"./images/review-img.png",
      head:"Michael",
      desc1:"Patient"

    },
    {
      img:"./images/quotes.png",
      desc:"Amazing team and amazing treatment from the best doctor in the world",
      img1:"./images/review-img.png",
      head:"Michael",
      desc1:"Patient"

    },
    {
      img:"./images/quotes.png",
      desc:"Amazing team and amazing treatment from the best doctor in the world",
      img1:"./images/review-img.png",
      head:"Michael",
      desc1:"Patient"

    },
    {
      img:"./images/quotes.png",
      desc:"Amazing team and amazing treatment from the best doctor in the world",
      img1:"./images/review-img.png",
      head:"Michael",
      desc1:"Patient"

    }
  ]
  return (
    <div>

        <section className='flex flex-col gap-20 sm:gap-30 bg-[#ECF6FF] pt-15 pb-15 sm:p-25  md:p-40'>
            <div className='flex flex-col items-end gap-5 sm:flex-row justify-between sm:items-center '>
                <div className='flex flex-col gap-3 text-center sm:text-left '>
                    <p className='text-[#234A6B] text-2xl sm:text-3xl font-bold'>Read feedback about our Services and wonderful team!</p>
                    <p className='text-[#757575] text-xs sm:text-[15px]'>We take care of our patients just like a family member . Read the testimonials from our patients. </p>
                </div>

                <div className='flex gap-6 pr-8 sm:pr-0'>
                  <IoIosArrowDropleftCircle className='text-[#0086FF] h-10 w-9'/>
                  <IoIosArrowDroprightCircle className='text-[#0086FF] h-10 w-9'/>
                  
                </div>
            </div>


            {/* <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-10 pl-10 pr-10 sm:pl-0 sm:pr-0'>

              <div className='flex flex-col gap-6 bg-white rounded-3xl p-8 pt-15 pb-15'>
                <div>
                  <img src="./images/quotes.png" alt="" />
                </div>
                <div>
                  <p className='text-[#757575] text-lg'>Amazing team and amazing treatment from the best doctor in the world</p>

                </div>
                <div className='flex gap-5 items-center'>
                  <div>
                    <img className='rounded-full h-15 w-15' src="./images/review-img.png" alt="" />
                  </div>
                  <div className='flex flex-col'>
                    <p className='text-[#757575] font-bold text-'>Michael</p>
                    <p className='text-[#B3B3B3]'>Patient</p>
                  </div>
                 
                </div>
              </div>

              <div className='flex flex-col gap-6 bg-white rounded-3xl p-8 pt-15 pb-15'>
                <div>
                  <img src="./images/quotes.png" alt="" />
                </div>
                <div>
                  <p className='text-[#757575] text-lg'>Amazing team and amazing treatment from the best doctor in the world</p>

                </div>
                <div className='flex gap-5 items-center'>
                  <div>
                    <img className='rounded-full h-15 w-15' src="./images/review-img.png" alt="" />
                  </div>
                  <div className='flex flex-col'>
                    <p className='text-[#757575] font-bold text-'>Michael</p>
                    <p className='text-[#B3B3B3]'>Patient</p>
                  </div>
                 
                </div>
              </div>

              <div className='flex flex-col gap-6 bg-white rounded-3xl p-8 pt-15 pb-15'>
                <div>
                  <img src="./images/quotes.png" alt="" />
                </div>
                <div>
                  <p className='text-[#757575] text-lg'>Amazing team and amazing treatment from the best doctor in the world</p>

                </div>
                <div className='flex gap-5 items-center'>
                  <div>
                    <img className='rounded-full h-15 w-15' src="./images/review-img.png" alt="" />
                  </div>
                  <div className='flex flex-col'>
                    <p className='text-[#757575] font-bold text-'>Michael</p>
                    <p className='text-[#B3B3B3]'>Patient</p>
                  </div>
                 
                </div>
              </div>

              <div className='flex flex-col gap-6 bg-white rounded-3xl p-8 pt-15 pb-15'>
                <div>
                  <img src="./images/quotes.png" alt="" />
                </div>
                <div>
                  <p className='text-[#757575] text-lg'>Amazing team and amazing treatment from the best doctor in the world</p>

                </div>
                <div className='flex gap-5 items-center'>
                  <div>
                    <img className='rounded-full h-15 w-15' src="./images/review-img.png" alt="" />
                  </div>
                  <div className='flex flex-col'>
                    <p className='text-[#757575] font-bold text-'>Michael</p>
                    <p className='text-[#B3B3B3]'>Patient</p>
                  </div>
                 
                </div>
              </div>

            </div> */}

            <div className='grid md:grid-cols-4 gap-10 pl-14 pr-14 md:pl-10 md:pr-10 '>
              {
                data.map(ele=>(
                  <div className='flex flex-col gap-6 bg-white rounded-3xl p-8 pt-15 pb-15'>
                    <img className='h-4 w-5' src={ele.img} alt="" />
                    <p className='text-[#757575] text-md'>{ele.desc}</p>
                    <div className='flex gap-5 items-center'>
                      <img className='rounded-full h-15 w-15' src={ele.img1} alt="" />
                      <div className='flex flex-col'>
                        <h3 className='text-[#757575] font-bold'>{ele.head}</h3>
                        <p className='text-[#B3B3B3]'>{ele.desc1}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>


        </section>
      
    </div>
  )
}

export default Section4
