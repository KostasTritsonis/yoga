import React from 'react'
import hero from '../assets/hero.webp'
import CustomButton from './CustomButton'

const Hero = () => {
  return (
    <div className='flex justify-center items-center p-10'>
        <div className='flex-col w-[30%]'>
            <h1 className='text-5xl text-primary font-psemibold pb-5 pr-10 w-[70%]'>
                Transform Your Body and Mind
            </h1>
            <p className='text-secondary text-lg w-[60%]'>
            Join us in transforming your body and mind through our comprehensive yoga and fitness programs.
            </p>
            <CustomButton title='Get Started' />
        </div>
        <img className='p-0 rounded-3xl' src={hero} alt="" />
    </div>
  )
}

export default Hero