import * as types from "./actionTypes";

const initialState = {
    news: [],
    loading : false,
    error: null
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_NEWS_LOADING:
            return {
                ...state,
                loading: true
            }
        case types.GET_NEWS:
            return {
                ...state,
                news: action.payload,
                error: '',
                loading: false
            }
        case types.GET_NEWS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default :
            return state
    }
}

export const getNews = () => {
    return async (dispatch) => {
        dispatch({
            type: types.GET_NEWS_LOADING
        })
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            dispatch({
                type: types.GET_NEWS,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: types.GET_NEWS_ERROR,
                payload: String(error)
            })
        }
    }
}