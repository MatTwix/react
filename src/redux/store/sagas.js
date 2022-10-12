import { put, takeLatest, delay, select} from 'redux-saga/effects';
import {messageList} from "../reducers/Messages/selectors";

function* onAddMessageWithSaga(action) {
    if(action.payload.author !== 'Bot') {
        yield delay(500);
        yield put({type: action.type, payload: {
            id: yield select(messageList).length,
            text: `Сообщение автора ${action.payload.author} отправлено!`,
            author: 'Bot',
            chatId: action.payload.chatId
        }});
    }
}

function* botAnswerSaga(){
    yield takeLatest('MESSAGE::ADD', onAddMessageWithSaga)
}

export default botAnswerSaga;