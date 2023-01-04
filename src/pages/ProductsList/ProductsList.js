import React from 'react'
import image from '../../images/landingPage.jpg';
import phones from './sampleProductList';

import './ProductsList.scss';


const ProductsList = () => {
  return (
    <div>
      <div className='ProductsListPage'>
          <div>
            Filter
            <p>RAM</p>
            <p>Storage</p>
            <p>State</p>
            <p>Model</p>
            <p>price</p>
            <p>color</p>
          </div>
          <div className='productsListContainer'>
              {phones.map(({name, price, ram, storage, imageUrl}, index) => (
                  <div className='singleProduct' key={index}>
                    <img className='productImage' src={imageUrl} />
                    <div className='productDetials'>
                      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                        <h4>{name}</h4>
                        <p>{storage}</p>
                        <p>{ram}</p>
                      </div>
                      <h3>${price}</h3>
                    </div>
                    <button className='buyNow'>View Product </button>
                  </div>
              )
              )
              }
          </div>
      </div>
    </div>
  )
}

export default ProductsList