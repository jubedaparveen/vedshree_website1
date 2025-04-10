
'use client'
import { useRef } from "react"
import Autoplay from "embla-carousel-autoplay";

import {
     Carousel,
     CarouselContent,
     CarouselItem,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card";

const ImagesItems = [
     {
          name: 'images/otherbanner/img1.jpg',
          pra: 'Pain Killer',
          price: 320,
          discount: '5%',
     },
     {
          name: 'images/otherbanner/img2.jpg',
          pra: 'Pain Killer',
          price: 620,
          discount: '1%',
     },
     {
          name: 'images/otherbanner/img3.jpg',
          pra: 'Pain Killer',
          price: 520,
          discount: '6%',
     },
     {
          name: 'images/otherbanner/img4.jpg',
          pra: 'Pain Killer',
          price: 220,
          discount: '2%',
     },
     {
          name: 'images/otherbanner/img5.jpg',
          pra: 'Pain Killer',
          price: 320,
          discount: '5%',
     },
     {
          name: 'images/otherbanner/img6.jpg',
          pra: 'Pain Killer',
          price: 520,
          discount: '10%',
     },
     {
          name: 'images/otherbanner/img7.jpg',
          pra: 'Pain Killer',
          price: 320,
          discount: '5%',
     },
     {
          name: 'images/otherbanner/img8.jpg',
          pra: 'Pain Killer',
          price: 620,
          discount: '2%',
     },
];

const ProductCarousel = () => {
 const plugin = useRef(
           Autoplay({ delay: 2000, stopOnInteraction: true })
      )
 
      return (
          
           <Carousel
                plugins={[plugin.current]}
                className=" "
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}>
                <CarouselContent>
                     {ImagesItems.map((v, index) => (
                          <CarouselItem key={index}className="  ">
                              <div className="">
                                   <div className="grid grid-cols-2 ">
                                        <div>
                                             <img src={v.name} alt={v.pra} className="w-28 h-20 object-cover " />
                                        </div>
                                        <div className="">
                                             <p className="text-lg font-bold">{v.pra}</p>
                                             <p className="text-gray-600">Price : {v.price}</p>
                                             <p className="text-gray-600">Discount : {v.discount} </p>
                                        </div>
                                   </div>
                              </div>
                          </CarouselItem>
                     ))}
                </CarouselContent>
           </Carousel>
         
      )
}

export default ProductCarousel