import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContexts.jsx';
import { getCoupons, submitSelectedCoupons } from "../../services/apiService.js";

const CouponsModal = ({ onClose }) => {
    const { user } = useContext(AuthContext);
    const [coupons, setCoupons] = useState([]);
    const [selectedCoupons, setSelectedCoupons] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchCoupons = async () => {
            try {
                const data = await getCoupons();
                setCoupons(data);
            } catch (error) {
                console.error('Error fetching coupons:', error);

            }
        };

        fetchCoupons();
    }, []);

    const handleCheckboxChange = (coupon) => {
        const isSelected = selectedCoupons.includes(coupon);
        const updatedSelectedCoupons = isSelected
            ? selectedCoupons.filter(c => c !== coupon)
            : [...selectedCoupons, coupon];

        const totalPoints = updatedSelectedCoupons.reduce((sum, c) => sum + c.necessaryPoints, 0);

        if (totalPoints > user.points) {
            setErrorMessage('You have selected more coupons than your available points.');
        } else {
            setErrorMessage('');
            setSelectedCoupons(updatedSelectedCoupons);
        }
    };

    const getCouponPath = (coupon) => {
        const directory = '/../../../../images/cupoane/';
        return `${directory}${coupon.name}.png`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (errorMessage) {
            return;
        }

        try {
            const response = await submitSelectedCoupons(user.personLogInfo.username, selectedCoupons);
            console.log('Response from server:', response);
            onClose();
        } catch (error) {
            console.error('Error submitting selected coupons:', error);
            setErrorMessage('An error occurred while submitting your selected coupons. Please try again.');
        }
    };

    const splitCouponName = (coupon) => {
        const name = coupon.name;
        const splitName = name.split("_");
        return splitName[1].charAt(0).toUpperCase() + splitName[1].slice(1);
    };

    return (
        <div className="w3-modal" style={{ display: 'block' }}>
            <div className="w3-modal-content w3-animate-zoom" style={{ width: '560px' }}>
                <div className="w3-container" style={{ backgroundColor: 'rgba(240,231,231,0.5)', color: '#A10135', padding: '20px' }}>
                    <span onClick={onClose} className="w3-button w3-display-topright">&times;</span>
                    <h2>Get More Coupons</h2>
                    <p>Your points: {user.points}</p>
                    <hr />
                    <form id="couponsForm" onSubmit={handleSubmit}>
                        {coupons.map((coupon) => (
                            <div key={coupon.id} className="checkbox-item">
                                <label>
                                    <input
                                        type="checkbox"
                                        name={coupon.name}
                                        value={coupon.name}
                                        onChange={() => handleCheckboxChange(coupon)}
                                    />
                                    <span>{`${splitCouponName(coupon)} | Points: ${coupon.necessaryPoints}`}</span>
                                    <p><img src={getCouponPath(coupon)} alt={coupon.name} height="250px" /></p>
                                </label>
                            </div>
                        ))}
                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                        <button type="submit" className="buttonCoupons">Get selected coupons</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CouponsModal;
