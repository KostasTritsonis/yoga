import React, { useEffect } from 'react'
import card1 from '../assets/card1.webp'
import card2 from '../assets/card2.webp'
import card3 from '../assets/card3.webp'
import card4 from '../assets/card4.webp'
import card5 from '../assets/card5.webp' 
import card6 from '../assets/card6.webp'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'


const Blog = () => {


    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on mount
      }, []);
      
  return (
    <>
        <div className="container mx-auto mt-10 px-4">
            {/* Heading Section */}
            <div className="text-center">
                <p className="text-primary text-3xl sm:text-4xl md:text-5xl font-medium">Blog fitness for <br />  more exigentes</p>
                <p className="text-primary text-sm sm:text-base leading-6 pt-3 max-w-2xl mx-auto">
                I want to show others we have the power to overcome anything put in front of us if we want to 
                fight for it and change our mind over time. I hope to Show people that no matter what we are
                going thru we can come out of it on the other side so much stronger.
                </p>
            </div>

            {/* Feature Cards */}
            <div className="flex flex-wrap justify-center gap-6 pt-10">
                {[
                    { icon: card1,button:'Fitness' ,title: "Full-Body Strength Training:Week Program",day:'5 January 2025',id:"full-strength" },
                    { icon: card2,button:'Wellness' ,title: "Restorative Yoga for Stress Relief", day:'10 January 2025', id:"restorative-yoga" },
                    { icon: card3,button:'Fitness' ,title: "10 Minute Fitness Boost: Quick Workouts",day:'13 January 2025',id:"10-minute-fitness" },
                    { icon: card4,button:'Wellness' ,title: "Morning Routine Start Your Day with Wellness", day:'25 January 2025',id:"morning-routine" },
                    { icon: card5,button:'Yoga Sessions' ,title: "7 Day Yoga Flexibility Series for this Year",day:'3 February 2025',id:"7-day-yoga" },
                    { icon: card6,button:'Yoga Sessions' ,title: "5 Day Challenge Trainer Series",id:"5-day-challenge" },
                ].map((item, index) => (
                    <Link key={index} to={item.id}>
                    <div  className=" group cursor-pointer relative w-full sm:w-[300px] md:w-[320px] lg:w-[370px] h-auto md:h-[470px]  lg:h-[470px] p-4 bg-white text-primary hover:bg-footer hover:border border-primary  rounded-3xl">
                        <div  className='overflow-hidden rounded-3xl'>
                            <div className='  flex w-full duration-500 group-hover:transform group-hover:scale-110 rounded-3xl'>
                                <img src={item.icon} alt="" className="w-full h-full" />
                            </div>
                        </div>
                        <div>
                            <button className={`rounded-full bg-white hover:bg-opacity-90 text-primary font-medium border border-primary px-5 py-2 mt-5 group-hover:bg-primary group-hover:text-white`}>{item.button}</button>
                            <h3 className="text-xl md:text-2xl  pt-3">{item.title}</h3>
                            
                            <p className="text-sm sm:pt-20  pt-5">{item.day}</p>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
        <Contact />
        <Footer />
        
    </>
  )
}

export default Blog