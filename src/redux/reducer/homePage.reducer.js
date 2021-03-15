import { homePageConstants } from "../type";

const initialState = {
    loading: false,
    banner: [],
    brands: [],
    error: '',

}

const homePage = (state = initialState, action) => {
    switch (action?.type) {
        case homePageConstants?.GET_HOME_PAGE_BANNER_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            return state;
        case homePageConstants?.GET_HOME_PAGE_BANNER_SUCCESS:
            state = {
                ...state,
                loading: false,
                banner: action?.payload,
            }
            return state;
        case homePageConstants?.GET_HOME_PAGE_BANNER_FAILURE:
            state = {
                ...state,
                loading: false,
                banner: [],
                error: action?.payload
            }
            return state;
        case homePageConstants?.GET_BRANDS_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            return state;
        case homePageConstants?.GET_BRANDS_SUCCESS:
            state = {
                ...state,
                loading: false,
                brands: action?.payload
            }
            return state;
        case homePageConstants?.GET_BRANDS_FAILURE:
            state = {
                ...state,
                loading: false,
                brands: [],
                error: action?.payload
            }
            return state;
        default:
            return state
    }
}

export default homePage;