import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';



//actions
import { getCategories } from '../../actions';

import './Categories.scss'
import Cart from '../../pages/Cart/Cart';
const Categories = () => {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories)
    // const fetchCategories = () => {
        
    // }

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])
  return (
    <div className='categoriesContaier'>
        <div className='catergoriesTitle'>Categories</div>
            <div className='catergoriesWrapper'>
            {
                categories === [] ?  '...isLoading' : (categories.map(({name, imageUrl}, index) => (
                    <Link to={`/categories/${name}`} key={name}>
                        <div className='singleCategory' 
                        style={{backgroundImage: `linear-gradient(rgba(15, 20, 50, 0.42), rgba(15, 20, 50, 0.42)),url(${imageUrl})`
                                ,backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover'}}>
                            <div>{name}</div>
                        </div>
                    </Link>
                ))) 
            }
        </div>

        {/* <button onClick={fetchCategories}>GetState</button> */}
    </div>
  )
}

export default Categories;