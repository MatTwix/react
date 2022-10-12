const initialState = {
    chats: [
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
    ]
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}