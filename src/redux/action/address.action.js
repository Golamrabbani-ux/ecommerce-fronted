import axiosInstance from "../../helper/axios"
import {addressConstants} from '../type'

export const getUserAddress = () =>{
    return async dispatch =>{
        try {
            dispatch({type: addressConstants?.ADDRESS_REQUEST})
            const res = await axiosInstance.get('/user/getaddress');
            if(res.status === 200){
                dispatch({
                    type: addressConstants?.ADDRESS_SUCCESS,
                    payload: res?.data?.userAddress?.address
                })
            }
        } catch (error) {
            dispatch({
                type: addressConstants?.ADDRESS_FAILURE,
                payload: error?.message
            })
        }
    }
}

export const addNewAddress = (address) =>{
    const payload = {
        address
    }
    return async dispatch =>{
        try {
            dispatch({type: addressConstants?.ADD_ADDRESS_REQUEST})
            const res = await axiosInstance.post('/user/create/address', {payload});
            if(res.status === 201){
                dispatch({
                    type: addressConstants?.ADD_ADDRESS_SUCCESS,
                    payload: res?.data?.address?.address
                })
            }
        } catch (error) {
            dispatch({
                type: addressConstants?.ADD_ADDRESS_FAILURE,
                payload: error?.message
            })
        }
    }
}