"use client"

import Image from 'next/image'
import{ useState, useEffect } from 'react'
import {motion} from "framer-motion"
import{fadeIn} from "../variants"


function HeroSection() {
 
const words = ["Design.", "Engineer.", "Deliver."]
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]

    const speed = isDeleting ? 50 : 100

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1))

        if (text === current) {
          setTimeout(() => setIsDeleting(true), 1200)
        }
      } else {
        setText(current.substring(0, text.length - 1))

        if (text === "") {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [text, isDeleting, wordIndex])


  
  return (
    <div className='reletive flex flex-col justify-center items-center  pt-[100px] '>
        <div className='max-w-3xl mt-6 sm:mt-8 lg:mt-28 mx-8 space-y-6 lg:space-y-12'>
          <h1 className='text-5xl sm:text-7xl lg:text-9xl font-extrabold text-[#322020] leading-[80px] lg:leading-[128px] tracking-[5%]'>
          I {text}
          {/* <span className="animate-pulse">|</span> */}
        </h1>
        <h2 className='text-base font-medium text-[#322020] mt-3'>Hi, I&apos;m Abbey (AlienarTech) — I build products from concept to deployment, combining clean design, Technical SEO, and scalable, robust architecture.</h2>
        </div>
        <motion.div className='relative'
         variants={fadeIn("up", 0.2)}
         initial ="hidden"
         whileInView={"show"}
         viewport={{once:true, amount: 0.7}}>
        <Image
          src="/asset/2024_02_03_13_25_IMG_4611_edit 1.png"
          width={400}
          height={700}
          className="max-w-[600px] w-full"
          alt="Picture of the author"
          loading="lazy"
          placeholder="blur"
         blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzE4MTgxYiIvPjwvc3ZnPg=="
        />
        <div className='absolute -bottom-1 h-24 w-full  bg-gradient-to-t from-[#fffffa]  '/>
        </motion.div>
        <div className='absolute top-[-40%] sm:top-[-30%] lg:top-[-20%] -z-10 overflow-hidden w-full flex justify-center '>
        <div className="scale-110">
        <svg width="1918" height="1180" viewBox="0 0 959 590" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  )
}

export default HeroSection