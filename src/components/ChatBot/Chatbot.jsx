import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import './Chatbot.css'; // Ensure this CSS file styles both the button and the chatbot

const Chatbot = () => {
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);
    const [error, setError] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleSendMessage = async () => {
        if (!message.trim()) return;
        setError('');

        const userMessage = { sender: 'user', text: message };

        try {
            const res = await fetch('http://localhost:5000/chatbot', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message }),
            });

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await res.json();
            const botResponse = { sender: 'bot', text: data.response };

            setChat([...chat, userMessage, botResponse]);
            setMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
            setError('Failed to send message. Please try again.');
            setChat([...chat, userMessage, { sender: 'bot', text: 'Error: Failed to send message.' }]);
        }
    };

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button className="chatbot-toggle-button" onClick={toggleChatbot}>
                <FontAwesomeIcon icon={faComments} />
            </button>
            {isOpen && (
                <div className="chatbot-container">
                    <h1>BHelper</h1>
                    <div className="chat-window">
                        {chat.map((msg, index) => (
                            <div key={index} className={`chat-message ${msg.sender}`}>
                                <p>{msg.text}</p>
                            </div>
                        ))}
                    </div>
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message..."
                    />
                    <button onClick={handleSendMessage}>Send</button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            )}
        </div>
    );
};

export default Chatbot;
