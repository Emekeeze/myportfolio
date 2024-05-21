import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiJquery } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa6";

const Technology = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h1 className='my-20 text-center text-4xl'>Technologies</h1>
      <div className='flex flex-wrap items-center justify-center gap-8'>
        <div className='flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-900'>
          <RiReactjsLine className='text-6xl text-blue-400' />
          <p className='mt-2 text-white'>React</p>
        </div>
        <div className='flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-900'>
          <SiTypescript className='text-6xl text-blue-600' />
          <p className='mt-2 text-white'>TypeScript</p>
        </div>
        <div className='flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-900'>
          <FaBootstrap className='text-6xl text-purple-600' />
          <p className='mt-2 text-white'>Bootstrap</p>
        </div>
        <div className='flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-900'>
          <IoLogoJavascript className='text-6xl text-yellow-500' />
          <p className='mt-2 text-white'>JavaScript</p>
        </div>
        <div className='flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-900'>
          <SiJquery className='text-6xl text-blue-500' />
          <p className='mt-2 text-white'>jQuery</p>
        </div>
        <div className='flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-900'>
          <IoLogoCss3 className='text-6xl text-blue-600' />
          <p className='mt-2 text-white'>CSS3</p>
        </div>
        <div className='flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-900'>
          <FaHtml5 className='text-6xl text-orange-500' />
          <p className='mt-2 text-white'>HTML5</p>
        </div>
      </div>
    </div>
  )
}

export default Technology
