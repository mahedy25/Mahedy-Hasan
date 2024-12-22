"use client"
import AnimatedText from '@/Components/AnimatedText'
import React from 'react'
import profile1 from "../../public/images/profile/profileImage.png"
import Image from 'next/image'
import Link from 'next/link'
import { LinkArrow } from '@/Components/Icons'
import { motion } from 'framer-motion'
import HireMe from '@/Components/HireMe'
import Head from 'next/head'
import TransitionEffect from '@/Components/TransitionEffect'

const page = () => {
  return (

    <>

      <Head>
        <title>Mahedy Hasan - Home Page</title>
        <meta name="description" content="It is the portfolio website of Mahedy Hasan.I specalize in HTML, CSS, Tailwind CSS, JavaScript, React, Next.js & Framer-motion to create best front-end website for you." />
      </Head>
      <TransitionEffect/>




    <section className='w-full px-4 h-full inline-block z-0 py-5 md:py-8 lg:py-20 xl:py-0'>
      <div className='flex flex-col md:flex-row items-centerj justify-between w-full'>

      <div className='md:w-1/2 mt-4 md:mt-0'>

      <Image
      priority 
      src= {profile1}
      alt='Mahedy' 
      className=' border bg-gradient-to-r from-red-500 md:w-80 to-fuchsia-500 rounded-full xl:bg-none xl:border-none xl:rounded-none'/>

      </div>

      <div className='w-full md:w-1/2 ml-5  flex flex-col items-center self-center mt-4'>

        <AnimatedText text="Creating websites that go beyond your Imagination" className="text-3xl md:text-3xl lg:text-5xl xl:text-7xl mr-4 md:mr-0 md:text-start"/>

        <p className='text-xs md:text-lg lg:text-2xl lg:mt-4  text-black font-bold text-center md:text-start
         w-full mr-4 md:mr-0'>"Expert in JavaScript, Tailwind CSS, React, Next JS & Framer-motion"</p>

        <div className="flex xl:flex-row w-full items-center md:items-start self-center mr-5 md:mr-0 text-center gap-4 flex-col mt-8 text-white font-bold">
    <motion.a
        whileHover={{y:-3}}
        href="/Mahedy_HasanCV.pdf"
        target="_blank"
        className="flex items-center justify-center text-center bg-black w-40 h-12  rounded-md text-lg hover:bg-gradient-to-r from-red-500 to-fuchsia-500"
        download={true}
    >
        Download CV
        
    </motion.a>
    <motion.a
        whileHover={{y:-3}}
        href="mailto:mahedyhasan873@gmail.com"
        target="_blank"
        className="flex items-center justify-center text-center bg-black w-40 h-12 rounded-md text-lg hover:bg-gradient-to-r from-red-500 to-fuchsia-500"
    >
        Contact Now
    </motion.a>

    <div>
          <HireMe/>
        </div>
    </div>

        </div>

        

      
      </div>
      
    </section>
    </>
  )
}

export default page
