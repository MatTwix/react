import {db} from "../../../services/firebase";
import {CHANGE_MESSAGES} from "./actionTypes";

const getPayloadFromSnapshot = (snapshot) => {
    const messages = [];

    snapshot.forEach((message) => {
        messages.push(message.val());
    })

    return {chatId : snapshot.key, messages}
}

export const addMessageWithFirebase = (chatId, message) => async() => {
    db.ref("messages").child(chatId).child(message.id).set(message);
}

export const initMessageTracking = () => (dispatch) => {
    db.ref("messages").on("child_changed", (snapshot) => {
        const payload = getPayloadFromSnapshot(snapshot);
        dispatch({
            type: CHANGE_MESSAGES,
            payload
        })
    })

    db.ref("messages").on("child_added", (snapshot) => {
        const payload = getPayloadFromSnapshot(snapshot);
        dispatch({
            type: CHANGE_MESSAGES,
            payload
        })
    })
}

export const deleteMessageWithFirebase = (chatId, messageId) => async() => {
    db.ref("messages").child(chatId).child(messageId).remove();
}