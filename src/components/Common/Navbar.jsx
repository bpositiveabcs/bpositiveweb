import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContexts.jsx'; // Adjust the import path as needed

const Navbar = ({ onSidebarToggle }) => {
    const { isAuthenticated, logout } = useContext(AuthContext);

    return (
        <div className="navbar w3-top">
            <div className="w3-bar w3-card" style={{ backgroundColor: '#f0e7e7' }} id="myNavbar">
                <Link to="/" className="w3-bar-item w3-button w3-wide">
                    <img src="/images/logos/logoCrem.png" alt="Logo" style={{ height: '30px' }} />
                </Link>
                <div className="w3-right w3-hide-small" style={{ color: '#A10135' }}>
                    <Link to="/events" className="w3-bar-item w3-button">EVENTS</Link>
                    <Link to="/benefits" className="w3-bar-item w3-button">BENEFITS</Link>
                    <Link to="/about-us" className="w3-bar-item w3-button">ABOUT US</Link>
                    {isAuthenticated ? (
                        <button onClick={logout} className="w3-bar-item w3-button">LOGOUT</button>
                    ) : (
                        <Link to="/signin" className="w3-bar-item w3-button">LOGIN</Link>
                    )}
                </div>
                <button
                    onClick={onSidebarToggle}
                    className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"
                >
                    <i className="fa fa-bars"></i>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
