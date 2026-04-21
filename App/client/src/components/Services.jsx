// import React from 'react'
// import { categories } from '../assets/assets'

// const Services = () => {
//   return (
//     <div id="services" className='mt-16'>
//         <p className='text-2xl md:text-3xl font-medium'>Services</p>
//         <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6'>
//           { categories.map((category,index) => (
//             <div key={index} className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center'
//             style={{backgroundColor:category.bgColor}}
//             onClick={()  => {
//               navigate(`/products/${category.path.toLowerCase()}`) 
//               scrollTo(0,0)
//             }}>
//                 <img src={category.image} alt="" className='group-hover:scale-108 transition max-w-28'/>
//                 <p className='text-sm font-medium'>{category.text}</p>
//             </div>
//           )) }
            
//         </div>
//     </div>
//   )
// }

// export default Services

import React from 'react'
import { categories } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Services = () => {
  const navigate = useNavigate()

  return (
    <div id="services" className='mt-16 overflow-hidden scroll-mt-36'>
      
      <p className='text-2xl md:text-3xl font-medium mb-6'>
        Services
      </p>

      {/* 🔥 Slider Wrapper */}
      <div className="relative w-full overflow-hidden">

        {/* 🔥 Moving Track */}
        <div className="flex gap-6 animate-scroll">

          {/* Duplicate for infinite effect */}
          {[...categories, ...categories].map((category, index) => (
            <div
              key={index}
              className='min-w-[140px] md:min-w-[160px] group  py-5 px-3 rounded-lg flex flex-col items-center justify-center'
              style={{ backgroundColor: category.bgColor }}
              onClick={() => {
                // navigate(`/products/${category.path.toLowerCase()}`)
                scrollTo(0, 0)
              }}
            >
              <img
                src={category.image}
                alt=""
                className='group-hover:scale-110 transition max-w-20 md:max-w-24'
              />
              <p className='text-sm font-medium text-center mt-2'>
                {category.text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Services