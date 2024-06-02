import axios from 'axios';

const API_URL = 'http://localhost:55555'; // Replace with your actual API URL
const WS_URL = 'htttp://localhost:55555/client-websocket'; // Replace with your actual WebSocket URL

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

//update Profile
//
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
    return await fetch('/api/upload', {
        method: 'POST',
        body: formData
    });
};

export const verifyCode = async (payload) => {
    return await fetch('/api/verifyCode', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
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




// Function to send selected coupons and user to the backend
export const submitSelectedCoupons = async (username, selectedCoupons) => {
    const response = await axios.post(`${API_URL}/retrieved-coupons/list-coupons`, {
        username: username,
        couponList: selectedCoupons
    });
    return response.data;
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
            headers: {
                'Content-Type': 'application/json',
            },
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

export const getCouponsAvailable = async () => {
    try {
        const response = await axios.get(`${API_URL}/coupons`);
        return response.data;
    } catch (error) {
        console.error('Error fetching coupons:', error);
        throw error;
    }

}


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
