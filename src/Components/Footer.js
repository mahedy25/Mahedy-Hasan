"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { FacebookIcon, FiverrIcon, GithubIcon, InstagramIcon, LinkedinIcon } from './Social'

const Footer = () => {
  return (
    <section className='mb-0 pt-14 '>
      <div className='overflow-hidden py-4 bg-black  justify-between md:text-lg flex text-white xl:text-xl font-mono'>

       <div className='w-full items-center md:pl-4 text-center flex justify-center '>
    <span>Build With &#x1F497; by Mahedy Hasan</span>
      </div>
      

      {/* Social Icons (Hidden on mobile) */}
      <nav className='w-full justify-end hidden md:flex xl:hidden pr-4'>

        <motion.a
        whileHover={{y:-3}}
        whileTap={{y:3}} 
        href="https://www.facebook.com/mahedyhasan253"
        target='_blank'
        className='mr-4'
        >
         <FacebookIcon/>
        </motion.a>

        <motion.a
        whileHover={{y:-3}}
        whileTap={{y:3}} 
        href="https://www.instagram.com/mahedyhasan253/"
        target='_blank'
        className='mx-4'
        >
         <InstagramIcon/>
        </motion.a>

        <motion.a
        whileHover={{y:-3}}
        whileTap={{y:3}} 
        href="https://www.fiverr.com/mahedy_hasan25"
        target='_blank'
        className='mx-4'
        >
         <FiverrIcon/>
        </motion.a>

        <motion.a
        whileHover={{y:-3}}
        whileTap={{y:3}} 
        href="https://github.com/mahedy25"
        target='_blank'
        className='mx-4'
        >
         <GithubIcon/>
        </motion.a>

        <motion.a
        whileHover={{y:-3}}
        whileTap={{y:3}} 
        href="https://www.linkedin.com/in/mahedy-hasan-359a84321"
        target='_blank'
        className='ml-4'
        >
         <LinkedinIcon/>
        </motion.a>

      </nav>




</div>
    </section>
  )
}

export default Footer
