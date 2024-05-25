import React, { createContext, useState, useContext, useEffect } from 'react';
import { getUser, signIn, signUp, logout } from '../services/apiService';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await getUser();
                setUser(userData);
            } catch (error) {
                console.error('Failed to fetch user:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    // const signInHandler = async (credentials) => {
    //     const userData = await signIn(credentials);
    //     setUser(userData);
    // };
    //
    // const signUpHandler = async (userInfo) => {
    //     const userData = await signUp(userInfo);
    //     setUser(userData);
    // };
    //
    // const logoutHandler = async () => {
    //     await logout();
    //     setUser(null);
    // };

    const value = {
        user,
        // signIn: signInHandler,
        // signUp: signUpHandler,
        // logout: logoutHandler,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
