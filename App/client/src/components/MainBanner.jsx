import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const banners = [
  { lg: assets.main_banner_bg, sm: assets.main_banner_bg_sm },
  { lg: assets.banner2, sm: assets.banner2_sm },
  // { lg: assets.banner3, sm: assets.banner3_sm },
]

const MainBanner = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length)
    }, 4000) // changes every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative overflow-hidden">
      {/* Desktop */}
      <img
        src={banners[current].lg}
        alt="banner"
        className="w-full hidden md:block object-cover h-[750px] transition-all duration-700"
      />

      {/* Mobile */}
      <img
        src={banners[current].sm}
        alt="banner"
        className="w-full md:hidden object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24 bg-black/10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15 text-white">
          Your Trusted Property Advisor
        </h1>

        <div className="flex items-center mt-6">
          <Link
            to="/"
            className="group flex items-center gap-2 px-7 md:px-9 py-3 bg-black hover:bg-white hover:text-black transition rounded text-white"
          >
            Explore
          </Link>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default MainBanner

