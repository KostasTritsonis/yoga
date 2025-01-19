import React,{useEffect} from 'react'
import Contact from '../../src/Components/Contact'
import FAQ from '../Components/FAQ'
import Footer from '../Components/Footer'
import AnimatedElement from '../Components/AnimatedElement'
import TeamCard from '../Components/TeamCard'
import clare from '../assets/clare.webp'
import alicia from '../assets/alicia.webp'
import sophia from '../assets/sophia.webp'
import keith from '../assets/keith.webp'
import lena from '../assets/lena.webp'
import maya from '../assets/maya.webp'


const Trainers = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on mount
  }, []);

  return (
    <>
      <div className='container mx-auto mt-12'>
        <div className='text-center text-primary mb-12 '>
            <p className='text-5xl mb-4'>Meet Our <br />Expert Coaches</p>
            <p>Our team of dedicated and experienced coaches is here to guide and support you <br /> on your wellness journey.</p>
        </div>
        <div className='flex sm:flex-wrap sm:justify-center max-sm:overflow-x-auto max-sm:flex-nowrap max-sm:scrollbar-hide gap-5 mt-8 '> 
          <div className='max-sm:flex-shrink-0'>
            <TeamCard element='Clare Ford' image={clare} text={"With a passion for strength training, Clare is dedicated to helping you build muscle and boost endurance. Discover her personalized approach to fitness and how she can help you reach your goals."}/>
          </div>
          <div className='max-sm:flex-shrink-0'>
            <TeamCard element='Alicia Regis' image={alicia} text={"Alicia specializes in guiding students through advanced yoga techniques to enhance flexibility and inner peace. Explore her teaching style and how she can support your yoga journey."} />
          </div>
          <div className='max-sm:flex-shrink-0'>
            <TeamCard element='Keith Finley' image={sophia} text={"Keith’s Pilates classes focus on core strength, stability, and improved posture. Find out more about her methods and how she can help you achieve a strong and balanced body."} />
          </div>
          <div className='max-sm:flex-shrink-0'>   
            <TeamCard element='Lena Parker' image={keith} text={"With a passion for strength training, Lena is dedicated to helping you build muscle and boost endurance. Discover her personalized approach to fitness and how she can help you reach your goals."} />
          </div>
          <div className='max-sm:flex-shrink-0'>
            <TeamCard element='Maya Thompson' image={lena} text="Maya brings a holistic approach to health and wellness, focusing on both physical and mental well-being. Learn more about her strategies for achieving balance and a healthier lifestyle." />
          </div>
          <div className='max-sm:flex-shrink-0'> 
            <TeamCard element='Sophia Lewis' image={maya} text={"Sophia specializes in guiding students through advanced yoga techniques to enhance flexibility and inner peace. Explore her teaching style and how she can support your yoga journey."}/>
          </div>
        </div>
      </div>
      <AnimatedElement children={<Contact />} />
      <AnimatedElement children={<FAQ />} />
      <AnimatedElement children={<Footer />} />
    </>
  )
}

export default Trainers




