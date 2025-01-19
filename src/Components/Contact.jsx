import React from 'react'
import contact from '../assets/contact.webp'

const Contact = () => {
  return (
    <div className='container mx-auto sm:grid sm:grid-cols-2 gap-10 mt-32 mb-20'>
        <div className='flex items-center'>
            <img src={contact}  alt="" /> 
        </div>
        <div className='flex flex-col items-center md:ml-14'>
            <p className='text-primary text-3xl'>Get in Touch.</p>
            <p className='text-primary leading-tight md:w-[70%] text-center max-sm:pt-3'>I want to help you overcome all mental and physical hurdles in  your everyday life.6 Years ago, I was electrocuted with 277 volts.</p>
            <div className='mt-10 w-[80%] '>
                <form autoComplete='off'  action="" className='flex flex-col '>
                    <label  className='text-primary py-2'>Email (required)</label>
                    <input id='email' className='   bg-transparent border-b border-primary focus:outline-none ' autoComplete='off'  type="email"  required/>
                    <label  className='text-primary py-2'>Message (required)</label>
                    <input id='message' className='  bg-transparent border-b border-primary focus:outline-none' autoComplete='off'  type="text"  required/>
                    <input className='rounded-full bg-primary hover:bg-opacity-90 text-white px-5 py-2 mt-5 w-32' type='submit' value={"Submit"}/>
                </form>  
            </div>
        </div>
    </div>
   
  )
}

export default Contact