import React, { useContext, createContext, useState } from 'react';
import { Context } from '../@types/context';

const StateContext = createContext<Context>({
    theme: 'dark',
    isSidebarVisible: true,
    setTheme: () => {},
    toggleTheme: () => {},
    handleToggleSidebar: () => {},
});

type props = {
    children: React.ReactNode
}

export const ContextProvider = ({ children } : props) => {
    const [ theme, setTheme ] = useState('dark');
    const [ isSidebarVisible, setIsSidebarVisible ] = useState(true);

    function toggleTheme () {
        setTheme(theme === 'light' ? 'dark' : 'light');
        localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
    }

    function handleToggleSidebar() {
        setIsSidebarVisible(!isSidebarVisible);
    }

    return (
        <StateContext.Provider
            value={{
                theme, setTheme, toggleTheme,
                isSidebarVisible, handleToggleSidebar
            }}
        >
            { children }
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);