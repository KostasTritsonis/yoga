import React from 'react'
import TeamCard from '../../Components/TeamCard'
import clare from '../../assets/clare.webp'
import alicia from '../../assets/alicia.webp'
import sophia from '../../assets/sophia.webp'
import keith from '../../assets/keith.webp'
import lena from '../../assets/lena.webp'
import maya from '../../assets/maya.webp'

const Hero = () => {
  return (
    <div className='container mx-auto mt-12'>
        <div className='grid grid-col-3  gap-5 text-center text-primary '>
            <p className='text-5xl '>Meet Our <br />Expert Coaches</p>
            <p>Our team of dedicated and experienced coaches is here to guide and support you <br /> on your wellness journey.</p>
        </div>
        <div className='flex flex-wrap  justify-center  gap-5 mt-20'> 
            <TeamCard element='Clare Ford' image={clare} text={"With a passion for strength training, Clare is dedicated to helping you build muscle and boost endurance. Discover her personalized approach to fitness and how she can help you reach your goals."}/>
            <TeamCard element='Alicia Regis' image={alicia} text={"Alicia specializes in guiding students through advanced yoga techniques to enhance flexibility and inner peace. Explore her teaching style and how she can support your yoga journey."} />
            <TeamCard element='Keith Finley' image={sophia} text={"Keith’s Pilates classes focus on core strength, stability, and improved posture. Find out more about her methods and how she can help you achieve a strong and balanced body."} />
            <TeamCard element='Lena Parker' image={keith} text={"With a passion for strength training, Lena is dedicated to helping you build muscle and boost endurance. Discover her personalized approach to fitness and how she can help you reach your goals."} />
            <TeamCard element='Maya Thompson' image={lena} text="Maya brings a holistic approach to health and wellness, focusing on both physical and mental well-being. Learn more about her strategies for achieving balance and a healthier lifestyle." />
            <TeamCard element='Sophia Lewis' image={maya} text={"Sophia specializes in guiding students through advanced yoga techniques to enhance flexibility and inner peace. Explore her teaching style and how she can support your yoga journey."}/>
        </div>
    </div>
    
   
  )
}

export default Hero