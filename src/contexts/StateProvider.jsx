import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const StateProvider = ({ children }) => {
    const [sharedState, setSharedState] = useState("Hello World");
    const [openSearchContext, setOpenSearchContext] = useState(false);

    return (
        <MyContext.Provider value={{ sharedState, setSharedState, openSearchContext, setOpenSearchContext }}>
            {children}
        </MyContext.Provider>
    );
};
