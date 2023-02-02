import { useDispatch, useSelector } from 'react-redux'
import './Cart.scss'
const cartObj = [{
    name: 'iPhone 13 Pro Max',
    imptDetails: '6GB RAM, 256 GB',
    imageUrl: 'https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
},
{
    name: 'FIFA 2022 Pad',
    imptDetails: '4GB RAM, 1TB GB',
    imageUrl: 'https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
}]


const Cart = () => {
    const itemsInCart = useSelector(state => state.productsInCart)

    // get cart items should be fetched here
    console.log(itemsInCart)
  return (
    <div>
        <p className='pageHeaders'>Shoping Cart 2items</p>
        <div className='cartContainer'>
            <div  className='oderListContainer'>
                {itemsInCart.map((item, index) => (
                    <div key={item.name} className='singleOrder'>
                        <div className='orderImageContainer' style={{backgroundImage: `url(${item.imageUrl})`}}></div>
                        <div className='productDetials'>
                            <h3>{item.name}</h3>
                            <p>{item.ram}{item.storage}</p>
                        </div>
                        <h3>{item.quantity}</h3>
                        <div>delete from cart</div>
                    </div>
                ))}
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
                <button>Go to checkout</button>
            </div>
        </div>
    </div>
  )
}

export default Cart