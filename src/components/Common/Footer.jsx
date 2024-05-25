import React from 'react';
const Footer = () => (
    <footer className="footer w3-center w3-padding-32" style={{ backgroundColor: '#A10135', color: '#f0e7e7' }}>
        <a href="#home" className="w3-button" style={{ backgroundColor: '#f0e7e7', color: '#A10135' }}>
            <i className="fa fa-arrow-up w3-margin-right"></i>To the top
        </a>
        <div className="w3-large w3-section" style={{ fontSize: '12px' }}>
            <span style={{ margin: '10px' }}><i className="fa fa-map-marker fa-fw w3-hover-opacity"></i> Cluj-Napoca, Romania</span>
            <span style={{ margin: '10px' }}><i className="fa fa-phone fa-fw w3-hover-opacity"></i> Phone: 0712345689</span>
            <span style={{ margin: '10px' }}><i className="fa fa-envelope fa-fw w3-hover-opacity"> </i> Email: bpositiveeeee@gmail.com</span>
        </div>
    </footer>
);

export default Footer;
