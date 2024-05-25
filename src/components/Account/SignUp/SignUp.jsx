import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Section1 from '../SignUp/Sections/Section1.jsx';
import Section2 from '../SignUp/Sections/Section2.jsx';
import Section3 from '../SignUp/Sections/Section3.jsx';
import Section4 from '../SignUp/Sections/Section4.jsx';
import { signUp } from '../../services/apiService.js'; // Make sure the path is correct
import '../../../assets/CSS/SignUp.css';

const SignUp = () => {
    const [currentSection, setCurrentSection] = useState(1);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        cnp: '',
        birthday: '',
        sex: '',
        country: '',
        county: '',
        city: '',
        street: '',
        number: '',
        block: '',
        apartment: '',
        floor: '',
        telephone: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await signUp(formData);
            console.log('Sign up successful:', response);
            // Handle successful sign-up (e.g., redirect to login page)
        } catch (error) {
            console.error('Sign up failed:', error);
            // Handle error (e.g., display error message)
        }
    };

    const nextSection = () => {
        setCurrentSection(currentSection + 1);
    };

    const prevSection = () => {
        setCurrentSection(currentSection - 1);
    };

    return (
        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <form className="login" onSubmit={handleSubmit}>
                        <header>Sign Up</header>
                        {currentSection === 1 && <Section1 nextSection={nextSection} handleChange={handleChange} formData={formData} />}
                        {currentSection === 2 && <Section2 nextSection={nextSection} prevSection={prevSection} handleChange={handleChange} formData={formData} />}
                        {currentSection === 3 && <Section3 nextSection={nextSection} prevSection={prevSection} handleChange={handleChange} formData={formData} />}
                        {currentSection === 4 && <Section4 prevSection={prevSection} handleChange={handleChange} formData={formData} />}
                    </form>
                    <div className="social-login">
                        <h5>You already have an account?</h5>
                        <div className="social-icons">
                            <Link to="/signin" className="social-login__icon">Sign In</Link>
                        </div>
                    </div>
                    <div className="homepage">
                        <h5><Link to="/" style={{ textDecoration: 'none', color: 'darkred' }}>Home Page</Link></h5>
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

export default SignUp;
