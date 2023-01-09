import React from 'react'

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

import './Payment.scss'

const Payment = () => {
  return (
    <div style={{textAlign: 'left'}}>
        <h3 className='pageHeaders'>Payment</h3>
        <div  className='cartContainer'>
            <div className='addressFormContainer'>
                    <p style={{color: '#33928C', fontWeight: '700'}}>Delivery Adress</p>
                    <CustomInput  type='text' placeholder='Name'/>
                    <CustomInput  type='text' placeholder='Phone'/>
                    <CustomInput  type='text' placeholder='Country'/>
                    <CustomInput  type='text' placeholder='Street'/>
                    <div className='zip_CityContainer'>
                        <CustomInput type='text' placeholder='Zip Code' />
                        <CustomInput type='text' placeholder='City' />
                    </div>
                    <CustomButton btnText='Add Address'/>
                </div>
                <div className='orderSummaryContainer'>
                    <h3>Order Summary</h3>
                    <div className='orderSummaryDetails'>
                        <p>subtotal</p>
                        <p>$1299</p>
                        <p>Delivery</p>
                        <p>$700</p>
                        <p>Total</p>
                        <p>$1306</p>
                    </div>
                    <button>Pay with Stripe</button>
                </div>
        </div>
    </div>
  )
}

export default Payment