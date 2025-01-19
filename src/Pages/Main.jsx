import React from 'react'
import Hero from '../Pages/Main/Hero'
import Services from '../Pages/Main/Services'
import Benefits from '../Pages/Main/Benefits'
import Team from '../Pages/Main/Team'
import AnimatedElement from '../Components/AnimatedElement'
import Contact from '../Pages/Main/Contact'
import FAQ from '../Components/FAQ'
import Footer from '../Components/Footer'

const Main = () => {
  return (
    <div>
        <AnimatedElement children={<Hero />} />
        <AnimatedElement children={<Benefits />} />
        <AnimatedElement children={<Services />} />
        <AnimatedElement children={<Team />} />
        <AnimatedElement children={<Contact />} />
        <AnimatedElement children={<FAQ />} />
        <AnimatedElement children={<Footer />} />
    </div>
  )
}

export default Main