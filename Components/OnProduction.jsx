"use client"
import Link from "next/link"
import HeaderSection from "./HeaderSection"
import {Project} from "../dataimage"
import Image from "next/image"
import {motion} from "framer-motion"
import{fadeIn} from "../variants"

function OnProduction() {
  return (
    <motion.div className="px-4 mt-8 sm:mt-24 "
    variants={fadeIn("up", 0.3)}
    initial ="hidden"
    whileInView={"show"}
    viewport={{once:true, amount: 0.7}} >
        <div className="w-full mb-4 sm:pl-6 ">
        <HeaderSection title="On Production" color="#FF3838"  content="Click on the Logo to see the magic 🪄✨ 🎉:"/>
        </div>
        <div className="relative ">
        <div className="absolute right-0 h-full w-24 bg-gradient-to-l from-[#FFFFFA] z-10"/>
        <div className="flex justify-start p-6 gap-x-6 lg:gap-x-10 overflow-x-auto scrollbar-thumb-rounded-full scrollbar-thumb-[#FF3838] scrollbar-thin ">
          {Project.map(production => <Link href={production.url} key={production.id} ><Image src= {production.image} width={500} height={500} className="max-w-[250px] object-contain rounded-lg hover:scale-110 hover:opacity-80 hover:shadow-lg transform all ease-in-out duration-500 cursor-pointer" alt={`${production.name}`} placeholder='blur' blurDataURL='URL'/></Link>)}
           <div className="w-[250px] h-[250px] flex flex-col space-y-6 justify-center items-center rounded-lg bg-[#FED4D4] mr-7 ">
            <p className="w-[250px] px-12 text-[#CE0000] text-center text-base font-medium">More Projects are still yet to be on Production</p>
           </div>
        </div>
        </div>
    </motion.div>
  )
}

export default OnProduction