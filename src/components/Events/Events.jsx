import React, { useState, useEffect, useContext } from 'react';
import { getEventsDTO } from '../services/apiService'; // Update this to point to the correct API service
import EventDescription from './EventDescription';
import webSocketService from '../../hooks/useWebSockets';
import Navbar from '../Common/Navbar';
import SidebarEvents from './SidebarEvents';
import Footer from '../Common/Footer';
import { AuthContext } from '../../contexts/AuthContexts';
import '../../assets/CSS/Events.css'; // Import the CSS file
import Chatbot from "../ChatBot/Chatbot.jsx";
import Layout from "../LayoutComponent/Layout.jsx";
const Events = () => {
    const [events, setEvents] = useState([]); // Initialize as an empty array
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
                'http://localhost:55555/client-websocket', // Ensure this is an HTTP/HTTPS URL
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
            const eventsData = await getEventsDTO(); // Use the new API call
            console.log('Fetched events:', eventsData); // Log fetched data
            setEvents(Array.isArray(eventsData) ? eventsData : []); // Ensure eventsData is an array
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
            <Layout/>
            <div className="container">
                <header className="bgimg-1 w3-display-container" id="home"></header>
                <div className="w3-row">
                    <div className="w3-col m3">
                        {isAuthenticated && user && <SidebarEvents user={user} />}
                    </div>
                    <div className="w3-col m9 content">
                        <h2>Event List</h2>
                        {events.length > 0 ? (
                            events.map((event) => (
                                <EventDescription key={event.id} event={event} user={user} isAuthenticated={isAuthenticated} />
                            ))
                        ) : (
                            <p>Loading events...</p>
                        )}
                    </div>
                </div>
            </div>
            <Footer />

        </div>

    );
};

export default Events;
