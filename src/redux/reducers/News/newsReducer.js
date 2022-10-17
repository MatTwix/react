import {GET_NEWS, GET_NEWS_ERROR, GET_NEWS_LOADING} from "./actionTypes";

const initialState = {
    news: [],
    loading : false,
    error: ''
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWS_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_NEWS:
            return {
                ...state,
                news: action.payload,
                error: '',
                loading: false
            }
        case GET_NEWS_ERROR:
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
            type: GET_NEWS_LOADING
        })
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            dispatch({
                type: GET_NEWS,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: GET_NEWS_ERROR,
                payload: String(error)
            })
        }
    }
}