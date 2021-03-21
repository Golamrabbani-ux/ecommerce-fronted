import { cartConstants } from "../type";

const initialState = {
    cartItems: {}
}


const cartReducer = (state = initialState, action) => {
    switch (action?.type) {
        case cartConstants?.ADD_TO_CART:
            state = {
                ...state,
                cartItems: action?.payload
            }
            return state;
            case cartConstants?.REMOVE_TO_CART:
            state = {
                ...state,
                cartItems: action?.payload
            }
            return state;
        case cartConstants?.CART_RESET:
            state = {
                ...state,
                cartItems: {}
            }
            return state;
        default:
            return state;
    }
}

export default cartReducer;