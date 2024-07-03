import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='bg-[#387EF5] py-5 '>
      <div className='max-w-[1300px] grid grid-cols-2 mx-auto text-white'>
       <div className='text-[20px]'><Link to={'/'}>ECom Product</Link></div>     
       <div className='flex justify-end gap-2 text-[17px] font-medium'>
            <NavLink className='hover:bg-[white] hover:text-[#387EF5] py-1 px-3 duration-100 rounded-[30px]' to={'/'}>Home</NavLink>
            <NavLink  className="hover:bg-[white] hover:text-[#387EF5] py-1 px-3 duration-100 rounded-[30px]" to={'upload'}>Uploads Product</NavLink>
            <NavLink  className="hover:bg-[white] hover:text-[#387EF5] py-1 px-3 duration-100 rounded-[30px]" to={'Login'}>Login</NavLink>
            <NavLink  className="hover:bg-[white] hover:text-[#387EF5] py-1 px-3 duration-100 rounded-[30px]" to={'signup'}>Sign up</NavLink>
        </div>     
      </div>
    </div>
  )
}

export default Header
