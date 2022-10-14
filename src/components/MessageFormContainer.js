import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as messagesSelector from "../redux/reducers/Messages/selectors";
import {useParams} from "react-router-dom";
import MessageForm from "./MessageForm";

const MessageFormContainer = () => {
    const messageList = useSelector(messagesSelector.messageList);

    const dispatch = useDispatch();

    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');

    const params = useParams();

    const handleSubmit = (e) => {
        if (e) e.preventDefault();

        dispatch({
            type: 'MESSAGE::ADD', payload: {
                text: text,
                author: author,
                chatId: +params.chatId
            }
        })
    }

    const handleDelete = (id) => {
        dispatch({type: 'MESSAGE::DELETE', payload: {id: id}})
    }
    return (
        <MessageForm
            messageList={messageList.filter(message => message.chatId === +params.chatId)}
            handleSubmit={handleSubmit}
            handleDelete={handleDelete}
            setText={setText}
            setAuthor={setAuthor}
            text={text}
            author={author}
        />
    );
};

export default MessageFormContainer;