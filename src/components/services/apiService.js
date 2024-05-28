import axios from 'axios';

const API_URL = 'http://localhost:55555'; // Replace with your actual API URL
const WS_URL = 'ws://localhost:55555/client-websocket'; // Replace with your actual WebSocket URL

// Event APIs
export const getEvents = async () => {
    try {
        const response = await axios.get(`${API_URL}/events`);
        return response.data;
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
};

export const joinEvent = async (eventId) => {
    try {
        const response = await axios.post(`${API_URL}/events/join`, { eventId });
        return response.data;
    } catch (error) {
        console.error('Error joining event:', error);
        throw error;
    }
};

// User APIs
export const getUser = async () => {
    try {
        const response = await axios.get(`${API_URL}/user`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};

export const getCoupons = async () => {
    try {
        const response = await axios.get(`${API_URL}/coupons`);
        return response.data;
    } catch (error) {
        console.error('Error fetching coupons:', error);
        throw error;
    }
};

export const getMedicalInfo = async () => {
    try {
        const response = await axios.get(`${API_URL}/medical-info`);
        return response.data;
    } catch (error) {
        console.error('Error fetching medical information:', error);
        throw error;
    }
};

// Auth APIs
///login
export const signIn = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/personActorService/login`, null, {
            params: credentials,
        });
        return response.data;
    } catch (error) {
        console.error('Error signing in:', error);
        alert("Check your credentials and try again");
    }
};


export const signUp = async (userInfo) => {
    try {
        const response = await axios.post(`${API_URL}/personActorService/sign-up`, userInfo, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error signing up:', error);
        alert("Error signing up: " + (error.response?.data?.message || error.message));
    }
};

export const logout = async () => {
    try {
        const response = await axios.post(`${API_URL}/auth/logout`);
        return response.data;
    } catch (error) {
        console.error('Error logging out:', error);
        throw error;
    }
};

// WebSocket connection
export const connectWebSocket = (onMessage) => {
    const socket = new WebSocket(WS_URL);

    socket.onopen = () => {
        console.log('WebSocket connection established');
    };

    socket.onmessage = (event) => {
        onMessage(event.data);
    };

    socket.onerror = (error) => {
        console.error('WebSocket error:', error);
    };

    socket.onclose = () => {
        console.log('WebSocket connection closed');
    };

    return socket;
};
