import React from 'react';
import { RiReactjsLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiJquery } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa6";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      ease: 'linear',
      duration: duration,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
});

const Technology = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1 
      whileInView={{opacity:1, y: 0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:1.5}}
      className='my-20 text-center text-4xl'>Technologies</motion.h1>
      <motion.div 
      whileInView={{opacity:1, x: 0}}
      initial={{opacity:0, x:-100}}
      transition={{duration:1.5}}
      className='flex flex-wrap items-center justify-center gap-8'>
        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className='flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-900'
        >
          <RiReactjsLine className='text-6xl text-blue-400' />
          <p className='mt-2 text-white'>React</p>
        </motion.div>
        <motion.div 
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className='flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-900'
        >
          <SiTypescript className='text-6xl text-blue-600' />
          <p className='mt-2 text-white'>TypeScript</p>
        </motion.div>
        <motion.div 
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className='flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-900'
        >
          <FaBootstrap className='text-6xl text-purple-600' />
          <p className='mt-2 text-white'>Bootstrap</p>
        </motion.div>
        <motion.div 
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className='flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-900'
        >
          <IoLogoJavascript className='text-6xl text-yellow-500' />
          <p className='mt-2 text-white'>JavaScript</p>
        </motion.div>
        <motion.div 
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className='flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-900'
        >
          <SiJquery className='text-6xl text-blue-500' />
          <p className='mt-2 text-white'>jQuery</p>
        </motion.div>
        <motion.div 
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className='flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-900'
        >
          <IoLogoCss3 className='text-6xl text-blue-600' />
          <p className='mt-2 text-white'>CSS3</p>
        </motion.div>
        <motion.div 
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className='flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-900'
        >
          <FaHtml5 className='text-6xl text-orange-500' />
          <p className='mt-2 text-white'>HTML5</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technology;
