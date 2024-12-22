"use client"

import About from '@/Components/About'
import TransitionEffect from '@/Components/TransitionEffect'
import Head from 'next/head'
import React from 'react'

const about = () => {
  return (
    <>
      <Head>
        <title>Mahedy Hasan - About Page</title>
        <meta name="description" content="It is the portfolio website of Mahedy Hasan.I specalize in HTML, CSS, Tailwind CSS, JavaScript, React, Next.js & Framer-motion to create best front-end website for you." />
      </Head>
      <TransitionEffect/>

      <main>
        <About/>
      </main>
    </>
  )
}

export default about
