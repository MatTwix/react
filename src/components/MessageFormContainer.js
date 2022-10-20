import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import MessageForm from "./MessageForm";
import {useDispatch, useSelector} from "react-redux";
import {messagesSelectors} from '../redux/reducers/Messages/index'
import {
    addMessageWithFirebase,
    deleteMessageWithFirebase,
    initMessageTracking
} from "../redux/reducers/Messages/actions";

const MessageFormContainer = () => {
    const params = useParams();
    const chatId = +params.chatId

    const messageList = useSelector(messagesSelectors.messageList);
    const dispatch = useDispatch();

    const handleSubmit = (message, event) => {
        if(event) event.preventDefault();

        message = {
            ...message,
            id: messageList.length ? messageList.length - 1 : 0
        }

        dispatch(addMessageWithFirebase(chatId, message));
    }

    useEffect(() => {
        dispatch(initMessageTracking())
    }, [])

    const handleDelete = (id) => {
        dispatch(deleteMessageWithFirebase(chatId, id))
    }

    return (
        <MessageForm
            messageList={messageList}
            handleSubmit={handleSubmit}
            handleDelete={handleDelete}
        />
    );
};

export default MessageFormContainer;