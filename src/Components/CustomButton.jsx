import React from 'react'

const CustomButton = ({text,style}) => {
  return (
    <button className={`rounded-full  bg-primary hover:bg-opacity-90 text-white px-5 py-2  ${style}`}>{text}</button>
  )
}

export default CustomButton