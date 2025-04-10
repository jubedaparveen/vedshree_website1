import React from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { OtherBanners } from './OtherBanners';


const AboutSection = () => {
     return (
          <div className=' bg-[#96ae95]/30  py-2 '>
          <div className=' max-w-7xl mx-auto bg-white/60 px-4  py-10  my-20'>
               {/* About Section  */}
               <div className='flex flex-col items-center justify-center '>
                    <div className='flex flex-col items-center justify-center px-16'>
                         <span className='flex items-center justify-center gap-6'>
                              <span className='w-10 h-6 border border-gray-500/30 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300'>
                                   <FaLongArrowAltLeft className='text-gray-400 text-2xl' />
                              </span>
                              <h2 className='text-4xl font-bold text-center'>About Us</h2>
                              <span className='w-10 h-6 border border-gray-500/30 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300'>
                                   <FaLongArrowAltRight className='text-gray-400 text-2xl' />
                              </span>
                         </span>
                         <p className='text-lg text-gray-600 mt-1 text-center px-24'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nostrum impedit exercitationem veritatis perspiciatis quas possimus recusandae libero ipsam tempora laudantium nesciunt, quisquam adipisci quia velit provident error itaque suscipit!</p>
                    </div>
                    <div className='flex w-full items-center justify-center py-4  mt-5  gap-4'>
                         <div className='flex-col basis-1/2 border-r shadow-sm p-4 flex justify-center items-center'>
                         <div className='w-full text-center border-b-4 border-[#f3cd3e] py-2'>
                              <h3 className='text-2xl' > OverView </h3>
                         </div>
                         <div className='mt-4 px-20 text-lg text-gray-600 text-justify'>
                              <p className=' mt-1   '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nostrum impedit exercitationem veritatis perspiciatis quas possimus recusandae libero ipsam tempora laudantium nesciunt, quisquam adipisci quia velit provident error itaque suscipit!</p>
                              <p className=' mt-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur inventore recusandae sequi atque. Impedit vero exercitationem ducimus, asperiores tenetur obcaecati totam provident magni ut ex numquam ullam dicta id reprehenderit!                                   
                              </p>
                              <p className='mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                              <p className='mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                         </div>
                         </div>
                         <div className='basis-1/2 border shadow-sm p-4 flex justify-center items-center'>
                         <OtherBanners />
                         </div>
                         
                    </div>
               </div>
          </div>
          </div>
     )
}

export default AboutSection