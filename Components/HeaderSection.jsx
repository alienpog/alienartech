import React from 'react'

function HeaderSection({title,color,content}) {
  return (
    <div>
        <h3 className="text-2xl font-extrabold" style={{color:color}}>{title}</h3>
        <p className='text-[13px] sm:text-sm font-light text-[#464646] '>{content}</p>
    </div>
  )
}

export default HeaderSection