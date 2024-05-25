// src/components/Events.jsx
import React, { useState, useEffect, useContext } from 'react';
import { getEvents } from '../services/apiService';
import EventDescription from './EventDescription';
import webSocketService from '../../hooks/useWebSockets';
import Navbar from '../Common/Navbar';
import SidebarEvents from './SidebarEvents';
import Footer from '../Common/Footer';
import { AuthContext } from '../../contexts/AuthContexts';

const Events = () => {
    const [events, setEvents] = useState([]);
    const { user, isAuthenticated } = useContext(AuthContext);

    useEffect(() => {
        const handleIncomingMessage = (message) => {
            console.log('WebSocket message received:', message);
            if (message.startsWith('UPDATE_EVENTS')) {
                loadEvents().then(() => console.log('Events updated'));
            } else if (message.startsWith('NOTIFICATION')) {
                alert(`Notification: ${message}`);
            }
        };

        const handleConnectionError = (error) => {
            console.error('WebSocket connection error:', error);
        };

        const connectWebSocket = () => {
            webSocketService.connect(
                'http://localhost:55555/client-websocket', // Replace with your WebSocket URL
                () => {
                    webSocketService.subscribe('/topic/clients', handleIncomingMessage);
                },
                handleConnectionError
            );
        };

        connectWebSocket();

        return () => {
            webSocketService.unsubscribe('/topic/clients');
            webSocketService.disconnect();
        };
    }, []);

    const loadEvents = async () => {
        try {
            const eventsData = await getEvents();
            setEvents(eventsData);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    useEffect(() => {
        loadEvents();
    }, []);

    return (
        <div className="App">
            <Navbar />
            <div className="container">
                <header className="bgimg-1 w3-display-container" id="home"></header>
                <div className="w3-row">
                    <div className="w3-col m3">
                        {isAuthenticated && <SidebarEvents user={user} />}
                    </div>
                    <div className="w3-col m9 content">
                        <h2>Event List</h2>
                        {events.map((event) => (
                            <EventDescription key={event.id} event={event} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Events;