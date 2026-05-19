"use client"
import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion"
import{fadeIn} from "../variants"
import { features } from '@/lib/data'

function AboutSection() {
  return (
    <> 
     <div id='about-me'>{""}</div>
     <div className='mt-24 sm:mt-32'>
        <motion.div className='w-full sm:w-3/5 px-3 sm:ml-[20%] space-y-2 sm:space-y-6'
         variants={fadeIn("up", 0.3)}
         initial ="hidden"
         whileInView={"show"}
         viewport={{once:true, amount: 0.7}}>
        <h3 className='text-2xl font-extrabold text-[#322020]'>About Me</h3>
        <p className='font-normal text-[13px] sm:text-sm text-[#5D5D5D] leading-6 lg:leading-8'>I&apos;m a dynamic Full-Stack Developer, Product Designer, and Technical SEO Specialist passionate about crafting seamless, high-performance digital experiences. With over 6+ years of hands-on experience, I operate at the intersection of engineering, design, SEO, and product strategy — transforming complex ideas into intuitive, scalable solutions.

I don&apos;t just build applications — I design systems.

From user research and wireframing to backend architecture, API development, and SEO optimization, I take ownership of the full product lifecycle. My work blends technical precision with aesthetic clarity, ensuring every solution is both functional, fast, and visually compelling.</p>
        </motion.div>
    
      <div className="max-w-7xl mx-auto grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 sm:mt-24 px-4">
                 {features.map(feature =>
      <motion.div 
             variants={fadeIn("up", 0.2)}
             initial ="hidden"
             whileInView={"show"}
             viewport={{once:true, amount: 0.7}}
             key={feature.name} className="p-6 space-y-4 rounded-2xl bg-[#FFFFFA] shadow-2xl shadow-[#E9DBF0] ">
                    <div className="p-2 bg-gradient-to-br from-[#FCE4E5] to-[#E9DBF0] rounded-lg w-[48px] h-[48px] flex justify-center items-center"><feature.icon className="h-6 w-6 text-[#322020]"/></div>
                    <h2 className="text-[#322020] font-bold text-xl">{feature.name}</h2>
                    <p className=" text-[#5D5D5D] font-normal text-sm leading-6">{feature.content}</p>
                 </motion.div>
            )}
        </div>
    </div>
    </>
  )
}

export default AboutSection