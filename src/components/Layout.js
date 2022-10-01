import React from 'react';
import {NavLink, Route, Routes, Outlet} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import CustomLink from "./CustomLink";


const Layout = () => {
    return (
        <>
            <header>
                <CustomLink to="/">home</CustomLink>
                <br/>
                <CustomLink to="chats" >chats</CustomLink>
                <br/>
                <CustomLink to="/profile">profile</CustomLink>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                footer
            </footer>
        </>
    );
};

export default Layout;