import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-section  className='w-full p-20 bg-[#CDEA68]  rounded-tl-3xl rounded-tr-3xl text-black '>
        <h1 className='text-[4vw] leading-[4.5vw] font-semibold'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds,sell products,explain complex ideas,and hire great people</h1>
    <div className="w-full border-t-[1px] pt-10 mt-20 flex gap-5 border-[#a1b562] ">
     <div className="w-1/2 ">
     <h1 className='text-7xl'>Our approach:</h1>
     <button className='px-10 py-6 mt-10 bg-zinc-900 text-white flex items-center justify-center gap-10 rounded-full font-semibold '>Read more
        <div className="w-2 h-2  bg-zinc-100 rounded-full"></div>
     </button>
     </div>
     <div className='w-1/2 h-[70vh] bg-orange-400 rounded-3xl ' >
     <img className='w-full h-full overflow-hidden rounded-3xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" /></div>
    </div>
    </div>
  )
}

export default About
