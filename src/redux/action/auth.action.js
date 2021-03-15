import axiosInstance from "../../helper/axios";
import { authConstants } from "../type";


export const userLogin = (userInfo, setShow=null) => {
    return async dispatch => {
        try {
            dispatch({ type: authConstants?.LOGIN_REQUEST })
            const res = await axiosInstance.post('/signin', userInfo);
            if (res.status === 200) {
                const { token, user } = res?.data;
                localStorage.setItem('token', JSON.stringify(token))
                localStorage.setItem('user', JSON.stringify(user))
                dispatch({
                    type: authConstants?.LOGIN_SUCESS,
                    payload: res?.data
                })
                setShow(false)
            }
        } catch (error) {
            dispatch({
                type: authConstants?.LOGIN_FALIURE,
                payload: error?.response?.data?.message
            })
        }
    }
}

export const userSignUp = (userInfo, setShow) => {
    return async dispatch => {
        try {
            dispatch({ type: authConstants?.SIGINUP_REQUEST })
            const res = await axiosInstance.post('/signup', userInfo);
            if (res.status === 201) {
                const { token, user } = res?.data;
                localStorage.setItem('token', JSON.stringify(token))
                localStorage.setItem('user', JSON.stringify(user))
                dispatch({
                    type: authConstants?.SIGINUP_SUCCESS,
                    payload: res?.data
                })
                setShow(false)
            }
        } catch (error) {
            dispatch({
                type: authConstants?.SIGINUP_FALIURE,
                payload: error?.response?.data?.message
            })
        }
    }
}



export const isUserLoggedIn = () => {
    return async dispatch => {
        const token = JSON.parse(localStorage.getItem('token'));
        const user = JSON.parse(localStorage.getItem('user'));
        const payload = { token, user }
        if (token && user) {
            dispatch({
                type: authConstants?.LOGIN_SUCESS,
                payload: payload
            })
        }
    }
}