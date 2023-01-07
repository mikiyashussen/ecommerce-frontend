import { useState } from 'react';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import singleProductData from './singleProductData'
import './SingleProduct.scss'

const SingleProduct = () => {
    const [quantity, setQuantity] = useState(1);
  return (
    <div>
        <div className='productDescContainer'>
                <div className='productCarousal'>
                    <ImageSlider />
                </div>
                <div className='mainProductDetails'>
                    <h3>{singleProductData[0].name}</h3>
                    <div>{singleProductData[0].ram}</div>
                    <h2>${singleProductData[0].price}</h2>
                    <div>Delivery date</div>
                    <div>flexible value-e.g storage</div>
                    <div className='quantityContainer'>
                        <div onClick={() => setQuantity(quantity-1)}>-</div>
                        <div>{quantity}</div>
                        <div onClick={() => setQuantity(quantity+1 )}>+</div>
                    </div>
                    <div className='signleProductButtonsContainer'>
                        <button>Buy now</button>
                        <button>Add to Cart</button>
                    </div>
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