import React, { useEffect } from 'react'
import card4 from '../../assets/card4.webp'
import Footer from '../../Components/Footer'
import back from '../../assets/back.png'
import { Link } from 'react-router-dom'

const MorningRoutine = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on mount
  }, []);

  return (
    <>
      <div className='container mx-auto'>
        <div>
          <img src={card4} className='w-full rounded-3xl mx-auto max-sm:w-[300px]' alt="" />
        </div>
        <div className=' text-primary flex-col  px-[19%] mt-14 '>
          <h3 className='max-sm:text-4xl text-6xl mb-5'>Morning Routine: <br /> Start br Your Day with Wellness</h3>
          <p className='mb-20'>Begin your day with intention and balance with our Mindful Morning Routine. 
            This routine combines gentle stretches, breathing exercises, and mindfulness practices to set a positive tone for the day ahead.</p>
          <h3 className=' text-3xl mb-10'>Overview</h3>
          <p className='mb-6'>Good morning! Our Mindful Morning Routine is designed to help you start your day with clarity and focus. 
            This routine integrates gentle yoga stretches, deep breathing exercises, and mindfulness practices to create a balanced approach 
            to the morning. Whether you’re new to mindfulness or looking to enhance your existing practice, this routine will provide the perfect 
            start to your day.</p>
          <p className='mb-6'>Who is this routine for?</p>
          <p className='mb-6'>This routine is for anyone who wants to set a positive tone for their day, reduce morning stress, 
            and cultivate a sense of calm and focus. It’s particularly beneficial for those who have busy schedules, as it offers a quick 
            but effective way to prepare mentally and physically for the day ahead. If you’re looking to incorporate more mindfulness 
            into your daily life or simply want to start your mornings with a sense of purpose, this routine is for you.</p>
          <p className='mb-6'>Why incorporate a Mindful Morning Routine?</p>
          <p className='mb-6'>Starting your day with mindfulness can have a profound impact on your overall well-being. By taking a few minutes 
              each morning to stretch your body, center your mind, and set positive intentions, you can reduce stress, improve your focus, and enhance 
              your mood. This routine also encourages healthy breathing patterns, which can increase oxygen flow to the brain, promoting alertness and 
              mental clarity throughout the day.</p>
          <p className='mb-6'>What to expect</p>
          <p className='mb-6'>Each session in this routine is designed to be completed in just 15-20 minutes, making it easy to fit into your morning 
              schedule. You’ll begin with gentle yoga stretches to awaken your body, followed by deep breathing exercises to calm the mind, and finish with 
              a mindfulness practice to set your intentions for the day. Over time, you may find that this routine helps you approach your day with a 
              greater sense of calm, focus, and well-being.</p>
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

export default MorningRoutine