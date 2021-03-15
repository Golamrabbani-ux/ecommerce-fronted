import axiosIntance from "../../helper/axios";
import {cartConstants, orderConstants} from '../type';

export const addOrder = (order, history) =>{
    return async dispatch =>{
        try {
            dispatch({type: orderConstants?.ADD_ORDER_REQUEST})
            const res = await axiosIntance.post('/addorder', order);
            const {data, status} = res;
            if(status === 201){
                localStorage.setItem('orderid', JSON.stringify(data?.order?._id))
                if(data?.order?.items?.length === order?.items?.length){
                    localStorage.removeItem("cart");
                    dispatch({type: cartConstants?.CART_RESET})
                }
                dispatch({
                    type: orderConstants?.ADD_ORDER_SUCCESS,
                    payload: data?.order?.items
                })
                history?.push('/order-place-success');
            }
        } catch (error) {
            dispatch({
                type: orderConstants?.ADD_ORDER_FAILURE,
                payload: error?.message
            })
        }
    }
}

export const getorders = () =>{
    return async dispatch =>{
        try {
            dispatch({type: orderConstants?.GET_ORDER_REQUEST})
            const res = await axiosIntance.get('/getorders');
            if(res.status === 200){
                // localStorage.setItem('order', JSON.stringify(res?.data?.orders));
                dispatch({
                    type: orderConstants?.GET_ORDER_SUCCESS,
                    payload: res?.data?.orders
                })
            }
        } catch (error) {
            dispatch({
                type: orderConstants?.GET_ORDER_FAILURE,
                payload: error?.message
            })
        }
    }
}

export const getSingleOrder = (orderId) =>{
    return async dispatch =>{
        try {
            dispatch({type: orderConstants?.GET_ORDER_DETAILS_REQUEST})
            const res = await axiosIntance.post('/getorder', orderId);
            if(res.status === 200){
                const {  order, address} = res.data;
                dispatch({
                    type:orderConstants?.GET_ORDER_DETAILS_SUCCESS,
                    payload: {order, address}
                })
            }
        } catch (error) {
            dispatch({
                type:orderConstants?.GET_ORDER_DETAILS_FAILURE,
                payload: error?.message
            })
        }
    }
}