"use client"

import HeaderSection from "./HeaderSection"
import Image from "next/image"
import { testimonials } from "@/lib/data"
import { motion } from "framer-motion"
import { useState } from "react"

function Testimonials() {

  const [isPaused, setIsPaused] = useState(false)

  return (
    <div className="mt-24 sm:mt-48">      
        <HeaderSection
          title="Testimonials"
          color="#322020"
          className="space-y-3 w-full text-center"
        />
    <div className="relative overflow-hidden py-4">

      <motion.div
        className="flex gap-12 w-max"
        animate={{
          x: isPaused ? 0 : ["0%", "-50%"]
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >

        {[...testimonials, ...testimonials].map((item, index) => (

          <div
            key={index}
            className="min-w-[320px] sm:min-w-[380px] max-w-[400px] bg-[#FFFFFA] rounded-2xl shadow-lg shadow-[#E9DBF0] p-6 space-y-4"
          >

            <div className="flex items-center gap-3">

              <Image
                src={item.image}
                width={40}
                height={40}
                alt={item.name}
                className=""
              />

              <div>

                <p className="font-thin text-[13px] text-[#4D3B3B]">
                  {item.name}
                </p>

                <p className="text-[16px] text-[#322020] font-semibold">
                  {item.rank}
                </p>

              </div>

            </div>

            <p className="text-[13px] text-[#5D5D5D] leading-relaxed">
              {item.content}
            </p>

          </div>

        ))}

      </motion.div>

    </div>
    <div className='absolute -z-10  w-full max-w-[1200px] mx-auto flex justify-center overflow-hidden'>
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
  )
}

export default Testimonials