// src/components/Common/EditProfileModal.jsx
import React from 'react';

const EditProfileModal = ({ onClose }) => (
    <div className="w3-modal" style={{ display: 'block' }}>
        <div className="w3-modal-content w3-animate-zoom" style={{ width: '50%' }}>
            <div className="w3-container" style={{ backgroundColor: '#f0e7e7', color: '#A10135', padding: '20px' }}>
                <span onClick={onClose} className="w3-button w3-display-topright">&times;</span>
                <h2>Edit Profile</h2>
                <form>
                    <div className="edit__field">
                        <input type="text" className="edit__input" placeholder="First name" required />
                    </div>
                    <div className="edit__field">
                        <input type="email" className="edit__input" placeholder="Last name" required />
                    </div>
                    <div className="edit__field">
                        <input type="text" className="edit__input" placeholder="CNP" required />
                    </div>
                    <div className="edit__field">
                        <input type="date" className="edit__input" placeholder="Birth Date" required />
                    </div>
                    <div className="edit__field">
                        <input type="text" className="edit__input" placeholder="Sex" required />
                    </div>
                    <div className="edit__field">
                        <input type="text" className="edit__input" placeholder="Country" required />
                    </div>
                    <div className="edit__field">
                        <input type="text" className="edit__input" placeholder="County" required />
                    </div>
                    <div className="edit__field">
                        <input type="text" className="edit__input" placeholder="City/Town" required />
                    </div>
                    <div className="edit__field">
                        <input type="text" className="edit__input" placeholder="Street" required />
                    </div>
                    <div className="edit__field">
                        <input type="text" className="edit__input" placeholder="No." required />
                    </div>
                    <div className="edit__field">
                        <input type="text" className="edit__input" placeholder="Bl." required />
                    </div>
                    <div className="edit__field">
                        <input type="text" className="edit__input" placeholder="Ap." required />
                    </div>
                    <div className="edit__field">
                        <input type="text" className="edit__input" placeholder="Floor" required />
                    </div>
                    <div className="edit__field">
                        <input type="text" className="edit__input" placeholder="Telephone" required />
                    </div>
                    <div className="edit__field">
                        <input type="email" className="edit__input" placeholder="Email" required />
                    </div>
                    <div className="edit__field">
                        <input type="password" className="edit__input" placeholder="Change password" required />
                    </div>
                    <div className="edit__field">
                        <input type="password" className="edit__input" placeholder="Confirm new password" required />
                    </div>
                    <button type="submit" className="submitButton" style={{ width: '50%' }}>Save Changes</button>
                </form>
            </div>
        </div>
    </div>
);

export default EditProfileModal;
