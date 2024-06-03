// components/ChatBot/Chatbot.js
import React, { useState } from 'react';
import './Chatbot.css'; // Ensure this CSS file styles both the button and the chatbot

const Chatbot = () => {
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]); // Initialize as an empty array
    const [error, setError] = useState('');
    const [isOpen, setIsOpen] = useState(false); // State to control visibility

    const handleSendMessage = async () => {
        if (!message.trim()) return; // Don't send empty messages
        setError(''); // Reset error before sending a new message

        const userMessage = { sender: 'user', text: message };

        try {
            const res = await fetch('http://localhost:55555/chatbot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await res.json();
            const botResponse = { sender: 'bot', text: data.response };

            setChat([...chat, userMessage, botResponse]); // Append new messages to chat
            setMessage(''); // Clear the input field
        } catch (error) {
            console.error('Error sending message:', error);
            setError('Failed to send message. Please try again.');
            setChat([...chat, userMessage, { sender: 'bot', text: 'Error: Failed to send message.' }]);
        }
    };

    const toggleChatbot = () => {
        setIsOpen(!isOpen); // Toggle the chatbot window visibility
    };

    return (
        <div>
            <button className="chatbot-toggle-button" onClick={toggleChatbot}>
                {isOpen ? 'Close' : 'BHelp'}
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
