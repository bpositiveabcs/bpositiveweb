import React, { useState } from 'react';
import Navbar from '../Common/Navbar';
import Benefits from './innerComponents/Benefits';
import Footer from '../Common/Footer';
import Sidebar from '../Common/Sidebar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'w3-css/w3.css';
import '../../assets/CSS/App.css';
import Header from '../Common/Header';

function BenefitsMain() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="BenefitsMain">
            <Navbar onSidebarToggle={handleSidebarToggle} />
            <Sidebar isOpen={sidebarOpen} onClose={handleSidebarToggle} />
            <Header />
            <Benefits />
            <Footer />
        </div>
    );
}

export default BenefitsMain;
