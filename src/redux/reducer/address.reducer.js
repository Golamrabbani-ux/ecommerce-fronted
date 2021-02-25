import { addressConstants } from "../type";

const initalState = {
    loading: false,
    error: '',
    address: []
}

const addressReducer = (state = initalState, action) => {
    switch (action?.type) {
        case addressConstants?.ADDRESS_REQUEST:
            state = {
                ...state,
                loading: true
            }
            return state;
        case addressConstants?.ADDRESS_SUCCESS:
            state = {
                ...state,
                loading: false,
                address: action?.payload
            }
            return state;
        case addressConstants?.ADDRESS_FAILURE:
            state = {
                ...state,
                loading: false,
                address: [],
                error: action?.payload
            }
            return state;
        case addressConstants?.ADD_ADDRESS_REQUEST:
            state = {
                ...state,
                loading: true
            }
            return state;
        case addressConstants?.ADD_ADDRESS_SUCCESS:
            state = {
                ...state,
                loading: false,
                address: action?.payload
            }
            return state;
        case addressConstants?.ADD_ADDRESS_FAILURE:
            state = {
                ...state,
                loading: false,
                address: [],
                error: action?.payload
            }
            return state;
        default:
            return state;
    }
}

export default addressReducer;