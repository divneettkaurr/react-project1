import React from 'react'

const Hero = () => {

    const data=[
        {
            head:"Lorem Ipsum Has Been ",
            desc:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        },
        {
            head:"Lorem Ipsum Has Been ",
            desc:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        }
    ]
  return (
    <div>
      
      <div className='flex flex-col '>

        {/* up part */}
        <div className='flex flex-col gap-7 bg-[#E8E6EB] p-14 md:p-20 text-center'>
            <div>
                <p className='text-[#00264F] text-3xl md:text-4xl font-bold'>Lorem Ipsum Has Been In</p>
            </div>
            <div className='md:pl-50 md:pr-50'>
                <p className='text-[#00264F] text-sm md:text-lg'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
            </div>
        </div>

        {/* down part-2 card */}
        {/* <div className='grid ml-10 mr-10 sm:ml-5 sm:mr-5 sm:grid-cols-2 gap-6 m-8 md:m-10 md:ml-15 md:mr-15'>

            <div className='flex flex-col p-10 pt-20 pb-20 md:pt-37 md:pb-37 gap-3 bg-linear-to-b from-gray-300 via-gray-600 to-gray-900 '>
                <div>
                    <p className='text-white text-3xl md:text-4xl font-bold'>Lorem Ipsum Has Been </p>
                </div>
                <div>
                    <p className='text-white text-sm sm:text-md md:text-lg'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </div>

            </div>

            <div className='flex flex-col p-10 pt-20 pb-20 md:pt-37 md:pb-37 gap-3 bg-linear-to-b from-gray-300 via-gray-600 to-gray-900 '>
                <div>
                    <p className='text-white text-3xl md:text-4xl font-bold'>Lorem Ipsum Has Been </p>
                </div>
                <div>
                    <p className='text-white text-sm sm:text-md md:text-lg'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </div>

            </div>

        </div> */}

        <div className='grid md:grid-cols-2 gap-10 m-10'>
            {
                data.map(elem=>(
                    <div className='flex flex-col gap-3 bg-linear-to-b from-gray-300 via-gray-600 to-gray-900 p-10 pt-20 pb-20 md:pt-37 md:pb-37'>
                        <h1 className='text-white text-3xl md:text-4xl font-bold'>{elem.head}</h1>
                        <p className='text-white text-sm md:text-lg'>{elem.desc}</p>
                    </div>
                ))
            }
        </div>

      </div>

    </div>
  )
}

export default Hero
