import useGetWindowDimensions from '@/hooks/useGetWindowDimensions';
import React, { useContext, createContext, useState } from 'react';
import { Context } from '../@types/context';

const StateContext = createContext<Context>({
    theme: 'dark',
    isSidebarVisible: true,
    setTheme: () => {},
    toggleTheme: () => {},
    handleToggleSidebar: () => {},
    setIsSidebarVisible: () => {},
});

type props = {
    children: React.ReactNode
}

const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

export const ContextProvider = ({ children } : props) => {
    const { window_width } = useGetWindowDimensions();

    const [ theme, setTheme ] = useState(prefersDarkMode ? 'dark' : 'light');
    const [ isSidebarVisible, setIsSidebarVisible ] = useState(window_width < 968 ? false : true);

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
                isSidebarVisible, setIsSidebarVisible, handleToggleSidebar
            }}
        >
            { children }
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);