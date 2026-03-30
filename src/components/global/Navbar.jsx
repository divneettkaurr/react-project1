import React, { useContext, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import Home from '../../app/Home/Home'
import About from '../../app/About/About'
import Services from '../../app/Services/Services'
import Contact from '../../app/Contact/Contact'
import { RxCross1 } from 'react-icons/rx'
import { FaX } from 'react-icons/fa6'
import { ThemeContext } from '../../ContextAPI/ThemeContext'

const Navbar = () => {

      const {theme, toggleTheme}=useContext(ThemeContext)

      const [isOpen , setIsOpen]= useState(false)

      const handleToggle=()=>{
        setIsOpen(!isOpen)
      }
    
   

      const navData=[

        {
          id:"0",
          icon:"Home",
          path:"/"
        },
        {
          id:"1",
          icon:"About",
          path:"/about"
        },
        {
          id:"2",
          icon:"Services",
          path:"/services"
        },
        {
          id:"3",
          icon:"Contact",
          path:"/contact"
        }


      ]
    




  return (



  //  <nav className='flex justify-between p-10 text-[#5B8291] '>
  //   <div className='flex flex-col'>
  //     <div>
  //       <h1 className='text-3xl font-medium '>Dr. Gaurav Jadon</h1>
  //     </div>
  //     <div className='flex gap-1 items-center'>
  //       <div className='h-0 w-20 border '></div>
  //       <div>
  //         <p className='text-sm '>Consultant Pediatrician</p>
  //       </div>
        
  //     </div>
      
  //   </div>
    
  //   <div className='hidden sm:gap-8 sm:flex md:gap-14 sm:items-center'>
  //       <NavLink to={'/'} className={({isActive})=>`${isActive?"text-sm p-2  rounded-sm bg-[#2E424D]":""} text-[#5B8291]` }>Home</NavLink>
  //       <NavLink to={'/about'} className={({isActive})=>`${isActive?"text-sm p-2 rounded-sm bg-[#2E424D]":""}  text-[#5B8291]`}>About</NavLink>
  //       <NavLink to={'/services'} className={({isActive})=>`${isActive?"text-sm p-2 rounded-sm bg-[#2E424D]":""}  text-[#5B8291]`}>Services</NavLink>
  //       <NavLink to={'/contact'} className={({isActive})=>`${isActive?"text-sm p-2 rounded-sm bg-[#2E424D]":""}  text-[#5B8291]`}>Contact</NavLink>
  //   </div>

  //   <div className='flex items-center sm:hidden'>
  //       <FaBars className='text-xl'/>
  //   </div>
  //  </nav>


<>
  <div className='relative'>


    <nav className='flex justify-between p-10 text-[#5B8291] '>

      <div className='flex flex-col'>
        <div>
          <h1 className='text-3xl font-medium '>Dr. Gaurav Jadon</h1>
        </div>
        <div className='flex gap-1 items-center'>
          <div className='h-0 w-20 border '></div>
          <div>
           <p className='text-sm '>Consultant Pediatrician</p>
          </div>
        
        </div>
      
      </div>

      
      <div className='hidden sm:gap-8 sm:flex md:gap-14 sm:items-center'>
        {
           navData.map(ele=>(
          <NavLink key={ele.id} to={(ele.path)} className={({isActive})=>`${isActive?"text-sm p-2  rounded-sm bg-[#2E424D]":""} text-[#5B8291]` }>{ele.icon}</NavLink>

          ))
        }

        <button className='relative' onClick={toggleTheme}>
          {/* {theme==="dark"?"light":"dark"} */}
          <div className=' p-4 pl-8 pr-8 rounded-2xl bg-[#2E424D]'></div>
          <div className='absolute top-1 left-1 p-3 rounded-full bg-white dark:translate-x-8 duration-600'></div>
      </button>

      </div>

      {/* <div className='flex items-center sm:hidden'>
        <FaBars className='text-xl'/>
      </div> */}

      {/* <div onClick={()=>handleToggle()} className='flex items-center sm:hidden'>
        {isOpen?<FaX/>:<FaBars/>}
      </div> */}

      <div onClick={()=>handleToggle()} className='flex items-center sm:hidden'>
        {isOpen?"":<FaBars/>}
      </div>

      
      
      
    
    </nav>





    {/* Vertical navbar  */}

    { isOpen && (<nav className='sm:hidden flex flex-col gap-20  p-10 text-[#5B8291] absolute top-0 right-0 bg-white z-1 h-screen pt-15 w-[50%]'>


      {/* <div className='flex sm:hidden'>
        <RxCross1/>
      </div> */}

      <div onClick={()=>handleToggle()} className='sm:hidden '>
        {isOpen?<FaX/>:""}
      </div>
      
      <div className='flex flex-col gap-14 items-center'>
        {
           navData.map(ele=>(
          <NavLink key={ele.id} to={(ele.path)} className={({isActive})=>`${isActive?"text-sm py-5 px-10  rounded-sm bg-[#2E424D]":""} text-[#5B8291]` }>{ele.icon}</NavLink>

          ))
        }

      </div>

    </nav>
    )
  }
  </div>
  
</>
  )
}

export default Navbar
