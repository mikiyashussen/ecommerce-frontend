import { Fragment } from 'react';

import { Outlet, Link } from 'react-router-dom';

import './NavBar.scss'

//image
import logo from '../../images/logo.jpg'

const NavBar = () => {
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
        <Link to={'/categories'}>
          <div className='userProfile'>userprofile</div>
        </Link>
      </div>
      <Outlet />
    </Fragment>
 
  )
}

export default NavBar