import React, {useContext} from 'react';
import {Avatar, Box, List, ListItemAvatar, ListItemButton, ListItemText, Typography} from "@mui/material";
import {ThemeContext} from "../context";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {chatsSelectors} from '../redux/reducers/Chats/index'

const ChatsPage = () => {
    const themes = useContext(ThemeContext);
    const chatList = useSelector(chatsSelectors.chatList)

    return (
        <Box>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: themes.background,
                    height: 300, display: 'flex',
                    flexFlow: 'column wrap',
                    justifyContent: 'space-around'
            }}
            >
                {chatList.length > 0 ?
                    chatList.map((chat) => {
                            return (
                                <ListItemButton
                                    key={chat.id}
                                    sx={{
                                        width: 300,
                                        margin: 1,
                                        paddingLeft: 1,
                                        paddingRight: 1
                                    }}
                                    component={Link}
                                    to={`/chats/${chat.id}`}
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            av
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={chat.name} secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{display: 'inline'}}
                                                component="span"
                                                variant="body2"
                                                color={themes.color}
                                            >
                                                AUTHOR
                                            </Typography>
                                            {': MESSAGE'}
                                        </React.Fragment>
                                    }/>
                                </ListItemButton>
                            )
                        })
                     : "Чатов нет"
                }
            </List>
        </Box>
    );
};

export default ChatsPage;