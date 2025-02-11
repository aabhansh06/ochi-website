import React from 'react'

function Footer() {
    return (
        <div className='w-full flex gap-5 h-screen p-20 bg-yellow-100 text-black'>
            <div className='w-1/2  h-full'>
                <div className='heading'>
                    <h1 className='text-[6.5vw] font-semibold -mb-12'>EYE-</h1>
                    <h1 className='text-[6.5vw] font-semibold -mb-12'>OPENING</h1>
                </div>
                <div className='relative text-4xl' style={{height: '57vh'}}>
                    <h3 className='absolute px-5 py-1 left-0 bottom-0 text-red-600'>ochi</h3>
                </div>
                   

            </div>

            <div className='w-1/2'>
                <h1 className='text-[6vw] font-semibold uppercase '>
                PRESENTATIONS
                </h1>
                <div className='dets mt-10'>
                    <a className='block text-2xl font-light' href='#'>Facebook</a>
                    <a className='block text-2xl font-light' href='#'>Instagram</a>
                    <a className='block text-2xl font-light' href='#'>Twitter</a>
                </div>
            </div>
        </div>
    )  
}

export default Footer