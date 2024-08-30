
"use client"
import { createContext, useState } from 'react';

// Create the UserContext
export const UserContext = createContext();

// UserProvider component to wrap your application and provide the user ID
export const UserProvider = ({ children }) => {
    const [userId, setUserId] = useState("123");

    return (
        <UserContext.Provider value={{ userId, setUserId }}>
            {children}
        </UserContext.Provider>
    );
};