import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Login Submitted', { username, password });
        // Here you would usually send the credentials to the server for validation4


        // Simulate login validation
        if (username === "user" && password === "pass") { // Replace with actual validation logic
            navigate('/profile');
        } else {
            alert('Invalid username or password');
        }
    };

    // return (
    //     // ... rest of your form code
    // );
    // };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button id="login-button" type="submit">Login</button>
        </form>
    );
}

export default LoginForm;
