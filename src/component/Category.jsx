import React from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import ProductCarousel from './ProductCarousel';



const ImagesItems = [
     {
          name: 'images/Banner/banner1.jpg',
          pra: 'This is Blog Website'
     },
     {
          name: 'images/Banner/banner1.jpg',
          pra: 'This is Blog Website'
     },
     {
          name: 'images/Banner/banner1.jpg',
          pra: 'This is Blog Website'
     },
     {
          name: 'images/Banner/banner1.jpg',
          pra: 'This is Blog Website'
     },
     {
          name: 'images/Banner/banner1.jpg',
          pra: 'This is Blog Website'
     },
     {
          name: 'images/Banner/banner1.jpg',
          pra: 'This is Blog Website'
     },
     {
          name: 'images/Banner/banner2.jpg',
          pra: 'This is Blog Website-1'
     },
     {
          name: 'images/Banner/banner3.jpg',
          pra: 'This is Blog Website-2'
     },
     {
          name: 'images/Banner/banner1.jpg',
          pra: 'This is Blog Website-3'
     },
];

const Category = () => {


     return (
          <div className=' bg-[#96ae95]/30 my-20  py-5 '>
               <div className='max-w-7xl mx-auto border bg-white/60 shadow-sm py-10 '>

                    {/* Category Section  */}
                    <div className='flex items-center justify-center'>
                         <div className='flex flex-col items-center justify-center px-16'>
                              <span className='flex items-center justify-center gap-6'>
                                   <span className='w-10 h-6 border border-gray-500/30 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300'>
                                        <FaLongArrowAltLeft className='text-gray-400 text-2xl' />
                                   </span>
                                   <h2 className='text-4xl font-bold text-center'>Categories</h2>
                                   <span className='w-10 h-6 border border-gray-500/30 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300'>
                                        <FaLongArrowAltRight className='text-gray-400 text-2xl' />
                                   </span>
                              </span>
                              <p className='text-lg text-gray-600 mt-1 px-32 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi error autem sequi ducimus ratione, molestias, et velit maiores esse, eius quo totam repellendus culpa eaque. Cumque quis ex rem minus!</p>
                         </div>
                    </div>
                    <div>
                         <div className='flex items-center justify-center py-4 px-4 rounded-lg mt-5 '>
                              <div className='grid grid-cols-3 gap-4'>
                                   {ImagesItems.map((item, index) => (
                                        <div key={index} className='flex gap-4 flex-col items-center justify-center shadow-sm  border transition duration-300'>
                                             <ProductCarousel/>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    </div>
                   
                    
                    
               </div>
          </div>


     )
}

export default Category


{/* <img src={item.name} alt="" className='w-full h-32 object-cover rounded-lg' />
                                             <p className='text-gray-600 text-sm mt-2'>{item.pra}</p> */}