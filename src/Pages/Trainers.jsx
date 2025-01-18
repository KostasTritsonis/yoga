import React from 'react'
import Hero from './Trainers/Hero'
import Contact from './Trainers/Contact'
import FAQ from './Main/FAQ'
import Footer from './Main/Footer'
import AnimatedElement from '../Components/AnimatedElement'

const Trainers = () => {
  return (
    <>
      <AnimatedElement children={<Hero />} />
      <AnimatedElement children={<Contact />} />
      <AnimatedElement children={<FAQ />} />
      <AnimatedElement children={<Footer />} />
    </>
  )
}

export default Trainers