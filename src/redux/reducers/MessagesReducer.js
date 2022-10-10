const initialState = {
    messages : [
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
        }
    ]
}

export const messagesReducer =  (state = initialState, action) => {
    switch (action.type) {
        case 'delete':
            return {
                ...state,
                messages: state.messages.filter((item) => item.id !== action.payload)
            }

        case 'add':
            state.messages.push({
                id: state.messages.length ? - state.messages.length - 1 : 0,
                text: action.payload.text,
                author: action.payload.author,
                chatId: action.payload.chatId
            })
            return {
                ...state,
                messages: state.messages.filter((item) => item.id !== 0)
            }

        default:
            return state;
    }
}