// src/components/SignIn.jsx
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { signIn } from '../../services/apiService'; // Adjust the import path as needed
import { AuthContext } from '../../../contexts/AuthContexts.jsx'; // Correct the import path

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await signIn({ username, password });
            if (response.person) { // Assuming API returns a person field if successful
                login(response.person); // Set the authentication state
                setMessage('You are logged in');
                navigate('/events');
            } else {
                setMessage('Credentials are wrong');
            }
        } catch (error) {
            console.error('Error signing in:', error);
            if (error.response && error.response.status === 401) {
                setMessage('Credentials are wrong');
            } else {
                setMessage('Error logging in');
            }
        }
    };

    return (
        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <form className="login" onSubmit={handleLogin}>
                        <div className="login__field">
                            <i className="login__icon fas fa-user"></i>
                            <input
                                type="text"
                                className="login__input"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock"></i>
                            <input
                                type="password"
                                className="login__input"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button className="button login__submit" type="submit">
                            <span className="button__text">Sign In</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>
                    </form>
                    {message && <p>{message}</p>}
                    <div className="social-login">
                        <h3>New user?</h3>
                        <div className="social-icons">
                            <Link to="/signup" className="social-login__icon">Sign Up</Link>
                        </div>
                    </div>
                    <div className="homepage">
                        <h5><Link to="/">Home Page</Link></h5>
                    </div>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
