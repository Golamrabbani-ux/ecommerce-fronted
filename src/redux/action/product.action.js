import axiosInstance from "../../helper/axios";
import { GET_PRODUCTS_BY_PAGE_REQUEST, GET_PRODUCTS_BY_PAGE_REQUEST_FAILED, GET_PRODUCTS_BY_PAGE_REQUEST_SUCCESS, GET_PRODUCTS_BY_SLUG_REQUEST, GET_PRODUCTS_BY_SLUG_REQUEST_FAILED, GET_PRODUCTS_BY_SLUG_REQUEST_SUCCESS, productsConstants } from "../type";

export const getProductsBySlug = (slug) => {
    return async dispatch => {
        try {
            dispatch({ type: GET_PRODUCTS_BY_SLUG_REQUEST })
            const res = await axiosInstance.get(`/products/${slug}`)
            if (res.status === 200) {
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


export const getProductByPage = (page) => {
    const { cid, type } = page;
    return async dispatch => {
        try {
            dispatch({ type: GET_PRODUCTS_BY_PAGE_REQUEST })
            const res = await axiosInstance.get(`/page/${cid}/${type}`);
            console.log(res);
            if (res?.status === 200) {
                dispatch({
                    type: GET_PRODUCTS_BY_PAGE_REQUEST_SUCCESS,
                    payload: res?.data?.page
                })
            }
        } catch (error) {
            dispatch({
                type: GET_PRODUCTS_BY_PAGE_REQUEST_FAILED,
                payload: error?.message
            })
        }
    }
}

// GET PRODUCT DETAILS BY ID
export const getProductDetailsBYId = (productId) =>{
    return async dispatch =>{
        try {
            dispatch({type: productsConstants?.PRODUCT_BY_ID_REQUEST})
            const res = await axiosInstance.get(`/allProducts/${productId}`);
            if(res.status === 200){
                dispatch({
                    type: productsConstants?.PRODUCT_BY_ID_SUCCESS,
                    payload: res?.data?.product
                })
            }
            else{
                dispatch({
                    type: productsConstants?.PRODUCT_BY_ID_FAILURE,
                    payload: res?.data?.message
                })
            }
        } catch (error) {
            dispatch({
                type: productsConstants?.PRODUCT_BY_ID_FAILURE,
                payload: error?.message
            })
        }
    }
}