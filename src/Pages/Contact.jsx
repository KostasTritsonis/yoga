import React from 'react'
import contact from '../assets/contact2.webp'
import Footer from './Main/Footer'
import AnimatedElement from '../Components/AnimatedElement'

const Contact = () => {
  return (
    <>
        <AnimatedElement>
        <div className='flex justify-center gap-14 mt-32 mb-40 ml-60 '>
            <div className=''>
                <img src={contact} className='rounded-3xl w-[900px]' alt="" /> 
            </div>
            <div className='flex flex-col justify-center w-[35%]'>
                <p className='text-primary text-6xl'>Get in Touch.</p>
                <p className='text-primary leading-tight text-xl w-[70%]'>I want to help you overcome all mental and physical hurdles in your everyday life. 6 Years ago,
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