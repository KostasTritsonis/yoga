import React,{useEffect} from 'react'
import Hero from './Trainers/Hero'
import Contact from './Trainers/Contact'
import FAQ from './Main/FAQ'
import Footer from './Main/Footer'
import AnimatedElement from '../Components/AnimatedElement'

const Trainers = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on mount
  }, []);

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