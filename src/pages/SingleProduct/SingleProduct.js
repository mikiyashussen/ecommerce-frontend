import { useEffect, useState } from 'react';
import { Link, 
  useLocation
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import singleProductData from './singleProductData'
import './SingleProduct.scss'

import { addToCart, removeFromcart, getProductDetails } from '../../actions';



//   const mapDispatchToProps = (dispatch)  => {
//      return {
//         cart: (quantity) => {dispatch(addToCart(quantity))}
//      }
//   }

const SingleProduct = () => {

  
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location)
  const productId = location[(location.length - 1)];
  // const productDetails = useSelector(state => state.products.find(item => item._id === productId))
  const productDetails = useSelector(state => state.productDetails)
  console.log(productDetails)


  

  useEffect(() => {
    dispatch(getProductDetails(location.pathname))
  }, [dispatch])


  const onAddToCart = () => {
      // the items should be added to database as well and on user login
      // should be fetched and stored to the store
      productDetails['quantity'] = quantity;
      dispatch(addToCart(quantity, productDetails))
      // cart(quantity)
    }
  return (
    <div>
        {productDetails === [] ? '...isLoading' : (
        <div className='productDescContainer'>
          <div className='productCarousal'>
              <ImageSlider />
          </div>
          <div className='mainProductDetails'>
            <h3>{productDetails.name}</h3>
            <div>{productDetails.ram}</div>
            <h2>${productDetails.price}</h2>
            <div>Delivery date</div>
            <div>flexible value-e.g storage</div>
            <div className='quantityContainer'>
                <div onClick={() => setQuantity(quantity-1)}>-</div>
                <div>{quantity}</div>
                <div onClick={() => setQuantity(quantity+1)}>+</div>
            </div>
            <div className='signleProductButtonsContainer'>
                <Link to='/payment'>
                  <button>Buy now</button>
                </Link>
                <Link to='/cart'>
                <button onClick={onAddToCart}>Add to Cart</button>
                </Link>
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
      </div>)}
    </div>
  )
}



export default SingleProduct;