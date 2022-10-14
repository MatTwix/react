import {GET_NEWS} from "./actionTypes";

const initialState = {
    news: []
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWS:
            return {
                ...state,
                news: action.payload
            }

        default :
            return state
    }
}

export const getNews = () => {
    return async (dispatch) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        dispatch({
            type: GET_NEWS,
            payload: data
        })
    }
}