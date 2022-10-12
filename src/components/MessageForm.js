import React from 'react';
import {Box, Button, Container, TextField} from "@mui/material";

const MessageForm = ({messageList, handleSubmit, handleDelete, text, setText, author, setAuthor}) => {
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
                {messageList.length > 0 ?
                    messageList.map((item) => {
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

export default MessageForm;