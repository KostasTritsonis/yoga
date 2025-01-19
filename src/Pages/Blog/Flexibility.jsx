import React, { useEffect } from 'react'
import card5 from '../../assets/card5.webp'
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom'
import back from '../../assets/back.png'

const Flexibility = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on mount
  }, []);

  return (
    <>
      <div className='container mx-auto'>
        <div>
          <img src={card5} className='w-full rounded-3xl mx-auto max-sm:w-[300px]' alt="" />
        </div>
        <div className=' text-primary flex-col  px-[19%] mt-14 '>
          <h3 className='max-sm:text-4xl text-6xl mb-5'>7 Day Yoga Flexibility <br /> Series for this Year</h3>
          <p className='mb-20'>Embark on a journey to enhance your flexibility with our 7-Day Yoga Flexibility Series. 
              This series is designed to gradually improve your range of motion, focusing on deep stretches and breathing 
              techniques that release tension and increase flexibility.</p>
          <h3 className=' text-3xl mb-10'>Overview</h3>
          <p className='mb-6'>Welcome to the 7-Day Yoga Flexibility Series! This series is designed to help you deepen your yoga practice 
              and enhance your flexibility over the course of a week. Each day, we’ll focus on different areas of the body, targeting the 
              muscles and joints that contribute to overall flexibility. The series is ideal for both beginners looking to improve their 
              range of motion and advanced practitioners wanting to deepen their stretches and poses.</p>
          <p className='mb-6'>Who is this series for?</p>
          <p className='mb-6'>This series is perfect for anyone who feels tight or restricted in their movements, whether you’re new to yoga 
              or have been practicing for years. It’s also great for athletes or active individuals who want to complement their training with 
              increased flexibility. If you’ve been looking for a way to make your yoga practice more dynamic and rewarding, this series is for you.</p>
          <p className='mb-6'>Why complete this Yoga Flexibility Series?</p>
          <p className='mb-6'>Improving flexibility not only enhances your yoga practice but also benefits your overall physical health. 
              Flexible muscles and joints can reduce the risk of injury, improve posture, and increase your overall sense of well-being. 
              Additionally, the deep stretches incorporated in this series will help to release tension, both physically and mentally, 
              providing a soothing and calming effect.</p>
          <p className='mb-6'>Each session includes a warm-up to prepare your body, followed by a series of targeted stretches, and concludes 
              with a cool-down to help your muscles recover. You’ll be encouraged to listen to your body and move at your own pace, making this 
              series accessible to all levels.</p>
          <p className='mb-6'>What to expect</p>
          <p className='mb-6'>Over the course of the week, you’ll work on increasing your flexibility in key areas such as the hamstrings, hips, 
              shoulders, and spine. Each session will build upon the last, gradually increasing in intensity to safely extend your range of motion. 
              By the end of the 7 days, you should notice a significant improvement in your flexibility and a greater sense of ease in your yoga practice 
              and daily movements.</p>
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

export default Flexibility