import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './NavBar.scss'

//image
import logo from '../../images/logo.jpg'

const mapStateToProps = state => {
  return {
    item: state.quantityOfItemsInCart
  }
}


const NavBar = ({item}) => {
  return (
    <Fragment>
      <div className='NavBarContainer'>
        <Link to={'/'}>
          <img src={logo} alt='htshop-logo'/>
        </Link>
        <div>
            <input placeholder='search for a product'
             style={{ 'height': '2em', 'border': 'none'}}/>
        </div>
        <Link to={'/cart'}>
          <div className='userProfile'>{item}</div>
        </Link>
      </div>
      <Outlet />
    </Fragment>
 
  )
}

export default connect(mapStateToProps)(NavBar)