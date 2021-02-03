import { ALL_CATEGORIES_REQUEST, ALL_CATEGORIES_REQUEST_FAILED, ALL_CATEGORIES_REQUEST_SUCCESS } from "../type";

const initState = {
    loading: false,
    categories: [],
    error: ''
}

export const categoryReducer = (state = initState, action) =>{
    switch (action.type) {
        case ALL_CATEGORIES_REQUEST:
            state = {
                ...state,
                loading: true
            }
            return state;
        case ALL_CATEGORIES_REQUEST_SUCCESS:
            state = {
                ...state,
                loading: false,
                categories: action?.payload
            }
            return state;
        case ALL_CATEGORIES_REQUEST_FAILED:
            state = {
                ...state,
                loading: false,
                error: action?.payload,
                categoties: [],
            }
            return state;
        default:
            return state;;
    }
}