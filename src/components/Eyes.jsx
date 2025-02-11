import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'

function Eyes() {

    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        })
    })


    return (
        <>
            <div className='eyse w-full h-screen overflow-hidden'>
                <div data-scroll data-scroll-speed="-.7" className=' relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
                    <div className='absolute flex gap-10 top-1/4 left-1/4 -translate-x-[-50%] -translate-y-[-50%]'>
                        <div className='w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100 '>
                            <div className='w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900 '>
                                <div style={{ transform: `translate(-0%, -0%) rotate(${rotate}deg)` }} className='line w-full h-10'>
                                    <div className='w-5 h-5 rounded-full bg-zinc-100 '></div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100 '>
                            <div className='w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900 '>
                                <div style={{ transform: `translate(-0%, -50%) rotate(${rotate}deg)` }} className='line w-full h-10'>
                                    <div className='w-5 h-5 rounded-full bg-zinc-100 '></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Eyes