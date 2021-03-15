import { orderConstants } from "../type";

const initialState = {
    order: [],
    singleOrder: {},
    address: {},
    loading: false,
    error: ''
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case orderConstants?.ADD_ORDER_REQUEST:
            state = {
                ...state,
                loading: true
            }
            return state;
        case orderConstants?.ADD_ORDER_SUCCESS:
            state = {
                ...state,
                loading: false,
                order: action?.payload
            }
            return state;
        case orderConstants?.ADD_ORDER_FAILURE:
            state = {
                ...state,
                loading: false,
                order: [],
                error: action?.payload
            }
            return state;
        case orderConstants?.GET_ORDER_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            return state;
        case orderConstants?.GET_ORDER_SUCCESS:
            state = {
                ...state,
                loading: false,
                order: action?.payload
            }
            return state;
        case orderConstants?.GET_ORDER_FAILURE:
            state = {
                ...state,
                loading: false,
                order: [],
                error: action?.payload
            }
            return state;
        case orderConstants?.GET_ORDER_DETAILS_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            return state;
        case orderConstants?.GET_ORDER_DETAILS_SUCCESS:
            state = {
                ...state,
                loading: false,
                singleOrder: action?.payload?.order,
                address: action?.payload?.address
            }
            return state;
            case orderConstants?.GET_ORDER_DETAILS_FAILURE:
                state = {
                    ...state,
                    loading: false,
                    singleOrder: {},
                    address: {},
                    error: action?.payload
                }
                return state;
        default:
            return state;
    }
}
export default orderReducer;