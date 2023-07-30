import { ReactNode, useState } from "react";
import { ThemeContext } from "./ThemeContext";

interface IThemeProvider {
    children: ReactNode;
};

export enum Theme {
    Light = 'light',
    Dark = 'dark'
}

export const ThemeProvider = ({ children }: IThemeProvider) => {
    const [theme, setTheme] = useState<Theme>(
        (localStorage?.getItem('theme') as Theme) || Theme.Dark
    );

    const toggleTheme = (): void => {
        const currentTheme = (theme === Theme.Light ? Theme.Dark : Theme.Light);

        setTheme(currentTheme);
        localStorage.setItem('theme', currentTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
};