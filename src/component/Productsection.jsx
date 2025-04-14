import React from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";


import { Banners } from './Banners';
import { OtherBanners } from './OtherBanners';


const Productsection = () => {
     return (
          <div className=' max-w-7xl mx-auto border shadow-sm  py-10  my-20 relative'>
               <div className='flex items-center justify-center gap-6 '>

                    <div className='basis-1/2 bg-[#315c0c] p-4'>
                         <div className=' shadow-[1px_1px_20px_5px_rgba(0,0,0,0.25)] p-4 border border-[#0E2A10]/40 bg-white/20'>
                              <form method=''>
                                   <div>
                                        <div className='text-2xl font-bold tracking-widest text-green-950 border-b border-[#0E2A10]/60 text-center'>
                                             <h3>Consultant Form</h3>
                                        </div>
                                        <div className='py-2 mt-2'>
                                             <input className=' w-full px-3 py-2 rounded-sm border border-[#0E2A10]/40 bg-white/20  placeholder:text-[#0E2A10]/40 placeholder:text-sm tracking-widest outline-0' type="text" placeholder='Enter your Name...*' />
                                        </div>
                                        <div className='py-2'>
                                             <input className=' w-full px-3 py-2 rounded-sm border border-[#0E2A10]/40 bg-white/20  placeholder:text-[#0E2A10]/40 placeholder:text-sm tracking-widest outline-0' type="text" placeholder='Enter your Phone Number...*' />
                                        </div>
                                        <div className='py-2'>
                                             <input className=' w-full px-3 py-2 rounded-sm border border-[#0E2A10]/40 bg-white/20  placeholder:text-[#0E2A10]/40 placeholder:text-sm tracking-widest outline-0' type="text" placeholder='Enter your Email Id...' />
                                        </div>
                                        <div className='py-2'>
                                             <textarea style={{ height: '100px' }} className=' w-full px-3 py-2 rounded-sm border border-[#0E2A10]/40 bg-white/20  placeholder:text-[#0E2A10]/40 placeholder:text-sm tracking-widest outline-0' type="text" placeholder='Write here your Previou Medical and Surgical History...' />
                                        </div>
                                        <div className='py-2'>
                                             <textarea style={{ height: '100px' }} className=' w-full px-3 py-2 rounded-sm border border-[#0E2A10]/40 bg-white/20  placeholder:text-[#0E2A10]/40 placeholder:text-sm tracking-widest outline-0' type="text" placeholder='Write here your Current Medical  History...' />
                                        </div>
                                        <div className='my-2  text-center border border-[#0E2A10]/40  bg-[#94b196] cursor-pointer py-2 rounded-full hover:bg-[#87a186] hover:text-[#0E2A10]'>
                                        <button>Send Message</button>
                                        </div>
                                        <div className='py-2 flex gap-4 justify-center '>
                                             <button className='w-10 h-10 rounded-full flex justify-center items-center  border hover:bg-[#87a186] hover:text-[#0E2A10]'> 
                                                  <IoCall  size={25}/>
                                             </button>
                                             <button className='w-10 h-10 rounded-full flex justify-center items-center  border hover:bg-[#87a186] hover:text-[#0E2A10]'>                                 <IoLogoWhatsapp  size={32}/>
                                             </button>
                                        </div>
                                   </div>
                              </form>
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