import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import image from '../../images/landingPage.jpg';
import phones from './sampleProductList';



import './Products.scss';


const ProductsList = () => {

  const location = useLocation();
  console.log(location)
  return (
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
                    <Link to={`${location.pathname}/${name}`}>
                      <div className='viewProduct'>View Product </div>
                    </Link>
                  </div>
              )
              )
              }
          </div>
      </div>
  )
}

export default ProductsList