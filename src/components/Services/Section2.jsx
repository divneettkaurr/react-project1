import React from 'react'

const Section2 = () => {
  return (
    <div>

        <div className='flex-col ml-10 mr-10 sm:ml-5 sm:mr-5  gap-10 sm:gap-4 flex sm:flex-row md:gap-10 m-5 md:pl-10'>

           <div className=' sm:w-[50%] h-90 sm:h-100 bg-[#C4C4C4] '></div>

           <div className='sm:w-[50%] flex flex-col gap-4 justify-center  sm:pl-10 sm:md:pr-40 text-center sm:text-left'>
            <p className='text-[#00264F] text-2xl sm:text-3xl font-extrabold'>Lorem Ipsum Has </p>
            <p className='text-sm sm:text-md'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
           </div>

        </div>
      
    </div>
  )
}

export default Section2
