import React,{useEffect} from 'react'
import { ReactSVG } from 'react-svg'
import schedule from '../assets/schedule.svg'
import gymarm from '../assets/gymarm.svg'
import heart from '../assets/heart.svg'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

const Plans = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on mount
      }, []);
  

  return (
    <>
        <div className='container mx-auto mt-20'>
            <div className=''>
                <p className='text-primary text-5xl'>Why Choose Us?</p>
                <p className='text-primary text-sm leading-4 pt-5'>Our commitment to your wellness goes beyond just classes and training sessions. Discover the <br /> unique benefits that set us apart and ensure you have the best experience on your wellness journey.</p>
            </div>
            <div className='pt-10 flex flex-row gap-10 justify-center items-center'>
                <div className='px-[34px] py-[42px] w-[319px] h-[400px] bg-footer text-primary hover:bg-primary hover:text-white rounded-3xl'>
                    <ReactSVG src={schedule} className='w-12'/>
                    <h3 className=' pt-3 text-3xl'>Flexible Scheduling</h3>
                    <p className=' pt-3 text-sm'>Adapt your fitness routine to your busy life with our flexible scheduling options. Choose from morning yoga, lunchtime fitness sessions, or evening workshops to fit your lifestyle.</p>
                </div>
                <div className='px-[34px] py-[42px] w-[319px] h-[400px] bg-footer text-primary hover:bg-primary hover:text-white rounded-3xl'>
                    <ReactSVG src={schedule} className=' w-12'/>
                    <h3 className=' pt-3 text-3xl'>Personalized Programs</h3>
                    <p className=' pt-3 text-sm'>Achieve your goals with customized fitness and wellness programs tailored to your unique needs. Whether you’re starting out or pushing your limits, we’ll guide you every step of the way.</p>
                </div> 
                <div className='px-[34px] py-[42px] w-[319px] h-[400px] bg-footer text-primary hover:bg-primary hover:text-white rounded-3xl'>
                    <ReactSVG src={gymarm} className=' w-12'/>
                    <h3 className=' pt-3 text-3xl'>Expert Instructors</h3>
                    <p className=' pt-3 text-sm'>Our certified and experienced instructors are here to support you. With expertise in fitness, yoga, and wellness, they’re dedicated to helping you reach your health and wellness goals.</p>
                </div> 
                <div className='px-[34px] py-[42px] w-[319px] h-[400px] bg-footer text-primary hover:bg-primary hover:text-white rounded-3xl'>
                    <ReactSVG src={heart} className=' w-12'/>
                    <h3 className=' pt-3 text-3xl'>Holistic Wellness</h3>
                    <p className=' pt-3 text-sm'>Beyond just fitness and yoga, we provide holistic wellness services, including nutritional advice and stress management techniques, to help you achieve a balanced, healthy lifestyle.</p>
                </div>     
            </div> 

            <div className='flex flex-col items-center justify-center pb-20'>
                <p className='text-primary text-center text-5xl pt-20'>Community <br /> Sweat Classes</p>
                <p className='text-primary text-center text-lg leading-4 pt-5'>If you're looking to supplement your current fitness routine with small group <br /> training or just want to join a few classes a month then take a look at our class pass <br /> options below.</p>
            </div>
            <div className='flex flex-row gap-10 justify-center'>
                <div className='flex flex-col items-center font-medium px-[34px] py-[68px] w-[380px] h-[500px] text-center bg-white text-primary  rounded-3xl'>
                    <p className='text-2xl'>Starter Plan</p>
                    <p className='text-7xl'>$14</p>
                    <p>per user, per month</p>
                    <hr className='bg-primary mt-5 h-[2px] w-32' />
                    <div>
                        <p className=' pt-5 text-sm'>8 yoga classes per month</p>
                        <p className=' pt-5 text-sm'>2 fitness training sessions per month</p>
                        <p className=' pt-5 text-sm'>Access to online resources</p>
                        <p className=' pt-5 text-sm'>Monthly wellness newsletter</p>
                    </div>   
                </div>
                <div className='flex flex-col items-center font-medium px-[34px] py-[68px] w-[380px] h-[500px] text-center bg-primary text-white  rounded-3xl'>
                    <p className='text-2xl'>Basic Plan</p>
                    <p className='text-7xl'>$29</p>
                    <p>per user, per month</p>
                    <hr className='bg-white mt-5 h-[2px] w-32' />
                    <div>
                        <p className=' pt-5 text-sm'>Unlimited yoga classes</p>
                        <p className=' pt-5 text-sm'>4 fitness training sessions per month</p>
                        <p className=' pt-5 text-sm'>1 personalized coaching session per month</p>
                        <p className=' pt-5 text-sm'>Access to online resources</p>
                        <p className=' pt-5 text-sm'>Monthly wellness newsletter</p>
                    </div>   
                </div>
                <div className='flex flex-col items-center font-medium px-[34px] py-[68px] w-[380px] h-[500px] text-center bg-white text-primary  rounded-3xl'>
                    <p className='text-2xl'>Premium Plan</p>
                    <p className='text-7xl'>$139</p>
                    <p>per user, per month</p>
                    <hr className='bg-primary mt-5 h-[2px] w-32' />
                    <div>
                        <p className=' pt-5 text-sm'>4 personalized coaching sessions per month</p>
                        <p className=' pt-5 text-sm'>Customized fitness and yoga plans</p>
                        <p className=' pt-5 text-sm'>Access to online resources</p>
                        <p className=' pt-5 text-sm'>Monthly wellness newsletter</p>
                    </div>   
                </div>
            </div>
        </div>
        <Contact />
        <Footer />
    
    </>
  )
}

export default Plans