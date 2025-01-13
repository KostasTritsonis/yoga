import React from 'react'
import CustomButton from './CustomButton'

const Services = () => {
  return (
    <>
    <div className='flex justify-between font-pregular items-center mb-16'>
        <div className=' mt-32 w-[40%] text-primary'>
            <p className='text-5xl pb-5'>Our Services</p>
            <p className='w-1/2'>Whether you're a beginner or an advanced practitioner, our offerings are designed to inspire and
            support you on your wellness journey. </p>
        </div>
        <div className='w-[25%]'>
          <CustomButton title='Explore the services' /> 
        </div>
    </div>
    <div className='grid grid-cols-3 gap-10'>
      <div>
        <p className='text-primary text-3xl'>Yoga Classes</p>
        <p>Classes for all levels, from beginners to advanced. Enjoy various styles like Hatha, Vinyasa, and Yin Yoga.</p>
      </div>
      <div>
        <p className='text-primary text-3xl'>Fitness Training</p>
        <p>Personalized training programs tailored to your fitness goals. Focus on strength and flexibility.</p>
      </div>
      <div>
        <p className='text-primary text-3xl'>Wellness Laps</p>
        <p>Explore workshops on mindfulness, stress relief, and holistic wellness. Suitable for all levels of experience.</p>
      </div>
    </div>
    </>
  )
}

export default Services