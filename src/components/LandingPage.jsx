import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  motion
  return (
    <div data data-scroll-section data-scroll-speed="-.8" className="w-full h-screen bg-zinc-600 pt-1">

      <div className="textstructure mt-32 px-20 ">
        {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex">
                {index === 1 && (
                  <motion.div 
                  initial={{width:0}} 
                  animate={{width:"9vw"}}
                  transition={{ease: [0.45, 0, 0.55, 1], duration:1}}
                  className="mr-[1vw] w-[8vw] h-[4.7vw] rounded-md relative top-[2.8vw] bg-red-500">
                  <img src="	https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"></img>
                  </motion.div>)}
                <h1 className='upercase text-[5vw] leading-[8vw] tracking-tighter font-["Founders_Grotesk"] font-medium'>
                  {item}
                </h1>
              </div>
              {/* <h1 className='upercase text-9xl leading-[vw] tracking-tighter font-["Founders_Grotesk"] font-medium'>EYE OPENING</h1>
              <h1 className='text-9xl leading-[5,5vw] tracking-tighter font-["Founders_Grotesk"] font-medium'>PRESENTATIONS</h1> */}
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">

        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
          <p key={"item"} className="text-md font-light tracking-tight leading-none">{item}</p>
        ))}

        <div className="start flex item-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-500 rounded-full font-light text-sm capitalize">start the project</div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-500 rounded-full text-sm">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>

          </div>
        </div>
      </div>

    </div>
  );
}

export default LandingPage;
