

const initialState = {
    categories: [],
    products: [],
    productDetails: {},
    productsInCart: [],
    quantityOfItemsInCart: 0
}

export const updateCartReducer = (state=initialState , action={}) => {
    console.log(action)
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
        default:
            return state;
    } 
} 




