import React from 'react'
import hero from '../assets/hero.webp'
import CustomButton from './CustomButton'


const Hero = () => {
  return (
    <div className='animate-fade-up animate-once antialiased flex justify-center items-center my-32 pb-28'>
        <div className='flex-col w-[40%]'>
            <h1 className='text-7xl text-primary font-tregular font-semibold pb-5 pr-10 2xl:w-[60%]  w-[70%]'>
                Transform Your Body and Mind
            </h1>
            <p className='text-secondary text-lg w-[60%]'>
            Join us in transforming your body and mind through our comprehensive yoga and fitness programs.
            </p>
            <CustomButton title='Get Started' />
        </div>
        <img className='p-0 rounded-3xl 2xl:w-[800px] xl:w-[600px] lg:w-[500px] md:w-[400px] ' src={hero} alt="" />
        
    </div>
  )
}

export default Hero