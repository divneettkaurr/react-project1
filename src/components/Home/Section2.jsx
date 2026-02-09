import React from 'react'

const Section2 = () => {
  return (
    <div>
    <div className='gap-7 pl-20 pr-20 sm:pl-4 sm:pr-4 grid sm:grid-cols-3 md:gap-18 md:pl-40 md:pr-40 mt-20 '>

        {/* 1st card */}
        <div className='gap-4 flex flex-col p-6 md:gap-10 bg-[#364F59] text-white border text-sm md:text-md border-white shadow-xl/40 hover:shadow-xl/60'>
            <div>
                <p>Clinic Location</p>
            </div>
            
            <div>
                <p>NMC Specialty Hospital, DubaiAl Nahda 2, Dubai, UAE providing comprehensive pediatric, neonatal & emergency care in a modern clinical environment.</p>
            </div>
            
            <div>
                <button className='flex gap-3 border border-white items-center p-2'>
                    <p>Contact Us</p>
                    <img className='h-3 w-5' src="./images/arrow.png" alt="" />
                </button>
            </div>
            
        </div>

        {/* 2nd card */}
        <div className='gap-4 flex flex-col p-6 md:gap-7 bg-[#364F59] text-white border text-sm md:text-md border-white shadow-xl/40 hover:shadow-xl/60'>
            <div className='flex justify-between items-center'>
                <p>Schedule an Appointment</p>
                <img src="./images/2arrows.png" alt="" />
            </div>
            
            <div>
                <p>NMC Specialty Hospital, Dubai</p>
            </div>

            <div className='h-0 w-full border border-white'></div>

            <div className='flex justify-between'>
                
                    <p>Mon - Sat</p>
                    <p>5.30PM - 9.00PM</p>

                
            </div>

            <div className='h-0 w-full border border-white'></div>
            
            <div>
                <p>For consultations, vaccinations, newborn care & pediatric follow-ups.</p>
            </div>
            
        </div>
        
        {/* 3rd Card */}
        <div className='gap-8 flex flex-col p-6 md:gap-10 bg-[#364F59] text-white border text-sm md:text-md border-white shadow-xl/40 hover:shadow-xl/60'>
            <div>
                <p>Contact Details</p>
            </div>
            
            <div>
                <p>For appointments and urgent queries:</p>
            </div>
            
            <div>
                <button className='flex gap-3 border border-white items-center p-2'>
                    
                    <img className='h-4 w-4' src="./images/phone.png" alt="" />
                    <p>+971 50 587 0574</p>
                </button>
            </div>
            
        </div>
        
    </div>
    </div>
  )
}

export default Section2
