import { GET_PRODUCTS_BY_PAGE_REQUEST, GET_PRODUCTS_BY_PAGE_REQUEST_FAILED, GET_PRODUCTS_BY_PAGE_REQUEST_SUCCESS, GET_PRODUCTS_BY_SLUG_REQUEST, GET_PRODUCTS_BY_SLUG_REQUEST_FAILED, GET_PRODUCTS_BY_SLUG_REQUEST_SUCCESS, productsConstants } from "../type";

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
    page: {},
    productDetails: {},
    error: ''
}

const productReducer = (state = initialState, action) => {
    // console.log(action.payload);
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
        case GET_PRODUCTS_BY_PAGE_REQUEST:
            state = {
                ...state,
                loading: true
            }
            return state;
        case GET_PRODUCTS_BY_PAGE_REQUEST_SUCCESS:
            state = {
                ...state,
                loading: false,
                page: action.payload
            }
            return state;
        case GET_PRODUCTS_BY_PAGE_REQUEST_FAILED:
            state = {
                ...state,
                loading: false,
                page: {},
                error: action.payload
            }
            return state;
        case productsConstants?.PRODUCT_BY_ID_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            return state;
        case productsConstants?.PRODUCT_BY_ID_SUCCESS:
            state = {
                ...state,
                loading: false,
                productDetails: action?.payload
            }
            return state;
        case productsConstants?.PRODUCT_BY_ID_FAILURE:
            state = {
                ...state,
                loading: false,
                productDetails: {},
                error: action?.payload
            }
            return state;
        default:
            return state;
    }
}
export default productReducer;