import React, { useState } from 'react'

const Section3 = () => {

    const data=[
        {
            id:1,
            img:"./images/Vector (3).png",
            head:"Dentistry",
            desc:"Get consultation Form our Dentistry team"

        },
        {
            id:2,
            img:"./images/Vector (4).png",
            head:"General Diagnosis",
            desc:"Get consultation from our General Diagnosis team"

        },
        {
            id:3,
            img:"./images/Vector (5).png",
            head:"Neuro Surgery",
            desc:"Get consultation form our Neuro Surgery team"

        },
        {
            id:4,
            img:"./images/Vector (6).png",
            head:"Cardiology",
            desc:"Get consultation from our Cardiology team"

        },
        {
            id:5,
            img:"./images/Vector (7).png",
            head:"Pharmacy",
            desc:"Get consultation form our Pharmacy team"

        },
        {
            id:6,
            img:"./images/Vector (8).png",
            head:"Trained Staff",
            desc:"Get consultation form our Trained staff team"

        },
        {
            id:7,
            img:"./images/Vector (8).png",
            head:"DNA Mapping",
            desc:"Get consultation form our DNA Mapping team"

        },
        {
            id:8,
            img:"./images/Vector (9).png",
            head:"Ophthalmology",
            desc:"Get consultation from our Opthalmology team"

        },
        {
            id:9,
            img:"./images/Vector (10).png",
            head:"Medical Aid",
            desc:"Get consultation from our Emergency Medical Aid team"

        }
    ]

    const [visibleCards, setVisibleCards]=useState(3)

    const handleShowLess=()=>{
        setVisibleCards(3)
    }
    const handleShowMore=()=>{
        setVisibleCards(prev=>prev+3)
    }


  return (
    <div>
        <div className='flex flex-col md:p-40 pt-40 pb-40 gap-12 items-center bg-[#F9FCFF]'>

            <div className='flex flex-col text-center gap-2'>
                <p className='text-3xl font-medium text-[#234A6B]'>Our Specialty</p>
                <p className='pl-10 pr-10 sm:pl-0 sm:pr-0'>We provide the world class services with the best medical  team!</p>
            </div>

            {/* <div className='grid sm:grid-cols-3 gap-6 pl-15 pr-15 sm:gap-10 md:gap-15 sm:pl-10 sm:pr-10'>

                <div className='group flex flex-col gap-4 items-center rounded-2xl hover:bg-[#3D9DF1]  p-4 shadow-2xl shadow-[#0086FF1A] '>
                    <div className='bg-[#F6F9FE] group-hover:bg-[#ECF6FF] h-25 w-25 md:h-28 md:w-28 rounded-3xl flex justify-center items-center'>
                        <img className='' src="./images/Vector (3).png" alt="" />

                    </div>
                    
                    <div >
                        <p className='font-medium text-lg group-hover:text-white'>Dentistry</p>
                    </div>
                    <div>
                        <p className='text-[#757575] group-hover:text-white text-sm text-center'>Get consultation Form our Dentistry team</p>
                    </div>
                </div>

                <div className='group flex flex-col gap-4 items-center rounded-2xl hover:bg-[#3D9DF1]  p-4 shadow-2xl shadow-[#0086FF1A] '>
                    <div className='bg-[#F6F9FE] group-hover:bg-[#ECF6FF] h-25 w-25 md:h-28 md:w-28 rounded-3xl flex justify-center items-center'>
                        <img className='' src="./images/Vector (4).png" alt="" />

                    </div>
                    <div>
                        <p className='font-medium text-lg group-hover:text-white'>General Diagnosis</p>
                    </div>
                    <div>
                        <p className=' text-[#757575] group-hover:text-white text-sm text-center'>Get consultation from our General Diagnosis team</p>
                    </div>
                </div>

                <div className='group flex flex-col gap-4 items-center rounded-2xl hover:bg-[#3D9DF1]  p-4 shadow-2xl shadow-[#0086FF1A] '>
                    <div className='bg-[#F6F9FE] group-hover:bg-[#ECF6FF] h-25 w-25 md:h-28 md:w-28 rounded-3xl flex justify-center items-center'>
                        <img className='' src="./images/Vector (5).png" alt="" />

                    </div>
                    <div>
                        <p className='font-medium text-lg group-hover:text-white'>Neuro Surgery</p>
                    </div>
                    <div>
                        <p className='text-[#757575] group-hover:text-white text-sm text-center'>Get consultation form our Neuro Surgery team</p>
                    </div>
                </div>

                <div className='group flex flex-col gap-4 items-center rounded-2xl hover:bg-[#3D9DF1]  p-4 shadow-2xl shadow-[#0086FF1A] '>
                    <div className='bg-[#F6F9FE] group-hover:bg-[#ECF6FF] h-25 w-25 md:h-28 md:w-28 rounded-3xl flex justify-center items-center'>
                        <img className='' src="./images/Vector (6).png" alt="" />

                    </div>
                    <div>
                        <p className='font-medium text-lg group-hover:text-white'>Cardiology</p>
                    </div>
                    
                    <div>
                        <p className='text-[#757575] group-hover:text-white text-sm text-center'>Get consultation from our Cardiology team</p>
                    </div>
                    
                </div>

                <div className='group flex flex-col gap-4 items-center rounded-2xl hover:bg-[#3D9DF1]  p-4 shadow-2xl shadow-[#0086FF1A] '>
                    <div className='bg-[#F6F9FE] group-hover:bg-[#ECF6FF] h-25 w-25 md:h-28 md:w-28 rounded-3xl flex justify-center items-center'>
                        <img className='' src="./images/Vector (7).png" alt="" />

                    </div>
                    <div>
                        <p className='font-medium text-lg group-hover:text-white'>Pharmacy</p>
                    </div>
                    <div>
                        <p className='text-[#757575] group-hover:text-white text-sm text-center'>Get consultation form our Pharmacy team</p>
                    </div>
                </div>

                <div className='group flex flex-col gap-4 items-center rounded-2xl hover:bg-[#3D9DF1]  p-4 shadow-2xl shadow-[#0086FF1A] '>
                    <div className='bg-[#F6F9FE] group-hover:bg-[#ECF6FF] h-25 w-25 md:h-28 md:w-28 rounded-3xl flex justify-center items-center'>
                        <img className='' src="./images/Vector (8).png" alt="" />

                    </div>
                    <div>
                        <p className='font-medium text-lg group-hover:text-white'>Trained Staff</p>
                    </div>
                    <div>
                        <p className='text-[#757575] group-hover:text-white text-sm text-center'>Get consultation form our Trained staff team</p>
                    </div>
                </div>

                <div className='group flex flex-col gap-4 items-center rounded-2xl hover:bg-[#3D9DF1]  p-4 shadow-2xl shadow-[#0086FF1A] '>
                    <div className='bg-[#F6F9FE] group-hover:bg-[#ECF6FF] h-25 w-25 md:h-28 md:w-28 rounded-3xl flex justify-center items-center'>
                        <img className='' src="./images/Vector (8).png" alt="" />

                    </div>
                    <div>
                        <p className='font-medium text-lg group-hover:text-white'>DNA Mapping</p>
                    </div>
                    <div>
                        <p className='text-[#757575] group-hover:text-white text-sm text-center'>Get consultation form our DNA Mapping team</p>
                    </div>
                </div>

                <div className='group flex flex-col gap-4 items-center rounded-2xl hover:bg-[#3D9DF1]  p-4 shadow-2xl shadow-[#0086FF1A] '>
                    <div className='bg-[#F6F9FE] group-hover:bg-[#ECF6FF] h-25 w-25 md:h-28 md:w-28 rounded-3xl flex justify-center items-center'>
                        <img className='' src="./images/Vector (9).png" alt="" />

                    </div>
                    <div>
                        <p className='font-medium text-lg group-hover:text-white'>Ophthalmology</p>
                    </div>
                    <div>
                        <p className='text-[#757575] group-hover:text-white text-sm text-center'>Get consultation from our Opthalmology team</p>
                    </div>
                </div>

                <div className='group flex flex-col gap-4 items-center rounded-2xl hover:bg-[#3D9DF1]  p-4 shadow-2xl shadow-[#0086FF1A] '>
                    <div className='bg-[#F6F9FE] group-hover:bg-[#ECF6FF] h-25 w-25 md:h-28 md:w-28 rounded-3xl flex justify-center items-center'>
                        <img className='' src="./images/Vector (10).png" alt="" />

                    </div>
                    <div>
                        <p className='font-medium text-lg group-hover:text-white'>Medical Aid </p>
                    </div>
                    <div>
                        <p className='text-[#757575] group-hover:text-white text-sm text-center'>Get consultation from our Emergency Medical Aid team</p>
                    </div>
                </div>
            </div> */}

            <div className='grid md:grid-cols-3 gap-15 pl-15 pr-15 sm:pl-10 sm:pr-10'>
                {
                    data.slice(0,visibleCards).map(ele=>(
                        <div key={ele.id} className='group flex flex-col gap-4 items-center rounded-2xl hover:bg-[#3D9DF1] p-4 shadow-2xl shadow-[#0086FF1A]'>
                            <div className='bg-[#F6F9FE] group-hover:bg-[#ECF6FF] h-25 w-25 md:h-28 md:w-28 rounded-3xl flex justify-center items-center'>
                                <img src={ele.img} alt="" />
                            </div>
                            <h1 className='font-medium text-lg group-hover:text-white'>{ele.head}</h1>
                            <p className='text-[#757575] group-hover:text-white text-sm text-center'>{ele.desc}</p>
                        </div>
                    ))
                }
            </div>

            <div className='flex gap-15'>
                {
                    visibleCards<data.length && (
                        <button onClick={handleShowMore} className='rounded-lg bg-white p-4 shadow-2xl shadow-[#0086FF1A]'>Show More</button>
                    )
                }
                {
                    visibleCards>3 && (
                        <button onClick={handleShowLess} className='rounded-lg bg-white p-4 shadow-2xl shadow-[#0086FF1A]'>Show Less</button>
                    )
            
                }

            </div>

        </div>
      
    </div>
  )
}

export default Section3
