"use client"
import Image from "next/image"
import HeaderSection from "./HeaderSection"
import UserContent from "./UserContent"
import {contents, contents02, contents03} from "../dataimage"
import {motion} from "framer-motion"
import{fadeIn} from "../variants"
function ProjectHighlights() {
  return (
    <div className=" space-y-12 sm:space-y-24 mt-8 sm:mt-24 " id="projects">
        <motion.div 
         variants={fadeIn("up", 0.3)}
         initial ="hidden"
         whileInView={"show"}
         viewport={{once:true, amount: 0.7}}>
        <div className="w-full sm:pl-20 mb-3">
          <div className="mb-4 px-4">
        <HeaderSection title="Project Highlights" color="#FF8787"  content="Here are a few projects that embody my approach and expertise:" />
        </div>
        <p className="text-sm sm:text-base font-bold px-4">Revolutionizing  E-commerce for Fashion Brands</p>
        </div>
        <div className="relative lg:flex flex-row-reverse justify-evenly items-center gap-6 max-w-[1200px] mx-auto">
          <div className="px-4">
        <Image src="/asset/ui-image.gif"
         width={1920} 
         height={1080}
         alt='ui-image'
         className='max-w-[450px] w-full object-contain  rounded-3xl shadow-2xl'
        />
        </div>
        <div className=" px-4 sm:pl-6 max-w-[600px]">
        {contents.map(content => <UserContent key={content.id} content={content} color="#FF8787"/>)}
        </div>
        <div className='absolute -z-10 -top-10 sm:-top-36  w-full max-w-[1200px] flex justify-center overflow-hidden'>
        <div className="scale-110">
        <svg width="959" height="590" viewBox="0 0 959 590" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_3401_4)">
<path d="M542.819 154.052C331.953 72.6637 241.452 274.55 226.258 310.172C183.138 388.291 84.0292 455.069 73.0107 484.554C72.6388 517.782 216.949 546.205 279.993 460.5C358.798 353.369 443.225 351.059 679.52 328.139C915.815 305.218 831.031 70.7695 817.125 109.996C803.219 149.222 753.685 235.44 542.819 154.052Z" fill="#FF8787" fill-opacity="0.2"/>
</g>
<g filter="url(#filter1_f_3401_4)">
<path d="M618.591 282.198C435.762 149.299 296.368 321.107 272.52 351.62C210.754 416.016 97.8011 455.049 79.5678 480.706C70.6599 512.72 202.8 577.313 285.771 510.713C389.486 427.462 471.665 446.951 705.903 485.594C940.141 524.238 918.528 275.869 894.998 310.197C871.469 344.525 801.42 415.097 618.591 282.198Z" fill="#BE76FF" fill-opacity="0.2"/>
</g>
<defs>
<filter id="filter0_f_3401_4" x="23.0099" y="55.5811" width="870.25" height="511.561" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_3401_4"/>
</filter>
<filter id="filter1_f_3401_4" x="29.1396" y="182.407" width="929.664" height="407.309" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_3401_4"/>
</filter>
</defs>
</svg>
</div>
        </div>
        </div>
        </motion.div>
        <motion.div 
         variants={fadeIn("up", 0.3)}
         initial ="hidden"
         whileInView={"show"}
         viewport={{once:true, amount: 0.7}}>
        <div className="w-full sm:pl-20 mb-3">
        <p className="text-sm sm:text-base font-bold px-4">Empowering Fashion E-commerce with Next.js and Django</p>
        </div>
        <div className="relative lg:flex flex-row-reverse justify-evenly items-center gap-6 max-w-[1200px] mx-auto">
          <div className="px-4">
        <Image src="/asset/code-image.gif"
         width={1920} 
         height={1080}
         alt='code-image'
         className='max-w-[450px] w-full object-contain  rounded-3xl shadow-2xl'
        />
        </div>
        <div className=" px-4 sm:pl-6 max-w-[600px]">
        {contents02.map(content => <UserContent key={content.id} content={content} color="#FF6262"/>)}
        </div>
        <div className='absolute -z-10 -top-10 sm:-top-36  w-full max-w-[1200px] flex justify-center overflow-hidden'>
        <div className="scale-110">
        <svg width="959" height="590" viewBox="0 0 959 590" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_3401_4)">
