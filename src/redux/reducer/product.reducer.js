import { GET_PRODUCTS_BY_SLUG_REQUEST, GET_PRODUCTS_BY_SLUG_REQUEST_FAILED, GET_PRODUCTS_BY_SLUG_REQUEST_SUCCESS } from "../type";

const initialState = {
    loading: false,
    products: [],
    productsByPrice: {
        under5k: [],
        under10k: [],
        under15k: [],
        under20k: [],
        up20k: [],
    },
    error: ''
}

const productReducer = (state = initialState, action) =>{
    switch (action?.type) {
        case GET_PRODUCTS_BY_SLUG_REQUEST:
            state = {
                ...state,
                loading: true
            }
            return state;
        case GET_PRODUCTS_BY_SLUG_REQUEST_SUCCESS:
            state = {
                ...state,
                loading: false,
                products: action?.payload?.products,
                productsByPrice: {
                    ...action?.payload?.productsByPrice
                }
            }
            return state;
        case GET_PRODUCTS_BY_SLUG_REQUEST_FAILED: 
            state = {
                ...state,
                loading: false,
                error: action?.payload
            }
            return state;
        default:
            return state;
    }
}
export default productReducer;