import React from 'react';

const MedicalInfoComponent = ({ medicalInfo, username }) => {
    if (!medicalInfo) {
        return <p>No medical information available.</p>;
    }

    const { rh, bloodType, eligibility, bloodTests } = medicalInfo;

    const handleDownload = (username, filename) => {
        const filePath = `${window.location.origin}/personActorService/download/${username}/${filename}`;
        window.location.href = filePath;
    };

    return (
        <div>
            <h3>Medical Information</h3>
            <p>RH: {rh}</p>
            <p>Blood Type: {bloodType}</p>
            <p>Eligibility for Donation: {eligibility}</p>
            <h4>Documents from Previous Blood Tests:</h4>
            <ul>
                {bloodTests.map((test, index) => (
                    <li key={index}>
                        <button onClick={() => handleDownload(username, test.path)}>{test.name}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MedicalInfoComponent;
