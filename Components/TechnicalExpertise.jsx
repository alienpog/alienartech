"use client"
import React from 'react'
import HeaderSection from './HeaderSection'
import UserContent from './UserContent'
import Image from 'next/image'
import {motion} from "framer-motion"
import{fadeIn} from "../variants"

const contents = [
  {
    "key": "Languages",
   "value":"I'm fluent in Python, JavaScript, HTML, CSS, and SQL, empowering me to architect and implement versatile solutions across the web."
  },
  {
    "key": "API Development",
   "value":"I specialize in creating robust APIs that serve as the backbone of modern web applications, facilitating smooth data exchange and integration."
  },
  {
    "key": "Prompt Engineering",
   "value":"Leveraging the power of AI and machine learning, I employ prompt engineering techniques to derive actionable insights, optimizing user experiences and driving business growth."
  },
  {
    "key": "Frameworks",
   "value":"Whether it's Redux for state management, Tailwind CSS for styling, Django REST Framework (DRF) for building APIs, or Next.js and React Native for frontend and mobile development, I'm well-versed in frameworks that expedite development without compromising quality."
  },
  {
    "key": "UI/UX Design",
   "value":"With a keen eye for detail and a passion for aesthetics, I excel in UI/UX design. Using tools like Figma and Adobe Suite, I craft visually stunning interfaces that captivate audiences and elevate brands."
  },


]
function TechnicalExpertise() {
  return (
    <div className='w-full'>
    <motion.div className='w-full sm:w-1/2 px-3 mt-8 sm:mt-24 sm:ml-48 bg-red'
     variants={fadeIn("up", 0.3)}
     initial ="hidden"
     whileInView={"show"}
     viewport={{once:true, amount: 0.7}}>
        <HeaderSection title="Technical Expertise" color="#BE76FF" content="my toolkit, you'll find proficiency in a myriad of technologies:"/>
        {contents.map(item =><UserContent key={item.index} content={item} color="#BE76FF"/>)} 
    </motion.div>
    <motion.div className='max-w-2xl mx-auto w-full mt-[5%] px-4'
      variants={fadeIn("up", 0.3)}
      initial ="hidden"
      whileInView={"show"}
      viewport={{once:true, amount: 0.7}}>
         <Image  
        src="/asset/bill-board-Recovered.gif"
         width={1719}
         height={474}
         alt='billboard'
         className=' w-full object-contain shadow-2xl rounded-lg '
        /> 
    </motion.div>
    </div>
  )
}

export default TechnicalExpertise