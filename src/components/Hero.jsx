import React from 'react'
import socialsImg from '../assets/content-repurposing-header-1024x768.jpg'
import arrow from '../assets/arrow_outward_24dp_FILL0_wght400_GRAD0_opsz24.svg'
import { useNavigate } from 'react-router-dom'

const Hero = () => {

  const navigate = useNavigate();

  return (
  <section className='flex justify-between max-bp:flex-col gap-y-8 items-start px-20 py-36 max-lg:py-16 max-sm:px-10 min-h-[87vh]  '>
      <div className='flex flex-col gap-y-9 max-md:gap-y-7'>
      <h1 className='text-5xl font-bold leading-16 w-[500px] max-sm:text-3xl max-sm:w-[300px] text-black'>
        Supercharge Your Email Growth with AI Automation
        </h1>
        <p className='text-lg max-md:text-md w-[400px] max-sm:w-[250px] text-black'>Automate the repurposing of your email content into engaging tweets, threads, and social posts.</p>
        <div className='flex gap-5'>
        <button className='border-2 border-black px-5 py-2 text-lg text-black flex gap-x-2 justify-center items-center ' onClick={()=> navigate("textinput")}>Get Started<img src={arrow} className='filter invert grayscale brightness-full'/></button>
        <button className='border-2 border-black px-5 py-2 text-lg bg-black text-white'>Learn More</button>
        </div>
      </div>
      <div className='max-lg:mt-8'>
        <img src={socialsImg} className='w-[500px] rounded-lg'/>
      </div>
    </section>

  )
}

export default Hero