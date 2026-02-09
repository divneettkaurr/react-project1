import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { IoIosArrowForward } from 'react-icons/io'

const Footer = () => {
  return (
    <div>
      <div>

        {/* footer */}
        <div className='flex flex-col gap-15 items-center bg-[#1F1F1F] pt-10 pb-10'>
          
          <div className='flex text-[#98DAD9] md:w-[67%]'>
            
            <div className='flex items-center justify-around gap-8 bg-[#617C8B] p-4 md:p-9'>
              <div>
                <img src="./images/map.png" alt="" />
              </div>
              <div className='flex flex-col gap-1 sm:gap-0'>
                <p className='text-xs sm:text-sm md:text-md'>Find a clinic near you</p>
                <p className='text-xs sm:text-sm md:text-md'>Find Us On Map</p>
              </div>
            </div>

            <div className='flex items-center justify-around gap-8 bg-[#466774] p-4 md:p-9'>
              <div>
                <img src="./images/email.png" alt="" />
              </div>
              <div className='flex flex-col gap-1 sm:gap-0'>
                <p className='text-xs sm:text-sm md:text-md'>Feel free to message us!</p>
                <p className='text-xs sm:text-sm md:text-md'>Send an Email</p>
              </div>
            </div>

            <div className='flex items-center justify-around gap-8 bg-[#30515E] p-4 md:p-9'>
              <div>
                <img src="./images/phone1.png" alt="" />
              </div>
              <div className='flex flex-col  gap-1 sm:gap-0'>
                <p className='text-xs sm:text-sm md:text-md'>To book an appointment, call us on</p>
                <p className='text-xs sm:text-sm md:text-md'>+91 9701757017</p>
              </div>
            </div>
          </div>

          
          <div className='grid md:grid-cols-3 gap-10 md:gap-13 text-[#5B8291] w-[90%] md:w-[67%] mt-6'>
            
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-3'>
                <p className='text-2xl font-medium'>About us </p>
                <div className='h-0 w-20  border text-[#98DAD9]'></div>
              </div>
              
              <div>
                <p className='text-md md:text-xl'>Dr. Vivekananda is one of the best orthopaedic surgeons in Hyderabad rendering expert treatment in replacement surgeries, bone trauma diagnosis and holds in-depth knowledge in pathologies around knee & hip joint, treatment and concerned surgeries.</p>
              </div>

            </div>

            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-3'>
                <p className='text-2xl font-medium'>Get in Touch </p>
                <div className='h-0 w-20  border text-[#98DAD9]'></div>
              </div>
              
              <div className='flex flex-col gap-3'>
                <div className='flex gap-3'>
                  <div>
                    <img className='h-10 w-12 md:w-42' src="./images/map.png" alt="" />
                  </div>
                  <div>
                    <p className='text-md md:text-xl'>Flat no 101, Madhura Heights, 1st floor, opposite Bank of Baroda, Rajeev Nagar, Hyderabad, Telangana – 500018 .</p>
                  </div>
                </div>

                <div className='flex gap-3'>
                  <div>
                    <img className='h-9 w-9 ' src="./images/email.png" alt="" />
                  </div>
                  <div>
                    <p className='text-md md:text-xl'>dr.b.vivekananda@gmail.com</p>
                  </div>
                </div>

                <div className='flex gap-3'>
                  <div>
                    <img className='h-8 w-8' src="./images/phone1.png" alt="" />
                  </div>
                  <div>
                    <p className='text-md md:text-xl'>+91 9701757017</p>
                  </div>
                </div>
              </div>

            </div>

            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-3'>
                <p className='text-2xl font-medium'>Additional Link</p>
                <div className='h-0 w-20  border text-[#98DAD9]'></div>
              </div>
              
              <div className='flex flex-col gap-3'>
                <div className='flex gap-1 items-center'>
                  <IoIosArrowForward/>
                  <p className='text-md md:text-xl'>Core Clinic</p>
                </div>
                <div className='flex gap-1 items-center'>
                  <IoIosArrowForward/>
                  <p className='text-md md:text-xl'>Service</p>
                </div>
                <div className='flex gap-1 items-center'>
                  <IoIosArrowForward/>
                  <p className='text-md md:text-xl'>About</p>
                </div>
                <div className='flex gap-1 items-center'>
                  <IoIosArrowForward/>
                  <p className='text-md md:text-xl'>Contact</p>
                </div>
                 
              </div>

            </div>
          </div>
          

          <div className='flex flex-col gap-13 items-center'>
            
            <div className='flex flex-col gap-2'>
              <div>
                <p className='text-3xl sm:text-4xl font-medium text-[#5B8291]'>Schedule An Appointment</p>
              </div>
              <div className='h-0 w-20 border text-[#98DAD9]'></div>
            </div>
            
            <div className='flex flex-col gap-10 '>
            <div className='flex gap-16 sm:gap-20 '>
              <input type="text" placeholder='First Name' className='text-center text-[#9F9F9F] text-xs bg-white p-2 pl-0 pr-0 '/>
              <input type="text" name="" id="" placeholder='Last Name' className='text-center text-[#9F9F9F] text-xs bg-white p-2  pl-0 pr-0'/>
            </div>

            
            <div className='flex gap-16 sm:gap-20 '>
              <input type="text" placeholder='Phone Number' className='text-center text-[#9F9F9F] text-xs bg-white p-2  pl-0 pr-0' />
              <input type="text" name="" id="" placeholder='Email' className='text-center text-[#9F9F9F] text-xs bg-white p-2  pl-0 pr-0'/>
            </div>
            </div>

            <div className='flex gap-2 text-[#98DAD9] p-3 pl-15 rounded-lg pr-13 bg-[#2E424D] justify-center items-center'>
              <p>Submit</p>
              <FaArrowRightLong />

            </div>

          </div>
        </div>


        {/* copyright */}
        <div className='flex justify-between items-center text-white bg-[#0E0E0E] p-4 md:pl-60 md:pr-60'>
          <div>
            <p className='text-sm sm:text-lg'>© 2023 Dr. Gaurav Jadon. All rights reserved.</p>
          </div>

          <div className='flex gap-4 sm:gap-10 md:gap-20 items-center'>
            <div className='flex gap-3 sm:gap-5 md:gap-20'>
              <p className='text-sm sm:text-lg'>Privacy</p>
              <p className='text-sm sm:text-lg'>Terms</p>
              <p className='text-sm sm:text-lg'>Sitemap</p>
            </div>
            <div>
              <img className='h-4 w-16 sm:h-5 sm:w-20 md:h-7 md:w-30' src="./images/social.png" alt="" />
            </div>
          </div>
        </div>
      </div>
        
      
    </div>
  )
}

export default Footer
