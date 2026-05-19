import React from 'react'

function DownloadCv() {
  return (
    <div className="max-w-[520px] sm:mx-auto bg-[#FFFFFA] rounded-2xl shadow-lg shadow-[#E9DBF0] p-6 space-y-4 mt-24 sm:mt-48 mx-4">

  <h3 className="font-semibold text-base text-[#322020]">
    Download My CV
  </h3>

  <p className="text-[14px] text-[#5D5D5D] leading-relaxed">
    Interested in working together or learning more about my experience? Download my CV to explore my work in Full-Stack Development, UX/UI Design, Technical SEO, and Web3 solutions.
  </p>
  <div className='w-full text-center'>
  <a
    href="Abbey_(alienartech)_Remote_CV.pdf"
    download
    className="inline-block rounded-lg bg-gradient-to-br from-[#FCE4E5] to-[#ddb2f3] text-[#322020] text-sm shadow-lg hover:scale-105 shadow-[#E9DBF0] transition all ease-in-out duration-500 px-4 py-2 "
  >
    Download CV
  </a>
</div>
</div>
  )
}

export default DownloadCv