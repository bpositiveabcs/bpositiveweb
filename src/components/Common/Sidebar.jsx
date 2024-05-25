import React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = ({ isOpen, onClose }) => (
    <nav className={`w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large ${isOpen ? 'w3-show' : 'w3-hide'}`} id="mySidebar">
        <button onClick={onClose} className="w3-bar-item w3-button w3-large w3-padding-16">Close &times;</button>
        <Link to="/events" onClick={onClose} className="w3-bar-item w3-button">EVENTS</Link>
        <Link to="/benefits" onClick={onClose} className="w3-bar-item w3-button">BENEFITS</Link>
        <Link to="/account" onClick={onClose} className="w3-bar-item w3-button">ACCOUNT</Link>
    </nav>
);

export default Sidebar;
