import React, { useEffect } from 'react'
import card3 from '../../assets/card3.webp'
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom'
import back from '../../assets/back.png'

const FitnessBoost = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on mount
  }, []);

  return (
    <>
      <div className='container mx-auto'>
        <div>
          <img src={card3} className='w-full rounded-3xl mx-auto max-sm:w-[300px]' alt="" />
        </div>
        <div className=' text-primary flex-col  px-[19%] mt-14 '>
          <h3 className='max-sm:text-4xl text-6xl mb-5'>10 Minute Fitness Boost: <br /> Quick Workouts</h3>
          <p className='mb-20'>Stay active even on your busiest days with our 10-Minute Fitness Boost. 
              These quick, high-intensity workouts are designed to get your heart rate up and strengthen your muscles in just 10 minutes.</p>
          <h3 className=' text-3xl mb-10'>Overview</h3>
          <p className='mb-6'>No time for a full workout? Our 10-Minute Fitness Boost series is the perfect solution for those with busy 
              schedules who still want to stay active and maintain their fitness. These quick, high-intensity workouts are designed to 
              maximize your time, delivering a full-body workout in just 10 minutes.</p>
          <p className='mb-6'>Who is this series for?</p>
          <p className='mb-6'>This series is ideal for anyone with a packed schedule who finds it challenging to fit in a full-length workout. 
              Whether you’re a working professional, a busy parent, or someone who simply prefers shorter workout sessions, these 10-minute routines 
              will help you stay on track with your fitness goals without requiring a significant time commitment.</p>
          <p className='mb-6'>Why choose the 10-Minute Fitness Boost?</p>
          <p className='mb-6'>Short, intense workouts can be just as effective as longer sessions when it comes to building strength, burning calories, 
              and improving cardiovascular health. By focusing on compound movements that work multiple muscle groups at once, these workouts are designed 
              to be efficient and effective. Additionally, the high-intensity nature of these routines helps to keep your metabolism elevated, even after 
              the workout is complete.</p>
          <p className='mb-6'>What to expect</p>
          <p className='mb-6'>Each workout in this series focuses on a different area of the body, ensuring that you get a balanced, full-body workout 
              over the course of the week. You’ll begin with a quick warm-up to prepare your body, followed by a series of exercises that will challenge 
              your strength, endurance, and cardiovascular fitness. Despite the short duration, these workouts are intense, so be prepared to sweat! 
              Modifications will be provided for different fitness levels, making these workouts accessible to everyone.</p>
          <div className=' flex items-center mb-40'>
            <Link to="/blog"><img src={back} className='w-[50px]' alt="" /></Link>
            <p className='ml-2 text-xl'>Back</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default FitnessBoost