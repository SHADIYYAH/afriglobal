import React from 'react'

const Button = ({text, type,className}) => {
  return (
    <div>
        <button className={`bg-[#f88b0b] ${className} `}  type={type}>{text}</button>
    </div>
  )
}

export default Button