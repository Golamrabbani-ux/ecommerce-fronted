import axios from "axios";
import axiosIntance from "../../helper/axios";
import { homePageConstants } from "../type";

export const getHomePageBanner = () =>{
    return async dispatch =>{
        try {
            dispatch({type: homePageConstants?.GET_HOME_PAGE_BANNER_REQUEST})
            const res = await axiosIntance.get('/home-page/get-banner');
            if(res.status === 200){
                dispatch({
                    type: homePageConstants?.GET_HOME_PAGE_BANNER_SUCCESS,
                    payload: res?.data?.bannerInfo
                })
            }
        } catch (error) {
            dispatch({
                type: homePageConstants?.GET_HOME_PAGE_BANNER_FAILURE,
                payload: error?.message
            })
        }
    }
}

export const getBrand = () =>{
    return async dispatch =>{
        try {
            dispatch({type: homePageConstants?.GET_BRANDS_REQUEST})
            const res = await axiosIntance.get('/get-brands');
            if(res.status === 200){
                dispatch({
                    type: homePageConstants?.GET_BRANDS_SUCCESS,
                    payload: res?.data?.brandsInfo
                })
            }
        } catch (error) {
            dispatch({
                type: homePageConstants?.GET_BRANDS_SUCCESS,
                payload: error?.message
            })
        }
    }
}