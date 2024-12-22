"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import p1 from "../../public/Images/Projects/project1.png";
import p2 from "../../public/Images/Projects/project2.png";
import p3 from "../../public/Images/Projects/project3.png";
import p4 from "../../public/Images/Projects/project4.png";
import Link from "next/link";
import AnimatedText from "./AnimatedText";

const FramerImage = motion(Image);

// Projects Component
const ProjectCard = ({ type, title, img, description, link }) => {
  return (
    <section className="w-full flex flex-col  xl:flex-row items-center justify-between text-center border border-solid border-black bg-light overflow-hidden p-3 shadow-[7px_7px_0px_#333] ">
      {/* Image Section */}
      <div className=" cursor-pointer rounded-lg">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
        />
      </div>

      {/* Right Side Section */}
      <div className="flex flex-col   justify-between items-start pl-6 py-8 text-start xl:gap-4">
        <span className="text-red-500 font-bold text-[16px] md:text-2xl lg:text-4xl xl:text-3xl flex flex-row">{type}</span>
        <Link href={link} className="underline font-semibold text-lg md:text-3xl lg:text-5xl xl:text-3xl">
          <h3>{title}</h3>
        </Link>
        <p className="mt-4 text-sm md:text-lg lg:text-xl text-black/75">{description}</p>
      

      {/* Link to Project */}
      <motion.div 
      className="bg-white text-black hover:bg-gradient-to-r from-red-500 to-fuchsia-500 hover:text-white px-5 py-2 rounded-full md:px-6 md:py-3 lg:px-8 lg:py-4 font-bold font-mono md:text-xl lg:text-2xl xl:px-5 xl:py-3 mt-4 text-start items-start shadow-[4px_4px_0px_#333] border-2 border-black cursor-pointer"
      whileHover={{scale:1.05}}
      >
      
        <motion.a 
        href={link} 
        target="_blank">Open Project</motion.a>
      </motion.div>
      </div>
    </section>
  );
};

// Main Projects Component
const Projects = () => {
  return (
    <section className="w-full h-full px-4">
      <div >
        <AnimatedText text="Where Vision Meets Execution" className="text-2xl md:text-3xl lg:text-5xl xl:text-7xl py-8 xl:py-14"/>
        <div className="xl:grid xl:grid-cols-12 xl:gap-24">
          {/* Project Card */}
          <div className=" col-span-12">
            <ProjectCard
              img={p1}
              title="React Ecommerce Website"
              description="A comprehensive e-commerce platform featuring advanced functionalities like product filtering, cart management, sign up/log in etc and a responsive design."
              link="https://e-commerce-aces.vercel.app/"
              type="Front end"
            />
          </div>

          <div className="my-16 xl:my-0  col-span-6  ">
            <ProjectCard
              img={p3}
              title="React Landing Page"
              description="A clean and minimalistic landing page with a focus on modern UI/UX design ideal for showcasing products or services effectively."
              link="https://landing-page-nine-lemon.vercel.app/"
              type="Front end"
            />
          </div>

          <div className="my-16 xl:my-0  col-span-6  ">
            <ProjectCard
              img={p4}
              title="React Landing Page"
              description="A clean and minimalistic landing page with a focus on modern UI/UX design ideal for showcasing products or services effectively."
              link="https://landing-page-basic-nine.vercel.app/"
              type="Front end"
            />
          </div>

          <div className="col-span-12 ">
            <ProjectCard
              img={p2}
              title="React E-commerce Website"
              description="A fully functional e-commerce website built with React and Tailwind CSS, offering an elegant interface for browsing and purchasing products."
              link="https://e-commerce-tawny-eight-44.vercel.app/"
              type="Front end"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
