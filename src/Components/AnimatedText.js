'use client'
import React from 'react'
import { animate, delay, motion, stagger } from 'framer-motion'


const HeadLine = {
  initial:{
    opacity:1,
  },
  animate:{
    opacity:1,
    transition:{
      delay:0.5,
      staggerChildren:0.08,
    }
  }
}

const singleWord = {
  initial:{
    opacity:0,
    y:50,
  },
  animate:{
    opacity:1,
    y:0,
    transition:{
      duration:1,
    }
  }
}

const AnimatedText = ({text, className=""}) => {
 

  return (
    <section className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
      
      <motion.h1 className={`inline-block text-black
  font-bold capitalize  w-full ${className}`}
  variants={HeadLine}
  initial="initial"
  animate="animate"
  >

      {(typeof text === "string" ? text : "").split(" ").map((word, index) => (
                    <motion.span key={word + "-" + index} className='inline-block'
                    variants={singleWord}
                    >
                        {word}&nbsp;
                    </motion.span>
                ))}
      </motion.h1>

      
    </section>
    
  )
}

export default AnimatedText
