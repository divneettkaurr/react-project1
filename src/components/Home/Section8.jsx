import React from 'react'

const Section8 = () => {

    const data=[

        {
            img:"./images/section8-img1.png",
            head:"Newborn & Neonatal Care",
            desc:"Comprehensive care for newborns, including premature babies and NICU-level support. Expert in neonatal resuscitation, ventilation, surfactant therapy, and management of high-risk newborn conditions."

        },

        {
            img:"./images/section8-img2.png",
            head:"General Pediatrics",
            desc:"Complete medical care for infants, children, and adolescents—covering infections, allergies, nutrition, growth, development, vaccinations, and long-term pediatric health."


        },

        {
            img:"./images/section8-img3.png",
            head:"Pediatric Intensive Care",
            desc:"Advanced management of critically ill children, including respiratory failure, sepsis, trauma, and complex emergencies. Skilled in mechanical ventilation, PICU protocols, and multidisciplinary pediatric critical care."

        }

    ]


  return (
    <div>
        {/* <div className='grid md:grid-cols-3 gap-10 pl-10 pr-10 sm:pl-35 sm:pr-35 md:pl-30 md:pr-30 text-center '>

            <div className='flex flex-col gap-5 bg-[#E8E8E8] rounded-lg md:pl-10 md:pr-10 pt-10 pb-8 items-center'>
                <div>
                    <img src="./images/section8-img1.png" alt="" /> 
                </div>
                <div>
                    <p className='text-xl font-medium'>Newborn & Neonatal Care</p>
                </div>
                <div>
                    <p className='text-[#5B8291] text-lg pl-10 pr-10 md:pl-0 md:pr-0'>Comprehensive care for newborns, including premature babies and NICU-level support. Expert in neonatal resuscitation, ventilation, surfactant therapy, and management of high-risk newborn conditions.</p>
                </div>
            </div>


            <div className='flex flex-col gap-5 bg-[#E8E8E8] rounded-lg md:pl-10 md:pr-10 pt-10 pb-8 items-center '>
                <div>
                    <img src="./images/section8-img1.png" alt="" />
                </div>
                <div>
                    <p className='text-xl font-medium'>Newborn & Neonatal Care</p>
                </div>
                <div>
                    <p className='text-[#5B8291] text-lg pl-10 pr-10 md:pl-0 md:pr-0'>Comprehensive care for newborns, including premature babies and NICU-level support. Expert in neonatal resuscitation, ventilation, surfactant therapy, and management of high-risk newborn conditions.</p>
                </div>
            </div>


            <div className='flex flex-col gap-5 bg-[#E8E8E8] rounded-lg md:pl-10 md:pr-10 pt-10 pb-8 items-center'>
                <div>
                    <img src="./images/section8-img1.png" alt="" />
                </div>
                <div>
                    <p className='text-xl font-medium'>Newborn & Neonatal Care</p>
                </div>
                <div>
                    <p className='text-[#5B8291] text-lg pl-10 pr-10 md:pl-0 md:pr-0'>Comprehensive care for newborns, including premature babies and NICU-level support. Expert in neonatal resuscitation, ventilation, surfactant therapy, and management of high-risk newborn conditions.</p>
                </div>
            </div>
        </div> */}


        <div className='grid md:grid-cols-3 gap-10 pl-10 pr-10 md:pl-30 md:pr-30 '>
            {
                data.map(elem=>(
                    <div className='flex flex-col gap-7 bg-[#E8E8E8] p-8 rounded-2xl'>
                        <img className='text-lg font-bold' src={elem.img} alt="" />
                        <h1 className='text-2xl font-bold'>{elem.head}</h1>
                        <p className='text-[#5B8291]'>{elem.desc}</p>   
                    </div>
                ))
            }
        </div>
      
    </div>
  )
}

export default Section8
