// Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        axios.post('http://127.0.0.1:8000/api/api/login/', { username, password })
            .then(response => {
                // Save the JWT token in localStorage
                localStorage.setItem('access_token', response.data.access);
                localStorage.setItem('refresh_token', response.data.refresh);

                // Redirect to the admin page after login
                navigate('/admin');
            })
            .catch(() => setError('Invalid credentials'));
    };

    return (
        <div className="container py-5">
            <h2>تسجيل الدخول</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="form-group">
                <label>إسم المستخدم</label>
                <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>كلمة المرور</label>
                <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button className="btn btn-primary" onClick={handleLogin}>
                تسجيل الدخول
            </button>
        </div>
    );
};

export default Login;
