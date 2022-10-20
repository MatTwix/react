import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {authSelectors} from '../redux/reducers/Auth/index'
import {logoutInitiate} from "../redux/reducers/Auth/authReducer";
import {useNavigate} from "react-router-dom";

const HomePage = () => {
    const dispatch = useDispatch();
    const user = useSelector(authSelectors.currentUser);
    const navigate = useNavigate();

    const handleAuth = () => {
        if(user) {
            dispatch(logoutInitiate);
        }
        navigate('/login')
    }

    console.log(user);

    return (
        <div>
            <h2>Home page</h2>
            {user
                ? <button onClick={handleAuth}>Logout</button>
                : <button onClick={handleAuth}>Login</button>
            }
        </div>
    );
};

export default HomePage;