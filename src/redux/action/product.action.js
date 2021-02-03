import axiosInstance from "../../helper/axios";
import { GET_PRODUCTS_BY_SLUG_REQUEST, GET_PRODUCTS_BY_SLUG_REQUEST_FAILED, GET_PRODUCTS_BY_SLUG_REQUEST_SUCCESS } from "../type";

export const getProductsBySlug = (slug) =>{
    return async dispatch =>{
        try {
            dispatch({type: GET_PRODUCTS_BY_SLUG_REQUEST})
            const res = await axiosInstance.get(`/products/${slug}`)
            if(res.status === 200){
                dispatch({
                    type: GET_PRODUCTS_BY_SLUG_REQUEST_SUCCESS,
                    payload: res?.data
                })
            }
        } catch (error) {
            dispatch({
                type: GET_PRODUCTS_BY_SLUG_REQUEST_FAILED,
                payload: error?.message
            })
        }
    }
}