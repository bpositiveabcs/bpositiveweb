import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContexts';
import EditProfileModal from '../Events/Modals/EditProfileModal';
import CouponsModal from '../Events/Modals/CouponsModal';
import MedicalInfoComponent from '../Events/Modals/MedicalInfoComponent';
import { uploadStudentDetails, verifyCode } from '../services/apiService';

const SidebarEvents = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [isEditProfileModalOpen, setEditProfileModalOpen] = useState(false);
    const [isCouponsModalOpen, setCouponsModalOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null);
    const { user } = useContext(AuthContext);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const toggleEditProfileModal = () => {
        setEditProfileModalOpen(!isEditProfileModalOpen);
    };

    const toggleCouponsModal = () => {
        setCouponsModalOpen(!isCouponsModalOpen);
    };

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    const showAddress = (address) => {
        return `${address.city} ${address.street} ${address.numberStreet}`;
    };

    const handleSubmitStudentForm = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        formData.append("username", user.personLogInfo.username); // Add username to form data

        const response = await uploadStudentDetails(formData);
        if (response.ok) {
            const verificationWindow = window.open('', '_blank');
            verificationWindow.document.write(`
                <html>
                    <head><title>Verification</title></head>
                    <body>
                        <h1>Enter Verification Code</h1>
                        <form id="verificationForm">
                            <input type="text" id="verificationCode" placeholder="Verification Code" required />
                            <input type="hidden" id="university" value="${formData.get('university')}" />
                            <input type="hidden" id="faculty" value="${formData.get('faculty')}" />
                            <input type="hidden" id="domain" value="${formData.get('domain')}" />
                            <input type="hidden" id="specialization" value="${formData.get('specialization')}" />
                            <input type="hidden" id="year" value="${formData.get('year')}" />
                            <input type="hidden" id="group" value="${formData.get('group')}" />
                            <input type="hidden" id="semigroup" value="${formData.get('semigroup')}" />
                            <button type="submit">Verify</button>
                        </form>
                        <div id="message"></div>
                        <script>
                            document.getElementById('verificationForm').onsubmit = async function(event) {
                                event.preventDefault();
                                const code = document.getElementById('verificationCode').value;
                                const payload = {
                                    code,
                                    university: document.getElementById('university').value,
                                    faculty: document.getElementById('faculty').value,
                                    domain: document.getElementById('domain').value,
                                    specialization: document.getElementById('specialization').value,
                                    year: document.getElementById('year').value,
                                    group: document.getElementById('group').value,
                                    semigroup: document.getElementById('semigroup').value,
                                };
                                const response = await fetch('/api/verifyCode', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify(payload)
                                });
                                const result = await response.json();
                                const messageDiv = document.getElementById('message');
                                
                                if (result.success) {
                                    messageDiv.innerText = 'Verification successful!';
                                    setTimeout(() => {
                                        window.close();
                                        window.opener.location.reload();
                                    }, 2000);
                                } else {
                                    messageDiv.innerText = 'Invalid code. Please try again.';
                                }
                            };
                        </script>
                    </body>
                </html>
            `);
        } else {
            alert('Failed to upload student details and identity card');
        }
    };

    if (!user) {
        return null; // or a loading spinner
    }

    return (
        <div>
            <button onClick={toggleSidebar} className="sidebar-toggle-btn">
                {isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
            </button>

            {isSidebarOpen && (
                <div className="sidebar">
                    <div className="w3-card w3-round" style={{ backgroundColor: 'rgba(161,1,53,0.8)', color: '#f0e7e7' }}>
                        <div className="w3-container">
                            <h4 className="w3-center">{user.personLogInfo.username}</h4>
                            <p className="w3-center">
                                <img src="/images/icons/defaultUser.png" className="w3-circle" style={{ height: '106px', width: '106px' }} alt="Avatar" />
                            </p>
                            <hr style={{ backgroundColor: '#f0e7e7', height: '0.5px' }} />
                            <p><i className="fa fa-user fa-fw w3-margin-right"></i> {`${user.personalDate.firstName} ${user.personalDate.lastName}`}</p>
                            <p><i className="fa fa-envelope fa-fw w3-margin-right"></i> {user.personLogInfo.email}</p>
                            <p><i className="fa fa-home fa-fw w3-margin-right"></i> {showAddress(user.personalDate.address)}</p>
                        </div>
                    </div>
                    <br />

                    <div className="w3-card w3-round">
                        <div>
                            <button onClick={toggleEditProfileModal} className="w3-button w3-block w3-left-align" style={{ backgroundColor: 'rgba(161,1,53,0.8)', color: '#f0e7e7' }}>
                                <i className="fa fa-pencil fa-fw w3-margin-right"></i> Edit profile
                            </button>
                        </div>
                    </div>
                    <br />

                    {!user.studentDetails && (
                        <div className="w3-card w3-round w3-hide-small">
                            <div className="w3-container" style={{ backgroundColor: 'rgba(161,1,53,0.8)', color: '#f0e7e7' }}>
                                <p onClick={() => toggleSection('StudentForm')}><i className="fa fa-university fa-fw w3-margin-right"></i>Are you a student?</p>
                                {activeSection === 'StudentForm' && (
                                    <div className="w3-show w3-container">
                                        <form onSubmit={handleSubmitStudentForm}>
                                            <div className="login__field">
                                                <input type="text" name="university" className="login__input" placeholder="University" required />
                                            </div>
                                            <div className="login__field">
                                                <input type="text" name="faculty" className="login__input" placeholder="Faculty" required />
                                            </div>
                                            <div className="login__field">
                                                <input type="text" name="domain" className="login__input" placeholder="Domain" required />
                                            </div>
                                            <div className="login__field">
                                                <input type="text" name="specialization" className="login__input" placeholder="Specialization" required />
                                            </div>
                                            <div className="login__field">
                                                <input type="text" name="year" className="login__input" placeholder="Year" required />
                                            </div>
                                            <div className="login__field">
                                                <input type="text" name="group" className="login__input" placeholder="Group" required />
                                            </div>
                                            <div className="login__field">
                                                <input type="text" name="semigroup" className="login__input" placeholder="Semigroup" required />
                                            </div>
                                            <div className="login__field">
                                                <label htmlFor="identityCardInput" className="login__label">Identity Card (PDF files only)</label>
                                                <input type="file" name="identityCard" id="identityCardInput" className="login__input" required />
                                            </div>
                                            <button className="submitButton" type="submit">Submit</button>
                                        </form>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {user.studentDetails && (
                        <div className="w3-card w3-round w3-hide-small">
                            <div className="w3-container" style={{ backgroundColor: 'rgba(161,1,53,0.8)', color: '#f0e7e7' }}>
                                <p><i className="fa fa-university fa-fw w3-margin-right"></i>Your Student Information</p>
                                <p>University: {user.studentDetails.university}</p>
                                <p>Faculty: {user.studentDetails.faculty}</p>
                                <p>Domain: {user.studentDetails.domain}</p>
                                <p>Specialization: {user.studentDetails.specialization}</p>
                                <p>Year: {user.studentDetails.year}</p>
                                <p>Group: {user.studentDetails.group}</p>
                                <p>Semigroup: {user.studentDetails.semigroup}</p>
                            </div>
                        </div>
                    )}

                    <br />

                    <div className="w3-card w3-round">
                        <div>
                            <button onClick={() => toggleSection('Demo1')} className="w3-button w3-block w3-left-align" style={{ backgroundColor: 'rgba(161,1,53,0.8)', color: '#f0e7e7' }}>
                                <i className="fa fa-circle-o-notch fa-fw w3-margin-right"></i> My Coupons
                            </button>
                            {activeSection === 'Demo1' && (
                                <div className="w3-show w3-container" style={{ backgroundColor: '#f0e7e7' }}>
                                    <p>List of coupons</p>
                                    <button onClick={toggleCouponsModal} className="buttonCoupons">Get more coupons</button>
                                </div>
                            )}
                            <button onClick={() => toggleSection('Demo2')} className="w3-button w3-block w3-left-align" style={{ backgroundColor: 'rgba(161,1,53,0.8)', color: '#f0e7e7' }}>
                                <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i> My Events
                            </button>
                            {activeSection === 'Demo2' && (
                                <div className="w3-show w3-container" style={{ backgroundColor: '#f0e7e7' }}>
                                    {user.events && user.events.length > 0 ? (
                                        <ul>
                                            {user.events.map((event, index) => (
                                                <li key={index}>
                                                    {`Event: ${event.eventName}, Date: ${new Date(event.eventStartDate).toLocaleDateString()}`}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>No events found.</p>
                                    )}
                                </div>
                            )}
                            <button onClick={() => toggleSection('Demo3')} className="w3-button w3-block w3-left-align" style={{ backgroundColor: 'rgba(161,1,53,0.8)', color: '#f0e7e7' }}>
                                <i className="fa fa-users fa-fw w3-margin-right"></i> My Medical Information
                            </button>
                            {activeSection === 'Demo3' && (
                                <div className="w3-show w3-container" style={{ backgroundColor: '#f0e7e7' }}>
                                    <MedicalInfoComponent medicalInfo={user.medicalInfo} />
                                </div>
                            )}
                            <button onClick={() => toggleSection('Demo4')} className="w3-button w3-block w3-left-align" style={{ backgroundColor: 'rgba(161,1,53,0.8)', color: '#f0e7e7' }}>
                                <i className="fa fa-gift fa-fw w3-margin-right"></i> My Donations
                            </button>
                            {activeSection === 'Demo4' && (
                                <div className="w3-show w3-container" style={{ backgroundColor: '#f0e7e7' }}>
                                    {user.donations && user.donations.length > 0 ? (
                                        <ul>
                                            {user.donations.map((donation, index) => (
                                                <li key={index}>
                                                    {`Type: ${donation.donationType.name}, Points: ${donation.points}`}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>No donations found.</p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                    <br />

                    <div className="w3-container w3-display-container w3-round w3-border w3-theme-border w3-margin-bottom w3-hide-small" style={{ backgroundColor: 'rgba(161,1,53,0.5)', color: '#f0e7e7' }}>
                        <span onClick={() => (this.parentElement.style.display = 'none')} className="w3-button w3-display-topright">
                            <i className="fa fa-remove" style={{ color: '#f0e7e7' }}></i>
                        </span>
                        <p><strong>Hey!</strong></p>
                        <p>Don't forget to invite your friends to use this app!</p>
                    </div>
                </div>
            )}

            {isEditProfileModalOpen && <EditProfileModal onClose={toggleEditProfileModal} user={user} />}
            {isCouponsModalOpen && <CouponsModal onClose={toggleCouponsModal} />}
        </div>
    );
};

export default SidebarEvents;
