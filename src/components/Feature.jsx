import { motion, useAnimation } from 'framer-motion'
import React from 'react'

function Feature() {
  const Cards=[useAnimation(),useAnimation()]
  const handleHoverStart=()=>{
        Cards[index].start({y:"0%"})
  }
  const handleHoverEnd=()=>{
        Cards[index].start({y:"100%"})
  }
  return (
    <div className='w-full py-20 '>
        <div className='w-full  px-20 border-b-[1px] border-zinc-700 pb-20 '>
            <h1 className='text-7 xl tracking-tight'>Featured Projects</h1>
        </div>
        <div className="px-20">
        <div className="cards w-full flex mt-10 gap-10">
               <motion.div onHoverStart={()=>handleHoverStart(0)} onHoverEnd={()=>handleHoverEnd(0)} className="cardcontainer relative  w-1/2 h-[75vh]  ">
                <h1 className='absolute text-[#CDEA68] overflow-hidden leading-none tracking-tighter right-0 translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] text-8xl flex '>
                {"FYDE".split('').map((item,index)=>
                <motion.span initial={{y:"100%"}} animate={Cards[0]} transition={{ease:[0.22,1,0.36,1] ,delay:index*0.05}} className='inline-block'>{item}</motion.span>)}
                </h1>
                <div className="w-full h-full bg-green-600 rounded-xl overflow-hidden">
                    <img className='bg-cover w-full h-full ' src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png" alt="" />
                </div>
              </motion.div>
                <motion.div onHoverStart={()=>handleHoverStart(1)} onHoverEnd={()=>handleHoverEnd(1)}  className="cardcontainer relative w-1/2 h-[75vh] ">
                <h1 className='absolute text-[#CDEA68] leading-none tracking-tighter right-full translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] text-8xl flex overflow-hidden'>
                {"VISE".split('').map((item,index)=>
                <motion.span initial={{y:"100%"}} animate={Cards[1]} transition={{ease:[0.22,1,0.36,1] ,delay:index*0.05}} className='inline-block'>{item}</motion.span>
                )}
                </h1>
                <div className="w-full h-full bg-green-600 rounded-xl overflow-hidden">
                    <img className='bg-cover w-full h-full ' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png" alt="" />
                </div>
                </motion.div>

        </div>
        </div>
    </div>
  )
}

export default Feature