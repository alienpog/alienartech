"use client"
import HeaderSection from "./HeaderSection"
import {motion} from "framer-motion"
import{fadeIn} from "../variants"

function Education() {
  return (
    <motion.div 
    variants={fadeIn("up", 0.3)}
    initial ="hidden"
    whileInView={"show"}
    viewport={{once:true, amount: 0.7}} className=" mt-8 sm:mt-24 text-[13px] sm:text-sm text-[#5D5D5D]">
        <div className="w-full mb-4 px-4 sm:pl-48">
        <HeaderSection title="Education" color="#C687FE"/>
        </div>
        <p className="w-full sm:w-1/2 sm:pl-48 px-4">I hold an HND in Mechanical Engineering from Yaba College of Technology, Lagos, Nigeria. While my educational background may seem unconventional for a career in technology, it has equipped me with a unique perspective and problem-solving skills that complement my role as a Full-Stack Developer and Production Designer.</p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 px-4 sm:pl-48 ">
        <div className="pt-6 ">
        <a href="alienartech cv word tech.docx" download className="text-sm font-semibold px-6 py-3 rounded-md shadow-lg text-white bg-[#C687FE] hover:shadow-none transition ease-in-out duration-500 animate-pulse">Download CV [Word]</a>
        </div>
        <div className="pt-6 ">
        <a href="alienartech cv pdf tech.pdf" download className="text-sm font-semibold px-6 py-3 rounded-md shadow-lg text-white bg-[#FF3838] hover:shadow-none transition ease-in-out duration-500 animate-pulse">Download CV [PDF]</a>
        </div>
        </div>
        </motion.div>
  )
}

export default Education