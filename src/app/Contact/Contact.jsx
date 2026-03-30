import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'

const Contact = () => {
  return (
    <div>
        <section className='flex-col  gap-10 flex md:flex-row md:gap-5 p-10 md:pb-10 md:p-0'>
            
            <div className='flex flex-col gap-10 md:w-[50%] md:pl-30 justify-center sm:pl-10 sm:pr-10 md:pr-0'>
                
                <div className='flex flex-col gap-3'>
                    <p className='text-4xl font-bold '>Get in <span className='text-[#2E424D] text-4xl'> Touch</span></p>
                    <p>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
                </div>

                <div className='flex flex-col gap-3'>
                    <input className='border border-[#E0E0E0] p-2 text-sm' type="text" placeholder='Name' required/>
                    <input className='border border-[#E0E0E0] p-2 text-sm' type="text" placeholder='Email' required />
                    <input className='border border-[#E0E0E0] p-2 text-sm' type="text" placeholder='Phone Number' required />
                    <div className='flex justify-between items-center border border-[#E0E0E0] p-2'>
                        <label className='text-sm' htmlFor="find">How did you find us?</label>
                        <IoMdArrowDropdown className='focus:find' />
                        {/* <select name="" id="find" className='hidden'>
                            <option value="reference">Reference</option>
                            <option value="online">Online</option>
                        </select> */}
                    </div>
                    <button className='bg-[#2E424D] p-3 text-white font-medium'>SEND</button>
                </div>

                <div className='flex-col flex sm:flex-row gap-10 sm:gap-15 md:gap-20'>
                    <div className='flex gap-5 xs:gap-3 items-center'>
                        <div>
                            <img src="./images/phone2.png" alt="" />
                        </div>
                        <div className=' flex sm:flex-col gap-4 sm:gap-0 text-xs sm:text-sm'>
                            <p>PHONE</p>
                            <p className='text-red-400'>03 5432 1234</p>
                        </div>
                    </div>

                    <div className='flex gap-5 xs:gap-3 items-center'>
                        <div>
                            <img src="./images/fax.png" alt="" />
                        </div>
                        <div className='flex sm:flex-col gap-4 sm:gap-0 text-xs sm:text-sm'>
                            <p>FAX</p>
                            <p className='text-red-400'>03 5432 1234</p>
                        </div>
                    </div>

                    <div className='flex gap-5 xs:gap-3 items-center'>
                        <div>
                            <img src="./images/email1.png" alt="" />
                        </div>
                        <div className='flex sm:flex-col gap-4 sm:gap-0 text-xs sm:text-sm '>
                            <p>EMAIL</p>
                            <p className='text-red-400'>info@marcc.com.au</p>
                        </div>
                    </div>

                </div>

            </div>


            <div className='md:w-[50%] flex justify-center '>
                <iframe  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d297759.18817788624!2d76.66908546465041!3d30.74591807598865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1770655503330!5m2!1sen!2sin" width="" height="" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='md:h-150 h-90 w-140'></iframe>
            </div>

        </section>
      
    </div>
  )
}

export default Contact
