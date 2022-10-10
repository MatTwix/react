import {combineReducers, createStore} from "redux";
import {chatsReducer} from "./reducers/ChatsReducer";
import {messagesReducer} from "./reducers/MessagesReducer";

const reducer = combineReducers({
    chats: chatsReducer,
    messages: messagesReducer
})

export const store = createStore(reducer);