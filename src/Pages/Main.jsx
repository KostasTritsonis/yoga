import React from 'react'
import Hero from '../Components/Hero'
import Services from '../Components/Services'
import Benefits from '../Components/Benefits'
import Team from '../Components/Team'
import AnimatedElement from '../Components/AnimatedElement'

const Main = () => {
  return (
    <div>
        <AnimatedElement children={<Hero />} />
        <AnimatedElement children={<Benefits />} />
        <AnimatedElement children={<Services />} />
        <AnimatedElement children={<Team />} />
    </div>
  )
}

export default Main