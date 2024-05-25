// src/components/Events/SidebarEvents.jsx
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContexts.jsx';
import EditProfileModal from '../Events/Modals/EditProfileModal.jsx';
import CouponsModal from '../Events/Modals/CouponsModal.jsx';

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
        return `${address.city} ${address.street} ${address.number}`;
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

                    <div className="w3-card w3-round w3-hide-small">
                        <div className="w3-container" style={{ backgroundColor: 'rgba(161,1,53,0.8)', color: '#f0e7e7' }}>
                            <p onClick={() => toggleSection('StudentForm')}><i className="fa fa-university fa-fw w3-margin-right"></i>Are you a student?</p>
                            {activeSection === 'StudentForm' && (
                                <div className="w3-show w3-container">
                                    <form>
                                        <div>
                                            <div className="login__field">
                                                <input type="text" className="login__input" placeholder="University" required />
                                            </div>
                                            <div className="login__field">
                                                <input type="text" className="login__input" placeholder="Faculty" required />
                                            </div>
                                            <div className="login__field">
                                                <input type="text" className="login__input" placeholder="Domain" required />
                                            </div>
                                            <div className="login__field">
                                                <input type="text" className="login__input" placeholder="Specialization" required />
                                            </div>
                                            <div className="login__field">
                                                <input type="text" className="login__input" placeholder="Year" required />
                                            </div>
                                            <div className="login__field">
                                                <input type="text" className="login__input" placeholder="Group" required />
                                            </div>
                                            <div className="login__field">
                                                <input type="text" className="login__input" placeholder="Semigroup" required />
                                            </div>
                                            <div className="login__field">
                                                <label htmlFor="identityCardInput" className="login__label">Identity Card (PDF files only)</label>
                                                <input type="file" id="identityCardInput" className="login__input" required />
                                            </div>
                                            <button className="submitButton">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
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
                                    <p>List of events</p>
                                </div>
                            )}
                            <button onClick={() => toggleSection('Demo3')} className="w3-button w3-block w3-left-align" style={{ backgroundColor: 'rgba(161,1,53,0.8)', color: '#f0e7e7' }}>
                                <i className="fa fa-users fa-fw w3-margin-right"></i> My Medical Information
                            </button>
                            {activeSection === 'Demo3' && (
                                <div className="w3-show w3-container" style={{ backgroundColor: '#f0e7e7' }}>
                                    <p>Medical info files</p>
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

            {isEditProfileModalOpen && <EditProfileModal onClose={toggleEditProfileModal} />}
            {isCouponsModalOpen && <CouponsModal onClose={toggleCouponsModal} />}
        </div>
    );
};

export default SidebarEvents;
