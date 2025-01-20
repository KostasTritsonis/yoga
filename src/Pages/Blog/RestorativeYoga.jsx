import React, { useEffect } from 'react'
import card2 from '../../assets/card2.webp'
import Footer from '../../Components/Footer'
import back from '../../assets/back.png'
import { Link } from 'react-router-dom'

const RestorativeYoga = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on mount
  }, []);

  return (
    <>
      <div className='container mx-auto'>
        <div>
          <img src={card2} className='w-full rounded-3xl mx-auto max-sm:w-[300px]' alt="" />
        </div>
        <div className=' text-primary flex-col  px-[19%] mt-14 '>
          <h3 className='max-sm:text-4xl text-6xl mb-5'>Restorative Yoga for <br /> Stress Relief</h3>
          <p className='mb-20'>Discover the calming benefits of restorative yoga with this session focused on stress relief.
            Learn poses that help reduce anxiety, soothe the nervous system, and promote relaxation.</p>
          <h3 className=' text-3xl mb-10'>Overview</h3>
          <p className='mb-6'>Feeling stressed? Our Restorative Yoga for Stress Relief session is designed to help you unwind
            and find inner peace through gentle, supportive yoga postures. This session focuses on calming the mind and body,
            making it perfect for anyone looking to reduce stress, improve mental clarity, and enhance overall well-being.</p>
          <p className='mb-6'>Who is this session for?</p>
          <p className='mb-6'>This session is ideal for anyone experiencing stress, anxiety, or mental fatigue. Whether you’re
            dealing with the pressures of work, personal challenges, or simply need a break from the hustle and bustle of daily life, 
            this restorative yoga practice offers a gentle way to relax and rejuvenate. It’s also suitable for individuals of all fitness
            levels, as the postures are easy to modify and do not require prior yoga experience.</p>
          <p className='mb-6'>Why practice Restorative Yoga?</p>
          <p className='mb-6'>Restorative yoga is a powerful tool for stress relief, as it encourages deep relaxation and a sense of inner calm. 
              The slow, deliberate movements and extended holds in supported postures help to soothe the nervous system, reduce muscle tension, 
              and promote a state of mental and emotional balance. Additionally, restorative yoga can improve sleep quality, boost immune function, 
              and support overall health and well-being.</p>
          <p className='mb-6'>What to expect</p>
          <p className='mb-6'>During this session, you’ll be guided through a series of restorative yoga postures designed to calm the mind and body. 
              Props such as blankets, bolsters, and blocks may be used to support the body in each pose, allowing you to fully relax and release tension. 
              Each posture will be held for several minutes, giving you time to sink deeply into the pose and experience the full benefits of relaxation. 
              The session concludes with a guided meditation to leave you feeling peaceful and refreshed.</p>
          <div className=' flex items-center mb-40'>
            <Link className='flex items-center' to="/blog"><img src={back} className='w-[50px]' alt="" />Back</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default RestorativeYoga