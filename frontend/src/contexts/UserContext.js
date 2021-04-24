import React, { createContext, useState } from 'react';

export const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState();
    const [loading, setLoading] = useState(false);

    const value = {
        userInfo,
        setUserInfo,
        loading,
        setLoading
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};



 
