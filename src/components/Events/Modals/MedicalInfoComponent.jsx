import React, { useEffect, useState } from 'react';
import { getMedicalInfo, downloadBloodTestDocument } from '../../services/apiService';

const MedicalInfoComponent = ({ username }) => {
    const [medicalInfo, setMedicalInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMedicalInfo = async () => {
            try {
                const data = await getMedicalInfo(username);
                setMedicalInfo(data);
            } catch (error) {
                setError('Failed to fetch medical information');
            } finally {
                setLoading(false);
            }
        };

        fetchMedicalInfo();
    }, [username]);

    if (loading) {
        return <p>Loading medical information...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!medicalInfo) {
        return <p>No medical information available.</p>;
    }

    const { rh, bloodType, eligibility, medicalHistory } = medicalInfo;

    return (
        <div>
            <h3>Medical Information</h3>
            <p>RH: {rh}</p>
            <p>Blood Type: {bloodType}</p>
            <p>Eligibility for Donation: {eligibility ? 'Eligible' : 'Not Eligible'}</p>
            <h4>Documents from Previous Blood Tests:</h4>
            <ul>
                {medicalHistory.map((test, index) => (
                    <li key={index}>
                        <button onClick={() => downloadBloodTestDocument(username, test.path)}>{test.name}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MedicalInfoComponent;
