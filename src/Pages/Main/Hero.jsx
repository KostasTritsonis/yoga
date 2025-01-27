import React from 'react'
import hero from '../../assets/hero.webp'
import CustomButton from '../../Components/CustomButton'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <div className='lg:flex lg:justify-center lg:items-center my-32 pb-20 container mx-auto'>
        <div className='max-lg:text-center flex-col max-lg:pb-5 lg:pr-10'>
            <h1 className='2xl:text-6xl text-5xl  text-primary  font-semibold pb-5 '>
              Transform Your <br /> Body and Mind
            </h1>
            <p className='text-secondary 2xl:text-lg max-lg:text-md'>
              Join us in transforming your body and mind <br /> through our comprehensive yoga <br /> and fitness programs.
            </p>
            <Link to="/contact"><CustomButton text='Get Started' style="mt-5"/></Link>
        </div>
        <div className='flex justify-center items-center'>
          <img className='rounded-3xl 2xl:w-[800px] xl:w-[600px] lg:w-[600px] w-[350px] ' src={hero} alt="" /> 
        </div>
          
    </div>
  )
}

export default Hero