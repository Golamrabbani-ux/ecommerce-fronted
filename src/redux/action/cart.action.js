import store from "../store";
import { cartConstants } from "../type";

export const addToCart = (cart, newQty = 1) => {
    return dispatch => {
        const { cartItems } = store.getState()?.cart;
        const qty = cartItems[cart?._id] ? parseInt(cartItems[cart?._id]?.qty + newQty) : 1;
        cartItems[cart?._id] = { ...cart, qty };

        localStorage.setItem('cart', JSON.stringify(cartItems))

        dispatch({
            type: cartConstants?.ADD_TO_CART,
            payload: cartItems
        })
    }
}

export const deleteToCart = (cart) => {
    return dispatch => {
        let cartItems = JSON.parse(localStorage.getItem('cart'));
        delete cartItems[cart?._id];
        localStorage.setItem('cart', JSON.stringify(cartItems))
        dispatch({
            type: cartConstants?.REMOVE_TO_CART,
            payload: cartItems
        })
    }
}

export const updateToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    return dispatch => {
        if (cartItems) {
            dispatch({
                type: cartConstants?.ADD_TO_CART,
                payload: cartItems
            })
        }
    }
}
