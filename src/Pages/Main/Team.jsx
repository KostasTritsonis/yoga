import React from 'react'
import clare from '../../assets/clare.webp'
import alicia from '../../assets/alicia.webp'
import { Link } from 'react-router-dom'
import TeamCard from '../../Components/TeamCard'

const Team = () => {
  return (
    <div className='container mx-auto mt-32  text-white'>
      <h4 className='text-primary'>OUR TEAM</h4>
      <h2 className='text-5xl text-primary pb-20'>Meet Our Team</h2>

      <div className="flex justify-center items-center max-lg:flex-col ">
        <div className='bg-primary p-7 2xl:w-[370px] xl:w-[300px] lg:w-[250px] md:w-[650px] w-full 
          2xl:h-[600px] xl:h-[550px] lg:h-[450px] md:h-[250px] rounded-3xl'>
          <p className='pb-2'>JOIN THE TEAM</p>
          <p className='2xl:text-[29px] xl:text-[24px] lg:text-[18px] max-lg:text-[20px]'>Personalized Coaching</p>  
          <p className='2xl:text-[16px] xl:text-[14px] lg:text-[13px] md max-lg:text-[12px] max-lg:w-[70%] leading-tight'>
            One-on-one sessions with our fitness
            and yoga experts. Get personalized guidance and encouragement
            to reach your specific goals.</p>
          <Link to='/trainers'><button className='bg-background rounded-full hover:bg-opacity-70 text-primary
            font-bold px-5 py-2 2xl:mt-80 xl:mt-80 lg:mt-36 max-lg:mt-16'>View more</button></Link>
        </div>
        <div className='flex justify-between max-sm:flex-col max-md:gap-3 max-lg:mt-5 lg:pl-5'>
          <div>
            <TeamCard element='Clare Ford' image={clare} text={"With a passion for strength training, Clare is dedicated to helping you build muscle and boost endurance. Discover her personalized approach to fitness and how she can help you reach your goals."} />
          </div>
          <div className='sm:pl-5'>
            <TeamCard element='Alicia Regis' image={alicia} text={"Alicia specializes in guiding students through advanced yoga techniques to enhance flexibility and inner peace. Explore her teaching style and how she can support your yoga journey."} />
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Team