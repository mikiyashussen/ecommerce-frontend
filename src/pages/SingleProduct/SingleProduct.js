import React from 'react'
import ImageSlider from '../../components/ImageSlider/ImageSlider';

import './SingleProduct.scss'

const SingleProduct = () => {
  return (
    <div>
        <div className='productDescContainer'>
                <div className='productCarousal'>
                    <ImageSlider />
                </div>
                <div className='mainProductDetails'>
                name
                </div>
                <div className='detailedProductDesc'>
                Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's
                 standard dummy text ever since the 1500s, when an unknown 
                 printer took a galley of type and scrambled it to make a 
                 type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining 
                  essentially unchanged. It was popularised in the 1960s with 
                  the release of Letraset sheets containing Lorem Ipsum passages, 
                  and more recently with desktop publishing software like Aldus P
                  ageMaker including versions of Lorem Ipsum.
                </div>
        </div>
    </div>
  )
}

export default SingleProduct;