<path d="M542.819 154.052C331.953 72.6637 241.452 274.55 226.258 310.172C183.138 388.291 84.0292 455.069 73.0107 484.554C72.6388 517.782 216.949 546.205 279.993 460.5C358.798 353.369 443.225 351.059 679.52 328.139C915.815 305.218 831.031 70.7695 817.125 109.996C803.219 149.222 753.685 235.44 542.819 154.052Z" fill="#FF8787" fill-opacity="0.2"/>
</g>
<g filter="url(#filter1_f_3401_4)">
<path d="M618.591 282.198C435.762 149.299 296.368 321.107 272.52 351.62C210.754 416.016 97.8011 455.049 79.5678 480.706C70.6599 512.72 202.8 577.313 285.771 510.713C389.486 427.462 471.665 446.951 705.903 485.594C940.141 524.238 918.528 275.869 894.998 310.197C871.469 344.525 801.42 415.097 618.591 282.198Z" fill="#BE76FF" fill-opacity="0.2"/>
</g>
<defs>
<filter id="filter0_f_3401_4" x="23.0099" y="55.5811" width="870.25" height="511.561" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_3401_4"/>
</filter>
<filter id="filter1_f_3401_4" x="29.1396" y="182.407" width="929.664" height="407.309" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_3401_4"/>
</filter>
</defs>
</svg>
</div>
        </div>
        </div>
        </motion.div>
        <motion.div 
         variants={fadeIn("up", 0.3)}
         initial ="hidden"
         whileInView={"show"}
         viewport={{once:true, amount: 0.7}}>
        <div className="w-full sm:pl-20 mb-3">
        <p className="text-sm sm:text-base font-bold px-4">Elevating Brand Identity and Engagement for Fashion E-commerce</p>
        </div>
        <div className="relative lg:flex flex-row-reverse justify-evenly items-center gap-6 max-w-[1200px] mx-auto">
          <div className="px-4">
        <Image src="/asset/design-image.gif"
         width={1920} 
         height={1080}
         alt='design-image'
         className='max-w-[450px] w-full object-contain  rounded-3xl shadow-2xl'
        />
        </div>
        <div className=" px-4 sm:pl-6 max-w-[600px]">
        {contents03.map(content => <UserContent key={content.id} content={content} color="#FF3838"/>)}
        </div>
        <div className='absolute -z-10 -top-10 sm:-top-36  w-full max-w-[1200px] flex justify-center overflow-hidden'>
        <div className="scale-110">
        <svg width="959" height="590" viewBox="0 0 959 590" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_3401_4)">
<path d="M542.819 154.052C331.953 72.6637 241.452 274.55 226.258 310.172C183.138 388.291 84.0292 455.069 73.0107 484.554C72.6388 517.782 216.949 546.205 279.993 460.5C358.798 353.369 443.225 351.059 679.52 328.139C915.815 305.218 831.031 70.7695 817.125 109.996C803.219 149.222 753.685 235.44 542.819 154.052Z" fill="#FF8787" fill-opacity="0.2"/>
</g>
<g filter="url(#filter1_f_3401_4)">
<path d="M618.591 282.198C435.762 149.299 296.368 321.107 272.52 351.62C210.754 416.016 97.8011 455.049 79.5678 480.706C70.6599 512.72 202.8 577.313 285.771 510.713C389.486 427.462 471.665 446.951 705.903 485.594C940.141 524.238 918.528 275.869 894.998 310.197C871.469 344.525 801.42 415.097 618.591 282.198Z" fill="#BE76FF" fill-opacity="0.2"/>
</g>
<defs>
<filter id="filter0_f_3401_4" x="23.0099" y="55.5811" width="870.25" height="511.561" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_3401_4"/>
</filter>
<filter id="filter1_f_3401_4" x="29.1396" y="182.407" width="929.664" height="407.309" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_3401_4"/>
</filter>
</defs>
</svg>
</div>
        </div>
        </div>
        </motion.div>
    </div>
  )
}

export default ProjectHighlights