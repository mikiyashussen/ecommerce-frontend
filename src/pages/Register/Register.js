import React from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'

import logo from '../../images/logo.jpg'

import './Register.scss';

const Register = () => {
  return (
    <div className='signin-form-container'>
        <div className='signin-form'>
        <img src={logo} alt='htshop-logo'/>
            <CustomInput type='text' placeholder='Usernames'/>
            <CustomInput type='email' placeholder='Email'/>
            <CustomInput type='password' placeholder='Password'/>
            <CustomButton btnText='Sign In' />
        </div>
    </div>
  )
}

export default Register