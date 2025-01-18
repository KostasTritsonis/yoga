import React,{useEffect} from 'react'
import contact from '../assets/contact2.webp'
import Footer from './Main/Footer'
import AnimatedElement from '../Components/AnimatedElement'

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on mount
      }, []);

  return (
    <>
        <AnimatedElement>
        <div className='flex justify-center max-lg:items-center max-lg:flex-col max-md: gap-14 mt-32 mb-40 lg:ml-60 '>
            <div className=''>
                <img src={contact} className='rounded-3xl 2xl:w-[900px] xl:w-[700px] md:w-[700px]  ' alt="" /> 
            </div>
            <div className='flex flex-col justify-center lg:w-[35%] md:w-[70%]'>
                <p className='text-primary 2xl:text-6xl xl:text-5xl lg:text-4xl text-3xl'>Get in Touch.</p>
                <p className='text-primary leading-tight 2xl:text-xl xl:text-lg md:text-md '>I want to help you overcome all mental and physical hurdles in your everyday life. 6 Years ago,
                     I was electrocuted with 277 volts. I suffered 3rd degree burns on my hand and needed neck surgery and they said i couldn’t be able to make a full recovery.</p>
                <div className='mt-10'>
                    <form autoComplete='off'  action="" className='flex flex-col '>
                        <label  className='text-primary py-2'>Email (required)</label>
                        <input id='email' className=' w-[70%] bg-transparent border-b border-primary focus:outline-none ' autoComplete='off'  type="email"  required/>
                        <label  className='text-primary py-2'>Message (required)</label>
                        <input id='message' className='w-[70%] bg-transparent border-b border-primary focus:outline-none' autoComplete='off'  type="text"  required/>
                        <input className='rounded-full bg-primary hover:bg-opacity-90 text-white px-5 py-2 mt-5 w-32' type='submit' value={"Submit"}/>
                    </form>  
                </div>
            </div>
        </div>
        </AnimatedElement>
        <AnimatedElement children={<Footer />} />
    </>
   
   
  )
}

export default Contact