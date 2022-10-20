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
import NewsPage from "./pages/NewsPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
        setTheme(prevState => prevState === themes.light ? themes.dark : themes.light)
    }
    return (
        <ThemeContext.Provider value={{themes: theme, toggleTheme: toggleTheme}}>
            <Routes>
                <Route path={'/'} element={<Layout />}>
                    <Route index element={<RegisterPage />}/>
                    <Route path={'/home'} element={<HomePage />}/>
                    <Route path={'/login'} element={<LoginPage />}/>
                    <Route path={'/chats'} element={<ChatsPage />} />
                    <Route path={'/chats/:chatId'} element={<ChatPage />}/>
                    <Route path={'/news'} element={<NewsPage />}/>
                    <Route path={'/profile'} element={<ProfilePage />}/>
                    <Route path={'*'} element={<NotFoundPage />}/>
                </Route>
            </Routes>
        </ThemeContext.Provider>
    );
}

export default App;
