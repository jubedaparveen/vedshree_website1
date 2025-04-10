import { OtherBanners } from "@/component/OtherBanners";
import Link from "next/link";
import { FaPlus, FaMinus } from "react-icons/fa6";



const SingleProductPage = () => {
  return (
    <div>
      <div className='my-20 w-[90%] mx-auto '>
        <div className=' mb-16 border-b border-[#87a186]/100  py-6'>
          <div className='bg-white/60 rounded-lg text-center shadow-[1px_1px_20px_5px_rgba(0,0,0,0.25)] p-4 px-30  border-b-5 border-r-5 border border-green-800'>
            <div className='text-3xl uppercase hover:underline hover:text-green-900 py-3'>   Safuf Madni
            </div>
            <div className='my-4 text-lg text-justify px-30 bg-white/60 rounded-lg  p-4  border-l-5 border-r-5 border border-green-800'>
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, sunt eligendi et aliquid illum, quisquam dolor ex veritatis unde velit autem fugit magnam. Natus et laborum dolores, omnis id rem. </p>
            </div>
          </div>
        </div>

        <div className='flex gap-4'>
          {/* Rirht Section  */}
          <div className='w-[40%] h-[37%] bg-white/60 rounded-lg shadow-[1px_1px_20px_5px_rgba(0,0,0,0.25)] p-4 px-4 border-b-5 border-r-5 border border-green-800'>
            <OtherBanners />
            <div className='text-2xl text-center py-3'>  Related Products </div>
            <div className='my-4 text-lg text-justify px-4 bg-white/60 rounded-lg  py-4  border-l-5 border-r-5 border border-green-800'>
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <OtherBanners />
                </div>
                <div>
                  <OtherBanners />
                </div>
                <div>
                  <OtherBanners />
                </div>
                <div>
                  <OtherBanners />
                </div>
              </div>
            </div>
          </div>

          {/* Left Section  */}
          <div className='w-[60%] bg-white/60 rounded-lg shadow-[1px_1px_20px_5px_rgba(0,0,0,0.25)] p-8  border-b-5 border-r-5 border border-green-800'>
            <div className="border-b-2 border-[#87a186]/100  py-2">
              <h2 className="text-2xl font-bold hover:underline hover:text-green-900"> Medicine Name </h2>
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit. </p>
            </div>

            <div className="p-4">
              <table className="border-collapse table-auto border  text-gray-500 text-sm w-full" >
                <thead>
                  <tr>
                    <th className="w-[1%] text-center border p-1" >S.No</th>
                    <th className="w-[5%] text-start border p-1" >Main Point</th>
                    <th className="w-[20%] text-start border p-1" >Deccription</th>
                  </tr>
                </thead>
                <tbody >
                  <tr className="" >
                    <td className="p-1 text-center" >1</td>
                    <td className="p-1">MRP</td>
                    <td className="p-1" >₹ 500.00</td>
                  </tr>
                  <tr className="" >
                    <td className="p-1 text-center" >2</td>
                    <td className="p-1" >Weight</td>
                    <td className="p-1" >100 Gm </td>
                  </tr>
                  <tr className="" >
                    <td className="p-1 text-center" >3</td>
                    <td className="p-1" >Expiry</td>
                    <td className="p-1" >12/2027 </td>
                  </tr>
                  <tr className="" >
                    <td className="p-1 text-center" >4</td>
                    <td className="p-1" >Batch No</td>
                    <td className="p-1" >100 Gm </td>
                  </tr>
                  <tr className="" >
                    <td className="p-1 text-center" >5</td>
                    <td className="p-1" >Menifactor </td>
                    <td className="p-1" >Vedshree </td>
                  </tr>
                  <tr className="" >
                    <td className="p-1 text-center" >6</td>
                    <td className="p-1" >Compsition</td>
                    <td className="p-1" >cfsdgdf</td>
                  </tr>
                  <tr className="" >
                    <td className="p-1 text-center" >7</td>
                    <td className="p-1" >Dosage</td>
                    <td className="p-1" >1-2 gm</td>
                  </tr>
                  <tr className="" >
                    <td className="p-1 text-center" >8</td>
                    <td className="p-1" >Duration</td>
                    <td className="p-1" >1-2 gm with honey </td>
                  </tr>
                  <tr className="" >
                    <td className="p-1 text-center" >9</td>
                    <td className="p-1" >Indiation</td>
                    <td className="p-1" >Fever, Cough, Cold</td>
                  </tr>
                  <tr className="" >
                    <td className="p-1 text-center" >10</td>
                    <td className="p-1" >Storage</td>
                    <td className="p-1" >Store in cool and dry place</td>
                  </tr>
                  <tr className="" >
                    <td className="p-1 text-center" >11</td>
                    <td className="p-1" >Description</td>
                    <td className="p-1" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita ullam harum quam. A explicabo tenetur commodi. </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='flex gap-4  mt-4 border-t-2 border-b-2 border-[#87a186]/100  py-2'>
              <div className='text-lg '> Quantity </div>
              <div className='text-lg font-semibold flex gap-2  bg-[#87a186]/60 rounded-xl inset-shadow-lg inset-shadow-green-200'>
                <button className="cursor-pointer py-1 px-2 rounded-full hover:text-[#223d21] hover:bg-[#87a186]"> <FaMinus size={12} className="mt-1" /> </button>  1
                <button className="cursor-pointer py-1 px-2 rounded-full hover:text-[#223d21] hover:bg-[#87a186]"> <FaPlus size={12} className="mt-1" /> </button>
              </div>
            </div>

            <div className="flex gap-4 mt-4 w-full">
              <Link href={'/'}>
                <button className='w-full mt-6 text-center  border border-green-800  bg-[#94b196] cursor-pointer px-6 py-2 rounded-lg hover:bg-[#87a186] hover:text-[#0E2A10]'>
                  Add to Cart
                </button>
              </Link>
              <Link href="cartpage" >
                <button className='w-full mt-6 text-center  bg-[#94b196] cursor-pointer px-10 py-2 rounded-lg hover:bg-[#87a186] hover:text-[#0E2A10]  border border-green-800'>
                  Buy Now
                </button>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>

  )
}

export default SingleProductPage;