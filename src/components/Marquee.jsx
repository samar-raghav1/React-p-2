import React from 'react'
import { motion } from 'framer-motion'
function Marquee() {
  return (
    <div  className='w-full py-20   bg-[#004D43] rounded-tl-3xl rounded-tr-3xl '>
             <div  className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden ">
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:15}}  className='text-[15vw] leading-none font-semibold uppercase -mb-[6vw] '>We are Ochi</motion.h1>
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:15}} className='text-[15vw] leading-none font-semibold uppercase -mb- [6vw]'>We are Ochi</motion.h1>
            
             </div>
    </div>
  )
}

export default Marquee