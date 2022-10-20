import * as types from './actionTypes'
import {
    loginError,
    loginStart,
    loginSuccess, logoutError, logoutStart,
    logoutSuccess,
    registerError,
    registerStart,
    registerSuccess
} from "./actions";
import {auth} from "../../../services/firebase";

const initialState = {
    loading : false,
    error : null,
    currentUser: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOADING_LOGIN:
        case types.LOADING_LOGOUT:
        case types.LOADING_REGISTER:
            return {
                ...state,
                loading: true
            }
        case types.ERROR_LOGIN:
        case types.ERROR_LOGOUT:
        case types.ERROR_REGISTER:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case types.SUCCESS_LOGIN:
        case types.SUCCESS_REGISTER:
            return {
                ...state,
                loading: false,
                error: false,
                currentUser: action.payload
            }

        case types.SUCCESS_LOGOUT:
            return {
                ...state,
                loading: false,
                error: false,
                currentUser: null
            }

        default:
            return state
    }
}

export const registerInitiate = (email, password, displayName) => {
    return(dispatch) => {
        dispatch(registerStart());
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(({user}) => {
                user.updateProfile({
                    displayName: displayName
                })
                dispatch(registerSuccess(user))
            })
            .catch(e => dispatch(registerError(String(e))))
    }
}

export const loginInitiate = (email, password) => {
    return (dispatch) => {
        dispatch(loginStart())
        auth
            .signInWithEmailAndPassword(email, password)
            .then(({user}) => {
                dispatch(loginSuccess(user))
            })
            .catch(e => dispatch(loginError(String(e))))
    }
}

export const logoutInitiate = () => {
    return(dispatch) => {
        dispatch(logoutStart())
        auth
            .signOut()
            .then(() => dispatch(logoutSuccess()))
            .catch((e) => dispatch(logoutError(String(e))))

    }
}
