import React, { useEffect, useRef } from 'react'
import AnimatedText from './AnimatedText'
import { invariant, motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import SkillsSection from './SkillsSection'
import Education from './Education'
import Image from 'next/image'


const AnimatedNumber = ({value}) => {
  const ref = useRef(null);

  // motion value for animations
  const motionValue = useMotionValue(0);

  //Spring effect for smoother transition
  const springValue = useSpring(motionValue,{duration: 4000});

  //track if the element is in view
  const isInView = useInView(ref, {once:true});

  //trigger animation when in view
  useEffect(()=>{
    if (isInView) {
      motionValue.set(value); //target value
    }
  },[isInView, motionValue, value]);

  // Update the text content as the value changes
  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        // Clamp the value to prevent overshoot
        const clampedValue = Math.min(latest, value); 
        ref.current.textContent = clampedValue.toFixed(0); // Rounded to whole numbers
      }
    });
  }, [springValue, value]);
  
  
  return <span ref={ref}></span>


}

const About = () => {
  return (
    <section className='w-full h-full px-4'>
      <div>
      <AnimatedText text="Bringing Ideas to Life" className='text-2xl md:text-3xl lg:text-5xl xl:text-7xl py-8 xl:py-14'/>
      <div className='md:grid grid-cols-9 md:px-4 md:gap-4 '>
        <div className='col-span-4 w-full'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-mono font-bold text-red-500'>About Myself:</h2>
          <p className='text-black text-sm my-4 capitalize'>
           I am a Front-End Developer with expertise in creating modern, responsive, and user-friendly websites. With years of experience in HTML, CSS, Tailwind CSS, JavaScript, React, Next.JS and Framer Motion, I specialize in building visually appealing and high-performing web applications. Whether it’s custom websites, performance optimization, or interactive designs, I’m here to bring your ideas to life. Feel free to send me a message—I’d love to be part of your next project!
          </p>
        </div>

        <div className='col-span-3 rounded-lg w-full justify-end items-start flex'>
          {/* image */}
          <Image
          src='/images/profile2.jpg'
          width={400}
          height={400}
          alt='Profile Picture'
          className='rounded-lg p-4 shadow-[7px_7px_0px_#333] border-2 border-black'
          priority="true"
          />
        </div>

        <div className='w-full justify-end items-end  text-center mt-14 md:mt-0 text-xl col-span-1 md:ml-8'>
          <div className='inline-block'>
            <span className='text-5xl text-red-500 font-extrabold '>
              <AnimatedNumber value={8}/>+
            </span>
            <h2 className='text-2xl font-bold'>Satisfied Clients</h2>
          </div>

          <div className='my-14 inline-block'>
            <span className='text-5xl text-fuchsia-500 font-extrabold '>
              <AnimatedNumber value={10}/>+
            </span>
            <h2 className='text-2xl font-bold'>Projects Completed</h2>
          </div>

        </div>
      </div>

         <div>
          <Education/>
         </div>


         <div className='mt-12'>
          <SkillsSection/>
         </div>
      </div>
    </section>
  )
}

export default About
