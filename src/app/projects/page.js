"use client"

import Projects from '@/Components/Projects'
import TransitionEffect from '@/Components/TransitionEffect'
import Head from 'next/head'
import React from 'react'

const projects = () => {
  return (
    <>
      <Head>
        <title>Mahedy Hasan - Projects Page</title>
        <meta name="description" content="It is the portfolio website of Mahedy Hasan.I specalize in HTML, CSS, Tailwind CSS, JavaScript, React, Next.js & Framer-motion to create best front-end website for you." />
      </Head>
      <TransitionEffect/>

      <main>
        <Projects/>
      </main>
    </>
  )
}

export default projects
