import React from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'

import './SignIn.scss';
import { useDispatch } from 'react-redux';
import logo from '../../images/logo.jpg'

import { signIn } from '../../actions';

const SignIn = () => {
    const dispatch = useDispatch();
    const onSignIn = () => {
        dispatch(signIn('miki@gmail.com', 'passsword123'))
    }
  return (
    <div className='signin-form-container'>
        <div className='signin-form'>
        <img src={logo} alt='htshop-logo'/>
            <CustomInput type='email' placeholder='Email'/>
            <CustomInput type='password' placeholder='Password'/>
            <button onClick={onSignIn}> signin</button>
        </div>
    </div>
  )
}

export default SignIn