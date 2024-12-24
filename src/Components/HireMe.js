import React from 'react'
import { RoundText } from './Icons'
import Link from 'next/link'
import { motion } from 'framer-motion'

const HireMe = () => {
  return (
    <div className='absolute right-4 bottom-0 flex items-center justify-center overflow-hidden'>
      <div className='w-60 h-auto flex items-center justify-center relative'>

        <RoundText className={"hidden xl:block fill-dark animate-spin "}/>

        <motion.a 
        href="/contact" 
        className='text-2xl text-white  flex items-center justify-center absolute left- top-1/2 -translax-1/2 -translate-y-1/2  shadow-md  border-solid bg-gradient-to-r border-2 border-black from-red-500 to-fuchsia-500 border-dark w-28 h-28 rounded-full '>
           Hire Me
        </motion.a>

      </div>
       
       

    </div>
  )
}

export default HireMe
