import React from 'react'

function Cards() {
  return (
    <div  className='w-full h-screen flex items-center px-32 gap-5 bg-zinc-100'>
     
         <div className="cardcont h-[50vh] w-1/2">
        <div className='w-full rounded-xl relative h-full bg-[#004D43] flex items-center justify-center '>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className=' absolute px-5 py-1 border-2 left-10 bottom-10 rounded-full  '>&copy;2025</button>
        </div>
        </div>
        <div className="cardcont flex gap-5 w-1/2 h-[50vh]">
        <div className='w-1/2 h-full relative rounded-xl bg-[#192826] flex items-center justify-center '>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <button className=' absolute px-5 py-1 border-2 left-10 bottom-10 rounded-full  '>Rating 5.0 on Clutch</button>
        </div>
        <div className='w-1/2 h-full relative rounded-xl bg-[#192826] flex items-center justify-center '>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <button className=' absolute px-5 py-1 border-2 left-10 bottom-10 rounded-full  '>Business Bootcamp Alumni</button>
        </div>
        </div>
    </div>
 
  )
}

export default Cards