import React from 'react'

function Cards() {
  return (

    <div className='w-full h-screen flex items-center px-32 gap-5'>
             <div className='cardcontainer h-[50vh] w-1/2' >
                <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
                    <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'></img>
                    <button className='absolute px-5 py-1 bg-zinc-100 hover:bg-gray-500 text-black rounded-xl left-10 bottom-10'>&copy; 2024-2025</button>
                </div>
             </div>
             <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
                <div className='card relative rounded-xl w-1/2 h-full bg-[#192826] flex items-center justify-center'>
                    <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'></img>
                    <button className='absolute px-3 py-1 bg-zinc-100 hover:bg-gray-500 text-black rounded-xl left-10 bottom-10'>RATING 5.0 ON CLUTCH</button>
                </div>   
                <div className='card relative rounded-xl w-1/2 h-full bg-[#192826] flex items-center justify-center'>
                    <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'></img>
                    <button className='absolute px-5 py-1 bg-zinc-100 hover:bg-gray-500 text-black rounded-xl left-2 bottom-10'>BUSINESS BOOTCAMP ALUMNI</button>
                </div>
             </div>
    </div>

)
}

export default Cards