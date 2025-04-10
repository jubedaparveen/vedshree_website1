import React from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

import ProductCarousel from './ProductCarousel';
import { OtherBanners } from './OtherBanners';

const ProductList = () => {
     return (
         <div className='bg-gray-100'>
           <div className=' max-w-7xl mx-auto  py-10  my-20'>
               {/* Product List Section  */}
               <div className='items-center justify-center'>
                    <div className='flex flex-col items-center justify-center px-24'>
                         <span className='flex items-center justify-center gap-6'>
                              <span className='w-10 h-6 border border-gray-500/30 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300'>
                                   <FaLongArrowAltLeft className='text-gray-400 text-2xl' />
                              </span>
                              <h2 className='text-4xl font-bold text-center'>Product List</h2>
                              <span className='w-10 h-6 border border-gray-500/30 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300'>
                                   <FaLongArrowAltRight className='text-gray-400 text-2xl' />
                              </span>
                         </span>
                         <p className='text-lg text-gray-600 mt-1 text-center px-24'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi odit dolore praesentium consequatur provident quae dolorum culpa labore eaque harum maiores nihil, eos voluptatem. Quam quia ullam in minima suscipit.</p>
                    </div>
                    <div className=' flex    mt-5  gap-4'>
                         <div className='basis-1/3 border shadow-sm'>
                              <ProductCarousel />
                              <ProductCarousel />
                              <ProductCarousel />
                              <ProductCarousel />
                              <ProductCarousel />
                         </div>
                         <div className='basis-1/3 border shadow-sm'>
                         <ProductCarousel />
                              <ProductCarousel />
                              <ProductCarousel />
                              <ProductCarousel />
                              <ProductCarousel />
                         </div>
                         <div className='basis-1/3 border shadow-sm'>
                         <ProductCarousel />
                              <ProductCarousel />
                              <ProductCarousel />
                              <ProductCarousel />
                              <ProductCarousel />
                         </div>       
                    </div>
               </div>
          </div>
         </div>
     )
}

export default ProductList