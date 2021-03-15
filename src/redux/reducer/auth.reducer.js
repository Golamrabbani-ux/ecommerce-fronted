import { authConstants } from '../type';
const initialState = {
    loading: false,
    authenticate: false,
    token: '',
    user: {},
    error: null
}

const authReducer = (state = initialState, action) => {
    switch (action?.type) {
        case authConstants?.LOGIN_REQUEST:
            state = {
                ...state,
                loading: true
            }
            return state;
        case authConstants?.LOGIN_SUCESS:
            state = {
                ...state,
                loading: false,
                authenticate: true,
                token: action?.payload?.token,
                user: action?.payload?.user
            }
            return state;
        case authConstants?.LOGIN_FALIURE:
            state = {
                ...state,
                loading: false,
                authenticate: false,
                token: '',
                user: {},
                error: action?.payload
            }
            return state;
            case authConstants?.SIGINUP_REQUEST:
            state = {
                ...state,
                loading: true
            }
            return state;
        case authConstants?.SIGINUP_SUCCESS:
            state = {
                ...state,
                loading: false,
                authenticate: true,
                token: action?.payload?.token,
                user: action?.payload?.user
            }
            return state;
        case authConstants?.SIGINUP_FALIURE:
            state = {
                ...state,
                loading: false,
                authenticate: false,
                token: '',
                user: {},
                error: action?.payload
            }
            return state;

        default:
            return state;
    }
}

export default authReducer;