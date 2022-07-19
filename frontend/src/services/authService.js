import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import AuthContext from '../context/AuthContext';

const AuthService = ({ children }) => {

    // state token
    const [authToken, setAuthToken] = useState(() =>
        localStorage.token
            ? localStorage.token
            : null
    );

    // state user
    const [user, setUser] = useState(() =>
        localStorage.token
            ? jwtDecode(localStorage.token)
            : null
    );

    const navigate = useNavigate();

    // Se connecter
    const loginUser = async (form) => {
        try {
            const response = await fetch('http://localhost:5500/api/auth/login', {
                method: 'POST',
                body: JSON.stringify({
                    email: form.email.value,
                    password: form.password.value
                }),
                headers: { 'Content-Type': 'application/json' }
            });

            const data = await response.json();

            if (response.status === 200) {
                setAuthToken(data.token);
                setUser(jwtDecode(data.token));
                localStorage.setItem('token', data.token);
                navigate('/');
            }

        } catch (error) {
            console.log(error);
        }
    };

    // Inscription du user
    const signupUser = async (form) => {
        await fetch('http://localhost:5500/api/auth/signup', {
            method: 'POST',
            body: JSON.stringify({
                pseudo: form.pseudo.value,
                email: form.email.value,
                password: form.password.value
            }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(respose => respose.json())
            .then(navigate('/'))
            .catch(error => console.log(error));
    }

    // Se déconnecter
    let logoutUser = () => {
        setAuthToken(null);
        setUser(null);
        localStorage.removeItem('token');
        navigate('/login');
    }

    // Init context
    let contextData = {
        user,
        authToken,
        loginUser: loginUser,
        logoutUser: logoutUser,
        signupUser: signupUser,
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthService