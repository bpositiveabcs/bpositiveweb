import React from 'react';
import { Outlet } from 'react-router-dom'; // Outlet will render the matched child route component
import Navbar from '../Common/Navbar.jsx';
import Footer from '../Common/Footer.jsx';
import Chatbot from "../ChatBot/Chatbot.jsx";

const Layout = () => {
    return (
        <div>
            {/*<Navbar />*/}
            {/*<div className="main-content">*/}
            {/*    <Outlet /> /!* This will render the matched child route component *!/*/}
            {/*</div>*/}
            <Chatbot />
            {/*<Footer />*/}
        </div>
    );
};

export default Layout;
