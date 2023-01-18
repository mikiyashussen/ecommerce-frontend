const ADD_TO_CART = 'ADD_TO_CART';
const GET_CATEGORIES = 'GET_CATEGORIES'
const GET_PRODUCT_DETAILS = 'GET_PRODUCT_DETAILS';


export const addToCart = (quantity, product) => ({
    type: 'ADD_TO_CART',
    payload: {
        productToBeAddedToCart: product,
        quantity: quantity
    }
})

export const removeFromcart = (quantity) => ({
    type: 'REMOVE_FROM_CART',
    quantity: quantity
})

export const getCategories = () => {
    return dispatch => {
        fetch('http://localhost:5000/categories')
        .then(data => data.json())
        .then(categories => dispatch({type: 'FETCH_CATEGORIES', payload: categories}))
    }
}


export const getProducts = (urlPath) => {
    return dispatch => {
        fetch(`http://localhost:5000${urlPath}`)
        .then(res => res.json())
        .then(products => dispatch({type: 'FETCH_PRODUCTS', payload: products}))
    }
}

export const getProductDetails = (urlPath,id) => {
    return dispatch => {
        fetch(`http://localhost:5000${urlPath}`)
        .then(res => res.json())
        .then(productDetails => dispatch({type: GET_PRODUCT_DETAILS, payload: productDetails}))
    }
}