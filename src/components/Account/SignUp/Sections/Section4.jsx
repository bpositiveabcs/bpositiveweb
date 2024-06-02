import React from 'react';

const Section4 = ({ nextSection, prevSection, handleChange, formData }) => {
    return (
        <div id="section4">
            <div className="login__field">
                <i className="login__icon fas fa-solid fa-phone"></i>
                <input type="text" className="login__input" name="telephone" value={formData.telephone} placeholder="Telephone" required onChange={handleChange} />
            </div>
            <div className="login__field">
                <i className="login__icon fas fa-solid fa-envelope"></i>
                <input type="email" className="login__input" name="email" value={formData.email} placeholder="Email" required onChange={handleChange} />
            </div>
            <div className="login__field">
                <i className="login__icon fas fa-solid fa-user"></i>
                <input type="text" className="login__input" name="username" value={formData.username} placeholder="Username" required onChange={handleChange} />
            </div>
            <div className="login__field">
                <i className="login__icon fas fa-solid fa-lock"></i>
                <input type="password" className="login__input" name="password" value={formData.password} placeholder="Password" required onChange={handleChange} />
            </div>
            <div className="login__field">
                <i className="login__icon fas fa-solid fa-lock"></i>
                <input type="password" className="login__input" name="confirmPassword" value={formData.confirmPassword} placeholder="Confirm password" required onChange={handleChange} />
            </div>
            <button type="button" className="button nextButton" onClick={nextSection}>
                <span className="button__text">Next</span>
                <i className="button__icon fas fa-chevron-right"></i>
            </button>
            <button type="button" className="button prevButton" onClick={prevSection}>
                <span className="button__text">Back</span>
                <i className="button__icon fas fa-chevron-left"></i>
            </button>
        </div>
    );
};

export default Section4;
