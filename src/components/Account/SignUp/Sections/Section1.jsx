import React from 'react';

const Section1 = ({ nextSection, handleChange, formData }) => {
    return (
        <div id="section1">
            <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input type="text" className="login__input" name="firstName" value={formData.firstName} placeholder="First name" required onChange={handleChange} />
            </div>
            <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input type="text" className="login__input" name="lastName" value={formData.lastName} placeholder="Last name" required onChange={handleChange} />
            </div>
            <div className="login__field">
                <i className="login__icon fas fa-id-card"></i>
                <input type="text" className="login__input" name="cnp" value={formData.cnp} placeholder="CNP" required onChange={handleChange} />
            </div>
            <div className="login__field">
                <i className="login__icon fas fa-birthday-cake"></i>
                <input type="date" className="login__input" name="birthday" value={formData.birthday} placeholder="Birth" required onChange={handleChange} />
            </div>
            <div className="login__field">
                <i className="login__icon fas fa-venus-mars"></i>
                <input type="text" className="login__input" name="sex" value={formData.sex} placeholder="Sex" required onChange={handleChange} />
            </div>
            <button type="button" className="button nextButton" onClick={nextSection}>
                <span className="button__text">Next</span>
                <i className="button__icon fas fa-chevron-right"></i>
            </button>
        </div>
    );
};

export default Section1;
