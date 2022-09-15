import './App.css';
import Message from "./Message";

function App() {
  let message = 'hello world'

  return (
      <Message message={message}/>
  );
}

export default App;
