import React from 'react';

const TeamMember = ({ image_path, name, email, altName }) => (
    <div className="w3-col l3 m6 w3-margin-bottom">
        <div className="w3-card" style={{ backgroundColor: 'white' }}>
            <img src={image_path} alt={altName} style={{ width: '100%' }} />
            <div className="w3-container">
                <h3>{name}</h3>
                <p className="w3-opacity">UBB Computer Science Student</p>
                <p className="w3-light-grey w3-block" style={{ padding: '5px' }}>
                    <i className="fa fa-envelope"></i> {email}
                </p>
            </div>
        </div>
    </div>
);

export default TeamMember;
