import React from 'react';

const Section3 = ({ nextSection, prevSection, handleChange, formData }) => {
    return (
        <div id="section3">
            <div className="login__field">
                <i className="login__icon fas fa-map-marker-alt"></i>
                <input type="text" className="login__input" name="number" value={formData.number} placeholder="No." required onChange={handleChange} />
            </div>
            <div className="login__field">
                <i className="login__icon fas fa-map-marker-alt"></i>
                <input type="text" className="login__input" name="block" value={formData.block} placeholder="Bl." required onChange={handleChange} />
            </div>
            <div className="login__field">
                <i className="login__icon fas fa-map-marker-alt"></i>
                <input type="text" className="login__input" name="apartment" value={formData.apartment} placeholder="Ap." required onChange={handleChange} />
            </div>
            <div className="login__field">
                <i className="login__icon fas fa-map-marker-alt"></i>
                <input type="text" className="login__input" name="floor" value={formData.floor} placeholder="Floor" required onChange={handleChange} />
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

export default Section3;
