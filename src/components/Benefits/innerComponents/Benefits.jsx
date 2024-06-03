import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
const Benefits = () => {


    return (
        <div>
            <div className="w3-container" style={{ padding: '128px 16px', backgroundColor: '#f0e7e7', fontSize:'16px' }} id="about">
                <h3 className="w3-center" style={{ marginBottom: '70px' }}>BENEFITS</h3>
                <div className="w3-row-padding">
                    <div className="w3-third w3-container w3-margin-bottom">
                        <img src="/images/previews/notificationPreview.png" alt="Notification Preview" style={{ width: '100%' }} />
                        <div className="w3-container w3-white">
                            <h4><b>You get a free day from work/university!</b></h4>
                            <p style={{ textAlign: 'justify' }}>
                                For every donation you make, we'll handle the hassle of notifying your employer or professors about your noble act via email.
                                So, while you're busy making a positive difference, we'll take care of ensuring you get the recognition and appreciation you deserve.
                                It's our little way of saying thank you for being a valued part of our community and for your ongoing commitment to giving back.
                                So go ahead, schedule your donation today, and get ready to enjoy that extra day of relaxation or adventure!
                            </p>
                        </div>
                    </div>
                    <div className="w3-third w3-container w3-margin-bottom">
                        <img src="/images/previews/cupoanePreview.png" alt="Coupons Preview" style={{ width: '100%' }} />
                        <div className="w3-container w3-white">
                            <h4><b>You are rewarded with discount coupons!</b></h4>
                            <p style={{ textAlign: 'justify' }}>
                                Each time you make a donation through our app, you'll automatically accumulate points in your account.
                                These points act as a token of appreciation for your generosity and commitment to making a difference in the community.
                                As you continue to donate and accrue points, you'll eventually reach a threshold where you can start redeeming these points for exclusive discount coupons.
                                These coupons can be used to enjoy discounts on a wide range of products and services offered by our partner businesses.
                            </p>
                        </div>
                    </div>
                    <div className="w3-third w3-container">
                        <img src="/images/previews/medicalInfoPreview.png" alt="Medical Info Preview" style={{ width: '100%' }} />
                        <div className="w3-container w3-white">
                            <h4><b>You get free tests for each donation!</b></h4>
                            <p style={{ textAlign: 'justify' }}>
                                Every time you donate through our app, you'll receive complimentary health analyses related to your donation.
                                These analyses cover various aspects such as blood pressure, cholesterol levels, glucose levels, and more, depending on the type of donation.
                                These analyses are not only beneficial for your health monitoring but also provide you with valuable insights into your well-being.
                                You can access and review these analyses anytime in your app profile, allowing you to track your health progress over time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Benefits;
