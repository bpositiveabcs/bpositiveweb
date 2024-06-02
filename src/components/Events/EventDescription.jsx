import React, { useState, useEffect, useContext } from 'react';
import { joinEvent } from '../services/apiService';
import { AuthContext } from '../../contexts/AuthContexts';

const EventDescription = ({ event, user, isAuthenticated }) => {
    const [hasJoined, setHasJoined] = useState(false);
    const { setUser } = useContext(AuthContext);

    useEffect(() => {
        if (user && user.events) {
            const isJoined = user.events.some(e => e.id === event.id);
            setHasJoined(isJoined);
        }
    }, [user, event.id]);

    const handleJoin = async () => {
        if (!isAuthenticated) {
            alert('Please create an account or log in to join the event.');
            return;
        }

        try {
            const updatedUser = await joinEvent(event, user.personLogInfo.username);
            if (updatedUser) {
                setUser(updatedUser); // Update the user in the AuthContext
                setHasJoined(true); // Update the state to show the button as joined
                localStorage.setItem('user', JSON.stringify(updatedUser)); // Update local storage
                alert('Successfully joined the event!');
            } else {
                alert('Failed to join the event.');
            }
        } catch (error) {
            console.error('Error joining event:', error);
            alert('An error occurred while joining the event.');
        }
    };

    return (
        <div className="w3-container w3-card w3-round w3-margin-bottom" style={{backgroundColor: '#f0e7e7'}}>
            <br/>
            <h4>{event.eventName}</h4>
            <br/>
            <p>{event.eventDescription}</p>
            <hr className="hrEvent"/>
            <p>Center: {event.center.centerName}</p>
            <p>Begins: {new Date(event.eventStartDate).toLocaleString()}</p>
            <p>Ends: {new Date(event.eventEndDate).toLocaleString()}</p>
            <p>Maximum number of participants: {event.maxParticipants}</p>
            <p>Requirements: {event.eventRequirements}</p>
            {isAuthenticated ? (
                <button
                    type="button"
                    className="w3-button w3-margin-bottom"
                    style={{backgroundColor: hasJoined ? '#ccc' : '#A10135', color: '#f0e7e7'}}
                    onClick={handleJoin}
                    disabled={hasJoined}
                >
                    {hasJoined ? 'Joined' : 'Join'}
                </button>
            ) : (
                <button
                    type="button"
                    className="w3-button w3-margin-bottom"
                    style={{backgroundColor: '#A10135', color: '#f0e7e7'}}
                    onClick={() => alert('Please create an account or log in to join the event.')}
                >
                    Create Account or Log In
                </button>
            )}
        </div>
    );
};

export default EventDescription;
