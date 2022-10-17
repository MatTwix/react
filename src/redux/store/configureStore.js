import {applyMiddleware, combineReducers, createStore} from "redux";
import {chatsReducer} from "../reducers/Chats/ChatsReducer";
import {messagesReducer} from "../reducers/Messages/MessagesReducer";
// import storage from 'redux-persist/lib/storage'
// import {persistReducer, persistStore} from "redux-persist";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import botAnswerSaga from "./sagas";
import {newsReducer} from "../reducers/News/newsReducer";

// const config = {
//     key: 'root',
//     storage
// }

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    chats: chatsReducer,
    messages: messagesReducer,
    news: newsReducer
})

// const persistedReducer = persistReducer(config, reducer);

export const store = createStore(reducer, applyMiddleware(thunk, sagaMiddleware));

sagaMiddleware.run(botAnswerSaga)

// export const persistor = persistStore(store)