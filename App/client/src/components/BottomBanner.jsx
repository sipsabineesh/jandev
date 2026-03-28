// import React from 'react'
// import { assets, features } from '../assets/assets'

// const BottomBanner = () => {
//    return (
//     <div className='relative mt-24'>
//         <img src={assets.bottom_banner_image} alt="banner" className='w-full hidden md:block'/>
//         <img src={assets.bottom_banner_image_sm} alt="banner" className='w-full  md:hidden'/>
//           <div className='absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-24'>
//             <div className='ml-20'>
//                 <h1 className="">Why We Are The Best?</h1>
//                     {features.map((feature,index) => (
//                         <div key={index} className='flex items-start gap-4 mt-4'>
                            
//                             <img 
//                             src={feature.icon} 
//                             alt={feature.title} 
//                             className='md:w-11 w-9'
//                             />

//                             <div>
//                             <h3 className='text-lg md:text-xl font-semibold'>
//                                 {feature.title}
//                             </h3>
//                             <p className='text-gray-500/70 text-xs md:text-sm'>
//                                 {feature.description}
//                             </p>
//                             </div>

//                         </div>
//                         ))}
//             </div>
//         </div>
//     </div>
//   )
// }

// export default BottomBanner
import React from 'react'
import { assets, features } from '../assets/assets'

const BottomBanner = () => {
  return (
    <div className='relative mt-24'>

      {/* Images */}
      <img 
        src={assets.bottom_banner_image} 
        alt="banner" 
        className='w-full hidden md:block'
      />
      <img 
        src={assets.bottom_banner_image_sm} 
        alt="banner" 
        className='w-full md:hidden'
      />

      {/* 🔥 Gradient ONLY for mobile */}
      <div className='absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-black/40 md:hidden'></div>

      {/* Content */}
      <div className='absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-24'>
        
        <div className='ml-6 md:ml-0 max-w-[90%] md:max-w-md'>
          
          <h1 className="text-xl md:text-3xl font-bold text-gray-900">
            Why We Are The Best?
          </h1>

          {features.map((feature, index) => (
            <div key={index} className='flex items-start gap-4 mt-4'>
              
              <img 
                src={feature.icon} 
                alt={feature.title} 
                className='md:w-11 w-9'
              />

              <div>
                <h3 className='text-base md:text-xl font-semibold text-gray-900'>
                  {feature.title}
                </h3>
                <p className='text-gray-700 text-xs md:text-sm'>
                  {feature.description}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>

    </div>
  )
}

export default BottomBanner