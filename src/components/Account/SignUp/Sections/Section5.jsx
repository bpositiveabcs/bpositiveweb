import React from 'react';

const Section5 = ({ prevSection, handleChange, formData }) => {
    return (
        <div id="section5">
            <div className="login__field">
                <i className="login__icon fas fa-solid fa-tint"></i>
                <input type="text" className="login__input" name="bloodType" value={formData.bloodType} placeholder="Blood Type" required onChange={handleChange} />
            </div>
            <div className="login__field">
                <i className="login__icon fas fa-solid fa-tint"></i>
                <input type="text" className="login__input" name="bloodRh" value={formData.bloodRh} placeholder="RH" required onChange={handleChange} />
            </div>
            <div className="login__field">
                <i className="login__icon fas fa-solid fa-check"></i>
                <input type="text" className="login__input" name="eligibility" value={formData.eligibility} placeholder="Eligibility (1 for Yes, 0 for No)" required onChange={handleChange} />
            </div>
            <button type="submit" className="button submitButton">
                <span className="button__text">Create account</span>
            </button>
            <button type="button" className="button prevButton" onClick={prevSection}>
                <span className="button__text">Back</span>
                <i className="button__icon fas fa-chevron-left"></i>
            </button>
        </div>
    );
};

export default Section5;
