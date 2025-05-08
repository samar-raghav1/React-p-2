import { motion  } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


function Landing() {
   
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".3" className='w-full h-screen bg-zinc-900 pt-2'>
   <div className="textstructure mt-42 px-20">
    {["We Create","Eye Opening","Presentations"].map((item,index)=>{
        return (
            <div key={index} className="masker">
                <div className="w-fit flex items-end  ">
                <div  className="w-fit flex items-center ">
                    {index===1 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76,0,0.24,1] , duration:2}} className='w-[8vw] rounded-md mr-5 h-[5.7vw] relative top-[1.2vw] '> 
                        <img className='w-full h-full overflow-hidden rounded-md' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                        </motion.div>)}
        <h1 className='text-[9vw] pt-[2vw] -mb-[1vw]  flex items-center  leading-[.75] uppercase '>{item}</h1>
    </div>
    </div>
    </div>
        )
    })}
    
   
   </div>
   <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5  '>
    {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(<p key={index} className='text-md font-light tracking-tight leading-none '>{item}</p> ))}
   <div className="start flex items-center gap-2 ">
    <div className="px-5 py-2 border-[1px] border-zinc-700 font-light text-md rounded-full">Start the project</div>
    <div className="w-10 h-10 border-[1px] border-zinc-700 flex items-center justify-center rounded-full">
        <span className='rotate-[45deg]'><FaArrowUpLong /></span>
    </div> 
   </div>
   </div>
    </div>
  )
}

export default Landing