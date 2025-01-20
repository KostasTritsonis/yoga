import React, { useEffect } from 'react'
import card6 from '../../assets/card6.webp'
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom'
import back from '../../assets/back.png'

const ChallengeSeries = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on mount
  }, []);

  return (
    <>
      <div className='container mx-auto'>
        <div>
          <img src={card6} className='w-full rounded-3xl mx-auto max-sm:w-[300px]  ' alt="" />
        </div>
        <div className=' text-primary flex-col  px-[19%] mt-14 '>
          <h3 className='max-sm:text-4xl text-6xl mb-5'>5 Day Challenge Trainer Series</h3>
          <p className='mb-20'>Welcome! This 5 Day Pilates Challenge is designed to improve your overall strength and stability by focusing on the 
            smaller stabilizing muscles that often get overlooked. Moreover, Pilates can also help with flexibility and overall body control and awareness.</p>
          <h3 className=' text-3xl mb-10'>Overview</h3>
          <p className='mb-6'>Welcome! This 5 Day Pilates Challenge is designed to improve your overall strength and stability by focusing on the smaller 
            stabilizing muscles that often get overlooked. Moreover, Pilates can also help with flexibility and overall body control and awareness.
            Who is this challenge for?</p>
          <p className='mb-6'>I created this challenge with a few different purposes in mind. One is for those of you who love Pilates
            and can't get enough of it, and therefore want five days of back-to-back Pilates-based strength and stability. On the other end of the 
            spectrum, this challenge is perfect for people who are new to Pilates and want to become more familiar with it to see if it is something 
            they want to incorporate into their fitness routines more often. Finally, right in the middle of those two, this challenge is excellent 
            for those who want to shake up their routine with low-impact, mostly floor-based exercises.</p>
          <p className='mb-6'>Why complete this Pilates Challenge? I mentioned earlier that this challenge can help you build strength and stability, 
            improve flexibility, and enhance your body's overall sense of control and awareness. However, it is also worth mentioning that this challenge 
            can help improve posture, increase energy levels, and promote relaxation.</p>
          <ul className='	list-disc'>
            <li className='ml-7 mb-6'>Pilates emphasizes proper alignment and body awareness, which can positively impact your posture. As you strengthen your core 
                and become more aware of your body positioning, you may find that your posture improves both during exercise and in daily activities.</li>
            <li className='ml-7 mb-6'>Regular physical activity, such as Pilates, can boost energy levels. Combining movement, increased blood flow, and controlled 
                breathing can leave you feeling more energized and alert.</li>
            <li className=' ml-7 mb-6'>Pilates can be a great stress reliever! The mind-body connection encouraged in Pilates, combined with controlled breathing, 
                can contribute to a sense of relaxation and mental well-being.</li>
          </ul>
          <p className='mb-6'>What to expect ?</p>
          <p className='mb-6'>Each day the focus will be on core strength and stability, including the stabilizing muscles of your upper and
            lower body. Day 2 is the only day that is not in a bored-easily format. Days 1, 3, and 4 include a warm-up and a cool-down. Days 2 and 5 do not 
            include a warm-up, but there is a cool-down at the end; these days, we start slowly and build up from there, but if you feel your body needs extra 
            time to warm up, you can choose a warm-up from any other day in the challenge or Fitness Blender's.‍</p>  
          <p className='mb-6'>Each workout is a level 3 difficulty, but there are ways to modify some of the exercises to increase or decrease the challenge. 
            I discuss some of these modifications during the workouts and include more details in the workout write-ups. While a majority of the exercises in 
            this challenge are performed lying on an exercise mat, there are some exercises we will do standing up.</p>
          <div className=' flex items-center mb-40'>
            <Link className='flex items-center' to="/blog"><img src={back} className='w-[50px]' alt="" />Back</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ChallengeSeries