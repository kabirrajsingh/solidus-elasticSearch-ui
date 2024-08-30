
"use client"
import { createContext, useState } from 'react';

// Create the SessionContext
export const SessionContext = createContext();

// SessionProvider component to wrap your application and provide the session ID
export const SessionProvider = ({ children }) => {
    const [chatSessionId, setChatSessionId] = useState(null);

    return (
        <SessionContext.Provider value={{ chatSessionId, setChatSessionId }}>
            {children}
        </SessionContext.Provider>
    );
};
