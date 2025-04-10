/** @format */
"use client";

import Image from "next/image";
import { useState } from "react";

import Logo from '../../public/images/logo.jpg'
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";


import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";




const navItems = [
     {
          label: "Home",
          link: "/",   
     },
     {
          label: "Medicines",
          link: "/medicines",
          children: [
               {
                    label: "Skin Care",
                    link: "/singleproduct",
               },
               {
                    label: "Joint Pain Relief",
                    link: "/singleproduct",
               },
               {
                    label: "Stomatch' Medicine",
                    link: "/singleproduct",
               }
          ]
     },
     {
          label: "Blogs",
          link: "/blogs"
     },
     {
          label: "Contact",
          link: "/contact"
     }
];

export default function Navbar() {
     const [animationParent] = useAutoAnimate();
     const [isSideMenuOpen, setSideMenue] = useState(false);
     function openSideMenu() {
          setSideMenue(true);
     }
     function closeSideMenu() {
          setSideMenue(false);
     }

     return (
          <div className="mx-auto flex  w-full max-w-7xl justify-between py-3 text-sm px-4 md-px-0  ">
               {/* left side  */}
               <section ref={animationParent} className="flex justify-between basis-3/4 items-center gap-6">
                    {/* logo */}
                    <div className="">
                         <Image src={Logo} alt=" logo" width={150} height={150} className="absolute top-4 rounded-sm z-10 " />
                    </div>
                    {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
                    <div className="hidden md:flex items-center gap-6 transition-all ">
                         {navItems.map((d, i) => (
                              <Link key={i} href={d.link ?? "/"} className="relative group  px-2 py-3 transition-all ">
                                   <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-green-300 tracking-widest ">
                                        <span>{d.label}</span>
                                        {d.children && (
                                             <IoIosArrowDown className=" rotate-180  transition-all group-hover:rotate-0" />
                                        )}
                                   </p>

                                   {/* dropdown */}
                                   {d.children && (
                                        <div className="absolute right-0   top-10 hidden w-auto flex-col gap-1   rounded-lg bg-green-800 py-3 shadow-md  transition-all group-hover:flex tracking-widest z-10 ">
                                             {d.children.map((ch, i) => (
                                                  <Link key={i} href={ch.link ?? "/"}
                                                       className=" flex cursor-pointer items-center py-1 pl-6 pr-8  text-neutral-400 hover:text-black border-b-2 border-green-900 shadow-2xl ">
                                                       
                                                       {/* item */}
                                                       <span className="whitespace-nowrap pl-3 ">
                                                            {ch.label}
                                                       </span>
                                                  </Link>
                                             ))}
                                        </div>
                                   )}
                              </Link>
                         ))}
                    </div>
                    {/* navitems */}
               </section>

               {/* right side data */}
               <section className=" hidden md:flex   items-center gap-8 ">
                    <button className="h-fit text-neutral-400 transition-all hover:text-green-300 tracking-widest font-semibold">
                         Login
                    </button>

                    <button className="h-fit rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-green-300 hover:text-green-300 tracking-widest font-semibold">
                         Register
                    </button>
               </section>

               <FiMenu
                    onClick={openSideMenu}
                    className="cursor-pointer text-4xl md:hidden"
               />
          </div>
     );
}

const MobileNav = ({ closeSideMenu }) => {
     return (
          <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden z-40">
               <div className=" h-full w-[65%] bg-green-950 px-4 py-4">
                    <section className="flex justify-end">
                         <AiOutlineClose
                              onClick={closeSideMenu}
                              className="cursor-pointer text-4xl " />
                    </section>
                    <div className=" flex flex-col text-base  gap-2 transition-all">
                         {navItems.map((d, i) => (
                              <SingleNavItem
                                   key={i}
                                   label={d.label}
                                   iconImage={d.iconImage}
                                   link={d.link}
                              >
                                   {d.children}
                              </SingleNavItem>
                         ))}
                    </div>

                    <section className="  flex  flex-col   gap-8  mt-4 items-center">
                         <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
                              Login
                         </button>

                         <button className="w-full  max-w-[200px]  rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
                              Register
                         </button>
                    </section>
               </div>
          </div>
     );
}

function SingleNavItem(NavItem) {
     const [animationParent] = useAutoAnimate();
     const [isItemOpen, setItem] = useState(false);

     function toggleItem() {
          return setItem(!isItemOpen);
     }

     return (
          <Link
               ref={animationParent}
               onClick={toggleItem}
               href={NavItem.link ?? "#"}
               className="relative px-2 py-3 transition-all">
               <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black z-40">
                    <span>{NavItem.label}</span>
                    {NavItem.children && (
                         // rotate-180
                         <IoIosArrowDown
                              className={`text-xs transition-all  ${isItemOpen && " rotate-180"}`} />)}
               </p>

               {/* dropdown */}
               {isItemOpen && NavItem.children && (
                    <div className="  w-auto  flex-col gap-1   rounded-lg bg-green-800 py-3   transition-all flex ">
                         {NavItem.children.map((ch, i) => (
                              <Link
                                   key={i}
                                   href={ch.link ?? "#"}
                                   className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black  ">
                                   {/* item */}
                                   <span className="whitespace-nowrap   pl-3 ">{ch.label}</span>
                              </Link>
                         ))}
                    </div>
               )}
          </Link>
     );
}
