'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FacebookIcon, FiverrIcon, GithubIcon, InstagramIcon, LinkedinIcon } from './Social';
import Logo from './Logo';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { CloseIcon, OpenIcon } from './Icons';


// Custom Link Component
const CustomLinks = ({href, title, className=""}) =>{
  const pathname = usePathname();
  

  return (
    <Link
     href={href}
     className={`${className} relative group`}>
      {title}

      <span
      className={`h-2 inline-block bg-gradient-to-r from-red-500 to-fuchsia-600 absolute left-0 -bottom-2 group-hover:w-full transition-[width] ease duration-300
      ${pathname === href ? 'w-full' : 'w-0'}     
      `}>&nbsp;</span>

    </Link>
  )
};


const Navbar = () => {
  const [menuOpen,setMenuOpen] = useState(false);// State to toggle menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

   // Disable/enable scrolling when menu opens or closes
   useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = ''; // Restore scrolling
    }

    // Cleanup function to ensure no side effects
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <section className='w-full md:mt-2 flex items-center justify-between text-xl md:px-12 px-3 py-3 relative'>

      <div className='w-full flex items-center justify-between'>
        <Logo className=""/>

        <div className='md:hidden z-50' onClick={toggleMenu}>
          {menuOpen ? <CloseIcon/> : <OpenIcon/>}{
          /* Toggle between open and close icons */}
        </div>
        
      </div>
{/* Desktop Navbar (Hidden on mobile) */}
      <nav className='hidden md:flex absolute xl:left-[50%] md:left-[75%] text-xl translate-x-[-50%] '>
        <CustomLinks 
          href="/"
          title="Home"
          className="mr-4"
        />
        <CustomLinks 
          href="/projects"
          title="Projects"
          className="mx-4"
        />
        <CustomLinks 
          href="/about"
          title="About"
          className="mx-4"
        />
        <CustomLinks 
          href="/contact"
          title="Contact"
          className="ml-4"
        />
      </nav>

      
 {/* Social Icons (Hidden on mobile) */}
      <nav className='hidden w-full xl:flex justify-end '>

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

       {/* Mobile Menu (Visible on small screens, appears from the right) */}

       <motion.div
        initial={{ x: '100%' }}
        animate={{ x: menuOpen ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className={`fixed top-16 right-0 w-full h-full bg-[#000000] p-4 z-50 flex flex-col items-center justify-center`}
      >

        <nav className='flex flex-col items-center m-28 h-full space-y-12 text-white font-mono' onClick={closeMenu}>
        <CustomLinks href="/" title="Home" className="" />
        <CustomLinks href="/projects" title="Projects" className="" />
        <CustomLinks href="/about" title="About" className="" />
        <CustomLinks href="/contact" title="Contact" className="" />
        </nav>

      </motion.div>
       
      
    </section>
  )
}

export default Navbar
