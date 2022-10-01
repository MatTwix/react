import React, {useEffect, useState} from 'react';
import {Box, Button, Container, TextField} from "@mui/material";

const HomePage = () => {
    const [messageList, setMassageList] = useState([]);
    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setMassageList(prevState => [...prevState, {
            id: giveLastId(prevState),
            text: text,
            author: author
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
                {messageList.map((item) => {
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

export default HomePage;