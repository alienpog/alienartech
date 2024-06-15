"use client"
import Image from "next/image"
import {motion} from "framer-motion"
import{fadeIn} from "../variants"

function Footer() {
  return (
    <div className=" relative rounded-t-xl mt-8 sm:mt-24 pt-24 overflow-hidden 2xl:bg-[#9522FB] text-white">
        <motion.div 
    variants={fadeIn("up", 0.3)}
    initial ="hidden"
    whileInView={"show"}
    viewport={{once:true, amount: 0.7}} className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
        <Image src="/asset/tech figma 1.png" width={320} height={320} className='w-28 object-contain cursor-pointer'/>
        <div className="max-w-[400px]">
            <h2 className="text-[28px] font-bold text-center mb-2">Thank you for visiting!</h2>
            <p className="text-center text-sm font-normal">Thank you for taking the time to explore my portfolio. I&apos;m excited about the opportunity to contribute to innovative projects and make a meaningful impact in the tech industry. Let&apos;s create something amazing together!</p>
        </div>
        </motion.div>
        <p className="text-center mt-12 pb-2 text-xs text-[#FFDA40] animate-pulse">Design and Developed by AlienArTech</p>
        <div className="absolute 2xl:hidden top-0 -right-20 -z-10 ">
        <svg width="1840" height="511" viewBox="0 0 1840 511" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_3849_962)">
<g filter="url(#filter1_f_3849_962)">
<rect x="5" y="5" width="1830" height="498" fill="url(#paint0_linear_3849_962)"/>
</g>
<g filter="url(#filter2_f_3849_962)">
<ellipse cx="1295.5" cy="217" rx="41.5" ry="41" fill="url(#paint1_linear_3849_962)"/>
</g>
<g filter="url(#filter3_f_3849_962)">
<ellipse cx="1400.5" cy="295" rx="41.5" ry="41" fill="url(#paint2_linear_3849_962)"/>
</g>
<g filter="url(#filter4_f_3849_962)">
<ellipse cx="550.5" cy="269" rx="41.5" ry="41" fill="url(#paint3_linear_3849_962)"/>
</g>
<g filter="url(#filter5_f_3849_962)">
<circle cx="1400.5" cy="79.5" r="20.5" fill="url(#paint4_linear_3849_962)"/>
</g>
<g filter="url(#filter6_f_3849_962)">
<circle cx="1295.5" cy="88.5" r="11.5" fill="url(#paint5_linear_3849_962)"/>
</g>
<g filter="url(#filter7_f_3849_962)">
<circle cx="562.5" cy="76.5" r="11.5" fill="url(#paint6_linear_3849_962)"/>
</g>
<ellipse cx="573.5" cy="389.5" rx="61.5" ry="60.5" fill="url(#paint7_linear_3849_962)"/>
<g filter="url(#filter8_f_3849_962)">
<ellipse cx="258.5" cy="216.5" rx="176.5" ry="173.5" fill="url(#paint8_linear_3849_962)"/>
</g>
<g filter="url(#filter9_f_3849_962)">
<ellipse cx="1385.5" cy="153" rx="35.5" ry="35" fill="url(#paint9_linear_3849_962)"/>
</g>
</g>
<defs>
<filter id="filter0_d_3849_962" x="1" y="5" width="1838" height="506" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3849_962"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3849_962" result="shape"/>
</filter>
<filter id="filter1_f_3849_962" x="0" y="0" width="1840" height="508" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_3849_962"/>
</filter>
<filter id="filter2_f_3849_962" x="1244" y="166" width="103" height="102" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_3849_962"/>
</filter>
<filter id="filter3_f_3849_962" x="1349" y="244" width="103" height="102" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_3849_962"/>
</filter>
<filter id="filter4_f_3849_962" x="499" y="218" width="103" height="102" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_3849_962"/>
</filter>
<filter id="filter5_f_3849_962" x="1370" y="49" width="61" height="61" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_3849_962"/>
</filter>
<filter id="filter6_f_3849_962" x="1274" y="67" width="43" height="43" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_3849_962"/>
</filter>
<filter id="filter7_f_3849_962" x="541" y="55" width="43" height="43" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_3849_962"/>
</filter>
<filter id="filter8_f_3849_962" x="42" y="3" width="433" height="427" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur_3849_962"/>
</filter>
<filter id="filter9_f_3849_962" x="1338" y="106" width="95" height="94" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_3849_962"/>
</filter>
<linearGradient id="paint0_linear_3849_962" x1="5" y1="254" x2="1835" y2="254" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFD001"/>
<stop offset="1" stop-color="#6D00CE"/>
</linearGradient>
<linearGradient id="paint1_linear_3849_962" x1="1337" y1="237.584" x2="1254.08" y2="196.247" gradientUnits="userSpaceOnUse">
<stop stop-color="#7206C9"/>
<stop offset="1" stop-color="#FBCB08"/>
</linearGradient>
<linearGradient id="paint2_linear_3849_962" x1="1442" y1="315.584" x2="1359.08" y2="274.247" gradientUnits="userSpaceOnUse">
<stop stop-color="#7206C9"/>
<stop offset="1" stop-color="#FBCB08"/>
</linearGradient>
<linearGradient id="paint3_linear_3849_962" x1="592" y1="289.584" x2="509.084" y2="248.247" gradientUnits="userSpaceOnUse">
<stop stop-color="#7206C9"/>
<stop offset="1" stop-color="#FBCB08"/>
</linearGradient>
<linearGradient id="paint4_linear_3849_962" x1="1421" y1="89.7921" x2="1379.85" y2="69.5219" gradientUnits="userSpaceOnUse">
<stop stop-color="#7206C9"/>
<stop offset="1" stop-color="#FBCB08"/>
</linearGradient>
<linearGradient id="paint5_linear_3849_962" x1="1307" y1="94.2736" x2="1283.91" y2="82.9026" gradientUnits="userSpaceOnUse">
<stop stop-color="#7206C9"/>
<stop offset="1" stop-color="#FBCB08"/>
</linearGradient>
<linearGradient id="paint6_linear_3849_962" x1="574" y1="82.2736" x2="550.913" y2="70.9026" gradientUnits="userSpaceOnUse">
<stop stop-color="#7206C9"/>
<stop offset="1" stop-color="#FBCB08"/>
</linearGradient>
<linearGradient id="paint7_linear_3849_962" x1="635" y1="419.874" x2="512.334" y2="358.458" gradientUnits="userSpaceOnUse">
<stop stop-color="#7206C9"/>
<stop offset="1" stop-color="#FBCB08"/>
</linearGradient>
<linearGradient id="paint8_linear_3849_962" x1="435" y1="303.606" x2="83.0649" y2="127.268" gradientUnits="userSpaceOnUse">
<stop stop-color="#7206C9"/>
<stop offset="1" stop-color="#FBCB08"/>
</linearGradient>
<linearGradient id="paint9_linear_3849_962" x1="1421" y1="170.572" x2="1350.13" y2="135.167" gradientUnits="userSpaceOnUse">
<stop stop-color="#7206C9"/>
<stop offset="1" stop-color="#FBCB08"/>
</linearGradient>
</defs>
</svg>


        </div>  


    </div>
  )
}

export default Footer