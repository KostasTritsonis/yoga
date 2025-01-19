import React from 'react'
import CustomButton from '../../Components/CustomButton'
import heart from '../../assets/heart.png'
import strong from '../../assets/strong.png'
import yoga from '../../assets/yoga.png'
import { Link } from 'react-router-dom'
const Services = () => {


  return (
    <div className='container mx-auto'>
      <div className='md:flex mt-52 md:justify-between '>
        <div className=' text-primary font-pregular mb-16'>
          <p className='text-5xl pb-5 max-md:text-center'>Our Services</p>
          <p className='text-secondary  md:w-[65%] max-md:text-center'>Whether you're a beginner or an advanced practitioner, our offerings are designed to inspire and
          support you on your wellness journey. </p>
        </div>
        <div className=' max-md:justify-center md:w-1/2 flex items-start  justify-end '>
         <Link to="/plans"> <CustomButton text='Explore the services' /></Link>
        </div>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-3 max-md:pt-16 gap-10 pb-40'>
        <div className='flex flex-col items-center'>
          <img src={yoga} className="w-[70px]" alt="" />
          <p className='text-primary text-3xl text-center max-lg:text-2xl'>Yoga Classes</p>
          <p className='text-secondary w-[60%] max-lg:w-[80%] text-center'>Classes for all levels, from beginners to advanced. Enjoy various styles like Hatha, Vinyasa, and Yin Yoga.</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src={strong} className="w-[70px] "  alt="" />
          <p className='text-primary text-3xl text-center max-lg:text-2xl'>Fitness Training</p>
          <p className='text-secondary w-[60%] max-lg:w-[80%] text-center'>Personalized training programs tailored to your fitness goals. Focus on strength and flexibility.</p>
        </div>
        <div className='flex flex-col max-lg:col-span-2 items-center'>
          <img src={heart} className="w-[70px]" alt="" />
          <p className='text-primary text-3xl text-center max-lg:text-2xl'>Wellness Laps</p>
          <p className='text-secondary w-[60%] max-lg:w-[80%] text-center'>Explore workshops on mindfulness, stress relief, and holistic wellness. Suitable for all levels of experience.</p>
        </div>
      </div>
    </div>
  )
}

export default Services