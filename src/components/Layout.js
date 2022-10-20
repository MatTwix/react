import React, {useContext} from 'react';
import {Outlet} from "react-router-dom";
import CustomLink from "./CustomLink";
import {ThemeContext} from "../context";
import {Box, Button} from "@mui/material";

const Layout = () => {
    const {themes, toggleTheme} = useContext(ThemeContext);
    return (
        <Box sx={{
            background: themes.background,
            color: themes.color
        }}>
            <header>
                <Button onClick={toggleTheme} variant='contained'>Change Theme</Button>
                <br/>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    width: 500,

                }}>
                    <CustomLink to="/home">home</CustomLink>
                    <br/>
                    <CustomLink to="chats" >chats</CustomLink>
                    <br/>
                    <CustomLink to="/profile">profile</CustomLink>
                    <br/>
                    <CustomLink to="/news">news</CustomLink>
                </Box>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <h1>
                    footer
                </h1>
            </footer>
        </Box>
    );
};

export default Layout;