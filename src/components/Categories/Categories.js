import { Link } from 'react-router-dom';

import catergoriesList from './categoriesData';


import './Categories.scss'
const Categories = () => {
  return (
    <div className='categoriesContaier'>
        <div className='catergoriesTitle'>Categories</div>
        <div className='catergoriesWrapper'>
            {
                catergoriesList.map(({name, imageUrl}, index) => (
                    <Link to={'/products-list'}>
                        <div className='singleCategory' key={name}
                        style={{backgroundImage: `linear-gradient(rgba(15, 20, 50, 0.42), rgba(15, 20, 50, 0.42)),url(${imageUrl})`
                                ,backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover'}}>
                        <div>{name}</div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Categories