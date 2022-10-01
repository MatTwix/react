import './App.css';
import React, {useState, useEffect} from "react";
import {Box, Button, Container, List, ListItem, TextField} from "@mui/material";
import {Route, Routes, Link, NavLink} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./components/Layout"
import NotFoundPage from "./pages/NotFoundPage";
import ChatsPage from "./pages/ChatsPage";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout />}>
                    <Route index element={<HomePage />}/>
                    <Route path={'/chats'} element={<ChatsPage />}/>
                    <Route path={'/profile'} element={<ProfilePage />}/>
                    <Route path={'*'} element={<NotFoundPage />}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
