import React from 'react'
import { motion } from 'framer-motion'
import invest from '../assets/invest.jpg'
import operating from '../assets/operating.jpg'
import loaction from '../assets/location.jpg'

function ExSection() {
  return (
    <>





    <div className='w-full z-50 my-8 bg-black py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4'>
      <div className='flex justify-center text-center items-center'>

<img className='w-[100%] h-auto text-center' src={invest}/>
</div>
        <div className='flex flex-col justify-center '>
          <motion.p 
           initial={{opacity:0,y:40}}
           viewport={{once:true}}
           whileInView={{opacity:1,y:0,amount:0.5}}
           transition={{duration:0.5}}
          className='md:text-4xl sm:text-3xl text-2xl font-semibold py-2 text-gold-theme font-popins '>Our Investment portfolio</motion.p>
       
          <motion.p 
          initial={{opacity:0,y:40}}
          viewport={{once:true}}
          whileInView={{opacity:1,y:0,amount:0.5}}
          transition={{duration:0.5,delay:0.2}}
          className='text-white font-popins '>
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod minus blanditiis, optio iusto repudiandae quos nesciunt est reprehenderit corrupti praesentium molestias perferendis. Iusto quo minima voluptatem nemo odio rerum provident.
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



    <div className='w-full z-50 my-8 bg-black py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4'>
    
        <div className='flex flex-col justify-center '>
          <motion.p 
           initial={{opacity:0,y:40}}
           viewport={{once:true}}
           whileInView={{opacity:1,y:0,amount:0.5}}
           transition={{duration:0.5}}
          className='md:text-4xl sm:text-3xl text-2xl font-semibold py-2 text-gold-theme font-popins '>Industries we are operating</motion.p>
       
          <motion.p 
          initial={{opacity:0,y:40}}
          viewport={{once:true}}
          whileInView={{opacity:1,y:0,amount:0.5}}
          transition={{duration:0.5,delay:0.2}}
          className='text-white font-popins '>
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod minus blanditiis, optio iusto repudiandae quos nesciunt est reprehenderit corrupti praesentium molestias perferendis. Iusto quo minima voluptatem nemo odio rerum provident.
          </motion.p>
          <motion.button 
          initial={{opacity:0,y:40}}
          viewport={{once:true}}
          whileInView={{opacity:1,y:0,amount:0.5}}
          transition={{duration:0.5,delay:0.3}}
          className='border-gold-theme border-2 text-gold-theme w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:bg-gold-theme hover:text-black'>Learn More</motion.button>
        </div>

        <div className='flex justify-center text-center items-center'>

              <img className='w-[100%] h-auto text-center' src={operating}/>
        </div>
       
      </div>
    </div>


    <div className='w-full z-50 my-8 bg-black py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4'>
      <div className='flex justify-center text-center items-center'>

<img className='w-[100%] h-auto text-center' src={loaction}/>
</div>
        <div className='flex flex-col justify-center '>
          <motion.p 
           initial={{opacity:0,y:40}}
           viewport={{once:true}}
           whileInView={{opacity:1,y:0,amount:0.5}}
           transition={{duration:0.5}}
          className='md:text-4xl sm:text-3xl text-2xl font-semibold py-2 text-gold-theme font-popins '>Where are we operating</motion.p>
       
          <motion.p 
          initial={{opacity:0,y:40}}
          viewport={{once:true}}
          whileInView={{opacity:1,y:0,amount:0.5}}
          transition={{duration:0.5,delay:0.2}}
          className='text-white font-popins '>
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod minus blanditiis, optio iusto repudiandae quos nesciunt est reprehenderit corrupti praesentium molestias perferendis. Iusto quo minima voluptatem nemo odio rerum provident.
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

    </>
  )
}

export default ExSection