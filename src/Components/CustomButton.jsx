import React from 'react'

const CustomButton = ({text}) => {
  return (
    <button className='rounded-full bg-primary hover:bg-opacity-90 text-white px-5 py-2 mt-5'>{text}</button>
  )
}

export default CustomButton