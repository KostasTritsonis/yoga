import React from 'react'
import CustomButton from './CustomButton'
import heart from '../assets/heart.png'
import strong from '../assets/strong.png'
import yoga from '../assets/yoga.png'

const Services = () => {
  return (
    <>
    <div className='flex mt-60 justify-between'>
      <div className=' text-primary font-pregular mb-16'>
        <p className='text-5xl pb-5'>Our Services</p>
        <p className='text-secondary w-[50%]'>Whether you're a beginner or an advanced practitioner, our offerings are designed to inspire and
        support you on your wellness journey. </p>
      </div>
      <div className='w-[25%] items-center '>
        <CustomButton title='Explore the services' /> 
      </div>
    </div>
    <div className='grid grid-cols-3 content-center  gap-10 pb-40'>
      <div className=''>
        <img src={yoga} className="w-[70px]" alt="" />
        <p className='text-primary text-3xl'>Yoga Classes</p>
        <p className='text-secondary w-[60%]'>Classes for all levels, from beginners to advanced. Enjoy various styles like Hatha, Vinyasa, and Yin Yoga.</p>
      </div>
      <div>
        <img src={strong} className="w-[70px]"  alt="" />
        <p className='text-primary text-3xl'>Fitness Training</p>
        <p className='text-secondary w-[60%]'>Personalized training programs tailored to your fitness goals. Focus on strength and flexibility.</p>
      </div>
      <div>
        <img src={heart} className="w-[70px]" alt="" />
        <p className='text-primary text-3xl'>Wellness Laps</p>
        <p className='text-secondary w-[60%]'>Explore workshops on mindfulness, stress relief, and holistic wellness. Suitable for all levels of experience.</p>
      </div>
    </div>
    </>
  )
}

export default Services