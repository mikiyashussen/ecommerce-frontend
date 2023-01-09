import React from 'react'

import './CustomInput.scss'

const CustomInput = ({type, placeholder}) => {
  return (
        <input type={type} placeholder={placeholder}/>
  )
}

export default CustomInput