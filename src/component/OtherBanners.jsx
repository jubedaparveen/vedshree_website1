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
          name: 'images/otherbanner/img1.jpg',
          pra: 'This is Blog Website'
     },
     {
          name: 'images/otherbanner/img2.jpg',
          pra: 'This is Blog Website-1'
     },
     {
          name: 'images/otherbanner/img3.jpg',
          pra: 'This is Blog Website-2'
     },
     {
          name: 'images/otherbanner/img4.jpg',
          pra: 'This is Blog Website-3'
     },
     {
          name: 'images/otherbanner/img5.jpg',
          pra: 'This is Blog Website-3'
     },
     {
          name: 'images/otherbanner/img6.jpg',
          pra: 'This is Blog Website-3'
     },
     {
          name: 'images/otherbanner/img7.jpg',
          pra: 'This is Blog Website-3'
     },
     {
          name: 'images/otherbanner/img8.jpg',
          pra: 'This is Blog Website-3'
     },
];


export function OtherBanners() {
     const plugin = useRef(
          Autoplay({ delay: 2000, stopOnInteraction: true })
     )

     return (
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
     )
}
