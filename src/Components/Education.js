import { useRef } from 'react'
import {motion, useScroll} from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ degree, duration, institution, result }) => {
  const ref = useRef(null); // Reference for the `li` element

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 mb-16 ml-12 mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        className="w-full"
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.9, type: "spring" }}
        viewport={{ once: true, amount: 0.5 }} // Trigger animation once when in view
      >
        <h3 className="capitalize font-bold text-2xl">{degree}</h3>
        <span className="capitalize font-medium text-dark/75">
          {institution} - {duration}
        </span>
        <p className="font-medium w-full">{result}</p>
      </motion.div>
    </li>
  );
};



const Education = () => {
  const ref = useRef(null); // Reference for the scroll container
  const { scrollYProgress } = useScroll({
    target: ref, // Track the scroll progress within this container
    offset: ["start end", "center start"], // Adjust the offsets to fit your layout
  });

  return (
    <div className="my-24">
      <h2 className="text-3xl  text-center lg:text-5xl xl:text-7xl py-8 xl:py-14 text-black font-bold">
        Education
      </h2>

      <div className="w-[75%] mx-auto relative" ref={ref}>
        {/* Scroll progress indicator */}
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
          style={{ scaleY: scrollYProgress, backgroundColor: 'red', width: '4px' }} // Animate the vertical scale
        />
        <ul className="flex flex-col items-start justify-between ml-4">
          {/* Education details */}
          <Details
            degree="Secondary School Certificate (SSC)"
            duration="Completed (2020)"
            institution="Institution: Saraipara City Corporation High School"
            result="Result: 5.00/5.00 (A+)"
          />
          <Details
            degree="Higher Secondary Certificate (HSC)"
            duration="Completed (2022)"
            institution="Institution: Saraipara City Corporation Degree College"
            result="Result: 4.17/5.00 (A)"
          />
          <Details
            degree="Bachelor of Social Science (BSS) in Economics"
            duration="Ongoing (1st Year)"
            institution="Institution: Uttar Kattali Al-Haj Mostafa Hakim College"
            result=""
          />
        </ul>
      </div>
    </div>
  );
};




export default Education
