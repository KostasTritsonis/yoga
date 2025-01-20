import React, { useEffect } from 'react'
import card1 from '../../assets/card1.webp'
import Footer from '../../Components/Footer'
import back from '../../assets/back.png'
import { Link } from 'react-router-dom'

const FullStrength = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on mount
  }, []);

  return (
    <>
      <div className='container mx-auto'>
        <div>
          <img src={card1} className='w-full rounded-3xl mx-auto max-sm:w-[300px]' alt="" />
        </div>
        <div className=' text-primary flex-col  px-[19%] mt-14 '>
          <h3 className='max-sm:text-4xl text-6xl mb-5'>Full-Body Strength <br /> Training:Week Program</h3>
          <p className='mb-20'>Build muscle and increase your strength with our 4-Week Full-Body Strength Training Program. 
            This program is designed to challenge your entire body with a mix of resistance and weight training exercises.</p>
          <h3 className=' text-3xl mb-10'>Overview</h3>
          <p className='mb-6'>Ready to transform your body? Our 4-Week Full-Body Strength Training Program is designed to help you build muscle, improve strength,
            and enhance your overall fitness. Over the course of four weeks, you’ll engage in a series of resistance and weight training exercises
            that target all major muscle groups, helping you achieve a balanced and toned physique.</p>
          <p className='mb-6'>Who is this program for?</p>
          <p className='mb-6'>This program is perfect for anyone looking to take their strength training to the next level,
            whether you’re a beginner or an experienced athlete. It’s ideal for those who want a structured,
            progressive workout plan that builds strength and muscle mass while improving overall fitness.
            If you’re ready to commit to a challenging and rewarding training program, this is for you.</p>
          <p className='mb-6'>Why participate in the Full-Body Strength Training Program?</p>
          <p className='mb-6'>Strength training offers numerous benefits, from building muscle mass and increasing metabolism to
              improving bone density and reducing the risk of injury. This program is specifically designed to provide
              a comprehensive workout experience, helping you develop functional strength that translates into your daily life.
              Additionally, the variety of exercises in this program ensures that you won’t get bored, keeping you motivated and
              engaged throughout the four weeks.</p>
          <p className='mb-6'>What to expect</p>
          <p className='mb-6'>Each week of the program focuses on different muscle groups, with a balanced mix of upper body, lower body, and core
              exercises to ensure a comprehensive full-body workout. The program includes a combination of compound movements,
            which engage multiple muscle groups, and isolation exercises, which target specific areas for muscle growth and definition.</p>
          <p className='mb-6'>The first week introduces you to the foundational exercises, allowing you to establish proper form and technique.
              As you progress through the following weeks, the intensity of the workouts will gradually increase, challenging your muscles
              to adapt and grow stronger. Each session starts with a dynamic warm-up to prepare your body and ends with a cool-down to promote
              recovery and flexibility.</p>
          <p className='mb-6'>In addition to the physical benefits, this program also emphasizes the importance of consistency and discipline in achieving
              long-term fitness goals. By sticking to the program for the full four weeks, you’ll not only see visible improvements in
              your strength and physique but also develop a stronger mindset and greater confidence in your abilities.</p>
          <p className='mb-6'>Whether you’re training at home with minimal equipment or in a fully-equipped gym, this program is designed to be adaptable
              and scalable to your fitness level. Modifications and variations are provided to accommodate different abilities, ensuring
              that everyone can participate and benefit from this strength training journey.</p>
          <div className=' flex items-center mb-40'>
            <Link className='flex items-center' to="/blog"><img src={back} className='w-[50px]' alt="" />Back</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default FullStrength