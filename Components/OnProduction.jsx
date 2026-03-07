"use client"
import Link from "next/link"
import HeaderSection from "./HeaderSection"
import {Project} from "../dataimage"
import Image from "next/image"
import {motion} from "framer-motion"
import{fadeIn} from "../variants"

function OnProduction() {
  return (
    <div className="mt-24 sm:mt-48 sm:pl-[10%]">
    <motion.div className="mt-8 sm:mt-24"
    variants={fadeIn("up", 0.3)}
    initial ="hidden"
    whileInView={"show"}
    viewport={{once:true, amount: 0.7}} >
        <div className="w-full mb-4 px-4 sm:pl-6">
        <HeaderSection title="More Projects" color="#FF3838" className="space-y-2" content="Click on the Logo to see the Live demo:"/>
        </div>
        <div className="relative ">
        <div className="absolute right-0 h-full w-24 bg-gradient-to-l from-[#FFFFFA] z-10"/>
        <div className="flex justify-start p-6 gap-x-6 lg:gap-x-10 overflow-x-auto scrollbar-thumb-rounded-full scrollbar-thumb-[#FF3838] scrollbar-thin">
          {Project.map(production => <Link href={production.url} target="_blank" key={production.id} ><Image src= {production.image} width={500} height={500} className="max-w-[100px] object-contain rounded-lg hover:scale-110 hover:opacity-80 hover:shadow-lg hover:shadow-[#E9DBF0] transform all ease-in-out duration-500 cursor-pointer animate-pulse" alt={`${production.name}`} placeholder='blur' blurDataURL='URL'/></Link>)}
           <div className="min-w-[320px] h-[100px] flex flex-col space-y-6 justify-center items-center rounded-lg bg-[#f6dbdb] mr-7 px-4 py-2">
            <p className="w-full text-[#f01c1c] text-center text-[12px] font-medium">More Projects are still yet to be on Production or not on Data yet</p>
           </div>
        </div>
        </div>
    </motion.div>
    </div>
  )
}

export default OnProduction