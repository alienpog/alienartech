import { StarIcon } from '@heroicons/react/24/solid'
import {  } from 'lucide-react'
import React from 'react'

function UserContent({content}) {

  function colorchange(){
    if (content.bodyname1colorchange === true){
      return content.color
    } else return "#5D5D5D"

  }
  return (
    <div className=' mt-6 space-y-8'>
      <div className='space-y-2'>
        {content.headername && <h4 className='texy-[13px] font-medium' style={{color:content.color}}>{content.headername}</h4>}
       {content.bodyname1 && <p style={{ color: colorchange()}} className='text-[13px] sm:text-sm leading-5'>{content.bodyname1}</p>}
       <div className='space-y-2'>
       {content.contentloop01 && 
       content.contentloop01.map((value, index) =>
        <div key={index} className=" flex items-center space-x-2 w-full md:w-[450px] space-y-2 lg:leading-5 " >
            <div>
            <StarIcon style={{ color:content.color}} className="w-4 h-4"/>
            </div>
            <p className='text-[13px] sm:text-sm font-normal text-[#5D5D5D]'>{value}</p>
            </div>
       )}
       {content.closingcontent01 && <p className='text-[13px] leading-5 sm:text-sm text-[#5D5D5D]'>{content.closingcontent01}</p>}
       </div>
        </div>
        <div className='space-y-2'>
       {content.bodyname2 && <p style={{ color: colorchange()}} className='text-[13px] sm:text-sm leading-5'>{content.bodyname2}</p>}
       {content.contentloop02 && 
       content.contentloop02.map(value =>
        <div className=" flex items-center space-x-2 w-full md:w-[450px] space-y-2 lg:leading-5">
            <StarIcon style={{ color:content.color}} className="w-4 h-4"/>
            <p className='text-[13px] sm:text-smfont-normal text-[#5D5D5D]'>{value}</p>
            </div>
       )}
       {content.closingcontent02 && <p className='text-[13px] leading-5 sm:text-sm text-[#5D5D5D]'>{content.closingcontent02}</p>}
    </div>
    </div>
  )
}

export default UserContent