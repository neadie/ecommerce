import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setToken } = useContext(AuthContext);

    const loginUser = async () => {
        const res = await axios.post('localhost:5000/api/auth/login', { email, password });
        localStorage.setItem('token', res.data.token);
        setToken(res.data.token);
    };

    return (
        <div>
            <h2>Login</h2>
            <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <button onClick={loginUser}>Login</button>
            <hr />
            <a href="http://localhost:5000/api/auth/google">
                <button>Login with Google</button>
            </a>
            <a href="http://localhost:5000/api/auth/facebook">
                <button>Login with Facebook</button>
            </a>
        </div>
    );
};

export default Login;
