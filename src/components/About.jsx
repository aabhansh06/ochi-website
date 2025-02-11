import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";



function About() {
    return (
        <div className='w-full p-20 bg-[#CDEA68] rounded-3xl text-black'>
            <h1 className='font-serif text-4xl leading-[4.15vw]'>Ochi is a strategic presentation agency for forward-
                thinking businesses that need to <u> raise funds</u>, <u> sell prod- ­ucts</u>, <u> ex­plain com­plex ideas</u>, <u>and hire great peo­ple.</u>
            </h1>

            <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 bg-[#CDEA68]'>

                <div className='w-1/2'>
                    <h1 className='text-7xl'>Our Approch</h1>
                    <button className='px-10 py-4 flex gap-10 items-center uppercase bg-zinc-900 mt-10 rounded-full text-white'>Read More
                        <div className="w-7 h-7 flex items-center justify-center border-[1px] border-zinc-500 bg-zinc-100 rounded-full text-sm">
                            <span className="rotate-[45deg] text-black">
                                <FaArrowUpLong />
                            </span>
                        </div>
                    </button>
                </div>

                <div className='w-1/2 h-[70vh] bg-[#b0c859] rounded-3xl'>
                <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
                </div>
            </div>

        </div>
    )
}

export default About