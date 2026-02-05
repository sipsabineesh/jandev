import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <footer className="flex flex-col items-center justify-around w-full py-16 text-sm bg-slate-50 text-gray-800/70">
                 <img src={assets.logo} className="w-15" alt="logo"/>
                <p className="mt-4 text-center">Copyright © {new Date().getFullYear()} | <a href="https://jan-dev-enterprises.com">LavenderCartUI</a>. All rights reservered.</p>
               
        </footer>
    </div>
  )
}

export default Footer