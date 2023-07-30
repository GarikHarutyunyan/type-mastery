import { createContext } from 'react';
import { Theme } from './ThemeProvider';

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: Theme.Dark,
    toggleTheme: () => {},
});