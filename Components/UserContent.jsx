import React from 'react'

function UserContent({content,color}) {
  return (
    <div className=' mt-3 sm:mt-4 space-y-1'>
        <h4 className='texy-[13px] font-medium' style={{color:color}}>{content.key}:</h4>
        <p className='text-[13px] sm:text-sm text-[#5D5D5D]'>{content.value}</p>
    </div>
  )
}

export default UserContent