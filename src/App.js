import './App.css';
import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./components/Layout"
import NotFoundPage from "./pages/NotFoundPage";
import ChatsPage from "./pages/ChatsPage";
import {ThemeContext, themes} from "./context";
import ChatPage from "./pages/ChatPage";

function App() {
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
        setTheme(prevState => prevState === themes.light ? themes.dark : themes.light)
    }
    return (
        <ThemeContext.Provider value={{themes: theme, toggleTheme: toggleTheme}}>
            <Routes>
                <Route path={'/'} element={<Layout />}>
                    <Route index element={<HomePage />}/>
                    <Route path={'/chats'} element={<ChatsPage />} />
                    <Route path={'/chats/:chatId'} element={<ChatPage />}/>
                    <Route path={'/profile'} element={<ProfilePage />}/>
                    <Route path={'*'} element={<NotFoundPage />}/>
                </Route>
            </Routes>
        </ThemeContext.Provider>
    );
}

export default App;
