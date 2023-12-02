import React, { useState } from 'react';

function RegistrationForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Registration Submitted', { username, password, email });
        // Implement registration logic
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="reg-username">Username:</label>
                <input
                    type="text"
                    id="reg-username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="reg-password">Password:</label>
                <input
                    type="password"
                    id="reg-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="reg-email">Email:</label>
                <input
                    type="email"
                    id="reg-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button type="submit" id="register-button">Register</button>
        </form>
    );
}

export default RegistrationForm;
