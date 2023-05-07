import React, { useContext, createContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [ theme, setTheme ] = useState('dark');
    const [ isSidebarVisible, setIsSidebarVisible ] = useState(true);

    function toggleTheme () {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    function handleToggleSidebar() {
        setIsSidebarVisible(!isSidebarVisible);
    }

    return (
        <StateContext.Provider
            value={{
                theme, toggleTheme,
                isSidebarVisible, handleToggleSidebar
            }}
        >
            { children }
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);