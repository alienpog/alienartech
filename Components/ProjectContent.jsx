"use client"
import Image from "next/image"
import React from 'react'
import UserContent from "./UserContent"
function ProjectContent({value}) {
  return (
     <div className="relative lg:flex flex-row justify-between items-center gap-6 max-w-[1200px] mx-auto mb-24">
        <div className=" px-4 max-w-[600px]">
        <UserContent content={value}/>
        </div>
        <div className="px-4 mt-6">
        <Image src={value.image}
         width={1730} 
         height={921}
         alt='image'
         className='max-w-[480px] w-full object-contain'
         loading="lazy"
         placeholder="blur"
         blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..." 
        />
        </div>
     {value.id == 2 &&  <div className='absolute -z-10 -top-10 sm:-top-36  w-full max-w-[1200px] flex justify-center overflow-hidden'>
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
</div>}         
</div>
  )
}

export default ProjectContent