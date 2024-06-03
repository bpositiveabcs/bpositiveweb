import React, { useState } from "react";
import Sidebar from "../Common/Sidebar";
import Navbar from "../Common/Navbar";
import About from "./subComponents/About";
import Footer from "../Common/Footer";
import 'w3-css/w3.css';
import MoreInformation from "./subComponents/MoreInformation.jsx";
import '../../assets/CSS/Benefits.css';
import Header from "../Common/Header.jsx";
import Layout from "../LayoutComponent/Layout.jsx";

const AboutUs = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const handleSidebarToggle = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="main">
            <Header/>
            <Navbar onSidebarToggle={handleSidebarToggle}/>
            <Sidebar isOpen={sidebarOpen} onClose={handleSidebarToggle}/>

            <header
                className="bgimg bgimg-about w3-display-container"
                id="home"
            ></header>
                <About/>
                <MoreInformation/>
                <Footer/>
            <Layout/>
        </div>
);
};

export default AboutUs;
