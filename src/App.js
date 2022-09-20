import './App.css';
import {useState, useEffect} from "react";

function App() {

    const [messageList, setMassageList] = useState([]);
    const [text, setText] = useState('')
    const [author, setAuthor] = useState('')

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
        if(lastAuthor && lastAuthor.author) {
            setMassageList(prevState => [
                ...prevState, {
                id: giveLastId(prevState),
                    text: `Сообщение автора ${lastAuthor.author} отправлено!`
                }
            ])
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={text} onChange={(e) => setText(e.target.value)} type="text"/>
                <input value={author} onChange={(e) => setAuthor(e.target.value)} type="text"/>
                <button type='submit'>Добавить сообщение</button>
            </form>
            {messageList.map((item) => {
                return (
                    <div>
                        <p>{item.text}</p>
                        <i>{item.author}</i>
                    </div>
                )
            })}
        </div>
    );
}

export default App;
