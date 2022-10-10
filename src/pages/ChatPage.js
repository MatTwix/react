import React, {useEffect, useState} from 'react';
import {Box, Button, Container, TextField} from "@mui/material";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import * as messagesSelector from "../redux/store/Messages/selectors";

const ChatPage = () => {
    const messageList = useSelector(messagesSelector.messageList);

    const dispatch = useDispatch();

    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');

    const params = useParams();

    const handleSubmit = (e) => {
        if (e) e.preventDefault();

        dispatch({
            type: 'add', payload: {
                text: text ? text : `Сообщение автора ${messageList[messageList.length - 1].author} отправлено!`,
                author: author ? author : 'Bot',
                chatId: +params.chatId
            }
        })
    }

    const handleDelete = (id) => {
        dispatch({type: 'delete', payload: id})
    }

    // useEffect(() => {
    //     setTimeout(() => {
    //         botAnswer();
    //     }, 1000)
    // }, messageList)
    //
    // function botAnswer() {
    //     handleSubmit();
    // }
    // TODO: remake bot answering

    return (
        <Container
            sx={{
                margin: 10,
                padding: 10,
                display: 'flex',
                flexDirection: 'column',
                '& .MuiTextField-root': {width: '25ch'},
            }}
        >
            <Box
                component='form'
                onSubmit={handleSubmit}
            >
                <TextField
                    id="outlined-multiline-static"
                    label="Сообщение"
                    multiline
                    rows={4}
                    autoFocus
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <TextField
                    id="outlined-basic"
                    label="Автор"
                    variant="outlined"
                    autoFocus
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <Button
                    variant="outlined" type='submit'
                >Добавить сообщение</Button>
            </Box>
            <Box>
                {messageList.filter(message => message.chatId === +params.chatId).length > 0 ?
                    messageList.filter(message => message.chatId === +params.chatId).map((item) => {
                        return (
                            <Box
                                key={item.id}
                                sx={{
                                    marginTop: 3,
                                }}
                            >
                                <i>{item.author}</i>
                                <Box
                                    sx={{
                                        paddingRight: 5,
                                        paddingLeft: 5,
                                        paddingTop: 1,
                                        paddingBottom: 1,
                                        color: 'white',
                                        width: 300,
                                        backgroundColor: 'primary.dark',
                                        borderRadius: 10
                                    }}
                                >
                                    <p>{item.text}</p>
                                </Box>
                                <button onClick={() => handleDelete(item.id)}>x</button>
                            </Box>
                        )
                    })
                    : 'Сообщений нет!'
                }
            </Box>
        </Container>
    );
};

export default ChatPage;