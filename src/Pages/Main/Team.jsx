import React from 'react'
import clare from '../../assets/clare.webp'
import alicia from '../../assets/alicia.webp'
import { Link } from 'react-router-dom'
import TeamCard from '../../Components/TeamCard'

const Team = () => {
  return (
    <div className="container mx-auto mt-20 px-4 text-white">
    {/* Section Heading */}
    <div className="text-center">
        <h4 className="text-primary text-lg font-semibold">OUR TEAM</h4>
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-primary pb-10 font-bold">Meet Our Team</h2>
    </div>

    {/* Team Section */}
    <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
        
        {/* Left Panel - Personalized Coaching */}
        <div className="bg-primary p-7 rounded-3xl w-full sm:w-[550px]  md:w-[650px] lg:w-[370px]  h-[400px] sm:h-[350px] lg:h-[550px]">
            <p className="text-lg font-medium pb-2">JOIN THE TEAM</p>
            <p className="text-xl sm:text-2xl lg:text-lg xl:text-xl font-semibold">Personalized Coaching</p>  
            <p className="text-sm sm:text-base lg:text-sm xl:text-base leading-tight max-lg:w-[70%]">
                One-on-one sessions with our fitness and yoga experts. Get personalized guidance and encouragement
                to reach your specific goals.
            </p>
            <Link to='/trainers'>
                <button className="bg-background text-primary font-bold px-5 py-2 rounded-full hover:bg-opacity-70 transition-all duration-300 mt-32 lg:mt-60 xl:mt-72">
                    View more
                </button>
            </Link>
        </div>

        {/* Right Panel - Team Cards */}
        <div className="flex flex-row gap-6">
            <TeamCard 
                element="Clare Ford" 
                image={clare} 
                text="With a passion for strength training, Clare is dedicated to helping you build muscle and boost endurance. Discover her personalized approach to fitness and how she can help you reach your goals."
            />
            <TeamCard 
                element="Alicia Regis" 
                image={alicia} 
                text="Alicia specializes in guiding students through advanced yoga techniques to enhance flexibility and inner peace. Explore her teaching style and how she can support your yoga journey."
            />
        </div>
    </div>
</div>
  )
}

export default Team