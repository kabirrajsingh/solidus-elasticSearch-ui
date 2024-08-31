"use client"
import React, { createContext, useState } from 'react';

// Create the UserContext
export const UserContext = createContext();

// UserProvider component to wrap your application and provide the user ID
export const UserProvider = ({ children }) => {
    const [userId, setUserId] = useState("123");
    const [age, setAge] = useState("25");
    const [gender, setGender] = useState("Male");

    return (
        <UserContext.Provider value={{ userId, setUserId, age, setAge, gender, setGender }}>
            {children}
        </UserContext.Provider>
    );
};
