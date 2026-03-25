import React from 'react'

const Loader = () => {
  return (
    <div className="animate-pulse px-6 md:px-16 lg:px-24 py-6 space-y-10">

      {/* Banner Loader */}
      <div className="w-full h-[750px] bg-gray-300 rounded-lg"></div>

      {/* Services */}
        <div className="mt-16">
        <div className="h-6 w-40 bg-gray-300 rounded mb-6"></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6">
            
            {Array.from({ length: 7 }).map((_, index) => (
            <div
                key={index}
                className="py-5 px-3 rounded-lg flex flex-col justify-center items-center bg-gray-300 animate-pulse"
            >
                <div className="w-16 h-16 bg-gray-400 rounded mb-2"></div>
                <div className="h-3 w-16 bg-gray-400 rounded"></div>
            </div>
            ))}

        </div>
        </div>
      {/* Contact Section */}
        <div className="mx-auto p-10 mt-8 animate-pulse">

        {/* Badge */}
        <div className="h-5 w-32 bg-gray-300 rounded-full"></div>

        {/* Heading */}
        <div className="h-10 w-80 bg-gray-300 rounded mt-4"></div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 mt-16 gap-6">

            {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="mt-6">

                {/* Icon */}
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>

                {/* Title */}
                <div className="h-5 w-40 bg-gray-300 rounded mt-3"></div>

                {/* Description */}
                <div className="h-4 w-56 bg-gray-200 rounded mt-2"></div>
                <div className="h-4 w-48 bg-gray-200 rounded mt-2"></div>

                {/* Link / Text */}
                <div className="h-4 w-44 bg-gray-300 rounded mt-3"></div>

            </div>
            ))}

        </div>
        </div>
    {/* Bottom Banner */}
        <div className="relative mt-24 animate-pulse">

        {/* Banner Image */}
        <div className="w-full h-[500px] bg-gray-300"></div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-24">

            <div className="ml-20">

            {/* Heading */}
            <div className="h-6 w-48 bg-gray-300 rounded mb-6"></div>

            {/* Features */}
            {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="flex items-start gap-4 mt-4">

                {/* Icon */}
                <div className="w-10 h-10 bg-gray-300 rounded"></div>

                {/* Text */}
                <div>
                    <div className="h-5 w-40 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 w-56 bg-gray-200 rounded"></div>
                </div>

                </div>
            ))}

            </div>

        </div>
        </div>
    </div>
  )
}

export default Loader