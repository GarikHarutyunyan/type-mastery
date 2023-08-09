import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DarkModeContextType {
    isDarkEnabled: boolean;
    toggleDarkMode: () => void;
}

interface DarkModeProviderProps {
    children: ReactNode;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
    const [isDarkEnabled, setIsDarkEnabled] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkEnabled(prevState => !prevState);
    };

    return (
        <DarkModeContext.Provider value={{ isDarkEnabled, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (context === undefined) {
        throw new Error('useDarkMode must be used within a DarkModeProvider');
    }
    return context;
};