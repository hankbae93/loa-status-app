import React, { createContext, useState } from 'react';

export const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState();
    const [loading, setLoading] = useState(true);

    const value = {
        userInfo,
        setUserInfo
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};



 
