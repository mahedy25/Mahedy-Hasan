import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'

const MotionLink = motion(Link);


const Logo = () => {
 
  const [hovered, setHovered] = useState(false);

  return (
    <div className=' flex items-start   w-full'>
      <MotionLink
        href="/"
        className=" px-5 xl:px-8 xl:py-2 py-1 bg-gradient-to-r from-red-500 to-fuchsia-600 text-white flex items-center justify-center rounded-md text-xl xl:text-2xl font-semibold font-mono"
        whileHover={{
          backgroundColor: '#000000',
          transition: { duration: 0.8, },
        }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className='absolute'
        
        >
           Welcome
          
        </motion.div>
        <motion.div
          animate={{ opacity: hovered ? 0 : 1 }}
          initial={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        
        >
          MAHEDY
        </motion.div>
      </MotionLink>
    </div>
  )
}

export default Logo