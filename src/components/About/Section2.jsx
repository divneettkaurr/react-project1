import React from 'react'

const Section2 = () => {
  return (
    <div>
        <div className='relative'>

            <div>
                <img className='h-screen w-screen object-cover' src="./images/about-bg1.png" alt="" />

            </div>

            <div className='absolute top-15 sm:top-25 md:top-1/4 flex-col flex md:flex-row gap-8 md:gap-15 pl-20 pr-20 md:pl-30 md:pr-20 text-center md:text-left'>

                <div>
                    <p className='text-3xl md:text-4xl font-bold text-[#5B8291]'>DR.Gaurav Jadon MBBS, DCH, DNB Pediatrics, EBP (Europe)</p>
                </div>

                <div className='flex flex-col gap-4'>
                    <div>
                        <p className='text-[#5B8291] text-lg md:text-2xl'>Dr. Gaurav Jadon is an experienced Consultant Pediatrician with 28 years of clinical practice across India, Kuwait, and the UAE. He specializes in General Pediatrics, Neonatology, and Pediatric Intensive Care, providing safe, compassionate, and evidence-based care for newborns, infants, and children.</p>
                    </div>
                    <div>
                        <p className='text-[#5B8291] text-lg md:text-2xl'>Over the years, he has managed a wide range of pediatric and neonatal conditions, including premature newborn care, pediatric emergencies, and complex critical cases. His calm approach, strong clinical judgment, and commitment to medical excellence have earned the trust of families and colleagues alike.</p>
                    </div>
                    <div>
                        <p className='text-[#5B8291] text-lg md:text-2xl'>Dr. Jadon is also actively involved in teaching, clinical audits, and international medical conferences, contributing to the advancement of pediatric healthcare. He currently serves at NMC Specialty Hospital, Dubai, where he continues to deliver high-quality child healthcare with a family-centered and empathetic approach.</p>
                    </div>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Section2
