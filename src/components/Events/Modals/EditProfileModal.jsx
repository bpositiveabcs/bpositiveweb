import React, { useState } from 'react';

const EditProfileModal = ({ onClose, user }) => {
    const [formData, setFormData] = useState({
        firstName: user.personalDate.firstName || '',
        lastName: user.personalDate.lastName || '',
        cnp: user.personalDate.cnp || '',
        birthday: user.personalDate.birthDate || '',
        sex: user.personalDate.sex || '',
        country: user.personalDate.address.country || '',
        county: user.personalDate.address.county || '',
        city: user.personalDate.address.city || '',
        street: user.personalDate.address.street || '',
        number: user.personalDate.address.numberStreet || '',
        block: user.personalDate.address.block || '',
        apartment: user.personalDate.address.apartment || '',
        floor: user.personalDate.address.floor || '',
        telephone: user.personalDate.phoneNumber || '',
        email: user.personLogInfo.email || '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

    };

    return (
        <div className="w3-modal" style={{ display: 'block' }}>
            <div className="w3-modal-content w3-animate-zoom" style={{ width: '50%' }}>
                <div className="w3-container" style={{ backgroundColor: '#f0e7e7', color: '#A10135', padding: '20px' }}>
                    <span onClick={onClose} className="w3-button w3-display-topright">&times;</span>
                    <h2>Edit Profile</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="edit__field">
                            <input type="text" className="edit__input" placeholder="First name" name="firstName" value={formData.firstName} onChange={handleChange} required />
                        </div>
                        <div className="edit__field">
                            <input type="text" className="edit__input" placeholder="Last name" name="lastName" value={formData.lastName} onChange={handleChange} required />
                        </div>
                        <div className="edit__field">
                            <input type="text" className="edit__input" placeholder="CNP" name="cnp" value={formData.cnp} onChange={handleChange} required />
                        </div>
                        <div className="edit__field">
                            <input type="date" className="edit__input" placeholder="Birth Date" name="birthday" value={formData.birthday} onChange={handleChange} required />
                        </div>
                        <div className="edit__field">
                            <input type="text" className="edit__input" placeholder="Sex" name="sex" value={formData.sex} onChange={handleChange} required />
                        </div>
                        <div className="edit__field">
                            <input type="text" className="edit__input" placeholder="Country" name="country" value={formData.country} onChange={handleChange} required />
                        </div>
                        <div className="edit__field">
                            <input type="text" className="edit__input" placeholder="County" name="county" value={formData.county} onChange={handleChange} required />
                        </div>
                        <div className="edit__field">
                            <input type="text" className="edit__input" placeholder="City/Town" name="city" value={formData.city} onChange={handleChange} required />
                        </div>
                        <div className="edit__field">
                            <input type="text" className="edit__input" placeholder="Street" name="street" value={formData.street} onChange={handleChange} required />
                        </div>
                        <div className="edit__field">
                            <input type="text" className="edit__input" placeholder="No." name="number" value={formData.number} onChange={handleChange} required />
                        </div>
                        <div className="edit__field">
                            <input type="text" className="edit__input" placeholder="Bl." name="block" value={formData.block} onChange={handleChange} required />
                        </div>
                        <div className="edit__field">
                            <input type="text" className="edit__input" placeholder="Ap." name="apartment" value={formData.apartment} onChange={handleChange} required />
                        </div>
                        <div className="edit__field">
                            <input type="text" className="edit__input" placeholder="Floor" name="floor" value={formData.floor} onChange={handleChange} required />
                        </div>
                        <div className="edit__field">
                            <input type="text" className="edit__input" placeholder="Telephone" name="telephone" value={formData.telephone} onChange={handleChange} required />
                        </div>
                        <div className="edit__field">
                            <input type="email" className="edit__input" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="edit__field">
                            <input type="password" className="edit__input" placeholder="Change password" name="password" value={formData.password} onChange={handleChange} required />
                        </div>
                        <div className="edit__field">
                            <input type="password" className="edit__input" placeholder="Confirm new password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                        </div>
                        <button type="submit" className="submitButton" style={{ width: '50%' }}>Save Changes</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProfileModal;