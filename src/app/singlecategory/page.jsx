import React from 'react'
import Link from "next/link";
import { FaIndianRupeeSign } from "react-icons/fa6";

const SingleCategoryPage = () => {
     return (
          <div>
               <div className='my-20 w-[90%] mx-auto '>
                    <div className=' mb-16 border-b border-[#87a186]/100  py-6'>
                         <div className='bg-white/60 rounded-lg text-center shadow-[1px_1px_20px_5px_rgba(0,0,0,0.25)] p-4 px-30  border-b-5 border-r-5 border border-green-800'>
                              <div className='text-3xl uppercase hover:underline hover:text-green-900 py-3'>   Ayurvedic Medicines for Stomach Ache
                              </div>
                              <div className='my-4 text-lg text-justify px-30 bg-white/60 rounded-lg  p-4  border-l-5 border-r-5 border border-green-800'>
                                   <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, sunt eligendi et aliquid illum, quisquam dolor ex veritatis unde velit autem fugit magnam. Natus et laborum dolores, omnis id rem. </p>
                              </div>
                         </div>
                    </div>

                    <div className='flex justify-between items-start gap-4'>
                         {/* right section  */}
                         <div className='w-[20%] bg-white/60 rounded-lg shadow-[1px_1px_20px_5px_rgba(0,0,0,0.25)] p-4 px-10 border-b-5 border-r-5 border border-green-800'>
                              right section
                         </div>
                         {/* Left Section  */}
                         <div className='w-[80%] bg-white/60 rounded-lg shadow-[1px_1px_20px_5px_rgba(0,0,0,0.25)] p-4 px-4 border-b-5 border-r-5 border border-green-800'>
                              <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                   <div className='shadow-[1px_1px_20px_5px_rgba(0,0,0,0.25)] p-2 mb-8'>
                                        <div className='  border border-[#87a186]/100 rounded-sm'>
                                             <div className=' '>
                                                  <img src="images/posts/post-img-8.jpg" alt="" className=' h-full' />
                                             </div>
                                             <Link href="/singleproduct" className='cursor-pointer  '>
                                                  <div className='p-4 text-sm '>
                                                       <h2 className='text-xl mb-2 hover:underline hover:text-green-900'> Ayurveda Medicines Name</h2>
                                                       <p> Lorem ipsum dolor sit amet consectetur adipisicing. </p>
                                                       <p className="flex "> Price : <FaIndianRupeeSign size={12} className="mt-2 text-gray-500 mx-1" /> 500 </p>
                                                       <p>Discount : 5% </p>
                                                       <p className="flex "> Price After Discount : <FaIndianRupeeSign size={12} className="mt-2 text-gray-500 mx-1" /> 475 </p>

                                                  </div>
                                             </Link>
                                        </div>
                                   </div>

                                   <div className='shadow-[1px_1px_20px_5px_rgba(0,0,0,0.25)] p-2 mb-8'>
                                        <div className='  border border-[#87a186]/100 rounded-sm'>
                                             <div className=' '>
                                                  <img src="images/posts/post-img-8.jpg" alt="" className=' h-full' />
                                             </div>
                                             <Link href="/singleproduct" className='cursor-pointer  '>
                                                  <div className='p-4 text-sm '>
                                                       <h2 className='text-xl mb-2 hover:underline hover:text-green-900'> Ayurveda Medicines Name</h2>
                                                       <p> Lorem ipsum dolor sit amet consectetur adipisicing. </p>
                                                       <p className="flex "> Price : <FaIndianRupeeSign size={12} className="mt-2 text-gray-500 mx-1" /> 500 </p>
                                                       <p>Discount : 5% </p>
                                                       <p className="flex "> Price After Discount : <FaIndianRupeeSign size={12} className="mt-2 text-gray-500 mx-1" /> 475 </p>

                                                  </div>
                                             </Link>
                                        </div>
                                   </div>

                                   <div className='shadow-[1px_1px_20px_5px_rgba(0,0,0,0.25)] p-2 mb-8'>
                                        <div className='  border border-[#87a186]/100 rounded-sm'>
                                             <div className=' '>
                                                  <img src="images/posts/post-img-8.jpg" alt="" className=' h-full' />
                                             </div>
                                             <Link href="/singleproduct" className='cursor-pointer  '>
                                                  <div className='p-4 text-sm '>
                                                       <h2 className='text-xl mb-2 hover:underline hover:text-green-900'> Ayurveda Medicines Name</h2>
                                                       <p> Lorem ipsum dolor sit amet consectetur adipisicing. </p>
                                                       <p className="flex "> Price : <FaIndianRupeeSign size={12} className="mt-2 text-gray-500 mx-1" /> 500 </p>
                                                       <p>Discount : 5% </p>
                                                       <p className="flex "> Price After Discount : <FaIndianRupeeSign size={12} className="mt-2 text-gray-500 mx-1" /> 475 </p>

                                                  </div>
                                             </Link>
                                        </div>
                                   </div>

                                   <div className='shadow-[1px_1px_20px_5px_rgba(0,0,0,0.25)] p-2 mb-8'>
                                        <div className='  border border-[#87a186]/100 rounded-sm'>
                                             <div className=' '>
                                                  <img src="images/posts/post-img-8.jpg" alt="" className=' h-full' />
                                             </div>
                                             <Link href="/singleproduct" className='cursor-pointer  '>
                                                  <div className='p-4 text-sm '>
                                                       <h2 className='text-xl mb-2 hover:underline hover:text-green-900'> Ayurveda Medicines Name</h2>
                                                       <p> Lorem ipsum dolor sit amet consectetur adipisicing. </p>
                                                       <p className="flex "> Price : <FaIndianRupeeSign size={12} className="mt-2 text-gray-500 mx-1" /> 500 </p>
                                                       <p>Discount : 5% </p>
                                                       <p className="flex "> Price After Discount : <FaIndianRupeeSign size={12} className="mt-2 text-gray-500 mx-1" /> 475 </p>

                                                  </div>
                                             </Link>
                                        </div>
                                   </div>

                                   <div className='shadow-[1px_1px_20px_5px_rgba(0,0,0,0.25)] p-2 mb-8'>
                                        <div className='  border border-[#87a186]/100 rounded-sm'>
                                             <div className=' '>
                                                  <img src="images/posts/post-img-8.jpg" alt="" className=' h-full' />
                                             </div>
                                             <Link href="/singleproduct" className='cursor-pointer  '>
                                                  <div className='p-4 text-sm '>
                                                       <h2 className='text-xl mb-2 hover:underline hover:text-green-900'> Ayurveda Medicines Name</h2>
                                                       <p> Lorem ipsum dolor sit amet consectetur adipisicing. </p>
                                                       <p className="flex "> Price : <FaIndianRupeeSign size={12} className="mt-2 text-gray-500 mx-1" /> 500 </p>
                                                       <p>Discount : 5% </p>
                                                       <p className="flex "> Price After Discount : <FaIndianRupeeSign size={12} className="mt-2 text-gray-500 mx-1" /> 475 </p>

                                                  </div>
                                             </Link>
                                        </div>
                                   </div>

                                   <div className='shadow-[1px_1px_20px_5px_rgba(0,0,0,0.25)] p-2 mb-8'>
                                        <div className='  border border-[#87a186]/100 rounded-sm'>
                                             <div className=' '>
                                                  <img src="images/posts/post-img-8.jpg" alt="" className=' h-full' />
                                             </div>
                                             <Link href="/singleproduct" className='cursor-pointer  '>
                                                  <div className='p-4 text-sm '>
                                                       <h2 className='text-xl mb-2 hover:underline hover:text-green-900'> Ayurveda Medicines Name</h2>
                                                       <p> Lorem ipsum dolor sit amet consectetur adipisicing. </p>
                                                       <p className="flex "> Price : <FaIndianRupeeSign size={12} className="mt-2 text-gray-500 mx-1" /> 500 </p>
                                                       <p>Discount : 5% </p>
                                                       <p className="flex "> Price After Discount : <FaIndianRupeeSign size={12} className="mt-2 text-gray-500 mx-1" /> 475 </p>

                                                  </div>
                                             </Link>
                                        </div>
                                   </div>

                                   <div className='shadow-[1px_1px_20px_5px_rgba(0,0,0,0.25)] p-2 mb-8'>
                                        <div className='  border border-[#87a186]/100 rounded-sm'>
                                             <div className=' '>
                                                  <img src="images/posts/post-img-8.jpg" alt="" className=' h-full' />
                                             </div>
                                             <Link href="/singleproduct" className='cursor-pointer  '>
                                                  <div className='p-4 text-sm '>
                                                       <h2 className='text-xl mb-2 hover:underline hover:text-green-900'> Ayurveda Medicines Name</h2>
                                                       <p> Lorem ipsum dolor sit amet consectetur adipisicing. </p>
                                                       <p className="flex "> Price : <FaIndianRupeeSign size={12} className="mt-2 text-gray-500 mx-1" /> 500 </p>
                                                       <p>Discount : 5% </p>
                                                       <p className="flex "> Price After Discount : <FaIndianRupeeSign size={12} className="mt-2 text-gray-500 mx-1" /> 475 </p>

                                                  </div>
                                             </Link>
                                        </div>
                                   </div>

                                   <div className='shadow-[1px_1px_20px_5px_rgba(0,0,0,0.25)] p-2 mb-8'>
                                        <div className='  border border-[#87a186]/100 rounded-sm'>
                                             <div className=' '>
                                                  <img src="images/posts/post-img-8.jpg" alt="" className=' h-full' />
                                             </div>
                                             <Link href="/singleproduct" className='cursor-pointer  '>
                                                  <div className='p-4 text-sm '>
                                                       <h2 className='text-xl mb-2 hover:underline hover:text-green-900'> Ayurveda Medicines Name</h2>
                                                       <p> Lorem ipsum dolor sit amet consectetur adipisicing. </p>
                                                       <p className="flex "> Price : <FaIndianRupeeSign size={12} className="mt-2 text-gray-500 mx-1" /> 500 </p>
                                                       <p>Discount : 5% </p>
                                                       <p className="flex "> Price After Discount : <FaIndianRupeeSign size={12} className="mt-2 text-gray-500 mx-1" /> 475 </p>

                                                  </div>
                                             </Link>
                                        </div>
                                   </div>

                                   <div className='shadow-[1px_1px_20px_5px_rgba(0,0,0,0.25)] p-2 mb-8'>
                                        <div className='  border border-[#87a186]/100 rounded-sm'>
                                             <div className=' '>
                                                  <img src="images/posts/post-img-8.jpg" alt="" className=' h-full' />
                                             </div>
                                             <Link href="/singleproduct" className='cursor-pointer  '>
                                                  <div className='p-4 text-sm '>
                                                       <h2 className='text-xl mb-2 hover:underline hover:text-green-900'> Ayurveda Medicines Name</h2>
                                                       <p> Lorem ipsum dolor sit amet consectetur adipisicing. </p>
                                                       <p className="flex "> Price : <FaIndianRupeeSign size={12} className="mt-2 text-gray-500 mx-1" /> 500 </p>
                                                       <p>Discount : 5% </p>
                                                       <p className="flex "> Price After Discount : <FaIndianRupeeSign size={12} className="mt-2 text-gray-500 mx-1" /> 475 </p>

                                                  </div>
                                             </Link>
                                        </div>
                                   </div>

                                   <div className='shadow-[1px_1px_20px_5px_rgba(0,0,0,0.25)] p-2 mb-8'>
                                        <div className='  border border-[#87a186]/100 rounded-sm'>
                                             <div className=' '>
                                                  <img src="images/posts/post-img-8.jpg" alt="" className=' h-full' />
                                             </div>
                                             <Link href="/singleproduct" className='cursor-pointer  '>
                                                  <div className='p-4 text-sm '>
                                                       <h2 className='text-xl mb-2 hover:underline hover:text-green-900'> Ayurveda Medicines Name</h2>
                                                       <p> Lorem ipsum dolor sit amet consectetur adipisicing. </p>
                                                       <p className="flex "> Price : <FaIndianRupeeSign size={12} className="mt-2 text-gray-500 mx-1" /> 500 </p>
                                                       <p>Discount : 5% </p>
                                                       <p className="flex "> Price After Discount : <FaIndianRupeeSign size={12} className="mt-2 text-gray-500 mx-1" /> 475 </p>

                                                  </div>
                                             </Link>
                                        </div>
                                   </div>

                                   <div className='shadow-[1px_1px_20px_5px_rgba(0,0,0,0.25)] p-2 mb-8'>
                                        <div className='  border border-[#87a186]/100 rounded-sm'>
                                             <div className=' '>
                                                  <img src="images/posts/post-img-8.jpg" alt="" className=' h-full' />
                                             </div>
                                             <Link href="/singleproduct" className='cursor-pointer  '>
                                                  <div className='p-4 text-sm '>
                                                       <h2 className='text-xl mb-2 hover:underline hover:text-green-900'> Ayurveda Medicines Name</h2>
                                                       <p> Lorem ipsum dolor sit amet consectetur adipisicing. </p>
                                                       <p className="flex "> Price : <FaIndianRupeeSign size={12} className="mt-2 text-gray-500 mx-1" /> 500 </p>
                                                       <p>Discount : 5% </p>
                                                       <p className="flex "> Price After Discount : <FaIndianRupeeSign size={12} className="mt-2 text-gray-500 mx-1" /> 475 </p>

                                                  </div>
                                             </Link>
                                        </div>
                                   </div>

                                   <div className='shadow-[1px_1px_20px_5px_rgba(0,0,0,0.25)] p-2 mb-8'>
                                        <div className='  border border-[#87a186]/100 rounded-sm'>
                                             <div className=' '>
                                                  <img src="images/posts/post-img-8.jpg" alt="" className=' h-full' />
                                             </div>
                                             <Link href="/singleproduct" className='cursor-pointer  '>
                                                  <div className='p-4 text-sm '>
                                                       <h2 className='text-xl mb-2 hover:underline hover:text-green-900'> Ayurveda Medicines Name</h2>
                                                       <p> Lorem ipsum dolor sit amet consectetur adipisicing. </p>
                                                       <p className="flex "> Price : <FaIndianRupeeSign size={12} className="mt-2 text-gray-500 mx-1" /> 500 </p>
                                                       <p>Discount : 5% </p>
                                                       <p className="flex "> Price After Discount : <FaIndianRupeeSign size={12} className="mt-2 text-gray-500 mx-1" /> 475 </p>

                                                  </div>
                                             </Link>
                                        </div>
                                   </div>

                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default SingleCategoryPage