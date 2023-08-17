import React from 'react'
import { NavLink } from 'react-router-dom';


const NavigationBar = () => {


  return (
    <div className=' flex bg-slate-900 text-white justify-around p-2'>
        <div className='ml-10'>
       <a href="/" className='text-2xl text m-2'>EasyOps</a>
       </div>
       <div  className=' mr-10'>
         <NavLink className='hover:bg-sky-300 m-2' to="/">ALL USERS</NavLink>
         <NavLink className='hover:bg-sky-300 m-2' to="/places/new">ADD CUSTOMER</NavLink> 
       </div>
    </div>
  )
}

export default NavigationBar;
