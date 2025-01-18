import React from 'react'
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <footer className="bg-footer">
        <div className="container px-6 py-12 mx-auto">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                <div className="sm:col-span-2">
                    <h1 className="max-w-lg text-xl font-semibold tracking-tight text-primary xl:text-2xl">Subscribe our newsletter to get update.</h1>

                    <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                        <input id="email" type="text" autoComplete='off' className="px-4 py-2 text-secondary bg-white border rounded-md  
                         focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-primary" placeholder="Email Address"/>
                
                        <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto
                         md:mx-4 focus:outline-none bg-primary rounded-lg hover:bg-secondary  ">
                            Subscribe
                        </button>
                    </div>
                </div>

                <div>
                    <p className="font-semibold text-primary">Ouick Links</p>

                    <div className="flex flex-col items-start mt-2 space-y-2">
                        <a href="#" className="text-secondary transition-colors duration-300 hover:underline hover:text-primary">Home</a>
                        <a href="#" className="text-secondary transition-colors duration-300 hover:underline hover:text-primary">Who We Are</a>
                        <a href="#" className="text-secondary transition-colors duration-300 hover:underline hover:text-primary">Our Philosophy</a>
                    </div>
    
                </div>

                <div>
                    <p className="font-semibold text-primary">Follow us</p>

                    <div className="flex flex-col items-start mt-2 space-y-2">
                        <a href="#" className="text-secondary transition-colors duration-300 hover:underline hover:text-primary"><FacebookIcon  className='mr-3'/>Facebook</a>
                        <a href="#" className="text-secondary transition-colors duration-300 hover:underline hover:text-primary"><InstagramIcon className='mr-3'/>Instagram</a>
                        <a href="#" className="text-secondary transition-colors duration-300 hover:underline hover:text-primary"><XIcon className='mr-3'/>X-(Twitter)</a>
                    </div>
                </div>  
            </div>
            
            <hr className="my-6 mt-12  border-gray-700"/>
            
            <div className="flex md:mb-10 items-center justify-between">
                <a href="/">
                    <p className="text-primary font-tregular text-5xl">HARMONY</p>
                </a>

                <p>© 2025 Harmony Yoga and Fitness Studio. All rights reserved</p>
            </div>
            <p className='text-secondary opacity-70'>Designed by Konstantinos Tritsonis. Icons by Icons8</p>
        </div>
        
    </footer>
  )
}

export default Footer