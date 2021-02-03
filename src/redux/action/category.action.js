
import axiosInstance from "../../helper/axios"
import { ALL_CATEGORIES_REQUEST, ALL_CATEGORIES_REQUEST_FAILED, ALL_CATEGORIES_REQUEST_SUCCESS } from "../type"

export const getAllCategories = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: ALL_CATEGORIES_REQUEST })
            const res = await axiosInstance.get('/category/getcategories')
            if (res.status === 200) {
                dispatch({
                    type: ALL_CATEGORIES_REQUEST_SUCCESS,
                    payload: res?.data?.cateList
                })
            }
        } catch (error) {
            dispatch({
                type: ALL_CATEGORIES_REQUEST_FAILED,
                payload: error?.message
            })
        }
    }
}
