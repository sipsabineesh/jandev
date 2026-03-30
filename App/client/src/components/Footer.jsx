import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <footer className="flex flex-col items-center justify-around w-full py-16 text-sm bg-slate-50 text-gray-800/70">
                 <img src={assets.jandev_logo} className="h-12 md:h-16 lg:h-20 w-auto" alt="logo"/>
                <p className="mt-4 text-center">Copyright © {new Date().getFullYear()} | <a href="https://jan-dev-enterprises.com">SLBUI</a>. All rights reservered.</p>
               
        </footer>
    </div>
  )
}

export default Footer