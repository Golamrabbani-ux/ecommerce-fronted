import { cartConstants } from "../type";

const initialState = {
    cartItems: {}
}


const cartReducer = (state = initialState, action) =>{
    switch (action?.type) {
        case cartConstants?.ADD_TO_CART:
            state = {
                ...state,
                cartItems: action?.payload
            }
            return state;
    
        default:
            return state;
    }
}

export default cartReducer;