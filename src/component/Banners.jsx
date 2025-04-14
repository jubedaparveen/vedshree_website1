'use client'
import { useRef } from "react"
import Autoplay from "embla-carousel-autoplay";

import {
     Carousel,
     CarouselContent,
     CarouselItem,
} from "@/components/ui/carousel"

const ImagesItems = [
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


export function Banners() {
     const plugin = useRef(
          Autoplay({ delay: 2000, stopOnInteraction: true })
     )

     return (
          <div className=' py-2'>
               <div className=" mx-auto my-20 ">
                    <div>
                         <Carousel
                              plugins={[plugin.current]}
                              className="w-full "
                              onMouseEnter={plugin.current.stop}
                              onMouseLeave={plugin.current.reset}>
                              <CarouselContent>
                                   {ImagesItems.map((v, index) => (
                                        <CarouselItem key={index}>
                                             <div className="relative ">
                                                  <img src={v.name} />
                                                  <span className="absolute    w-full h-full flex items-center justify-center ">
                                                       <p className="text-2xl md:text-4xl text-yellow-100">{v.pra}</p>
                                                  </span>
                                             </div>
                                        </CarouselItem>
                                   ))}
                              </CarouselContent>
                         </Carousel>
                    </div>

               </div>

          </div>
     )
}
