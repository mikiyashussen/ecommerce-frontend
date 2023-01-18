import { useEffect } from 'react';
import { Link, 
  useLocation,
  useNavigate,
  createSearchParams
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import image from '../../images/landingPage.jpg';
import phones from './sampleProductList';


//actions
import { getProducts } from '../../actions';


import './Products.scss';


const ProductsList = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location)
  const productsList = useSelector(state => state.products);
  

  // const params = {'product-id': productId}
  // const onViewProduct = (id) =>  navigate({
  //   pathname: `${location}`,
  //   search: `?${createSearchParams({
  //     'product_id': id
  //   })}`,
  // });
  // useEffect(() => {
  //   dispatch({type: 'CLEAR_PRODUCTS_IN_STATE', payload: []})
  // }, [dispatch])

  useEffect(() => {
    dispatch(getProducts(location.pathname))
  }, [dispatch])
 
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
            {/* why is '...isLoading' not showing */}
              {productsList === [] ? '...isLoading' : (productsList.map(({name, price, ram, storage, imageUrl, _id}, index) => (
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
                  <Link to={`${location.pathname}/${_id}`}>
                    {/* <button className='viewProduct' onClick={() => onViewProduct(_id)}>View Product</button> */}
                    <div className='viewProduct'>View Product </div>
                  </Link>
                </div>))
              )
              }
          </div>
      </div>
  )
}

export default ProductsList