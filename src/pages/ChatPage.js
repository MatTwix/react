import React, {useEffect, useState} from 'react';
import {Box, Button, Container, TextField} from "@mui/material";
import {useParams} from "react-router-dom";

const ChatPage = () => {
    const [messageList, setMassageList] = useState([
        {
            id: 1,
            text: 'hello',
            author: 'Mat',
            chatId: 1
        },
        {
            id: 2,
            text: 'hi',
            author: 'serg',
            chatId: 1
        },
        {
            id: 3,
            text: 'no',
            author: 'igr',
            chatId: 2
        },
        {
            id: 4,
            text: 'yes',
            author: 'vasya',
            chatId: 2
        },
        {
            id: 5,
            text: 'const',
            author: 'andr',
            chatId: 3
        },
        {
            id: 6,
            text: 'bye',
            author: 'din',
            chatId: 3
        },
        {
            id: 7,
            text: 'good',
            author: 'svn',
            chatId: 3
        },
    ]);
    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');

    const params = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();

        setMassageList(prevState => [...prevState, {
            id: giveLastId(prevState),
            text: text,
            author: author,
            chatId: +params.chatId
        }])
    }

    function giveLastId(array) {
        return array.length ? array[array.length - 1].id + 1 : 0
    }

    useEffect(() => {
        setTimeout(() => {
            botAnswer();
        }, 1000)
    }, [messageList])

    function botAnswer() {
        const lastAuthor = messageList[messageList.length - 1];
        if (lastAuthor && lastAuthor.author) {
            setMassageList(prevState => [
                ...prevState, {
                    id: giveLastId(prevState),
                    text: `Сообщение автора ${lastAuthor.author} отправлено!`
                }
            ])
        }
    }
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
                {messageList.filter(message => message.chatId === +params.chatId).map((item) => {
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
                        </Box>
                    )
                })}
            </Box>
        </Container>
    );
};

export default ChatPage;