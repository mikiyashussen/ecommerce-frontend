import React from 'react'
import catergoriesList from './categoriesData';


import './Categories.scss'
const Categories = () => {
  return (
    <div className='categoriesContaier'>
        <div className='catergoriesTitle'>Categories</div>
        <div className='catergoriesWrapper'>
            {
                catergoriesList.map(({name, imageUrl}, index) => (
                    <div className='singleCategory' key={name}
                        style={{backgroundImage: `linear-gradient(rgba(15, 20, 50, 0.42), rgba(15, 20, 50, 0.42)),url(${imageUrl})`
                                ,backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover'}}>
                        <div>{name}</div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Categories