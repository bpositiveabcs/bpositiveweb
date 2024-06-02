import React, { useState } from 'react';
import { uploadIdentityCard } from '../services/apiService.js';

const UploadIdentityCard = ({ onClose }) => {
    const [identityCard, setIdentityCard] = useState(null);

    const handleFileChange = (e) => {
        setIdentityCard(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await uploadIdentityCard(identityCard);
        if (response.ok) {
            alert('Identity card uploaded successfully!');
            onClose();
        } else {
            alert('Failed to upload identity card');
        }
    };

    return (
        <div className="w3-modal" style={{ display: 'block' }}>
            <div className="w3-modal-content w3-animate-zoom" style={{ width: '50%' }}>
                <div className="w3-container" style={{ backgroundColor: '#f0e7e7', color: '#A10135', padding: '20px' }}>
                    <span onClick={onClose} className="w3-button w3-display-topright">&times;</span>
                    <h2>Upload Identity Card</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="edit__field">
                            <input type="file" className="edit__input" onChange={handleFileChange} required />
                        </div>
                        <button type="submit" className="submitButton" style={{ width: '50%' }}>Upload</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UploadIdentityCard;
