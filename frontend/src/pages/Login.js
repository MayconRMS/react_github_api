import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import api from '../services/api';
import './Login.css';

export default function Login({ history }) {
    const [username, setusername] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post('/devs', {
            // Corresponde a username: username short response
            username,
        });

        const { _id } = response.data;

        history.push(`/dev/${_id}`);
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev" />
                <input placeholder="Digite seu usuário no Github"
                    value={username}
                    onChange={e => setusername(e.target.value)} />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}