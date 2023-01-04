import React from 'react'

import './NavBar.css'

//image
import logo from '../../images/logo.jpg'

const NavBar = () => {
  return (
    <div className='NavBarContainer'>
        <div><img src={logo} alt='htshop-logo'/></div>
        <div>
            <input placeholder='search for a product'
             style={{ 'height': '2em', 'border': 'none'}}/>
        </div>
        <div className='userProfile'>userprofile</div>
    </div>
  )
}

export default NavBar