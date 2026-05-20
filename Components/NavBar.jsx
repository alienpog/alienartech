"use client"

import Image from "next/image"
import { useRouter, } from "next/navigation"
import Phone from "./Phone";
import { useState } from "react";

function NavBar() {
  const router = useRouter()

  const [active, setActive] = useState(false);
  
  const setdata =()=>{
    setActive(false)
  }

  return ( 
  <>
    <div className=" fixed w-full px-4 flex py-2 sm:py-6 sm:pr-8 justify-between items-center bg-[#FFFFFA] shadow-lg rounded-b-xl z-20">
        <Image
        src="/asset/alien port 1.png"
        width={500}
        height={500}
        className="w-12 object-contain"
        alt="Picture of the author"
         loading="lazy"
         placeholder="blur"
         blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzE4MTgxYiIvPjwvc3ZnPg==" 
        />
        <div className="hidden text-[#464646] space-x-4 font-medium text-sm sm:flex">
            <p className="navbarhover" onClick={()=>router.push('#about-me')}>About Me</p>
            <p className="navbarhover" onClick={()=>router.push('#projects')}>Projects</p>
            <p className="navbarhover" onClick={()=>router.push('#skills')}>Skills</p>
            <p className="navbarhover" onClick={()=>router.push('#contact')}>Contact Me</p>
        </div>
        <Image src="/asset/Vector.png"
        width={500}
        height={500}
        alt="vector icon"
        className="w-6 object-contain sm:hidden animate-pulse cursor-pointer"
        onClick={()=>setActive(true)}
        />
        <Phone activemodel = {active} setActivemodel ={setdata}/>
    </div>
  </>
  )
}

export default NavBar