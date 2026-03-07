import React from 'react'

function HeaderSection({title,color,content, className}) {
  return (
    <div className={className}>
        <h3 className="text-2xl font-extrabold" style={{color:color}}>{title}</h3>
        <p className='text-[13px] font-normal text-[#5D5D5D] '>{content}</p>
    </div>
  )
}

export default HeaderSection