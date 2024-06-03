import axios from 'axios';

const API_URL = 'http://localhost:55555'; // Replace with your actual API URL

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

// Update Profile
export const updateProfile = async (formData) => {
    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
    });

    try {
        const response = await fetch(`${API_URL}/personActorService/persons`, {
            method: 'POST',
            body: formDataToSend
        });

        return response;
    } catch (error) {
        console.error('Error:', error);
        return { ok: false };
    }
};

export const uploadStudentDetails = async (formData) => {
    try {
        const response = await fetch(`${API_URL}/api/upload`, {
            method: 'POST',
            body: formData
        });
        return response;
    } catch (error) {
        console.error('Error:', error);
        return { ok: false };
    }
};

export const verifyCode = async (payload) => {
    try {
        const response = await fetch(`${API_URL}/api/verifyCode`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        return response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const getUserByUsername = async (username) => {
    try {
        const response = await axios.get(`${API_URL}/persons/username?usernamePerson=${username}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};

export const submitSelectedCoupons = async (username, selectedCoupons) => {
    try {
        const response = await axios.post(`${API_URL}/retrieved-coupons/list-coupons`, {
            username: username,
            couponList: selectedCoupons
        });
        return response.data;
    } catch (error) {
        console.error('Error submitting coupons:', error);
        throw error;
    }
};

export const uploadIdentityCard = async (identityCard) => {
    const formDataToSend = new FormData();
    formDataToSend.append('identityCard', identityCard);

    try {
        const response = await fetch(`${API_URL}/events/join-event`, {
            method: 'POST',
            body: formDataToSend
        });
        return response;
    } catch (error) {
        console.error('Error:', error);
        return { ok: false };
    }
};

export const joinEvent = async (event, username) => {
    try {
        const response = await fetch(`${API_URL}/events/join-event?username=${username}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(event),
        });

        if (!response.ok) {
            throw new Error('Failed to join event');
        }

        const updatedUser = await response.json(); // Assuming the API returns updated user data
        return updatedUser;
    } catch (error) {
        console.error('Error joining event:', error);
        return null;
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



// Auth APIs
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

export const getCouponsAvailable = async () => {
    try {
        const response = await axios.get(`${API_URL}/coupons`);
        return response.data;
    } catch (error) {
        console.error('Error fetching coupons:', error);
        throw error;
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
    const socket = new WebSocket(`${API_URL}/client-websocket`);

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

//////////////////////////////////////////////////////
//MedicalInfo
export const getMedicalInfo = async (username) => {
    try {
        const response = await fetch(`${API_URL}/personActorService/medicalInfo/${username}`);
        if (!response.ok) {
            throw new Error('Failed to fetch medical information');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching medical information:', error);
        throw error;
    }
};

export const downloadBloodTestDocument = (username, filename) => {
    const filePath = `${API_URL}/personActorService/download/${username}/${filename}`;
    window.location.href = filePath;
};
export const checkIfStudent = async (username) => {
    try {
        const response = await fetch(`${API_URL}/personActorService/students/username?username=${username}`);
        if (!response.ok) {
            throw new Error('Failed to check student status');
        }
        const data = await response.json();
        return data ? data : null;
    } catch (error) {
        console.error('Error checking student status:', error);
        throw error;
    }
};
export const getEventsDTO = async () => {
    try {
        const response = await fetch(`${API_URL}/events-dto`);
        if (!response.ok) {
            throw new Error('Failed to fetch events');
        }
        const data = await response.json(); // Convert the response to JSON
        return data;
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
};
