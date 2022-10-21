import * as types from './actionTypes'

//register

export const registerStart = () => ({
    type: types.LOADING_REGISTER
})

export const registerError = (e) => ({
    type: types.ERROR_REGISTER,
    payload: String(e)
})

export const registerSuccess = (user) => ({
    type: types.SUCCESS_REGISTER,
    payload: user
})

//login

export const loginStart = () => ({
    type: types.LOADING_LOGIN
})

export const loginError = (e) => ({
    type: types.ERROR_LOGIN,
    payload: String(e)
})

export const loginSuccess = (user) => ({
    type: types.SUCCESS_LOGIN,
    payload: user
})

//logout

export const logoutStart = () => ({
    type: types.LOADING_LOGOUT
})

export const logoutError = (e) => ({
    type: types.ERROR_LOGOUT,
    payload: String(e)
})

export const logoutSuccess = () => ({
    type: types.SUCCESS_LOGOUT
})