import * as types from "./actionTypes";

const initialState = {
    messages : {}
}

export const messagesReducer =  (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_MESSAGES:
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.payload.chatId]: action.payload.messages
                }
            }

        default:
            return state;
    }
}