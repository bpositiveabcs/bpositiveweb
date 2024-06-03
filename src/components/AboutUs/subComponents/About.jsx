import React from 'react';

const About = () => (
    <div className="w3-container" style={{ paddingTop:'1300px', padding: '128px 16px', backgroundColor: '#f0e7e7' }} id="about">
        <h3 className="w3-center">ABOUT US</h3>
        <p className="w3-center w3-large">Key features of our project</p>
        <div className="w3-row-padding w3-center" style={{ marginTop: '64px' }}>
            <div className="w3-quarter" >
                <i className="fa fa-desktop w3-margin-bottom w3-jumbo w3-center"></i>
                <p className="w3-large">Technology Driving Change</p>
                <p>Harness the power of technology to revolutionize blood donation. Our app integrates cutting-edge
                    features for easy scheduling, real-time updates, and personalized rewards. Embrace the future of
                    blood donation and make an impact efficiently with the tap of a button.</p>
            </div>
            <div className="w3-quarter">
                <i className="fa fa-heart w3-margin-bottom w3-jumbo"></i>
                <p className="w3-large">Passion for Saving Lives</p>
                <p>Join our blood donation community driven by passion for making a difference. Every donation you make
                    through our app contributes directly to saving lives. Feel the impact of your generosity and the
                    passion shared by our community of donors.</p>
            </div>
            <div className="w3-quarter">
                <i className="fa fa-diamond w3-margin-bottom w3-jumbo"></i>
                <p className="w3-large">Quality</p>
                <p>Experience top-tier quality in every aspect of your donation journey. From the moment you sign up to
                    when your donation reaches those in need, we ensure the highest standards of safety,
                    professionalism, and care. Your health and well-being are our priority.</p>
            </div>
            <div className="w3-quarter">
                <i className="fa fa-handshake-o w3-margin-bottom w3-jumbo"></i>
                <p className="w3-large">Supporting Each Other</p>
                <p>Together, we support a noble cause that touches countless lives. Our supportive network empowers you
                    to donate with confidence, knowing you're part of a caring community dedicated to helping others.
                    Receive and give support through every step of your donation experience.</p>
            </div>
        </div>
    </div>
);

export default About;
