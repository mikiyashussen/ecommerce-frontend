

const initialState = {
    categories: [],
    products: [],
    productDetails: {},
    productsInCart: [],
    quantityOfItemsInCart: 0,
    signinResponse: {}
}

export const updateCartReducer = (state=initialState , action={}) => {
    console.log(action.payload)
    switch(action.type) {
        case 'ADD_TO_CART':
            // console.log(action.quantity.quantity)
            return  {...state, 
                productsInCart: [...state.productsInCart, action.payload.productToBeAddedToCart],
                quantityOfItemsInCart: (state.quantityOfItemsInCart+action.payload.quantity)};
        case 'FETCH_CATEGORIES':
            return {...state, categories: action.payload}
        case 'FETCH_PRODUCTS':
            return {...state, products: action.payload}
        case 'CLEAR_PRODUCTS_IN_STATE':
            return {...state, products: action.payload}
        case 'GET_PRODUCT_DETAILS':
            return {...state, productDetails: action.payload}
        case 'SIGN_IN':
            return {...state, signinResponse: action.payload}
        case 'REGISTER_USER':
            return {...state, signinResponse: action.payload}
        default:
            return state;
    } 
} 




