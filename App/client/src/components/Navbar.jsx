import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Navbar = () => {
     const [open, setOpen] = React.useState(false)
     const {user,setUser,setShowUserLogin,navigate} = useAppContext()

     const logout =  async() => {
        setUser(null)
        navigate('/')
     }

  return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            <NavLink to="/" onClick={() => setOpen(false)}>
             <img src={assets.logo} className="w-15" alt="logo"/>
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
               <NavLink to="/">Home</NavLink> 
               <NavLink to="/">All Projects</NavLink> 
               <NavLink to="/">Contact</NavLink>
                {/* <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search projects" />
                </div> */}

          {/* {!user ? (
                <button onClick={() => {
                    setShowUserLogin(true)
                }} className="cursor-pointer px-6 py-2 mt-2 bg-black hover:bg-white transition text-white hover:text-black border border-transparent
  hover:border-black rounded-full text-sm">
                    Login
                </button>
             ) : (
                <div className="relative group">
                    <img src={assets.profile_icon} className="w-10" alt=""/>
                    <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40">
                        <li  onClick={() =>  navigate("my-orders")} className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer">My Orders</li>
                        <li  onClick={logout} className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer">Logout</li>
                    </ul>
                </div>
             ) } */}

{/* {!user ? ( */}
                {/* <button className="cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full">
                    Login
                </button> */}
                {/* // )} */}
            </div>

            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                {/* Menu Icon SVG */}
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="1.5" rx=".75" fill="#426287" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                </svg>
            </button>

            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                    <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink> 
                    <NavLink to="/"  onClick={() => setOpen(false)}>All Products</NavLink> 
                    {user &&
                        <NavLink to="/"  onClick={() => setOpen(false)}>My Orders</NavLink>
                    }
                    <NavLink to="/"  onClick={() => setOpen(false)}>Contact</NavLink>
               
             {!user ? (
                <button onClick={() => {
                    setOpen(false);
                    setShowUserLogin(true)
                }} className="cursor-pointer px-6 py-2 mt-2 bg-black hover:bg-white transition text-white hover:text-black border border-transparent
  hover:border-black rounded-full text-sm">
                    Login
                </button>
             ) : (
                 <button  onClick={logout} className="cursor-pointer px-6 py-2 mt-2 bg-black hover:bg-white transition text-white hover:text-black border border-transparent
  hover:border-black rounded-full text-sm">
                    Logout
                </button>
             ) }
              
            </div>

        </nav>
    )
}

export default Navbar