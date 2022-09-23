import './App.css';
import React, {useState, useEffect} from "react";
import {Box, Button, Container, List, ListItem, TextField} from "@mui/material";

function App() {

    const [messageList, setMassageList] = useState([]);
    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');

    const chatList = [
        {
            id: 1,
            name: 'Chat1'
        },
        {
            id: 2,
            name: 'Chat2'
        },
        {
            id: 3,
            name: 'Chat3'
        }
    ];

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
            <Box>
                <List
                    sx={{
                        borderRadius: 10,
                        backgroundColor: 'skyblue',
                        color: 'white',
                        marginBottom: 2,
                        width: 200
                    }}
                >
                    {chatList.map((chat) => {
                        return (
                            <ListItem
                                key={chat.id}
                                sx={{
                                    width: 182,
                                    margin: 1,
                                    paddingLeft: 1,
                                    paddingRight: 1,
                                    backgroundColor: 'turquoise',
                                    borderColor: 'white',
                                    borderStyle: 'solid',
                                    borderRadius: 5
                                }}
                            >
                                {chat.name}
                            </ListItem>
                        )
                    })}
                </List>
            </Box>
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
}

export default App;
