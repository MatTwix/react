import React from 'react';
import {Box, List, ListItem} from "@mui/material";

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

const ChatsPage = () => {
    return (
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
    );
};

export default ChatsPage;