import React, {useContext} from 'react';
import {Avatar, Box, List, ListItemAvatar, ListItemButton, ListItemText, Typography} from "@mui/material";
import {ThemeContext} from "../context";
import {Link} from "react-router-dom";

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
    },
    {
        id: 4,
        name: 'Chat4'
    }
];

const ChatsPage = () => {
    const themes = useContext(ThemeContext);
    return (
        <Box>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: themes.background,
                    height: 300, display: 'flex',
                    flexFlow: 'column wrap',
                    justifyContent: 'space-between'
            }}
            >
                {chatList.map((chat) => {
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
                                        sx={{ display: 'inline'}}
                                        component="span"
                                        variant="body2"
                                        color={ themes.color }
                                    >
                                        AUTHOR
                                    </Typography>
                                    {': MESSAGE'}
                                </React.Fragment>
                            }/>
                        </ListItemButton>
                    )
                })}
            </List>
        </Box>
    );
};

export default ChatsPage;