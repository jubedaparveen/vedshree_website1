import React from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Banners } from './Banners';
import { OtherBanners } from './OtherBanners';

const Productsection = () => {
     return (
          <div className=' max-w-7xl mx-auto border shadow-sm  py-10  my-20 relative'>
               <div className='flex items-center justify-center gap-6 '>

                    <div className='basis-1/2 bg-[#315c0c] flex items-center justify-center px-10 h-auto'>
                         <div className='bg-[#315c0c] h-44  w-28 flex items-center justify-center px-10'>

                              <img src="images/product.png" alt="" className='absolute top-[-0] bottom-[-0]  w-28 h-52 flex items-center justify-center' />
                         </div>
                    </div>
                    <div className='basis-1/2 p-5'>
                         <div className='flex flex-col items-center justify-center '>
                              <span className='flex items-center justify-center gap-6'>
                                   <span className='w-10 h-6 border border-gray-500/30 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300'>
                                        <FaLongArrowAltLeft className='text-gray-400 text-2xl' />
                                   </span>
                                   <h2 className='text-4xl font-bold text-center'>Product</h2>
                                   <span className='w-10 h-6 border border-gray-500/30 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300'>
                                        <FaLongArrowAltRight className='text-gray-400 text-2xl' />
                                   </span>
                              </span>
                              <p className='text-lg text-gray-600 mt-1 text-justify px-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi error autem sequi ducimus ratione!</p>
                         </div>
                         <div className='flex items-center justify-center p-1  mt-5 bg-[#315c0c]/60'>
                              <div>
                                   <OtherBanners />
                                   {/* <p className='text-2xl font-bold'> Pain Killer </p> */}
                              </div>

                         </div>
                    </div>


               </div>
          </div>
     )
}

export default Productsection