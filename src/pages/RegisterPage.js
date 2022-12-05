import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {registerInitiate} from "../redux/reducers/Auth/authReducer";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [displayName, setDisplayName] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(password !== passwordConfirm) {
            return;
        }
        dispatch(registerInitiate(email, password, displayName));
        navigate('/home')
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                name
                <input value={displayName} onChange={e => setDisplayName(e.target.value)}/>
                <br/>
                email
                <input value={email} onChange={e => setEmail(e.target.value)}/>
                <br/>
                pass
                <input value={password} onChange={e => setPassword(e.target.value)}/>
                <br/>
                repeat pass
                <input value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)}/>
                <br/>
                <button type={'submit'}>Отправить</button>
            </form>
        </div>
    );
};

export default RegisterPage;