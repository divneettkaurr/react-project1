import React from 'react'
import { FaBars } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
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
        <NavLink to={'/'} className={({isActive})=>`${isActive?"text-sm p-2  rounded-sm bg-[#2E424D]":""} text-[#5B8291]` }>Home</NavLink>
        <NavLink to={'/about'} className={({isActive})=>`${isActive?"text-sm p-2 rounded-sm bg-[#2E424D]":""}  text-[#5B8291]`}>About</NavLink>
        <NavLink to={'/services'} className={({isActive})=>`${isActive?"text-sm p-2 rounded-sm bg-[#2E424D]":""}  text-[#5B8291]`}>Services</NavLink>
        <NavLink to={'/contact'} className={({isActive})=>`${isActive?"text-sm p-2 rounded-sm bg-[#2E424D]":""}  text-[#5B8291]`}>Contact</NavLink>
    </div>

    <div className='flex items-center sm:hidden'>
        <FaBars className='text-xl'/>
    </div>
   </nav>
  )
}

export default Navbar
