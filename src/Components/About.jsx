import React, { useRef } from 'react'
import Laptop from '../assets/Who_4.png'
import { motion, useInView } from 'framer-motion'

function About() {

  return (
    <div className='w-full z-50 bg-white  py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <motion.p 
           initial={{opacity:0,y:40}}
           viewport={{once:true}}
           whileInView={{opacity:1,y:0,amount:0.5}}
           transition={{duration:0.5}}
          className='text-gold-theme font-bold '>About Us</motion.p>
          <motion.h1 
          initial={{opacity:0,y:40}}
          viewport={{once:true}}
          whileInView={{opacity:1,y:0,amount:0.5}}
          transition={{duration:0.5,delay:0.1}}
          className='md:text-4xl sm:text-3xl text-2xl font-semibold py-2 text-[#4f4f4f] font-popins'>
            <span className='text-gold-theme'>

            BLUEFIN GOLD GROUP .
            </span>
              is a company registered in Dubai</motion.h1>
          <motion.p 
          initial={{opacity:0,y:40}}
          viewport={{once:true}}
          whileInView={{opacity:1,y:0,amount:0.5}}
          transition={{duration:0.5,delay:0.2}}
          className='text-black font-popins '>
         which already have multi-billion dollar <span className='text-gold-theme'>infrastructure projects</span> assigned to it for implementation, large-scale <span className='text-gold-theme'>smart technology</span> driven projects lined up on a governmental and business level, and significant funding available to invest in AI companies (already growing the <span className='text-gold-theme'>AI investment portfolio</span> with some strategic investments) that have the potential to become unicorns or at least high growth high impact businesses that delivers both return on investment and return on impact and are synergistic with our mission to help shape a better future in the Smart Technology Era.
          </motion.p>
          <motion.button 
          initial={{opacity:0,y:40}}
          viewport={{once:true}}
          whileInView={{opacity:1,y:0,amount:0.5}}
          transition={{duration:0.5,delay:0.3}}
          className='border-gold-theme border-2 text-gold-theme w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:bg-gold-theme hover:text-black'>Learn More</motion.button>
        </div>
      </div>
    </div>
  )
}

export default About