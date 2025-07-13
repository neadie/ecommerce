import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registerUser = async () => {
        await axios.post('http://localhost:5000/api/auth/register', { email, password });
    };

    return (
        <div>
            <h2>Register</h2>
            <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <button onClick={registerUser}>Register</button>
        </div>
    );
};

export default Register;
