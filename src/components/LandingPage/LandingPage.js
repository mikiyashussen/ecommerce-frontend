import { Link } from 'react-router-dom'

import Categories from '../Categories/Categories'

import './LandingPage.scss'
const LandingPage = () => {
  return (
    <div>
    <div className='landingPageContainer'>
        <div className='landingPageBrandText'>
            <p id='habeshaTechShop'>HabeshaTechShop</p>
            <p id='brandStatement'>Get the tools you need for techy habeshas...</p>    
            <Link to={'/categories'}>
              <button className='landingPageButton'>SHOP NOW</button>
            </Link>
        </div>
    </div>
    <Categories />
    </div>
  )
}

export default LandingPage