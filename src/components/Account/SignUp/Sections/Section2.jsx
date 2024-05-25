import React from 'react';

const Section2 = ({ nextSection, prevSection, handleChange, formData }) => {
    return (
        <div id="section2">
            <div className="login__field">
                <i className="login__icon fas fa-map-marker-alt"></i>
                <input type="text" className="login__input" name="country" value={formData.country} placeholder="Country" required onChange={handleChange} />
            </div>
            <div className="login__field">
                <i className="login__icon fas fa-map-marker-alt"></i>
                <input type="text" className="login__input" name="county" value={formData.county} placeholder="County" required onChange={handleChange} />
            </div>
            <div className="login__field">
                <i className="login__icon fas fa-map-marker-alt"></i>
                <input type="text" className="login__input" name="city" value={formData.city} placeholder="City/Town" required onChange={handleChange} />
            </div>
            <div className="login__field">
                <i className="login__icon fas fa-map-marker-alt"></i>
                <input type="text" className="login__input" name="street" value={formData.street} placeholder="Street" required onChange={handleChange} />
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

export default Section2;
