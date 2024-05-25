// src/components/Common/CouponsModal.jsx
import React from 'react';


const CouponsModal = ({ onClose }) => (
    <div className="w3-modal" style={{ display: 'block' }}>
        <div className="w3-modal-content w3-animate-zoom" style={{ width: '560px' }}>
            <div className="w3-container" style={{ backgroundColor: 'rgba(240,231,231,0.5)', color: '#A10135', padding: '20px' }}>
                <span onClick={onClose} className="w3-button w3-display-topright">&times;</span>
                <h2>Get More Coupons</h2>
                <p>Your points: X</p>
                <hr />
                <form id="couponsForm">
                    <div className="checkbox-item">
                        <label>
                            <input type="checkbox" name="couponCarturesti" value="couponCarturesti" />
                            <span>Carturesti Coupon | Points: 5</span>
                            <p><img src="/images/cupoane/cupon_carturesti.png" alt="Coupon Carturesti" height="250px" /></p>
                        </label>
                    </div>
                    {/* Repeat similar blocks for other coupons */}
                    <button className="buttonCoupons">Get selected coupons</button>
                </form>
            </div>
        </div>
    </div>
);

export default CouponsModal;
