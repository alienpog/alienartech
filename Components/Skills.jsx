"use client"
import HeaderSection from "./HeaderSection"
import {StarIcon } from '@heroicons/react/24/solid'
import {motion} from "framer-motion"
import{fadeIn} from "../variants"

function Skills() {
  return (
    <motion.div 
    variants={fadeIn("up", 0.3)}
    initial ="hidden"
    whileInView={"show"}
    viewport={{once:true, amount: 0.7}} className="px-4 mt-8 sm:mt-24" id="skills">
        <div className="w-full mb-4 sm:pl-48">
        <HeaderSection title="Skills" color="#866C00"  content="I possess a diverse skill set that includes:"/>
        </div>
        <div className="flex flex-wrap max-w-[1200px] sm:pl-48 text-[13px] sm:text-sm text-[#5D5D5D] gap-4">
            <div className=" flex items-center space-x-3 w-full md:w-[450px]">
            <div>
            <StarIcon className="w-6 h-6 text-[#866C00]"/>
            </div>
            <p>Full-stack web development</p>
            </div>
            <div className=" flex items-center space-x-3 w-full md:w-[450px]">
            <div>
            <StarIcon className="w-6 h-6 text-[#866C00]"/>
            </div>
            <p>UI/UX design</p>
            </div>
            <div className=" flex items-center space-x-3 w-full md:w-[450px]">
            <div>
            <StarIcon className="w-6 h-6 text-[#866C00]"/>
            </div>
            <p>2D animation</p>
            </div>
            <div className=" flex items-center space-x-3 w-full md:w-[450px]">
            <div>
            <StarIcon className="w-6 h-6 text-[#866C00]"/>
            </div>
            <p>Front-end development with Next.js, React Native, and JavaScript</p>
            </div>
            <div className=" flex items-center space-x-3 w-full md:w-[450px]">
            <div>
            <StarIcon className="w-6 h-6 text-[#866C00]"/>
            </div>
            <p>Back-end development with Django, PostgreSQL, and Firebase</p>
            </div>
            <div className=" flex items-center space-x-3 w-full md:w-[450px]">
            <div>
            <StarIcon className="w-6 h-6 text-[#866C00]"/>
            </div>
            <p>AI and machine learning algorithms, including prompt engineering</p>
            </div>
            <div className=" flex items-center space-x-3 w-full md:w-[450px]">
            <div>
            <StarIcon className="w-6 h-6 text-[#866C00]"/>
            </div>
            <p>Deployment and management of web applications on AWS and Google Cloud</p>
            </div>
            <div className=" flex items-center space-x-3 w-full md:w-[450px]">
            <div>
            <StarIcon className="w-6 h-6 text-[#866C00]"/>
            </div>
            <p>Data analysis using Google Analytics and other tools</p>
            </div>

            
        </div>
    </motion.div>
  )
}

export default Skills