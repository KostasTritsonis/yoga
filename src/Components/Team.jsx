import React from 'react'

const Team = () => {
  return (
    <div className='pb-20 gap-5 text-white '>
      <h4 className='text-primary'>OUR TEAM</h4>
      <h2 className='text-4xl text-primary pb-20'>Meet Our Team</h2>
      <div className='grid grid-cols-3 '>
        <div className='bg-primary flex flex-col p-7 w-[350px] h-[500px] rounded-3xl'>
          <p className='pb-2'>JOIN THE TEAM</p>
          <p>Personalized Coaching</p>  
          <p>One-on-one sessions with our fitness
            and yoga experts. Get personalized guidance and encouragement
            to reach your specific goals.</p>
        </div>

      </div>
      
    </div>
  )
}

export default Team